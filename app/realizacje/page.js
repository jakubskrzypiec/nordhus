import Hero from "@/components/Hero";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import FullBleedImage from "@/components/FullBleedImage";
import RealizationsGrid from "@/components/RealizationsGrid";
import {asset} from "@/lib/asset";

export const metadata={title:"Realizacje domów modułowych",description:"Przykładowe realizacje NORDHUS z informacją o modelu, metrażu, czasie realizacji i warunkach działki.",openGraph:{title:"Realizacje domów modułowych | NORDHUS",description:"Przykładowe realizacje NORDHUS z informacją o modelu, metrażu, czasie realizacji i warunkach działki.",images:[asset("/images/realizacja-1.jpg")],type:"website"},twitter:{card:"summary_large_image",title:"Realizacje domów modułowych | NORDHUS",description:"Przykładowe realizacje NORDHUS z informacją o modelu, metrażu, czasie realizacji i warunkach działki.",images:[asset("/images/realizacja-1.jpg")]}};

export default function Page(){return <>
<Hero image={asset("/images/realizacja-1.jpg")} alt="Przykładowa realizacja NORDHUS nad jeziorem" eyebrow="REALIZACJE" title={<>Różne działki.<br/>Ten sam system budowy.</>} text="Poniższe realizacje są materiałem demonstracyjnym pokazującym różne scenariusze działki, logistyki i zmian funkcjonalnych."/>

<section className="section-space">
 <Container>
  <div className="grid grid-cols-12 gap-y-10">
   <div className="col-span-12 lg:col-span-5">
    <p className="eyebrow text-[var(--sage)]">Przykłady</p>
    <h2 className="display mt-5 text-4xl md:text-5xl">Sam metraż nie mówi, jak przebiega inwestycja.</h2>
   </div>
   <div className="col-span-12 lg:col-span-6 lg:col-start-7">
    <p className="max-w-[68ch] leading-8 text-[var(--muted)]">Dwie działki pod ten sam model mogą wymagać innego fundamentu, ustawienia dźwigu i trasy transportu. Dlatego przy każdym przykładzie pokazujemy element, który miał największy wpływ na projekt albo montaż.</p>
    <p className="mt-5 max-w-[68ch] leading-8 text-[var(--muted)]">Zdjęcia użyte w tym serwisie są wizualizacjami demonstracyjnymi, a opisy inwestycji są przykładowe.</p>
   </div>
  </div>
  <div className="mt-14"><RealizationsGrid/></div>
 </Container>
</section>

<FullBleedImage image={asset("/images/realizacja-3.jpg")} alt="Zimowy scenariusz domu NORDHUS" eyebrow="MONTAŻ ZIMĄ" title="Pogoda zmienia logistykę, nie cały proces." text="Produkcja pozostaje w hali. Na działce kluczowe są warunki bezpiecznej pracy dźwigu, przejezdność drogi i przygotowanie fundamentu."/>

<section className="section-space bg-[#f1f0eb]">
 <Container>
  <div className="grid grid-cols-12 gap-y-10">
   <div className="col-span-12 lg:col-span-4">
    <p className="eyebrow text-[var(--sage)]">Przed montażem</p>
    <h2 className="display mt-5 text-4xl md:text-5xl">Cztery rzeczy, które sprawdzamy na działce.</h2>
   </div>
   <div className="col-span-12 grid gap-8 md:grid-cols-2 lg:col-span-7 lg:col-start-6">
    {[
     ["01","Trasa transportu","Szerokość drogi, promienie skrętu, tonaż, gałęzie i linie napowietrzne."],
     ["02","Plac dla dźwigu","Nośność podłoża, wysięg do fundamentu i strefa pracy podpór."],
     ["03","Fundament","Wymiary, poziomy, punkty przyłączy i tolerancje zgodne z dokumentacją."],
     ["04","Okno pogodowe","Wiatr, oblodzenie i warunki uniemożliwiające bezpieczne podnoszenie modułów."]
    ].map(([n,a,b])=><div key={n} className="border-t border-[var(--line)] pt-5"><p className="text-sm text-[var(--muted)]">{n}</p><h3 className="mt-3 text-xl font-medium">{a}</h3><p className="mt-3 leading-7 text-[var(--muted)]">{b}</p></div>)}
   </div>
  </div>
 </Container>
</section>

<CTA title="Sprawdź logistykę swojej działki." text="Podeślij numer działki lub link do mapy. Wstępnie ocenimy dojazd, ustawienie domu i modele, które warto dalej analizować."/>
</>}