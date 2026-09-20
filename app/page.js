import Link from "next/link";
import Image from "next/image";
import Hero from "@/Hero";
import Container from "@/Container";
import ModelCard from "@/ModelCard";
import ProcessTimeline from "@/ProcessTimeline";
import CTA from "@/CTA";
import FullBleedImage from "@/FullBleedImage";
import {models} from "@/models";
import {process} from "@/process";
import {BLUR_DATA_URL} from "@/image";
import {asset} from "@/asset";

export const metadata={title:"Domy modułowe premium pod klucz",description:"Prefabrykowane domy modułowe 68–156 m². Montaż w 3–5 dni i przewidywalny proces od projektu do odbioru.",openGraph:{title:"Domy modułowe premium pod klucz | NORDHUS",description:"Prefabrykowane domy modułowe 68–156 m². Montaż w 3–5 dni i przewidywalny proces od projektu do odbioru.",images:[asset("/hero.jpg")],type:"website"},twitter:{card:"summary_large_image",title:"Domy modułowe premium pod klucz | NORDHUS",description:"Prefabrykowane domy modułowe 68–156 m². Montaż w 3–5 dni i przewidywalny proces od projektu do odbioru.",images:[asset("/hero.jpg")]}};
const organizationJsonLd={"@context":"https://schema.org","@type":"Organization",name:"NORDHUS",url:process.env.NEXT_PUBLIC_SITE_URL||"https://jakubskrzypiec.github.io/nordhus",logo:(process.env.NEXT_PUBLIC_SITE_URL||"https://jakubskrzypiec.github.io/nordhus")+asset("/favicon.svg")};
const faq=[["Czy potrzebuję pozwolenia na budowę?","Dla całorocznego domu jednorodzinnego standardową ścieżką jest procedura wynikająca z Prawa budowlanego i parametrów konkretnego projektu."],["Jaka działka jest potrzebna?","Nie ma jednej minimalnej powierzchni działki dla wszystkich modeli. Liczą się szerokość, linie zabudowy, odległości od granic i dojazd dla transportu."],["Czy mogę zmienić układ pomieszczeń?","Tak, przede wszystkim w zakresie ścian działowych, funkcji pokoi, kuchni i części otworów."],["Co z kredytem i transzami?","Harmonogram można powiązać z etapami projektu i produkcji."],["Jak wygląda gwarancja?","Zakres gwarancji rozdziela konstrukcję, elementy wykończeniowe i urządzenia producentów."],["Na jakim obszarze Polski budujecie?","Model demonstracyjny zakłada realizacje w całej Polsce."]];
const included=["konstrukcja i prefabrykacja","izolacja przegród","okna i drzwi","instalacje wewnętrzne","pompa ciepła i rekuperacja","bazowe wykończenie","transport do 250 km","dźwig i montaż"];
const excluded=["fundament","zewnętrzne przyłącza","zagospodarowanie działki","meble ruchome"];

export default function Home(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}}/>
<Hero image={asset("/hero.jpg")} alt="Dom modułowy NORDHUS w sosnowym lesie" title="DOM GOTOWY W PIĘĆ MIESIĘCY" text="Stała cena ustalona przed produkcją. Montaż na działce w trzy dni." primary={{href:"/modele",label:"ZOBACZ MODELE"}} secondary={{href:"/kontakt",label:"ZAPYTAJ O WYCENĘ"}}/>

<section className="section-space"><Container><div className="mx-auto max-w-4xl text-center"><p className="eyebrow">NASZE MODELE</p><h2 className="mt-5">Cztery modele. Jedna metoda budowy.</h2><p className="section-intro mt-6">Zaczynamy od gotowej geometrii i sprawdzonych węzłów, a później dopasowujemy układ do działki i potrzeb.</p><Link href="/modele" className="mt-6 inline-block text-[12px] font-bold uppercase tracking-[1.2px]">Porównaj modele →</Link></div><div className="mt-14 grid gap-x-7 gap-y-12 md:grid-cols-2">{models.map(m=><ModelCard key={m.slug} model={m}/>)}</div></Container></section>

<section className="section-space"><Container><p className="eyebrow">MONTAŻ</p><h2 className="mt-5">3–5 dni na ustawienie konstrukcji</h2></Container><div className="relative mt-10 h-[60vh] min-h-[420px] w-full overflow-hidden"><Image src={asset("/montaz.jpg")} alt="Montaż domu modułowego NORDHUS" fill className="object-cover" sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div><Container><div className="mt-10 grid gap-8 md:grid-cols-2"><p>Moduły przyjeżdżają na przygotowany fundament i są ustawiane dźwigiem zgodnie z planem logistycznym. Najwięcej pracy wykonano wcześniej w hali.</p><p>Na działce koncentrujemy się na ustawieniu, połączeniach konstrukcyjnych i instalacyjnych oraz kontroli gotowego budynku.</p></div></Container></section>

<section className="section-space"><Container><p className="eyebrow">PROCES BUDOWY</p><h2 className="mt-5">5 etapów. Jeden harmonogram.</h2><p className="section-intro mt-6">Każdy etap ma jasny zakres, czas i rezultat — bez przerzucania odpowiedzialności między ekipami.</p><ProcessTimeline steps={process}/><div className="mt-10 text-center"><Link href="/proces" className="text-[12px] font-bold uppercase tracking-[1.2px]">Zobacz cały proces →</Link></div></Container></section>

<section className="section-space">
 <Container>
  <div className="section-heading">
   <p className="eyebrow">ZAKRES CENY</p>
   <h2 className="mt-5">Co jest w cenie, a co pozostaje po stronie działki</h2>
  </div>

  <div className="relative mt-14 h-[52vh] min-h-[420px] max-h-[620px] w-full overflow-hidden">
   <Image src={asset("/produkcja.jpg")} alt="Produkcja modułów NORDHUS" fill className="object-cover" sizes="(min-width:1360px) 1264px,100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
  </div>

  <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
   <div>
    <div className="border-t border-black pt-6">
     <h3 className="text-left">W cenie bazowej</h3>
    </div>
    <ul className="mt-8">
     {included.map(x=><li key={x} className="border-t border-[var(--line)] py-4 text-[15px] uppercase tracking-[.04em] first:border-t-0">— {x}</li>)}
    </ul>
   </div>
   <div>
    <div className="border-t border-black pt-6">
     <h3 className="text-left">Po stronie działki</h3>
    </div>
    <ul className="mt-8">
     {excluded.map(x=><li key={x} className="border-t border-[var(--line)] py-4 text-[15px] uppercase tracking-[.04em] first:border-t-0">— {x}</li>)}
    </ul>
   </div>
  </div>
 </Container>
</section>

<FullBleedImage image={asset("/realizacja-1.jpg")} alt="Wizualizacja domu NORDHUS nad jeziorem" eyebrow="ZREALIZOWANE" title="Ten sam system. Inny kontekst." text="Zdjęcia w serwisie są wizualizacjami demonstracyjnymi. Pokazują, jak ta sama logika modułowa może pracować na różnych działkach i w różnych warunkach."/>

<section className="section-space"><Container><div className="mx-auto max-w-[720px]"><p className="eyebrow">CZĘSTE PYTANIA</p><h2 className="mt-5">Zanim wyślesz formularz</h2><div className="mt-10">{faq.map(([q,a])=><article key={q} className="border-t border-[var(--line)] py-6"><h3>{q}</h3><p className="mt-4">{a}</p></article>)}</div><div className="text-center"><Link href="/faq" className="mt-7 inline-block text-[12px] font-bold uppercase tracking-[1.2px]">Zobacz wszystkie pytania →</Link></div></div></Container></section>
<CTA/></>}