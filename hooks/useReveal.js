"use client";
import {useEffect} from "react";
export default function useReveal(){
 useEffect(()=>{
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els=[...document.querySelectorAll(".reveal")];
  if(reduced){els.forEach(el=>el.classList.add("reveal-in"));return}
  const io=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("reveal-in");io.unobserve(entry.target)}
   })
  },{threshold:.15,rootMargin:"0px 0px -80px 0px"});
  els.forEach(el=>io.observe(el));
  return()=>io.disconnect();
 },[]);
}