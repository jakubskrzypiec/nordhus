import Hero from "@/Hero";
import Container from "@/Container";
import ModelCard from "@/ModelCard";
import CTA from "@/CTA";
import FullBleedImage from "@/FullBleedImage";
import {models} from "@/models";
import {asset} from "@/asset";

export const metadata={title:"Modele domów modułowych",description:"Porównaj cztery modele NORDHUS od 68 do 156 m². Zobacz metraż, układ, parametry i ceny początkowe.",openGraph:{title:"Modele domów modułowych | NORDHUS",description:"Porównaj cztery modele NORDHUS od 68 do 156 m². Zobacz metraż, układ, parametry i ceny początkowe.",images:[asset("/model-92.jpg")],type:"website"},twitter:{card:"summary_large_image",title:"Modele domów modułowych | NORDHUS",description:"Porównaj cztery modele NORDHUS od 68 do 156 m². Zobacz metraż, układ, parametry i ceny początkowe.",images:[asset("/model-92.jpg")]}};

export default function Page(){return <>
<Hero image={asset("/model-92.jpg")} alt="NORDHUS 92" title={<>68–156 m².<br/>Cztery punkty wyjścia.</>} text="Każdy model ma określony układ, standard bazowy i cenę początkową. Różnią się liczbą modułów, powierzchnią zabudowy i sposobem organizacji strefy prywatnej."/>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Kolekcja</p><h2 className="mt-5">Najpierw wybieramy skalę domu.</h2></div>
 <div className="content-columns mx-auto mt-10 max-w-[1100px]">
  <p>NORDHUS 68 i 92 są parterowe. NORDHUS 124 i 156 wykorzystują dwie kondygnacje, dzięki czemu zajmują mniejszą część działki przy większej powierzchni użytkowej.</p>
  <p>Zmiany ścian działowych, wyposażenia, części otworów okiennych i sposobu wykończenia są możliwe. Zmiany wpływające na główny rytm konstrukcyjny wyceniamy przed projektem wykonawczym.</p>
 </div>
 <div className="mt-14 grid gap-x-7 gap-y-12 md:grid-cols-2">{models.map(m=><ModelCard key={m.slug} model={m}/>)}</div>
</Container></section>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Porównanie</p><h2 className="mt-5">Cztery modele w jednym miejscu.</h2></div>
 <div className="mt-12 overflow-x-auto"><table className="w-full min-w-[900px] border-collapse text-left"><thead><tr className="border-b border-[var(--ink)]"><th className="py-4">Model</th><th>Metraż</th><th>Sypialnie</th><th>Łazienki</th><th>Wysokość</th><th>Moduły</th><th>Montaż</th><th>Cena od</th></tr></thead><tbody>{models.map(m=><tr key={m.slug} className="border-b border-[var(--line)]"><td className="py-5 font-normal">{m.name}</td><td>{m.area} m²</td><td>{m.bedrooms}</td><td>{m.bathrooms}</td><td>{m.height}</td><td>{m.modules}</td><td>3–5 dni</td><td>{m.price}</td></tr>)}</tbody></table></div>
</Container></section>

<FullBleedImage image={asset("/produkcja.jpg")} alt="Produkcja modułów NORDHUS" eyebrow="WSPÓLNY SYSTEM" title="Cztery modele korzystają z tej samej logiki produkcji." text="Różni się skala domu i liczba modułów. Sposób przygotowania konstrukcji, instalacji i kontroli produkcyjnej pozostaje wspólny."/>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Jak wybrać</p><h2 className="mt-5">Nie zaczynaj od największego metrażu.</h2></div>
 <div className="content-thirds mt-12">
  <p>Najpierw policz pomieszczenia, których naprawdę używasz codziennie: liczbę sypialni, osobny gabinet, liczbę łazienek i wielkość strefy dziennej. Następnie sprawdź powierzchnię zabudowy dopuszczoną na działce.</p>
  <p>Dla działki wąskiej częściej sprawdzają się modele piętrowe. Dla działki szerokiej i klientów, którzy nie chcą schodów, punktem wyjścia są modele 68 i 92.</p>
  <p>Budżet porównuj razem z fundamentem, przyłączami i zagospodarowaniem terenu. Cena modelu nie obejmuje każdej pracy wykonywanej na działce.</p>
 </div>
</Container></section>

<CTA title="Nie wiesz, który model wybrać?" text="Podaj działkę, liczbę domowników i budżet. Zawęzimy wybór do modeli, które mają sens dla konkretnej inwestycji."/>
</>}