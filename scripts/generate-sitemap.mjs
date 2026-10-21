import { writeFileSync } from 'node:fs';
const base='https://nex82.com';
const paths=['/','/about','/careers','/contact','/hardware','/infrastructure','/software'];
writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+paths.map(path=>`  <url><loc>${base}${path}</loc></url>`).join('\n')+'\n</urlset>\n');
console.log('Generated production sitemap for nex82.com.');
