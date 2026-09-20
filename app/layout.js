import "./globals.css";
import Header from "@/Header";
import Footer from "@/Footer";
import SiteEffects from "@/SiteEffects";
import {Archivo} from "next/font/google";
import {asset} from "@/asset";

const archivo=Archivo({weight:["400","700"],subsets:["latin"],display:"swap"});
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://jakubskrzypiec.github.io/nordhus";

export const metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"NORDHUS — Domy modułowe",template:"%s | NORDHUS"},
 description:"Prefabrykowane domy modułowe od 68 do 156 m².",
 openGraph:{type:"website",siteName:"NORDHUS",images:[{url:asset("/hero.jpg"),width:1672,height:941,alt:"NORDHUS — dom modułowy"}]},
 twitter:{card:"summary_large_image",images:[asset("/hero.jpg")]},
 icons:{icon:[{url:asset("/favicon.ico")},{url:asset("/favicon.svg"),type:"image/svg+xml"}],shortcut:asset("/favicon.ico")}
};

export default function RootLayout({children}){return <html lang="pl" className={archivo.className}><body><SiteEffects/><Header/><main>{children}</main><Footer/></body></html>}