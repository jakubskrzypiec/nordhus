import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://nordhus.vercel.app";

export const metadata={
 metadataBase:new URL(siteUrl),
 title:{default:"NORDHUS — Domy modułowe",template:"%s | NORDHUS"},
 description:"Prefabrykowane domy modułowe od 68 do 156 m².",
 openGraph:{type:"website",siteName:"NORDHUS",images:[{url:"/images/hero.jpg",width:1672,height:941,alt:"NORDHUS — dom modułowy"}]},
 twitter:{card:"summary_large_image",images:["/images/hero.jpg"]},
 icons:{icon:[{url:"/favicon.ico"},{url:"/favicon.svg",type:"image/svg+xml"}],shortcut:"/favicon.ico"}
};

export default function RootLayout({children}){return <html lang="pl"><body><SiteEffects/><Header/><main>{children}</main><Footer/></body></html>}