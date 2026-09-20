"use client";
import {useEffect,useRef,useState} from "react";
import Image from "next/image";
import {BLUR_DATA_URL} from "@/lib/image";
export default function GalleryLightbox({items,className=""}){
 const[index,setIndex]=useState(null),dialog=useRef(null);
 const open=i=>setIndex(i),close=()=>setIndex(null);
 useEffect(()=>{if(index===null)return;const prev=document.activeElement;const key=e=>{if(e.key==="Escape")close();if(e.key==="ArrowRight")setIndex(i=>(i+1)%items.length);if(e.key==="ArrowLeft")setIndex(i=>(i-1+items.length)%items.length);if(e.key==="Tab"){const f=dialog.current?.querySelectorAll("button");if(!f?.length)return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};document.addEventListener("keydown",key);document.body.style.overflow="hidden";setTimeout(()=>dialog.current?.querySelector("button")?.focus(),0);return()=>{document.removeEventListener("keydown",key);document.body.style.overflow="";prev?.focus?.()}},[index,items.length]);
 return <>{<div className={className}>{items.map((item,i)=><button key={item.src+i} type="button" onClick={()=>open(i)} className={`gallery-item group relative overflow-hidden text-left ${item.className||""}`} aria-label={`Powiększ: ${item.alt}`}><Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" sizes={item.sizes||"(min-width:768px) 50vw,100vw"} placeholder="blur" blurDataURL={BLUR_DATA_URL}/><span className="gallery-cursor" aria-hidden="true">Powiększ</span>{item.overlay}</button>)}</div>}
 {index!==null&&<div ref={dialog} role="dialog" aria-modal="true" aria-label="Podgląd zdjęcia" className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111]/95 p-5" onMouseDown={e=>{if(e.target===e.currentTarget)close()}}>
  <button onClick={close} className="focus-ring absolute right-5 top-5 z-10 px-3 py-2 text-sm text-white" aria-label="Zamknij podgląd">Zamknij</button>
  <button onClick={()=>setIndex(i=>(i-1+items.length)%items.length)} className="focus-ring absolute left-3 top-1/2 z-10 -translate-y-1/2 px-3 py-4 text-3xl text-white" aria-label="Poprzednie zdjęcie">←</button>
  <div className="relative h-[82vh] w-[88vw]"><Image src={items[index].src} alt={items[index].alt} fill quality={90} className="object-contain" sizes="90vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div>
  <button onClick={()=>setIndex(i=>(i+1)%items.length)} className="focus-ring absolute right-3 top-1/2 z-10 -translate-y-1/2 px-3 py-4 text-3xl text-white" aria-label="Następne zdjęcie">→</button>
 </div>}</>
}