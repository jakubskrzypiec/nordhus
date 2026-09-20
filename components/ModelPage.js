import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import CTA from "./CTA";
import GalleryLightbox from "./GalleryLightbox";
import {BLUR_DATA_URL} from "@/lib/image";
import {asset} from "@/lib/asset";

export default function ModelPage({model}){
 const spec=[["Powierzchnia całkowita",model.area+" m²"],["Powierzchnia użytkowa",model.usable+" m²"],["Sypialnie",String(model.bedrooms)],["Łazienki",String(model.bathrooms)],["Wysokość pomieszczeń",model.height],["Liczba modułów",String(model.modules)],["Wymiary zewnętrzne",model.dimensions],["Zapotrzebowanie na energię",model.energy],["Izolacja",model.insulation],["Okna",model.windows]];
 const gallery=[
  {src:model.image,alt:`${model.name} — bryła`,className:"col-span-12 row-span-2 md:col-span-7",sizes:"(min-width:768px) 58vw,100vw"},
  {src:asset("/images/wnetrze-salon.jpg"),alt:`${model.name} — salon`,className:"col-span-12 md:col-span-5",sizes:"(min-width:768px) 42vw,100vw"},
  {src:asset("/images/wnetrze-sypialnia.jpg"),alt:`${model.name} — sypialnia`,className:"col-span-6 md:col-span-5",sizes:"(min-width:768px) 42vw,50vw"},
  {src:asset("/images/wnetrze-lazienka.jpg"),alt:`${model.name} — łazienka`,className:"col-span-6 md:col-span-5",sizes:"(min-width:768px) 42vw,50vw"}
 ];
 const jsonLd={"@context":"https://schema.org","@type":"Product",name:model.name,description:model.description,image:[model.image,asset("/images/wnetrze-salon.jpg")],brand:{"@type":"Brand",name:"NORDHUS"},offers:{"@type":"Offer",priceCurrency:"PLN",price:model.price.replace(/\D/g,""),availability:"https://schema.org/InStock"}};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
  <section className="section-space bg-[var(--bg)] pt-32 md:pt-40">
   <Container><div className="grid grid-cols-12 gap-y-8"><div className="col-span-12 lg:col-span-8"><p className="eyebrow text-[var(--sage)]">{model.name}</p><h1 className="hero-h1 mt-5 text-[var(--ink)]">{model.title}</h1></div><div className="col-span-12 lg:col-span-4 lg:col-start-9"><p className="max-w-[66ch] text-[1.0625rem] leading-[1.75] text-[color:rgba(28,28,26,.85)]">{model.description} {model.price}.</p><Link href={`/kontakt?model=${encodeURIComponent(model.name)}`} className="btn-sweep focus-ring mt-7 inline-flex bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-white"><span>Zapytaj o wycenę</span></Link></div></div></Container>
  </section>

  <section className="relative h-[70svh] min-h-[520px] overflow-hidden bg-[#222]">
   <Image src={model.image} alt={`${model.name} — dom modułowy`} fill className="object-cover" sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
  </section>

  <section className="section-space">
   <Container>
    <div className="grid grid-cols-12 gap-y-12 lg:gap-x-8">
     <div className="col-span-12 lg:col-span-7">
      <p className="eyebrow text-[var(--sage)]">Układ funkcjonalny</p>
      <h2 className="mt-5 text-[clamp(2rem,4vw,3.75rem)]">Każdy metr ma przypisaną funkcję.</h2>
      <div className="mt-9 space-y-6">{model.layout.map((p,i)=><p key={i} className="max-w-[66ch] text-[1.0625rem] leading-[1.75] text-[color:rgba(28,28,26,.85)]">{p}</p>)}</div>
      <div className="mt-14 border-t border-[var(--line)] pt-8"><p className="eyebrow text-[var(--sage)]">Dla kogo</p><p className="mt-5 max-w-[66ch] text-[1.0625rem] leading-[1.75] text-[color:rgba(28,28,26,.85)]">{model.audience}</p></div>
     </div>
     <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
      <div className="lg:sticky lg:top-[120px]"><p className="eyebrow text-[var(--sage)]">Specyfikacja</p><div className="mt-6">{spec.map(([a,b])=><div key={a} className="border-t border-[var(--line)] py-3.5"><p className="text-[.6875rem] uppercase tracking-[.16em] text-[var(--muted)]">{a}</p><p className="mt-1 font-medium">{b}</p></div>)}</div><p className="mt-5 text-xs leading-6 text-[var(--muted)]">* Zapotrzebowanie energetyczne jest wartością demonstracyjną. Wynik dla konkretnej inwestycji określa projekt charakterystyki energetycznej.</p></div>
     </aside>
    </div>
   </Container>
  </section>

  <section className="section-space bg-[#f1f0eb]">
   <Container><p className="eyebrow text-[var(--sage)]">Galeria</p><h2 className="mt-5 text-[clamp(2rem,4vw,3.75rem)]">Z zewnątrz i od środka.</h2><GalleryLightbox items={gallery} className="reveal-group mt-12 grid auto-rows-[230px] grid-cols-12 gap-4 md:auto-rows-[300px]"/></Container>
  </section>

  <section className="section-space">
   <Container><div className="grid grid-cols-12 gap-y-12"><div className="col-span-12 lg:col-span-4"><p className="eyebrow text-[var(--sage)]">Zakres ceny</p><h2 className="mt-5 text-[clamp(2rem,4vw,3.75rem)]">Standard bazowy i opcje.</h2></div><div className="col-span-12 lg:col-span-3 lg:col-start-6"><h3>W cenie od {model.price.replace("od ","")}</h3><ul className="mt-5 space-y-3 text-[var(--muted)]">{model.included.map(x=><li key={x}>— {x}</li>)}</ul></div><div className="col-span-12 lg:col-span-3 lg:col-start-10"><h3>Opcje dodatkowe</h3><div className="mt-5">{model.options.map(([a,b])=><div key={a} className="border-b border-[var(--line)] py-3 text-sm"><span>{a}</span><strong className="mt-1 block">{b}</strong></div>)}</div></div></div></Container>
  </section>
  <CTA title={`Sprawdź ${model.name} na swojej działce.`} href={`/kontakt?model=${encodeURIComponent(model.name)}`}/>
 </>;
}