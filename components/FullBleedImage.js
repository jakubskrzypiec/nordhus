import Image from "next/image";import Container from "./Container";
import {BLUR_DATA_URL} from "@/lib/image";
export default function FullBleedImage({image,alt,eyebrow,title,text,align="left"}){
 return <section className="relative min-h-[78svh] overflow-hidden bg-[#20201e] text-white">
  <div className="reveal-image absolute inset-0"><Image src={image} alt={alt} fill className="object-cover" sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div>
  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5"/>
  <Container className={`relative z-10 flex min-h-[78svh] items-end pb-12 pt-24 md:pb-20 ${align==="right"?"justify-end":""}`}>
   <div className="reveal max-w-[680px]"><p className="eyebrow !text-white/60">{eyebrow}</p><h2 className="mt-5 text-[clamp(2rem,4vw,3.75rem)]">{title}</h2>{text&&<p className="mt-6 max-w-[66ch] text-[1.0625rem] leading-[1.75] text-white/85">{text}</p>}</div>
  </Container>
 </section>
}