import Image from "next/image";
import Link from "next/link";
import Container from "@/Container";
import {BLUR_DATA_URL} from "@/image";

export default function Hero({image,title,text,primary,secondary,alt=""}){
 return <section className="hero-shell relative min-h-svh overflow-hidden bg-black text-white">
  <Image src={image} alt={alt} fill priority className="object-cover" sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
  <div className="absolute inset-0 bg-black/40"/>
  <Container className="relative z-10 flex min-h-svh items-end pb-12 pt-36 md:pb-20">
   <div className="max-w-4xl">
    <h1 className="hero-h1 text-left">{title}</h1>
    {text&&<p className="mt-6 max-w-[68ch] text-left text-[18px] leading-[34px] text-white/90">{text}</p>}
    <div className="mt-8 flex flex-wrap gap-3">{primary&&<Link href={primary.href} className="photo-button focus-ring">{primary.label}</Link>}{secondary&&<Link href={secondary.href} className="photo-button-outline focus-ring">{secondary.label}</Link>}</div>
   </div>
  </Container>
 </section>
}