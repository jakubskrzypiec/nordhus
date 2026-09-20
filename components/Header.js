"use client";
import Link from "next/link";
import {useEffect,useRef,useState} from "react";
import {usePathname} from "next/navigation";
const nav=[["Modele","/modele"],["Proces","/proces"],["Realizacje","/realizacje"],["Technologia","/technologia"],["O nas","/o-nas"]];
export default function Header(){
 const[open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false),[hidden,setHidden]=useState(false),last=useRef(0);const pathname=usePathname();
 useEffect(()=>{const on=()=>{const y=window.scrollY;setScrolled(y>80);if(!open){setHidden(y>last.current&&y>180)}else setHidden(false);last.current=y};on();addEventListener("scroll",on,{passive:true});return()=>removeEventListener("scroll",on)},[open]);
 useEffect(()=>setOpen(false),[pathname]);
 const heroRoutes=["/","/modele","/proces","/realizacje","/technologia","/o-nas","/kontakt"];const hasHero=heroRoutes.includes(pathname);const light=hasHero&&!scrolled&&!open;
 return <header className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,color] duration-400 ${hidden?"-translate-y-full":"translate-y-0"} ${light?"border-transparent bg-transparent text-white":"border-b border-[var(--line)] bg-[rgba(250,250,248,.94)] text-[var(--ink)] backdrop-blur-md"}`}>
  <div className="mx-auto flex h-20 max-w-[1360px] items-center justify-between px-5 sm:px-8 lg:px-12">
   <Link href="/" className="focus-ring text-lg font-semibold tracking-[.13em]">NORDHUS</Link>
   <nav className="hidden items-center gap-8 lg:flex" aria-label="Główna nawigacja">{nav.map(([label,href])=><Link key={href} href={href} className={`text-link text-sm ${pathname===href||pathname.startsWith(href+"/")?"font-semibold":""}`}>{label}</Link>)}<Link href="/kontakt" className={`btn-sweep focus-ring px-5 py-3 text-sm font-semibold ${light?"border border-white/50 text-white":"bg-[var(--ink)] text-white"}`}><span>Zapytaj o wycenę</span></Link></nav>
   <button className={`focus-ring relative z-[61] p-2 lg:hidden ${open?"text-white":""}`} aria-label={open?"Zamknij menu":"Otwórz menu"} aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span className="block h-px w-6 bg-current"/><span className="mt-1.5 block h-px w-6 bg-current"/><span className="mt-1.5 block h-px w-6 bg-current"/></button>
  </div>
  <div className={`fixed inset-0 z-[60] bg-[var(--ink)] text-white transition-opacity duration-400 lg:hidden ${open?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"}`}>
   <div className="flex min-h-svh flex-col px-6 pb-8 pt-28"><nav className="flex flex-col" aria-label="Menu mobilne">{nav.map(([label,href],i)=><Link key={href} href={href} className={`mobile-nav-item border-b border-white/15 py-4 text-[2rem] font-light tracking-[-.03em] ${open?"is-open":""}`} style={{transitionDelay:`${i*60}ms`}}>{label}</Link>)}<Link href="/kontakt" className={`mobile-nav-item py-4 text-[2rem] font-light tracking-[-.03em] ${open?"is-open":""}`} style={{transitionDelay:"300ms"}}>Kontakt</Link></nav><div className="mt-auto border-t border-white/15 pt-5 text-sm leading-7 text-white/65"><p>+48 000 000 000</p><p>kontakt@nordhus-demo.pl</p><p>Dane demonstracyjne</p></div></div>
  </div>
 </header>
}