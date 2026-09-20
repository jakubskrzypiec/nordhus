import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import {Archivo} from "next/font/google";
import {asset} from "@/lib/asset";

const archivo=Archivo({weight:["400","700"],subsets:["latin"],display:"swap"});
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://jakubskrzypiec.github.io/nordhus";

export const metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"NORDHUS — Domy modułowe",template:"%s | NORDHUS"},
 description:"Prefabrykowane domy modułowe od 68 do 156 m².",
 openGraph:{type:"website",siteName:"NORDHUS",images:[{url:asset("/images/hero.jpg"),width:1672,height:941,alt:"NORDHUS — dom modułowy"}]},
 twitter:{card:"summary_large_image",images:[asset("/images/hero.jpg")]},
 icons:{icon:[{url:asset("/favicon.ico")},{url:asset("/favicon.svg"),type:"image/svg+xml"}],shortcut:asset("/favicon.ico")}
};

export default function RootLayout({children}){return <html lang="pl" className={archivo.className}><body><SiteEffects/><Header/><main>{children}</main><Footer/></body></html>}