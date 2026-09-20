import Image from "next/image";
import Container from "./Container";
import {BLUR_DATA_URL} from "@/lib/image";
import {asset} from "@/lib/asset";
export default function FullBleedImage({image,alt,eyebrow,title,text}){
 return <section className="relative min-h-[78svh] overflow-hidden bg-black text-white">
  <div className="reveal-image absolute inset-0"><Image src={asset(image)} alt={alt} fill className="object-cover" sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div>
  <div className="absolute inset-0 bg-black/40"/>
  <Container className="relative z-10 flex min-h-[78svh] items-end justify-center pb-12 pt-24 text-center md:pb-20">
   <div className="reveal max-w-[720px]"><p className="eyebrow !text-white/70">{eyebrow}</p><h2 className="mt-5 text-white">{title}</h2>{text&&<p className="mx-auto mt-6 max-w-[60ch] text-center text-[18px] leading-[34px] text-white/70">{text}</p>}</div>
  </Container>
 </section>
}