import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import ModelCard from "@/components/ModelCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTA from "@/components/CTA";
import FullBleedImage from "@/components/FullBleedImage";
import {models} from "@/data/models";
import {BLUR_DATA_URL} from "@/lib/image";
import {asset} from "@/lib/asset";

export const metadata={
 title:"Domy modułowe premium pod klucz",
 description:"Prefabrykowane domy modułowe 68–156 m². Montaż w 3–5 dni i przewidywalny proces od projektu do odbioru.",
 openGraph:{title:"Domy modułowe premium pod klucz | NORDHUS",description:"Prefabrykowane domy modułowe 68–156 m². Montaż w 3–5 dni i przewidywalny proces od projektu do odbioru.",images:[asset("/images/hero.jpg")],type:"website"},
 twitter:{card:"summary_large_image",title:"Domy modułowe premium pod klucz | NORDHUS",description:"Prefabrykowane domy modułowe 68–156 m². Montaż w 3–5 dni i przewidywalny proces od projektu do odbioru.",images:[asset("/images/hero.jpg")]}
};

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"https://jakubskrzypiec.github.io/nordhus";
const organizationJsonLd={"@context":"https://schema.org","@type":"Organization",name:"NORDHUS",url:siteUrl,logo:siteUrl+asset("/favicon.svg")};

const faq=[
 ["Czy potrzebuję pozwolenia na budowę?","Dla całorocznego domu jednorodzinnego standardową ścieżką jest procedura wynikająca z Prawa budowlanego i parametrów konkretnego projektu. Nie zakładamy z góry trybu formalnego wyłącznie na podstawie tego, że budynek jest modułowy. Architekt weryfikuje MPZP albo warunki zabudowy i właściwą procedurę dla działki."],
 ["Jaka działka jest potrzebna?","Nie ma jednej minimalnej powierzchni działki dla wszystkich modeli. Liczą się szerokość, linie zabudowy, odległości od granic i dojazd dla transportu. Dla NORDHUS 92 w literę L potrzebujemy więcej szerokości niż dla modelu piętrowego o podobnej powierzchni."],
 ["Czy mogę zmienić układ pomieszczeń?","Tak, przede wszystkim w zakresie ścian działowych, funkcji pokoi, kuchni i części otworów. Zmiany wpływające na konstrukcję, piony instalacyjne lub duże przeszklenia wymagają ponownego sprawdzenia i mogą zmienić cenę."],
 ["Co z kredytem i transzami?","Harmonogram można powiązać z etapami projektu i produkcji. Przykładowo płatności są dzielone na umowę, zatwierdzenie projektu, start produkcji, gotowość do transportu i odbiór. Ostateczny podział ustalamy tak, aby był zgodny z umową i wymaganiami banku."],
 ["Jak wygląda gwarancja?","Zakres gwarancji rozdziela konstrukcję, elementy wykończeniowe i urządzenia producentów. Przy odbiorze klient otrzymuje protokół oraz dokumenty urządzeń. W projekcie demonstracyjnym podane okresy są przykładowe i wymagają potwierdzenia w rzeczywistej umowie."],
 ["Na jakim obszarze Polski budujecie?","Model demonstracyjny zakłada realizacje w całej Polsce. Cena bazowa obejmuje transport do 250 km od hali; powyżej tego dystansu koszt logistyki jest liczony osobno po sprawdzeniu trasy i liczby modułów."]
];

export default function Home(){return <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}}/>
 <Hero
  full
  image={asset("/images/hero.jpg")}
  alt="Dom modułowy NORDHUS w sosnowym lesie"
  eyebrow="DOMY MODUŁOWE / POLSKA"
  title="Dom gotowy w pięć miesięcy."
  text="Stała cena ustalona przed produkcją. Montaż na działce w trzy dni."
  primary={{href:"/modele",label:"Zobacz modele"}}
  secondary={{href:"/kontakt",label:"Zapytaj o wycenę"}}
 />

 <section className="section-space">
  <Container>
   <div className="mx-auto max-w-[760px] text-center">
    <p className="eyebrow text-[var(--sage)]">Kolekcja NORDHUS</p>
    <h2 className="mt-5">Cztery modele. Jedna metoda budowy.</h2>
    <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Zaczynamy od gotowej geometrii i sprawdzonych węzłów, a dopiero później dopasowujemy układ do działki i potrzeb. To ogranicza liczbę decyzji podejmowanych już po rozpoczęciu produkcji.</p>
    <Link href="/modele" className="text-link mt-6 inline-block text-sm font-semibold">Porównaj modele →</Link>
   </div>
   <div className="mt-14 grid gap-x-7 gap-y-12 md:grid-cols-2">{models.map(m=><ModelCard key={m.slug} model={m}/>)}</div>
  </Container>
 </section>

 <section className="section-space bg-[#f1f0eb]">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Montaż</p>
   <h2 className="mt-5">3–5 dni na ustawienie konstrukcji.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Moduły przyjeżdżają na przygotowany fundament. Montaż jest finałem pracy wykonanej wcześniej w hali.</p>
  </Container>
  <div className="relative mt-12 h-[60vh] min-h-[420px] w-full overflow-hidden bg-[#ddd]">
   <Image src={asset("/images/montaz.jpg")} alt="Montaż domu modułowego NORDHUS" fill className="object-cover" sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
  </div>
  <Container>
   <div className="mt-10 grid gap-8 md:grid-cols-2">
    <p className="leading-8 text-[var(--muted)]">Przed przyjazdem transportu sprawdzamy gotowość fundamentu, dojazd i miejsce pracy dźwigu. Moduły są ustawiane bezpośrednio na przygotowanej konstrukcji fundamentowej i od razu łączone konstrukcyjnie.</p>
    <p className="leading-8 text-[var(--muted)]">Po ustawieniu wykonujemy połączenia instalacyjne, uszczelnienia i kontrolę geometrii. Sam montaż konstrukcji zajmuje zwykle 3–5 dni; uruchomienia i odbiory trwają dłużej.</p>
   </div>
  </Container>
 </section>

 <section className="section-space">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Od rozmowy do odbioru</p>
   <h2 className="mt-5">5 etapów. Jeden harmonogram.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Każdy etap kończy się konkretnym rezultatem, zanim przechodzimy do następnego.</p>
   <ProcessTimeline/>
   <div className="mt-10 text-center"><Link href="/proces" className="text-link inline-block text-sm font-semibold">Zobacz cały proces →</Link></div>
  </Container>
 </section>

 <section className="bg-[var(--bg)]">
  <div className="relative h-[40vh] min-h-[320px] w-full overflow-hidden bg-[#ddd]">
   <Image src={asset("/images/produkcja.jpg")} alt="Produkcja modułów NORDHUS" fill className="object-cover" sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
  </div>
  <Container className="section-space">
   <p className="eyebrow text-[var(--sage)]">Zakres ceny</p>
   <h2 className="mt-5">Co jest w cenie, a co pozostaje po stronie działki.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Cena modelu ma sens tylko wtedy, gdy wiadomo dokładnie, co obejmuje.</p>
   <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0">
    <div className="md:border-r md:border-[var(--line)] md:pr-12">
     <h3>W cenie bazowej</h3>
     <ul className="mt-6 space-y-3 text-left text-[var(--muted)]">{["konstrukcja i prefabrykacja","izolacja przegród","okna i drzwi","instalacje wewnętrzne","pompa ciepła i rekuperacja","bazowe wykończenie","transport do 250 km","dźwig i montaż"].map(x=><li key={x}>— {x}</li>)}</ul>
    </div>
    <div className="border-t border-[var(--line)] pt-10 md:border-t-0 md:pl-12 md:pt-0">
     <h3>Po stronie działki</h3>
     <ul className="mt-6 space-y-3 text-left text-[var(--muted)]">{["fundament","zewnętrzne przyłącza","zagospodarowanie działki","meble ruchome"].map(x=><li key={x}>— {x}</li>)}</ul>
    </div>
   </div>
  </Container>
 </section>

 <FullBleedImage image={asset("/images/realizacja-1.jpg")} alt="Wizualizacja domu NORDHUS nad jeziorem" eyebrow="SCENARIUSZE DZIAŁEK" title="Ten sam system. Inny kontekst." text="Zdjęcia w serwisie są wizualizacjami demonstracyjnymi. Pokazują, jak ta sama logika modułowa może pracować na różnych działkach i w różnych warunkach."/>

 <section className="section-space">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Gdzie budujemy</p>
   <h2 className="mt-5">16 województw. Logistyka liczona od hali.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Demonstracyjny model NORDHUS zakłada realizacje w całej Polsce. Bazowy koszt transportu obejmuje promień do 250 km od przykładowej hali.</p>
   <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-y-3 text-sm text-[var(--muted)] sm:grid-cols-3 md:grid-cols-4">{["dolnośląskie","kujawsko-pomorskie","lubelskie","lubuskie","łódzkie","małopolskie","mazowieckie","opolskie","podkarpackie","podlaskie","pomorskie","śląskie","świętokrzyskie","warmińsko-mazurskie","wielkopolskie","zachodniopomorskie"].map(x=><p key={x}>— {x}</p>)}</div>
  </Container>
 </section>

 <section className="section-space bg-[#f1f0eb]">
  <Container>
   <div className="mx-auto max-w-[760px]">
    <p className="eyebrow text-[var(--sage)]">Najczęstsze pytania</p>
    <h2 className="mt-5">Zanim wyślesz formularz.</h2>
    <div className="mt-10">{faq.map(([q,a])=><article key={q} className="border-t border-[var(--line)] py-6"><h3>{q}</h3><p className="mt-4 leading-8 text-[var(--muted)]">{a}</p></article>)}</div>
    <div className="text-center"><Link href="/faq" className="text-link mt-7 inline-block text-sm font-semibold">Zobacz wszystkie pytania →</Link></div>
   </div>
  </Container>
 </section>

 <CTA/>
 </>}
