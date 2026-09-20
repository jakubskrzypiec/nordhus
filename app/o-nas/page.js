import Hero from "@/components/Hero";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import FullBleedImage from "@/components/FullBleedImage";
import Image from "next/image";
import {BLUR_DATA_URL} from "@/lib/image";
import {asset} from "@/lib/asset";

export const metadata={
 title:"O NORDHUS",
 description:"Poznaj demonstracyjną historię NORDHUS, zespół oraz zasady prowadzenia projektu, produkcji i montażu.",
 openGraph:{title:"O NORDHUS | NORDHUS",description:"Poznaj demonstracyjną historię NORDHUS, zespół oraz zasady prowadzenia projektu, produkcji i montażu.",images:[asset("/images/o-nas.jpg")],type:"website"},
 twitter:{card:"summary_large_image",title:"O NORDHUS | NORDHUS",description:"Poznaj demonstracyjną historię NORDHUS, zespół oraz zasady prowadzenia projektu, produkcji i montażu.",images:[asset("/images/o-nas.jpg")]}
};

export default function Page(){return <>
 <Hero image={asset("/images/o-nas.jpg")} alt="Pracownia projektowa NORDHUS" eyebrow="NORDHUS" title="Projekt. Produkcja. Montaż w jednym rytmie." text="Demonstracyjny model firmy produkującej prefabrykowane domy modułowe."/>

 <section className="section-space">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Historia — dane demonstracyjne</p>
   <h2 className="mt-5">Zaczęliśmy od problemu z harmonogramem.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">W przykładowej historii NORDHUS firma powstała w 2019 roku po kilku projektach domów jednorodzinnych prowadzonych w tradycyjnym modelu. Największym problemem była liczba zależności pomiędzy ekipami, pogodą, dostawami i zmianami wykonywanymi już na placu.</p>
   <div className="mx-auto mt-10 grid max-w-5xl gap-8 text-left md:grid-cols-2">
    <p className="leading-8 text-[var(--muted)]">Drugi etap rozwoju polegał na przeniesieniu konstrukcji, instalacji i większości wykończenia do hali. Zespół przygotował cztery bazowe modele i wspólny system detali.</p>
    <p className="leading-8 text-[var(--muted)]">Dzisiaj ten demonstracyjny model opiera się na jednej odpowiedzialności za projekt produkcyjny, prefabrykację i montaż.</p>
   </div>
  </Container>
 </section>

 <section className="bg-[var(--ink)] py-16 text-white">
  <Container>
   <p className="eyebrow !text-white/65">Dane demonstracyjne</p>
   <div className="mt-8 grid grid-cols-2 md:grid-cols-4">{[["2019","rok założenia"],["127","domów"],["4 800 m²","powierzchni hali"],["34","osoby w zespole"]].map(([a,b],i)=><div key={b} className={`py-8 text-center md:px-7 ${i<3?"md:border-r md:border-white/15":""}`}><p className="display mx-auto text-5xl md:text-7xl">{a}</p><p className="mx-auto mt-3 text-[11px] uppercase tracking-[.16em] text-white/65">{b}</p></div>)}</div>
  </Container>
 </section>

 <section className="section-space overflow-hidden">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Zespół — osoby fikcyjne</p>
   <h2 className="mt-5">Kto odpowiada za kolejne decyzje.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Projekt, produkcja i montaż mają osobnych właścicieli odpowiedzialności, ale pracują na jednej dokumentacji.</p>
   <div className="mt-12 grid grid-cols-12 gap-y-10 lg:gap-x-10">
    <div className="col-span-12 lg:col-span-7"><div className="reveal-image relative aspect-video overflow-hidden"><Image src={asset("/images/o-nas.jpg")} alt="Stół projektowy z modelem domu modułowego" fill className="object-cover" sizes="(min-width:1024px) 58vw,100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div></div>
    <div className="col-span-12 lg:col-span-4 lg:col-start-9">{[["Anna Nowak","architekt prowadząca"],["Marek Zieliński","konstruktor"],["Karolina Wójcik","kierowniczka produkcji"],["Piotr Lewandowski","koordynator montażu"]].map(([n,r])=><div key={n} className="border-t border-[var(--line)] py-5"><h3>{n}</h3><p className="mt-2 text-left text-sm text-[var(--muted)]">{r}</p></div>)}</div>
   </div>
  </Container>
 </section>

 <FullBleedImage image={asset("/images/produkcja.jpg")} alt="Hala produkcyjna NORDHUS" eyebrow="JAK PRACUJEMY" title="Proces ma właściciela na każdym etapie." text="Projekt, produkcja i montaż nie są osobnymi światami. Dokumentacja produkcyjna łączy decyzje architekta, konstruktora, instalatorów i ekipy montażowej."/>

 <section className="section-space bg-[#f7f8f5]">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Trzy zasady</p>
   <h2 className="mt-5">Mniej haseł. Więcej punktów kontrolnych.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Zasady są proste do sprawdzenia na każdym etapie inwestycji.</p>
   <div className="mt-12 grid gap-8 md:grid-cols-3">{[["01","Zakres przed produkcją","Materiały, instalacje i opcje dodatkowe zamykamy przed uruchomieniem modułów."],["02","Jedna osoba prowadzi etap","Klient wie, kto odpowiada za projekt, produkcję i montaż."],["03","Problemy pokazujemy wcześnie","Jeżeli dojazd, grunt, MPZP albo budżet ograniczają wybrany model, informujemy o tym przed projektem wykonawczym."]].map(([n,a,b])=><div key={n} className="border-t border-[var(--line)] pt-5"><p className="text-left text-sm text-[var(--muted)]">{n}</p><h3 className="mt-3">{a}</h3><p className="mt-4 text-left leading-8 text-[var(--muted)]">{b}</p></div>)}</div>
  </Container>
 </section>

 <CTA/>
 </>}
