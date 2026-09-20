import Image from "next/image";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import ProcessTimeline from "@/components/ProcessTimeline";
import {process} from "@/data/process";
import {BLUR_DATA_URL} from "@/lib/image";
import {asset} from "@/lib/asset";

export const metadata={
 title:"Proces budowy domu modułowego",
 description:"Pięć etapów budowy NORDHUS: od wyboru modelu i analizy działki po produkcję, montaż i odbiór.",
 openGraph:{title:"Proces budowy domu modułowego | NORDHUS",description:"Pięć etapów budowy NORDHUS: od wyboru modelu i analizy działki po produkcję, montaż i odbiór.",images:[asset("/images/montaz.jpg")],type:"website"},
 twitter:{card:"summary_large_image",title:"Proces budowy domu modułowego | NORDHUS",description:"Pięć etapów budowy NORDHUS: od wyboru modelu i analizy działki po produkcję, montaż i odbiór.",images:[asset("/images/montaz.jpg")]}
};

const images=[
 asset("/images/hero.jpg"),
 asset("/images/montaz.jpg"),
 asset("/images/produkcja.jpg"),
 asset("/images/wnetrze-salon.jpg"),
 asset("/images/model-92.jpg")
];

export default function Page(){return <>
 <Hero image={asset("/images/montaz.jpg")} alt="Montaż modułu NORDHUS" eyebrow="PROCES" title="Wiesz, co dzieje się dalej." text="Pięć etapów prowadzi od wyboru modelu do odbioru gotowego budynku."/>

 <section className="section-space">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Harmonogram</p>
   <h2 className="mt-5">5 etapów. Jeden harmonogram.</h2>
   <p className="section-intro mt-6 text-[1.0625rem] leading-[1.75] text-[color:rgba(28,28,26,.85)]">Standardowy harmonogram zakłada około pięciu miesięcy od zamknięcia założeń do gotowego budynku. Formalności, badania gruntu i przyłącza mogą działać równolegle albo wydłużyć termin.</p>
   <ProcessTimeline/>
  </Container>
 </section>

 {process.map((step,idx)=><section key={step.number} className={`section-space overflow-hidden ${idx%2?"bg-[#f1f0eb]":""}`}>
  <Container>
   <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10">
    <div className={`col-span-12 lg:col-span-7 ${idx%2?"lg:col-start-6 lg:row-start-1":""}`}>
     <div className="reveal-image relative aspect-[4/3] overflow-hidden">
      <Image src={images[idx]} alt={step.title} fill className="object-cover" sizes="(min-width:1024px) 58vw,100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
     </div>
    </div>
    <div className={`col-span-12 self-start lg:col-span-4 ${idx%2?"lg:col-start-1 lg:row-start-1":"lg:col-start-9"}`}>
     <p className="eyebrow text-[var(--sage)]">{String(step.number).padStart(2,"0")} · {step.duration}</p>
     <h2 className="mt-5">{step.title}</h2>
     <p className="mt-6 text-left font-medium">{step.result}</p>
     <div className="mt-7 space-y-5 text-left">{step.details.map((p,i)=><p key={i} className="max-w-[66ch] text-[1.0625rem] leading-[1.75] text-[color:rgba(28,28,26,.85)]">{p}</p>)}</div>
    </div>
   </div>
  </Container>
 </section>)}

 <section className="section-space">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Płatności</p>
   <h2 className="mt-5">Transze powiązane z etapami.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Poniższy podział jest przykładowy. Finalny harmonogram stanowi część umowy i może być dostosowany do finansowania bankowego.</p>
   <div className="mt-10 overflow-x-auto">
    <table className="w-full min-w-[720px] text-left">
     <thead><tr className="border-b border-[var(--ink)]"><th className="py-4 text-left">Transza</th><th className="text-left">Moment</th><th className="text-left">Udział</th><th className="text-left">Co zamyka etap</th></tr></thead>
     <tbody>{[["1","podpisanie umowy","10%","rezerwacja terminu i start projektu"],["2","zatwierdzenie projektu","25%","zamówienia materiałowe"],["3","start produkcji","35%","uruchomienie modułów na hali"],["4","gotowość do transportu","25%","odbiór produkcyjny"],["5","odbiór końcowy","5%","protokół i dokumentacja"]].map(r=><tr key={r[0]} className="border-b border-[var(--line)]">{r.map((v,i)=><td key={v} className={`py-5 pr-5 ${i?"text-[var(--muted)]":"font-medium"}`}>{v}</td>)}</tr>)}</tbody>
    </table>
   </div>
  </Container>
 </section>
 <CTA/>
 </>}
