export const dynamic="force-static";
const basePath=process.env.NEXT_PUBLIC_BASE_PATH||"";
const configured=process.env.NEXT_PUBLIC_SITE_URL||"https://jakubskrzypiec.github.io";
const base=configured.endsWith(basePath)?configured:configured+basePath;
export default function robots(){return{rules:{userAgent:"*",allow:"/"},sitemap:base+"/sitemap.xml"}}
