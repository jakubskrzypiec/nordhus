import Image from "next/image";
import Link from "next/link";
import Container from "@/Container";
import CTA from "@/CTA";
import GalleryLightbox from "@/GalleryLightbox";
import {BLUR_DATA_URL} from "@/image";
import {asset} from "@/asset";

export default function ModelPage({model}){
 const spec=[["Powierzchnia całkowita",model.area+" m²"],["Powierzchnia użytkowa",model.usable+" m²"],["Sypialnie",String(model.bedrooms)],["Łazienki",String(model.bathrooms)],["Wysokość pomieszczeń",model.height],["Liczba modułów",String(model.modules)],["Wymiary zewnętrzne",model.dimensions],["Zapotrzebowanie na energię",model.energy],["Izolacja",model.insulation],["Okna",model.windows]];
 const gallery=[
  {src:model.image,alt:`${model.name} — bryła`,className:"col-span-12 row-span-2 md:col-span-7",sizes:"(min-width:768px) 58vw,100vw"},
  {src:asset("/wnetrze-salon.jpg"),alt:`${model.name} — salon`,className:"col-span-12 md:col-span-5",sizes:"(min-width:768px) 42vw,100vw"},
  {src:asset("/wnetrze-sypialnia.jpg"),alt:`${model.name} — sypialnia`,className:"col-span-6 md:col-span-5",sizes:"(min-width:768px) 42vw,50vw"},
  {src:asset("/wnetrze-lazienka.jpg"),alt:`${model.name} — łazienka`,className:"col-span-6 md:col-span-5",sizes:"(min-width:768px) 42vw,50vw"}
 ];
 const jsonLd={"@context":"https://schema.org","@type":"Product",name:model.name,description:model.description,image:[model.image,asset("/wnetrze-salon.jpg")],brand:{"@type":"Brand",name:"NORDHUS"},offers:{"@type":"Offer",priceCurrency:"PLN",price:model.price.replace(/\D/g,""),availability:"https://schema.org/InStock"}};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
  <section className="relative h-[60vh] min-h-[460px] overflow-hidden bg-black">
   <Image src={model.image} alt={`${model.name} — dom modułowy`} fill priority className="object-cover" sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
   <div className="absolute inset-0 bg-black/20"/>
  </section>

  <section className="section-space">
   <Container><div className="mx-auto max-w-[900px] text-center"><p className="eyebrow">NASZE MODELE</p><h1 className="hero-h1 mt-5">{model.title}</h1><p className="section-intro mt-6">{model.description} {model.price}.</p><Link href={`/kontakt?model=${encodeURIComponent(model.name)}`} className="site-button focus-ring mt-8 inline-flex">Zapytaj o wycenę</Link></div></Container>
  </section>

  <section className="section-space">
   <Container>
    <div className="mx-auto max-w-[900px] text-center"><p className="eyebrow">UKŁAD FUNKCJONALNY</p><h2 className="mt-5">Każdy metr ma przypisaną funkcję</h2></div>
    <div className="mt-12 grid grid-cols-12 gap-y-12 lg:gap-x-8">
     <div className="col-span-12 lg:col-span-7"><div className="space-y-6">{model.layout.map((p,i)=><p key={i}>{p}</p>)}</div><div className="mt-14 border-t border-[var(--line)] pt-8"><p className="eyebrow text-left">DLA KOGO</p><p className="mt-5">{model.audience}</p></div></div>
     <aside className="col-span-12 lg:col-span-4 lg:col-start-9"><div className="lg:sticky lg:top-[132px]"><p className="eyebrow text-left">SPECYFIKACJA</p><div className="mt-6">{spec.map(([a,b])=><div key={a} className="border-t border-[var(--line)] py-3.5"><p className="tech-label">{a}</p><p className="tech-value mt-1">{b}</p></div>)}</div><p className="mt-5 text-sm">* Zapotrzebowanie energetyczne jest wartością demonstracyjną. Wynik dla konkretnej inwestycji określa projekt charakterystyki energetycznej.</p></div></aside>
    </div>
   </Container>
  </section>

  <section className="section-space bg-white">
   <Container><p className="eyebrow">GALERIA</p><h2 className="mt-5">Z zewnątrz i od środka</h2><GalleryLightbox items={gallery} className="reveal-group mt-12 grid auto-rows-[230px] grid-cols-12 gap-4 md:auto-rows-[300px]"/></Container>
  </section>

  <section className="section-space">
   <Container><p className="eyebrow">ZAKRES CENY</p><h2 className="mt-5">Standard bazowy i opcje</h2><div className="mt-12 grid grid-cols-12 gap-y-12"><div className="col-span-12 lg:col-span-5"><h3>W cenie od {model.price.replace("od ","")}</h3><ul className="mt-5 space-y-3">{model.included.map(x=><li key={x}>— {x}</li>)}</ul></div><div className="col-span-12 lg:col-span-5 lg:col-start-8"><h3>Opcje dodatkowe</h3><div className="mt-5">{model.options.map(([a,b])=><div key={a} className="flex items-start justify-between gap-6 border-b border-[var(--line)] py-3 text-sm"><span>{a}</span><strong>{b}</strong></div>)}</div></div></div></Container>
  </section>
  <CTA title={`Sprawdź ${model.name} na swojej działce.`} href={`/kontakt?model=${encodeURIComponent(model.name)}`}/>
 </>;
}