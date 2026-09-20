import Hero from "@/components/Hero";
import Container from "@/components/Container";
import ModelCard from "@/components/ModelCard";
import CTA from "@/components/CTA";
import FullBleedImage from "@/components/FullBleedImage";
import {models} from "@/data/models";
import {asset} from "@/lib/asset";

export const metadata={
 title:"Modele domów modułowych",
 description:"Porównaj cztery modele NORDHUS od 68 do 156 m². Zobacz metraż, układ, parametry i ceny początkowe.",
 openGraph:{title:"Modele domów modułowych | NORDHUS",description:"Porównaj cztery modele NORDHUS od 68 do 156 m². Zobacz metraż, układ, parametry i ceny początkowe.",images:[asset("/images/model-92.jpg")],type:"website"},
 twitter:{card:"summary_large_image",title:"Modele domów modułowych | NORDHUS",description:"Porównaj cztery modele NORDHUS od 68 do 156 m². Zobacz metraż, układ, parametry i ceny początkowe.",images:[asset("/images/model-92.jpg")]}
};

export default function Page(){return <>
 <Hero image={asset("/images/model-92.jpg")} alt="NORDHUS 92" eyebrow="MODELE" title="68–156 m². Cztery punkty wyjścia." text="Cztery gotowe skale domu, które dopasowujemy do działki i sposobu życia."/>

 <section className="section-space">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Kolekcja</p>
   <h2 className="mt-5">Najpierw wybieramy skalę domu.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">NORDHUS 68 i 92 są parterowe. NORDHUS 124 i 156 wykorzystują dwie kondygnacje, dzięki czemu zajmują mniejszą część działki przy większej powierzchni użytkowej.</p>
   <div className="mt-12 grid gap-8 md:grid-cols-2">
    <p className="leading-8 text-[var(--muted)]">Zmiany ścian działowych, wyposażenia, części otworów okiennych i sposobu wykończenia są możliwe. Zmiany wpływające na główny rytm konstrukcyjny wyceniamy przed projektem wykonawczym.</p>
    <p className="leading-8 text-[var(--muted)]">Przy wyborze modelu porównujemy nie tylko metraż, ale też powierzchnię zabudowy, liczbę modułów, szerokość działki i sposób finansowania inwestycji.</p>
   </div>
   <div className="mt-14 grid gap-x-7 gap-y-12 md:grid-cols-2">{models.map(m=><ModelCard key={m.slug} model={m}/>)}</div>
  </Container>
 </section>

 <section className="section-space bg-[#f1f0eb]">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Porównanie</p>
   <h2 className="mt-5">Cztery modele w jednym miejscu.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Najważniejsze parametry zestawione bez przechodzenia między podstronami.</p>
   <div className="mt-10 overflow-x-auto">
    <table className="w-full min-w-[900px] border-collapse text-left"><thead><tr className="border-b border-[var(--ink)]"><th className="py-4">Model</th><th>Metraż</th><th>Sypialnie</th><th>Łazienki</th><th>Wysokość</th><th>Moduły</th><th>Montaż</th><th>Cena od</th></tr></thead><tbody>{models.map(m=><tr key={m.slug} className="border-b border-[var(--line)]"><td className="py-5 font-medium">{m.name}</td><td>{m.area} m²</td><td>{m.bedrooms}</td><td>{m.bathrooms}</td><td>{m.height}</td><td>{m.modules}</td><td>3–5 dni</td><td>{m.price}</td></tr>)}</tbody></table>
   </div>
  </Container>
 </section>

 <FullBleedImage image={asset("/images/produkcja.jpg")} alt="Produkcja modułów NORDHUS" eyebrow="WSPÓLNY SYSTEM" title="Cztery modele korzystają z tej samej logiki produkcji." text="Różni się skala domu i liczba modułów. Sposób przygotowania konstrukcji, instalacji i kontroli produkcyjnej pozostaje wspólny."/>

 <section className="section-space">
  <Container>
   <p className="eyebrow text-[var(--sage)]">Jak wybrać</p>
   <h2 className="mt-5">Nie zaczynaj od największego metrażu.</h2>
   <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Najpierw policz pomieszczenia, których naprawdę używasz codziennie, a dopiero później porównaj powierzchnię.</p>
   <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
    <p className="leading-8 text-[var(--muted)]">Dla działki wąskiej częściej sprawdzają się modele piętrowe. Dla działki szerokiej i klientów, którzy nie chcą schodów, punktem wyjścia są modele 68 i 92.</p>
    <p className="leading-8 text-[var(--muted)]">Budżet porównuj razem z fundamentem, przyłączami i zagospodarowaniem terenu. Cena modelu nie obejmuje każdej pracy wykonywanej na działce.</p>
   </div>
  </Container>
 </section>

 <CTA title="Nie wiesz, który model wybrać?" text="Podaj działkę, liczbę domowników i budżet. Zawęzimy wybór do modeli, które mają sens dla konkretnej inwestycji."/>
 </>}
