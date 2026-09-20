"use client";
import {useState} from "react";
import Image from "next/image";

const items=[
{image:"/images/realizacja-1.jpg",model:"NORDHUS 92",location:"okolice Poznania, Wielkopolskie",year:"2026",area:"92 m²",time:"20 tygodni",text:"Działka kończy się przy jeziorze, dlatego dom ustawiono równolegle do linii brzegu, a strefę dzienną otwarto na wodę."},
{image:"/images/realizacja-2.jpg",model:"NORDHUS 156",location:"okolice Warszawy, Mazowieckie",year:"2026",area:"156 m²",time:"22 tygodnie",text:"Dom stoi na łagodnym zboczu z otwarciem na łąkę. Logistykę dźwigu zaplanowano od wyższej strony działki."},
{image:"/images/realizacja-3.jpg",model:"NORDHUS 68",location:"okolice Wrocławia, Dolnośląskie",year:"2025",area:"68 m²",time:"19 tygodni",text:"Montaż odbył się zimą przy temperaturze około 0°C. Termin pracy dźwigu miał bufor na oblodzenie."},
{image:"/images/realizacja-4.jpg",model:"NORDHUS 124",location:"Śląsk",year:"2024",area:"124 m²",time:"21 tygodni",text:"Na działce zaplanowano osobną wiatę garażową i szeroki żwirowy plac manewrowy."},
{image:"/images/realizacja-1.jpg",model:"NORDHUS 92",location:"Pomorze",year:"2025",area:"92 m²",time:"20 tygodni",text:"Bryłę L obrócono tak, aby wewnętrzny taras otwierał się na południowy zachód."},
{image:"/images/realizacja-2.jpg",model:"NORDHUS 124",location:"Małopolska",year:"2025",area:"124 m²",time:"23 tygodnie",text:"Moduły przyjechały w dwóch turach i były ustawiane bez składowania na działce."}
];

export default function RealizationsGrid(){
 const[filter,setFilter]=useState("Wszystkie");
 const models=["Wszystkie","NORDHUS 68","NORDHUS 92","NORDHUS 124","NORDHUS 156"];
 const visible=filter==="Wszystkie"?items:items.filter(x=>x.model===filter);
 return <>
  <div className="mb-12 flex flex-wrap gap-2">{models.map(m=><button key={m} onClick={()=>setFilter(m)} className={`border px-4 py-2 text-sm transition ${filter===m?"border-[var(--ink)] bg-[var(--ink)] text-white":"border-[var(--line)] bg-white hover:border-[var(--ink)]"}`}>{m}</button>)}</div>
  <div className="grid auto-rows-[220px] grid-cols-12 gap-5 md:auto-rows-[260px]">
   {visible.map((x,idx)=><article key={x.location+x.year+idx} className={`group relative overflow-hidden bg-[#e7e6e1] ${idx%4===0?"col-span-12 row-span-2 md:col-span-7":idx%4===1?"col-span-12 md:col-span-5":idx%4===2?"col-span-12 md:col-span-5":"col-span-12 row-span-2 md:col-span-7 md:col-start-6"}`}>
    <Image src={x.image} alt={`${x.model} — ${x.location}`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" sizes="(min-width:768px) 58vw,100vw"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"/>
    <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
     <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-[.12em] text-white/65"><span>{x.location}</span><span>{x.year}</span><span>{x.area}</span><span>{x.time}</span></div>
     <h2 className="mt-2 text-2xl font-medium">{x.model}</h2>
     <p className="mt-3 max-w-[58ch] text-sm leading-6 text-white/75">{x.text}</p>
    </div>
   </article>)}
  </div>
 </>;
}