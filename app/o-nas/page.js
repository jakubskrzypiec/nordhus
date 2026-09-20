import Hero from "@/Hero";
import Container from "@/Container";
import CTA from "@/CTA";
import FullBleedImage from "@/FullBleedImage";
import Image from "next/image";
import {BLUR_DATA_URL} from "@/image";
import {asset} from "@/asset";

export const metadata={title:"O NORDHUS",description:"Poznaj demonstracyjną historię NORDHUS, zespół oraz zasady prowadzenia projektu, produkcji i montażu.",openGraph:{title:"O NORDHUS | NORDHUS",description:"Poznaj demonstracyjną historię NORDHUS, zespół oraz zasady prowadzenia projektu, produkcji i montażu.",images:[asset("/o-nas.jpg")],type:"website"},twitter:{card:"summary_large_image",title:"O NORDHUS | NORDHUS",description:"Poznaj demonstracyjną historię NORDHUS, zespół oraz zasady prowadzenia projektu, produkcji i montażu.",images:[asset("/o-nas.jpg")]}};

export default function Page(){return <>
<Hero image={asset("/o-nas.jpg")} alt="Pracownia projektowa NORDHUS" title={<>Projekt. Produkcja.<br/>Montaż w jednym rytmie.</>} text="NORDHUS to demonstracyjna marka pokazująca, jak może działać firma produkująca prefabrykowane domy modułowe."/>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Historia — dane demonstracyjne</p><h2 className="mt-5">Zaczęliśmy od problemu z harmonogramem.</h2></div>
 <div className="content-thirds mt-12">
  <p>W przykładowej historii NORDHUS firma powstała w 2019 roku po kilku projektach domów jednorodzinnych prowadzonych w tradycyjnym modelu. Największym problemem nie była sama technologia budowy, ale liczba zależności pomiędzy ekipami, pogodą, dostawami i zmianami wykonywanymi już na placu.</p>
  <p>Drugi etap rozwoju polegał na przeniesieniu konstrukcji, instalacji i większości wykończenia do hali. Zespół przygotował cztery bazowe modele i wspólny system detali.</p>
  <p>Dzisiaj ten demonstracyjny model opiera się na jednej odpowiedzialności za projekt produkcyjny, prefabrykację i montaż.</p>
 </div>
</Container></section>

<section className="bg-black text-white"><Container>
 <p className="pt-7 text-xs uppercase tracking-[.14em] text-white/45">Dane demonstracyjne</p>
 <div className="grid grid-cols-2 md:grid-cols-4">{[["2019","rok założenia"],["127","domów"],["4 800 m²","powierzchni hali"],["34","osoby w zespole"]].map(([a,b],i)=><div key={b} className={`py-10 md:px-7 ${i<3?"md:border-r md:border-white/15":""}`}><p className="display text-5xl md:text-7xl">{a}</p><p className="mt-3 text-[11px] uppercase tracking-[.16em] text-white/50">{b}</p></div>)}</div>
</Container></section>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Zespół — osoby fikcyjne</p><h2 className="mt-5">Kto odpowiada za kolejne decyzje.</h2></div>
 <div className="balanced-grid mt-12">
  <div className="relative min-h-[520px] overflow-hidden"><Image src={asset("/o-nas.jpg")} alt="Stół projektowy z modelem domu modułowego" fill className="object-cover" sizes="(min-width:900px) 50vw,100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div>
  <div>{[["Anna Nowak","architekt prowadząca"],["Marek Zieliński","konstruktor"],["Karolina Wójcik","kierowniczka produkcji"],["Piotr Lewandowski","koordynator montażu"]].map(([n,r])=><div key={n} className="border-t border-[var(--line)] py-7"><h3 className="text-left">{n}</h3><p className="mt-2">{r}</p></div>)}</div>
 </div>
</Container></section>

<FullBleedImage image={asset("/produkcja.jpg")} alt="Hala produkcyjna NORDHUS" eyebrow="JAK PRACUJEMY" title="Proces ma właściciela na każdym etapie." text="Projekt, produkcja i montaż nie są osobnymi światami. Dokumentacja produkcyjna łączy decyzje architekta, konstruktora, instalatorów i ekipy montażowej."/>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Trzy zasady</p><h2 className="mt-5">Mniej haseł. Więcej punktów kontrolnych.</h2></div>
 <div className="content-thirds mt-12">{[["01","Zakres przed produkcją","Materiały, instalacje i opcje dodatkowe zamykamy przed uruchomieniem modułów."],["02","Jedna osoba prowadzi etap","Klient wie, kto odpowiada za projekt, produkcję i montaż."],["03","Problemy pokazujemy wcześnie","Jeżeli dojazd, grunt, MPZP albo budżet ograniczają wybrany model, informujemy o tym przed projektem wykonawczym."]].map(([n,a,b])=><div key={n} className="border-t border-[var(--line)] pt-5"><p className="text-sm">{n}</p><h3 className="mt-3 text-left">{a}</h3><p className="mt-4">{b}</p></div>)}</div>
</Container></section>

<CTA/>
</>}