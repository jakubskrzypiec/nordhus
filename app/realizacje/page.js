import Hero from "@/Hero";
import Container from "@/Container";
import CTA from "@/CTA";
import FullBleedImage from "@/FullBleedImage";
import RealizationsGrid from "@/RealizationsGrid";
import {asset} from "@/asset";

export const metadata={title:"Realizacje domów modułowych",description:"Przykładowe realizacje NORDHUS z informacją o modelu, metrażu, czasie realizacji i warunkach działki.",openGraph:{title:"Realizacje domów modułowych | NORDHUS",description:"Przykładowe realizacje NORDHUS z informacją o modelu, metrażu, czasie realizacji i warunkach działki.",images:[asset("/realizacja-1.jpg")],type:"website"},twitter:{card:"summary_large_image",title:"Realizacje domów modułowych | NORDHUS",description:"Przykładowe realizacje NORDHUS z informacją o modelu, metrażu, czasie realizacji i warunkach działki.",images:[asset("/realizacja-1.jpg")]}};

export default function Page(){return <>
<Hero image={asset("/realizacja-1.jpg")} alt="Przykładowa realizacja NORDHUS nad jeziorem" title={<>Różne działki.<br/>Ten sam system budowy.</>} text="Poniższe realizacje są materiałem demonstracyjnym pokazującym różne scenariusze działki, logistyki i zmian funkcjonalnych."/>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Przykłady</p><h2 className="mt-5">Sam metraż nie mówi, jak przebiega inwestycja.</h2></div>
 <div className="content-columns mx-auto mt-10 max-w-[1100px]"><p>Dwie działki pod ten sam model mogą wymagać innego fundamentu, ustawienia dźwigu i trasy transportu. Dlatego przy każdym przykładzie pokazujemy element, który miał największy wpływ na projekt albo montaż.</p><p>Zdjęcia użyte w tym serwisie są wizualizacjami demonstracyjnymi, a opisy inwestycji są przykładowe.</p></div>
 <div className="mt-14"><RealizationsGrid/></div>
</Container></section>

<FullBleedImage image={asset("/realizacja-3.jpg")} alt="Zimowy scenariusz domu NORDHUS" eyebrow="MONTAŻ ZIMĄ" title="Pogoda zmienia logistykę, nie cały proces." text="Produkcja pozostaje w hali. Na działce kluczowe są warunki bezpiecznej pracy dźwigu, przejezdność drogi i przygotowanie fundamentu."/>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Przed montażem</p><h2 className="mt-5">Cztery rzeczy, które sprawdzamy na działce.</h2></div>
 <div className="mt-12 grid gap-8 md:grid-cols-2">{[["01","Trasa transportu","Szerokość drogi, promienie skrętu, tonaż, gałęzie i linie napowietrzne."],["02","Plac dla dźwigu","Nośność podłoża, wysięg do fundamentu i strefa pracy podpór."],["03","Fundament","Wymiary, poziomy, punkty przyłączy i tolerancje zgodne z dokumentacją."],["04","Okno pogodowe","Wiatr, oblodzenie i warunki uniemożliwiające bezpieczne podnoszenie modułów."]].map(([n,a,b])=><div key={n} className="border-t border-[var(--line)] pt-5"><p className="text-sm">{n}</p><h3 className="mt-3 text-left">{a}</h3><p className="mt-3">{b}</p></div>)}</div>
</Container></section>

<CTA title="Sprawdź logistykę swojej działki." text="Podeślij numer działki lub link do mapy. Wstępnie ocenimy dojazd, ustawienie domu i modele, które warto dalej analizować."/>
</>}