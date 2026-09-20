"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {usePathname} from "next/navigation";

const nav=[["Modele","/modele"],["Proces","/proces"],["Realizacje","/realizacje"],["Technologia","/technologia"],["O nas","/o-nas"]];

export default function Header(){
 const[open,setOpen]=useState(false);const pathname=usePathname();
 useEffect(()=>setOpen(false),[pathname]);
 return <header className="fixed inset-x-0 top-0 z-50">
  <div className="h-10 bg-black text-white">
   <div className="mx-auto flex h-full max-w-[1360px] items-center px-5 text-[12px] font-bold uppercase tracking-[1.2px] text-white/80 sm:px-8 lg:px-12">
    <a href="tel:+48500000000">+48 500 000 000</a><span className="mx-4 hidden h-4 w-px bg-white/30 sm:block"/><a className="hidden sm:inline" href="mailto:kontakt@nordhus.pl">kontakt@nordhus.pl</a>
   </div>
  </div>
  <div className="border-b border-[var(--line)] bg-white text-black">
   <div className="mx-auto flex h-[72px] max-w-[1360px] items-center justify-between px-5 sm:px-8 lg:px-12">
    <Link href="/" className="focus-ring text-base font-bold uppercase tracking-[1.2px]">NORDHUS</Link>
    <nav className="hidden items-center gap-7 lg:flex" aria-label="Główna nawigacja">{nav.map(([label,href])=><Link key={href} href={href} className="text-link text-[12px] font-bold uppercase tracking-[1.2px]">{label}</Link>)}<Link href="/kontakt" className="site-button focus-ring">Zapytaj o wycenę</Link></nav>
    <button className="focus-ring relative z-[61] p-2 lg:hidden" aria-label={open?"Zamknij menu":"Otwórz menu"} aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span className="block h-px w-6 bg-current"/><span className="mt-1.5 block h-px w-6 bg-current"/><span className="mt-1.5 block h-px w-6 bg-current"/></button>
   </div>
  </div>
  <div className={`fixed inset-0 z-[60] bg-black text-white transition-opacity duration-250 lg:hidden ${open?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"}`}>
   <div className="flex min-h-svh flex-col px-6 pb-8 pt-28">
    <nav className="flex flex-col" aria-label="Menu mobilne">{nav.map(([label,href])=><Link key={href} href={href} className="border-b border-white/20 py-4 text-xl font-bold uppercase tracking-[1.2px]">{label}</Link>)}<Link href="/kontakt" className="py-4 text-xl font-bold uppercase tracking-[1.2px]">Kontakt</Link></nav>
    <div className="mt-auto border-t border-white/20 pt-5 text-[12px] font-bold uppercase tracking-[1.2px] text-white/70"><p>+48 500 000 000</p><p>kontakt@nordhus.pl</p></div>
   </div>
  </div>
 </header>
}