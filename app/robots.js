import {asset} from "@/asset";
export const dynamic="force-static";
export default function robots(){const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://jakubskrzypiec.github.io/nordhus";const origin=new URL(siteUrl).origin;return{rules:{userAgent:"*",allow:"/"},sitemap:origin+asset("/sitemap.xml")}}