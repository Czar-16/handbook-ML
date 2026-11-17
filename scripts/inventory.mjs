import ts from 'typescript';
import { createHash } from 'node:crypto';
const digest=s=>createHash('sha256').update(s).digest('hex');
export function extractFunctions(file) {
 const sf=ts.createSourceFile(file.path,file.text,ts.ScriptTarget.Latest,true,file.path.endsWith('x')?ts.ScriptKind.TSX:file.path.endsWith('.js')||file.path.endsWith('.mjs')?ts.ScriptKind.JS:ts.ScriptKind.TS);
 const result=[];
 function visit(node) {
  if ((ts.isFunctionDeclaration(node)||ts.isFunctionExpression(node)||ts.isArrowFunction(node)||ts.isMethodDeclaration(node)||ts.isConstructorDeclaration(node)||ts.isGetAccessorDeclaration(node)||ts.isSetAccessorDeclaration(node)) && node.body) {
   const start=sf.getLineAndCharacterOfPosition(node.getStart(sf)).line+1,end=sf.getLineAndCharacterOfPosition(node.end).line+1;
   let name=node.name?.getText(sf); const p=node.parent;
   if(!name&&ts.isVariableDeclaration(p))name=p.name.getText(sf);
   if(!name&&ts.isPropertyAssignment(p))name=p.name.getText(sf);
   if(!name&&ts.isConstructorDeclaration(node))name='constructor';
   let context=p;
   while(context&&!ts.isCallExpression(context)&&!ts.isVariableDeclaration(context)&&!ts.isFunctionDeclaration(context))context=context.parent;
   const contextName=context&&ts.isCallExpression(context)?context.expression.getText(sf):context&&'name' in context?context.name?.getText(sf):'';
   name ||= `${contextName||'inline'} callback @${start}`;
   const calls=[], returns=[];
   function body(n) {
    if(n!==node.body && (ts.isFunctionLike(n)))return;
    if(ts.isCallExpression(n))calls.push(n.expression.getText(sf));
    if(ts.isReturnStatement(n))returns.push(n.expression?.getText(sf).slice(0,220)||'void');
    ts.forEachChild(n,body);
   }
   body(node.body);
   if(ts.isArrowFunction(node)&&!ts.isBlock(node.body))returns.push(node.body.getText(sf).slice(0,220));
   const text=file.text.split('\n').slice(start-1,end).join('\n');
   result.push({id:digest(file.path+':'+node.getStart(sf)).slice(0,16),path:file.path,name,start,end,kind:ts.SyntaxKind[node.kind],params:node.parameters.map(x=>x.getText(sf)),returnType:node.type?.getText(sf)||'inferred; inspect return expressions',returns:[...new Set(returns)],calls:[...new Set(calls)],category:file.path.startsWith('tests/')?'test':file.path.startsWith('scripts/')?'script':'runtime',async:!!node.modifiers?.some(m=>m.kind===ts.SyntaxKind.AsyncKeyword),action:sf.statements.some(x=>ts.isExpressionStatement(x)&&x.expression.getText(sf)==='"use server"'),hash:digest(text),callerLimit:'Structural name candidates only. Framework, JSX, alias, higher-order and dynamic callers may be unresolved.'});
  }
  ts.forEachChild(node,visit);
 }
 visit(sf);return result;
}
export function extractRoutes(files){return files.filter(f=>/^src\/app\/.*\/(route|page)\.tsx?$/.test(f.path)||f.path==='src/app/page.tsx').map(f=>({path:f.path,url:'/'+f.path.replace(/^src\/app\//,'').replace(/\([^/]+\)\//g,'').replace(/\/(page|route)\.tsx?$/,'').replace(/^page\.tsx$/,''),kind:f.path.endsWith('page.tsx')?'page':'API',methods:f.path.endsWith('page.tsx')?['PAGE']:['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'].filter(m=>new RegExp('export (?:async )?function '+m+'\\b|export const '+m+'\\b|export const \\{[^}]*\\b'+m+'\\b').test(f.text))}));}
