import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import {BLUR_DATA_URL} from "@/lib/image";

export default function Hero({image,eyebrow,title,text,primary,secondary,full=false,alt=""}){
 return <section className={`hero-shell relative overflow-hidden bg-[#222] text-white ${full?"min-h-svh":"min-h-[78svh]"}`}>
  <Image src={image} alt={alt} fill priority className="object-cover" sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
  <div className="absolute inset-0 bg-[rgba(28,28,26,.16)]"/>
  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,28,26,.76)] via-[rgba(28,28,26,.28)] to-[rgba(28,28,26,.08)]"/>
  <Container className={`relative z-10 flex flex-col ${full?"min-h-svh":"min-h-[78svh]"} justify-end pb-12 pt-28 md:pb-20`}>
   <div className="max-w-4xl">
    <p className="eyebrow !text-left text-white/75">{eyebrow}</p>
    <h1 className="hero-h1 mt-4 text-left">{title}</h1>
    {text&&<p className="mt-6 max-w-[66ch] text-left text-[1.0625rem] leading-[1.75] text-white/85">{text}</p>}
    <div className="mt-8 flex flex-wrap gap-3">{primary&&<Link href={primary.href} className="btn-sweep focus-ring bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)]"><span>{primary.label}</span></Link>}{secondary&&<Link href={secondary.href} className="btn-sweep focus-ring border border-white/60 px-5 py-3 text-sm font-semibold text-white"><span>{secondary.label}</span></Link>}</div>
   </div>
  </Container>
 </section>
}
