export const dynamic="force-static";
const routes=["","/modele","/modele/nordhus-68","/modele/nordhus-92","/modele/nordhus-124","/modele/nordhus-156","/proces","/realizacje","/technologia","/o-nas","/kontakt","/faq","/polityka-prywatnosci"];
const basePath=process.env.NEXT_PUBLIC_BASE_PATH||"";
const configured=process.env.NEXT_PUBLIC_SITE_URL||"https://jakubskrzypiec.github.io";
const base=configured.endsWith(basePath)?configured:configured+basePath;
export default function sitemap(){return routes.map(route=>({url:base+route,lastModified:new Date(),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:route.startsWith("/modele/")?0.8:0.7}))}
