"use client";
import {useEffect,useRef,useState} from "react";
import Container from "./Container";
const stats=[{value:5,suffix:"",label:"miesięcy od projektu do odbioru"},{value:5,prefix:"3–",suffix:"",label:"dni montażu konstrukcji"},{value:127,suffix:"",label:"domów — dane demonstracyjne"},{value:15,suffix:"",label:"lat gwarancji konstrukcyjnej*"}];
const ease=t=>t===1?1:1-Math.pow(2,-10*t);
export default function StatsStrip(){
 const ref=useRef(null),[run,setRun]=useState(false);
 useEffect(()=>{const el=ref.current;if(!el)return;const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;if(reduced){setRun(true);return}const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setRun(true);io.disconnect()}},{threshold:.35});io.observe(el);return()=>io.disconnect()},[]);
 return <section ref={ref} className="stats-strip bg-[var(--ink)] text-white"><Container className="grid h-auto grid-cols-2 md:h-[240px] md:grid-cols-4">{stats.map((s,i)=><Stat key={s.label} {...s} run={run} divider={i<3}/>)}</Container></section>
}
function Stat({value,prefix="",suffix="",label,run,divider}){
 const[n,setN]=useState(0);
 useEffect(()=>{if(!run)return;const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;if(reduced){setN(value);return}const start=performance.now(),dur=1600;let raf;const tick=now=>{const t=Math.min(1,(now-start)/dur);setN(Math.round(value*ease(t)));if(t<1)raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf)},[run,value]);
 return <div className={`flex flex-col justify-center py-9 md:px-8 ${divider?"md:border-r md:border-white/15":""}`}><p className="stat-number">{prefix}{n}{suffix}</p><p className="mt-3 text-[.6875rem] uppercase tracking-[.18em] text-white/65">{label}</p></div>
}