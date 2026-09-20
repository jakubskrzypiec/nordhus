import "./globals.css";
import {Instrument_Serif} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import {asset} from "@/lib/asset";

const instrumentSerif=Instrument_Serif({
  weight:"400",
  style:["normal","italic"],
  subsets:["latin"],
  variable:"--font-display",
  display:"swap",
});

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://jakubskrzypiec.github.io/nordhus";

export const metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"NORDHUS — Domy modułowe",template:"%s | NORDHUS"},
 description:"Prefabrykowane domy modułowe od 68 do 156 m².",
 openGraph:{type:"website",siteName:"NORDHUS",images:[{url:asset("/images/hero.jpg"),width:1672,height:941,alt:"NORDHUS — dom modułowy"}]},
 twitter:{card:"summary_large_image",images:[asset("/images/hero.jpg")]},
 icons:{icon:[{url:asset("/favicon.ico")},{url:asset("/favicon.svg"),type:"image/svg+xml"}],shortcut:asset("/favicon.ico")}
};

export default function RootLayout({children}){return <html lang="pl" className={instrumentSerif.variable}><body><SiteEffects/><Header/><main>{children}</main><Footer/></body></html>}
