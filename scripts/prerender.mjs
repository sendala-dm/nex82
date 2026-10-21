import { createServer } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
const routes=['/','/about','/software','/hardware','/infrastructure','/careers','/contact'];
const template=await readFile('dist/index.html','utf8');
const escape=text=>text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
try {
 const {render}=await server.ssrLoadModule('/src/prerender.tsx');
 for(const url of routes){
  const page=render(url),canonical='https://nex82.com'+(url==='/'?'/':url);
  let html=template.replace('<div id="root"></div>',`<div id="root">${page.html}</div>`)
   .replace(/<title>[\s\S]*?<\/title>/,`<title>${escape(page.title)}</title>`)
   .replace(/(<meta name="description" content=")[^"]*("\s*\/>)/,`$1${escape(page.description)}$2`)
   .replace(/(<link rel="canonical" href=")[^"]*("\s*\/>)/,`$1${canonical}$2`)
   .replace(/(<meta property="og:url" content=")[^"]*("\s*\/>)/,`$1${canonical}$2`);
  for(const attr of ['property="og:title"','name="twitter:title"'])html=html.replace(new RegExp(`(<meta ${attr} content=")[^"]*("\\s*\\/>)`),`$1${escape(page.title)}$2`);
  for(const attr of ['property="og:description"','name="twitter:description"'])html=html.replace(new RegExp(`(<meta ${attr} content=")[^"]*("\\s*\\/>)`),`$1${escape(page.description)}$2`);
  const dir=path.join('dist',url);await mkdir(dir,{recursive:true});await writeFile(path.join(dir,'index.html'),html);
 }
 console.log(`Pre-rendered ${routes.length} pages with route-specific metadata and readable HTML.`);
} finally {await server.close()}
