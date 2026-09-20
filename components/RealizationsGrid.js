"use client";
import {useEffect,useRef,useState} from "react";
import Image from "next/image";
import {BLUR_DATA_URL} from "@/lib/image";

const items=[
{image:"/images/realizacja-1.jpg",model:"NORDHUS 92",location:"okolice Poznania, Wielkopolskie",year:"2026",area:"92 m²",time:"20 tygodni",text:"Działka kończy się przy jeziorze, dlatego dom ustawiono równolegle do linii brzegu, a strefę dzienną otwarto na wodę. Dojazd dla modułów wymagał czasowego utwardzenia ostatnich 80 m drogi gruntowej. Układ pozostawiono bazowy, zmieniono jedynie szerokość przeszklenia salonu."},
{image:"/images/realizacja-2.jpg",model:"NORDHUS 156",location:"okolice Warszawy, Mazowieckie",year:"2026",area:"156 m²",time:"22 tygodnie",text:"Dom stoi na łagodnym zboczu z otwarciem na łąkę. Fundament wymagał różnicy poziomów między przeciwległymi narożnikami, a logistykę dźwigu zaplanowano od wyższej strony działki. W środku gabinet powiększono kosztem garderoby wejściowej."},
{image:"/images/realizacja-3.jpg",model:"NORDHUS 68",location:"okolice Wrocławia, Dolnośląskie",year:"2025",area:"68 m²",time:"19 tygodni",text:"Montaż odbył się zimą przy temperaturze około 0°C. Produkcja modułów nie była zależna od pogody, ale termin pracy dźwigu ustalono z dwudniowym buforem na oblodzenie. Klienci wybrali bazowy układ dwóch sypialni i powiększony prysznic w łazience."},
{image:"/images/realizacja-4.jpg",model:"NORDHUS 124",location:"Śląsk",year:"2024",area:"124 m²",time:"21 tygodnie",text:"Na działce zaplanowano osobną wiatę garażową i szeroki żwirowy plac manewrowy. Cztery moduły domu montowano od strony podjazdu, bez wjazdu ciężkiego sprzętu w ogród. Na piętrze połączono dwa mniejsze pokoje w jedną większą sypialnię."},
{image:"/images/realizacja-1.jpg",model:"NORDHUS 92",location:"Pomorze",year:"2025",area:"92 m²",time:"20 tygodni",text:"Działka była szeroka, ale krótka, dlatego bryłę L obrócono tak, aby wewnętrzny taras otwierał się na południowy zachód. Zachowano trzy sypialnie, a dodatkowe WC powiększono do łazienki z prysznicem. Transport odbył się bez czasowego demontażu ogrodzenia."},
{image:"/images/realizacja-2.jpg",model:"NORDHUS 124",location:"Małopolska",year:"2025",area:"124 m²",time:"23 tygodnie",text:"Wjazd miał ograniczony promień skrętu, więc moduły przyjechały w dwóch turach i były ustawiane bez składowania na działce. Projekt wymagał korekty położenia okien od strony sąsiedniej parceli. Montaż konstrukcji zamknięto w cztery dni."}
];

export default function RealizationsGrid(){
 const[filter,setFilter]=useState("Wszystkie"),[index,setIndex]=useState(null);const dialog=useRef(null);
 const models=["Wszystkie","NORDHUS 68","NORDHUS 92","NORDHUS 124","NORDHUS 156"];const visible=filter==="Wszystkie"?items:items.filter(x=>x.model===filter);
 useEffect(()=>{if(index===null)return;const key=e=>{if(e.key==="Escape")setIndex(null);if(e.key==="ArrowRight")setIndex(i=>(i+1)%visible.length);if(e.key==="ArrowLeft")setIndex(i=>(i-1+visible.length)%visible.length)};document.addEventListener("keydown",key);document.body.style.overflow="hidden";return()=>{document.removeEventListener("keydown",key);document.body.style.overflow=""}},[index,visible.length]);
 return <>
  <div className="mb-12 flex flex-wrap gap-2">{models.map(m=><button key={m} onClick={()=>{setFilter(m);setIndex(null)}} className={`border px-4 py-2 text-sm transition ${filter===m?"border-[var(--ink)] bg-[var(--ink)] text-white":"border-[var(--line)] bg-transparent hover:border-[var(--ink)]"}`}>{m}</button>)}</div>
  <div className="reveal-group grid auto-rows-[230px] grid-cols-12 gap-5 md:auto-rows-[300px]">{visible.map((x,idx)=><button type="button" onClick={()=>setIndex(idx)} key={x.location+x.year+idx} className={`reveal gallery-item group relative overflow-hidden bg-[#e7e6e1] text-left ${idx%4===0?"col-span-12 row-span-2 md:col-span-7":idx%4===1?"col-span-12 md:col-span-5":idx%4===2?"col-span-12 md:col-span-5":"col-span-12 row-span-2 md:col-span-7 md:col-start-6"}`}>
   <Image src={x.image} alt={`${x.model} — ${x.location}`} fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]" sizes="(min-width:768px) 58vw,100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
   <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80"/>
   <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-white opacity-90 transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0 group-hover:opacity-100 md:p-7"><p className="text-[.6875rem] uppercase tracking-[.18em] text-white/65">{x.location} · {x.year}</p><h2 className="mt-2 text-2xl font-medium">{x.model}</h2></div>
   <span className="gallery-cursor" aria-hidden="true">Powiększ</span>
  </button>)}</div>
  {index!==null&&<div ref={dialog} role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111]/95 p-5" onMouseDown={e=>{if(e.target===e.currentTarget)setIndex(null)}}>
   <button onClick={()=>setIndex(null)} className="focus-ring absolute right-5 top-5 z-10 px-3 py-2 text-sm text-white">Zamknij</button><button onClick={()=>setIndex(i=>(i-1+visible.length)%visible.length)} className="focus-ring absolute left-3 top-1/2 z-10 -translate-y-1/2 p-4 text-3xl text-white" aria-label="Poprzednie zdjęcie">←</button><div className="relative h-[78vh] w-[88vw]"><Image src={visible[index].image} alt={`${visible[index].model} — ${visible[index].location}`} fill className="object-contain" sizes="90vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div><button onClick={()=>setIndex(i=>(i+1)%visible.length)} className="focus-ring absolute right-3 top-1/2 z-10 -translate-y-1/2 p-4 text-3xl text-white" aria-label="Następne zdjęcie">→</button>
  </div>}
 </>;
}