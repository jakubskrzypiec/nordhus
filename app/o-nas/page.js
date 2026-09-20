import Hero from "@/components/Hero";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import FullBleedImage from "@/components/FullBleedImage";
import Image from "next/image";
import {BLUR_DATA_URL} from "@/lib/image";

import {asset} from "@/lib/asset";
export const metadata={title:"O NORDHUS",description:"Poznaj demonstracyjną historię NORDHUS, zespół oraz zasady prowadzenia projektu, produkcji i montażu.",openGraph:{title:"O NORDHUS | NORDHUS",description:"Poznaj demonstracyjną historię NORDHUS, zespół oraz zasady prowadzenia projektu, produkcji i montażu.",images:[asset("/images/o-nas.jpg")],type:"website"},twitter:{card:"summary_large_image",title:"O NORDHUS | NORDHUS",description:"Poznaj demonstracyjną historię NORDHUS, zespół oraz zasady prowadzenia projektu, produkcji i montażu.",images:[asset("/images/o-nas.jpg")]}};

export default function Page(){return <>
<Hero image={asset(asset("/images/o-nas.jpg"))} alt="Pracownia projektowa NORDHUS" eyebrow="NORDHUS" title={<>Projekt. Produkcja.<br/>Montaż w jednym rytmie.</>} text="NORDHUS to demonstracyjna marka pokazująca, jak może działać firma produkująca prefabrykowane domy modułowe."/>

<section className="section-space">
 <Container>
  <div className="grid grid-cols-12 gap-y-10">
   <div className="col-span-12 lg:col-span-4"><p className="eyebrow text-[var(--sage)]">Historia — dane demonstracyjne</p><h2 className="display mt-5 text-4xl md:text-5xl">Zaczęliśmy od problemu z harmonogramem.</h2></div>
   <div className="col-span-12 space-y-6 lg:col-span-7 lg:col-start-6"><p className="max-w-[68ch] leading-8 text-[var(--muted)]">W przykładowej historii NORDHUS firma powstała w 2019 roku po kilku projektach domów jednorodzinnych prowadzonych w tradycyjnym modelu. Największym problemem nie była sama technologia budowy, ale liczba zależności pomiędzy ekipami, pogodą, dostawami i zmianami wykonywanymi już na placu.</p><p className="max-w-[68ch] leading-8 text-[var(--muted)]">Drugi etap rozwoju polegał na przeniesieniu konstrukcji, instalacji i większości wykończenia do hali. Zespół przygotował cztery bazowe modele i wspólny system detali.</p><p className="max-w-[68ch] leading-8 text-[var(--muted)]">Dzisiaj ten demonstracyjny model opiera się na jednej odpowiedzialności za projekt produkcyjny, prefabrykację i montaż.</p></div>
  </div>
 </Container>
</section>

<section className="bg-[var(--ink)] text-white">
 <Container>
  <p className="pt-7 text-xs uppercase tracking-[.14em] text-white/45">Dane demonstracyjne</p>
  <div className="grid grid-cols-2 md:grid-cols-4">{[["2019","rok założenia"],["127","domów"],["4 800 m²","powierzchni hali"],["34","osoby w zespole"]].map(([a,b],i)=><div key={b} className={`py-10 md:px-7 ${i<3?"md:border-r md:border-white/15":""}`}><p className="display text-5xl md:text-7xl">{a}</p><p className="mt-3 text-[11px] uppercase tracking-[.16em] text-white/50">{b}</p></div>)}</div>
 </Container>
</section>

<section className="section-space overflow-hidden">
 <Container>
  <div className="grid grid-cols-12 gap-y-12">
   <div className="col-span-12 lg:col-span-7">
    <div className="relative aspect-video w-full overflow-hidden lg:ml-[calc(-1*max(0px,(100vw-1280px)/2))] lg:w-[calc(100%+max(0px,(100vw-1280px)/2))]"><Image src={asset(asset("/images/o-nas.jpg"))} alt="Stół projektowy z modelem domu modułowego" fill className="object-cover" sizes="(min-width:1024px) 62vw,100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div>
   </div>
   <div className="col-span-12 lg:col-span-4 lg:col-start-9"><p className="eyebrow text-[var(--sage)]">Zespół — osoby fikcyjne</p><h2 className="display mt-5 text-4xl md:text-5xl">Kto odpowiada za kolejne decyzje.</h2><div className="mt-8">{[["Anna Nowak","architekt prowadząca"],["Marek Zieliński","konstruktor"],["Karolina Wójcik","kierowniczka produkcji"],["Piotr Lewandowski","koordynator montażu"]].map(([n,r])=><div key={n} className="border-t border-[var(--line)] py-5"><h3 className="text-lg font-medium">{n}</h3><p className="mt-1 text-sm text-[var(--muted)]">{r}</p></div>)}</div></div>
  </div>
 </Container>
</section>

<FullBleedImage image={asset(asset("/images/produkcja.jpg"))} alt="Hala produkcyjna NORDHUS" eyebrow="JAK PRACUJEMY" title="Proces ma właściciela na każdym etapie." text="Projekt, produkcja i montaż nie są osobnymi światami. Dokumentacja produkcyjna łączy decyzje architekta, konstruktora, instalatorów i ekipy montażowej."/>

<section className="section-space bg-[#f7f8f5]">
 <Container>
  <div className="grid grid-cols-12 gap-y-10">
   <div className="col-span-12 lg:col-span-4"><p className="eyebrow text-[var(--sage)]">Trzy zasady</p><h2 className="display mt-5 text-4xl md:text-5xl">Mniej haseł. Więcej punktów kontrolnych.</h2></div>
   <div className="col-span-12 grid gap-8 md:grid-cols-3 lg:col-span-8 lg:col-start-5">{[["01","Zakres przed produkcją","Materiały, instalacje i opcje dodatkowe zamykamy przed uruchomieniem modułów."],["02","Jedna osoba prowadzi etap","Klient wie, kto odpowiada za projekt, produkcję i montaż."],["03","Problemy pokazujemy wcześnie","Jeżeli dojazd, grunt, MPZP albo budżet ograniczają wybrany model, informujemy o tym przed projektem wykonawczym."]].map(([n,a,b])=><div key={n} className="border-t border-[var(--line)] pt-5"><p className="text-sm text-[var(--muted)]">{n}</p><h3 className="mt-3 text-xl font-medium">{a}</h3><p className="mt-4 leading-8 text-[var(--muted)]">{b}</p></div>)}</div>
  </div>
 </Container>
</section>

<CTA/>
</>}