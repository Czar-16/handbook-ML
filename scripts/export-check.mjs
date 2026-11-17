import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../out');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const htmlFiles=walk(root).filter(p=>p.endsWith('.html'));let checked=0;
for(const file of htmlFiles){const html=fs.readFileSync(file,'utf8');for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){const raw=m[1].replaceAll('&amp;','&');if(!raw.startsWith('/')||raw.startsWith('//'))continue;const u=new URL(raw,'http://local');let target=path.join(root,decodeURIComponent(u.pathname));if(u.pathname.endsWith('/'))target=path.join(target,'index.html');if(!fs.existsSync(target))throw Error('Broken exported link in '+file+': '+raw);if(u.hash&&u.pathname!='/source/'){const dest=fs.readFileSync(target,'utf8');const id=decodeURIComponent(u.hash.slice(1));if(!dest.includes(`id="${id}"`))throw Error('Missing anchor '+raw+' in '+file);}checked++;}}
console.log(`Checked ${checked} internal asset/page/anchor links across ${htmlFiles.length} exported HTML files.`);
