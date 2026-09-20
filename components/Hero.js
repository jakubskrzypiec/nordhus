"use client";
import {useEffect,useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import {BLUR_DATA_URL} from "@/lib/image";
export default function Hero({image,eyebrow,title,text,primary,secondary,full=false,alt=""}){
 const[intro,setIntro]=useState(true),[ready,setReady]=useState(false);
 useEffect(()=>{const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;if(reduced){setIntro(false);setReady(true);return}const a=setTimeout(()=>setIntro(false),2500),b=setTimeout(()=>setReady(true),3400);return()=>{clearTimeout(a);clearTimeout(b)}},[]);
 return <section className={`hero-shell relative overflow-hidden bg-[#222] text-white ${full?"min-h-svh":"min-h-[78svh]"}`}>
  <Image src={image} alt={alt} fill priority quality={90} className={`hero-image object-cover ${full?"hero-zoom":""}`} sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
  <div className="absolute inset-0 bg-[rgba(28,28,26,.18)]"/><div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,28,26,.72)] via-[rgba(28,28,26,.28)] to-[rgba(28,28,26,.10)]"/>
  {full&&<TechnicalOverlay visible={intro}/>}
  <Container className={`relative z-10 flex ${full?"min-h-svh":"min-h-[78svh]"} items-end pb-12 pt-28 md:pb-20`}>
   <div className={`hero-copy max-w-4xl ${full&&!ready?"hero-copy-wait":""}`}>
    <p className="eyebrow hero-enter text-white/75">{eyebrow}</p>
    <h1 className="hero-h1 hero-enter mt-4">{title}</h1>
    {text&&<p className="hero-enter mt-6 max-w-[66ch] text-[1.0625rem] leading-[1.75] text-white/85">{text}</p>}
    <div className="hero-enter mt-8 flex flex-wrap gap-3">{primary&&<Link href={primary.href} className="btn-sweep focus-ring bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)]"><span>{primary.label}</span></Link>}{secondary&&<Link href={secondary.href} className="btn-sweep focus-ring border border-white/60 px-5 py-3 text-sm font-semibold text-white"><span>{secondary.label}</span></Link>}</div>
   </div>
  </Container>
  {full&&<div className="scroll-indicator" aria-hidden="true"><span/></div>}
 </section>
}
function TechnicalOverlay({visible}){return <div className={`tech-overlay absolute inset-0 z-[2] ${visible?"is-visible":""}`} aria-hidden="true"><svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1"/></pattern></defs><rect width="1600" height="900" fill="url(#grid)"/><g className="tech-draw" fill="none" stroke="rgba(255,255,255,.72)" strokeWidth="1.4"><path d="M360 560V390L610 280H1080L1240 390V560H360Z"/><path d="M610 280V560M1080 280V560M760 560V410H940V560M420 435H555V520H420Z"/></g><g stroke="rgba(255,255,255,.5)" fill="rgba(255,255,255,.6)" fontSize="11" letterSpacing="2"><path d="M360 630H1240M360 618V642M1240 618V642"/><text x="760" y="620">12 000 mm</text><path d="M1320 280V560M1308 280H1332M1308 560H1332"/><text x="1340" y="425" transform="rotate(90 1340 425)">3 100 mm</text></g></svg></div>}