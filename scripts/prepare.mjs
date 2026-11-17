import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { extractFunctions,extractRoutes } from './inventory.mjs';
import { codeToHtml } from 'shiki';
import { lightCodeTheme, darkCodeTheme } from './code-themes.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=n=>JSON.parse(fs.readFileSync(path.join(root,'content',n+'.json'),'utf8'));
const write=(p,v)=>fs.writeFileSync(path.join(root,p),JSON.stringify(v));
const files=read('snapshot'),chapters=read('chapters'),questions=read('questions'),glossary=read('glossary');
fs.mkdirSync(path.join(root,'public/snapshot'),{recursive:true});
const fileId=p=>createHash('sha256').update(p).digest('hex').slice(0,16);
const functions=files.filter(f=>/\.(?:[cm]?[jt]sx?)$/.test(f.path)).flatMap(extractFunctions);
const byName=new Map();
for(const fn of functions)for(const call of fn.calls){const name=call.split('.').at(-1);const list=byName.get(name)||[];list.push({name:fn.name,path:fn.path,start:fn.start});byName.set(name,list);}
for(const fn of functions)fn.callers=(byName.get(fn.name)||[]).slice(0,40);
const routes=extractRoutes(files);
write('content/functions.json',functions);write('content/routes.json',routes);
write('public/functions.json',functions);
const fileIndex=files.map(({text,...f})=>({...f,id:fileId(f.path)}));
write('content/files.json',fileIndex);write('public/files.json',fileIndex);
for(const f of files)write('public/snapshot/'+fileId(f.path)+'.json',f);
const schema=files.find(f=>f.path==='prisma/schema.prisma');
const descriptions={User:'Owner identity, encrypted Gmail credential, access observations, preferences and lifecycle controls.',Template:'Owner-scoped editable message template; archived templates can remain linked to history.',Contact:'Owner-scoped recipient record with a per-owner email uniqueness constraint and shortlist/reminder state.',Campaign:'Owner-approved group of immutable per-recipient sends; idempotency and attachment selection.',Send:'Rendered recipient/message snapshot plus queue, claim, provider acceptance and display state.',Attachment:'Private PDF metadata and separate logical/physical cleanup markers.',AccountNotice:'Content-free, deduplicated account notice, including downgrade cancellation feedback.',AccountDeletionJob:'Independent recovery job/tombstone with no User foreign key; billing, revocation, content and storage markers.',DeliveryReceipt:'Minimal retained successful-send evidence for safeguards after message-history removal.',BillingSubscription:'Verified provider subscription observation, including period and settlement evidence; optional surviving owner relation.',CheckoutAttempt:'Durable checkout operation identity and recovery status; provider session/result may be uncertain.',BillingWebhookEvent:'Durable normalized callback inbox with unique webhook ID, payload hash and processing/retry state.',AdminAuditLog:'Actor/target snapshots, reason, request identity and bounded before/after observations.',SystemControl:'Global sending/gating/checkout switches, provider binding and usage cutover state.',UsagePeriod:'Stable daily/monthly allowance identity with observed and imported sent/reserved counters.',UsageReservation:'One stable delivery key, owner-linked daily/monthly periods, claim token and accounting state.',UsageImportEvidence:'Content-free historical accounting identity and timestamp provenance.',BillingRateLimit:'Historical billing limiter model; current general budgets are represented by RateLimitBucket.',RateLimitBucket:'Database-backed rolling request budget with bounded admissions and cleanup deadline.'};
const models=[...schema.text.matchAll(/^model (\w+) \{([\s\S]*?)^\}/gm)].map(m=>({name:m[1],description:descriptions[m[1]]||'REVIEW REQUIRED',start:schema.text.slice(0,m.index).split('\n').length,end:schema.text.slice(0,m.index+m[0].length).split('\n').length,fields:m[2].trim().split('\n').map(x=>x.trim()).filter(Boolean)}));
const migrations=files.filter(f=>f.path.startsWith('prisma/migrations/')&&f.path.endsWith('.sql')).map(f=>({path:f.path,title:f.path.split('/')[2],operations:f.text.split('\n').filter(l=>/^\s*(?:CREATE|ALTER|DROP|UPDATE|INSERT|DELETE|--)/i.test(l)).map(l=>l.trim()).filter(Boolean)}));
write('content/schema.json',{models,migrations});
let search=[];
for(const p of chapters){search.push({title:p.title,kind:p.kind,href:'/handbook/'+p.slug+'/',text:p.description+' '+p.sections.flatMap(s=>[s.title,...s.paragraphs,...(s.items||[])]).join(' ')});for(let i=0;i<p.sections.length;i++)search.push({title:p.title+' · '+p.sections[i].title,kind:'section',href:'/handbook/'+p.slug+'/#s'+i,text:p.sections[i].paragraphs.join(' ')});}
for(const q of questions)search.push({title:q.question,kind:'interview',href:'/handbook/interview-prep/#'+q.id,text:q.short+' '+q.deep});
for(const g of glossary)search.push({title:g.term,kind:'glossary',href:'/handbook/glossary/#'+g.id,text:g.definition});
for(const fn of functions)search.push({title:fn.name,kind:'function',href:'/source/?file='+encodeURIComponent(fn.path)+'#L'+fn.start,text:fn.path+' '+fn.params.join(' ')+' '+fn.calls.join(' ')});
for(const r of routes)search.push({title:r.url,kind:r.kind,href:'/source/?file='+encodeURIComponent(r.path),text:r.path+' '+r.methods.join(' ')});
for(const f of files)search.push({title:f.path,kind:'source',href:'/source/?file='+encodeURIComponent(f.path),text:f.text});
write('public/search.json',search);
// Highlight only displayed chapter/interview snippets at build time. Full source browser
// remains escaped plain text so long files are fast and accessible.
const refs=chapters.flatMap(p=>p.sections.flatMap(s=>s.refs)).concat(questions.map(q=>q.ref));
const highlighted={};
for(const ref of refs){const key=[ref.path,ref.start,ref.end].join(':');if(highlighted[key])continue;const file=files.find(f=>f.path===ref.path);if(!file)throw Error('Missing '+ref.path);const code=file.text.split('\n').slice(ref.start-1,ref.end).join('\n');let lang=ref.path.split('.').at(-1);lang=({prisma:'prisma',md:'markdown',json:'json',sql:'sql',ts:'typescript',tsx:'tsx',yml:'yaml'})[lang]||'text'; highlighted[key]=await codeToHtml(code,{lang,themes:{light:lightCodeTheme,dark:darkCodeTheme},defaultColor:'light',transformers:[{line(node,line){node.properties['data-line']=line+ref.start-1;}}]});}
write('content/highlighted.json',highlighted);
console.log(`Prepared ${chapters.length} pages, ${functions.length} functions, ${routes.length} routes, ${models.length} models, ${migrations.length} migrations and ${search.length} search records.`);
