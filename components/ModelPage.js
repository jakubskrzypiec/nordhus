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
   <Container>
    <div className="mx-auto max-w-4xl text-center">
     <p className="eyebrow text-[var(--sage)]">{model.name}</p>
     <h1 className="mt-5 font-[var(--font-display)] text-[clamp(2.75rem,6.5vw,5.5rem)] font-normal leading-[1.05] tracking-[-.02em]">{model.title}</h1>
     <p className="section-intro mt-6 text-[1.0625rem] leading-[1.75] text-[color:rgba(28,28,26,.85)]">{model.description} {model.price}.</p>
     <Link href={`/kontakt?model=${encodeURIComponent(model.name)}`} className="btn-sweep focus-ring mt-7 inline-flex bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-white"><span>Zapytaj o wycenę</span></Link>
    </div>
   </Container>
  </section>

  <section className="relative h-[70svh] min-h-[520px] overflow-hidden bg-[#222]">
   <Image src={model.image} alt={`${model.name} — dom modułowy`} fill className="object-cover" sizes="100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
  </section>

  <section className="section-space">
   <Container>
    <p className="eyebrow text-[var(--sage)]">Układ funkcjonalny</p>
    <h2 className="mt-5">Każdy metr ma przypisaną funkcję.</h2>
    <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Układ bazowy można dopasować w granicach konstrukcji, pionów instalacyjnych i geometrii modułów.</p>
    <div className="mt-12 grid grid-cols-12 gap-y-12 lg:gap-x-10">
     <div className="col-span-12 space-y-6 text-left lg:col-span-7">
      {model.layout.map((p,i)=><p key={i} className="max-w-[66ch] text-[1.0625rem] leading-[1.75] text-[color:rgba(28,28,26,.85)]">{p}</p>)}
      <div className="mt-14 border-t border-[var(--line)] pt-8">
       <p className="eyebrow text-[var(--sage)]">Dla kogo</p>
       <p className="mt-5 max-w-[66ch] text-left text-[1.0625rem] leading-[1.75] text-[color:rgba(28,28,26,.85)]">{model.audience}</p>
      </div>
     </div>
     <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
      <div className="lg:sticky lg:top-[120px]">
       <p className="eyebrow text-[var(--sage)]">Specyfikacja</p>
       <div className="mt-6">{spec.map(([a,b])=><div key={a} className="border-t border-[var(--line)] py-3.5 text-left"><p className="text-[.6875rem] uppercase tracking-[.16em] text-[var(--muted)]">{a}</p><p className="mt-1 font-medium">{b}</p></div>)}</div>
       <p className="mt-5 text-left text-xs leading-6 text-[var(--muted)]">* Zapotrzebowanie energetyczne jest wartością demonstracyjną. Wynik dla konkretnej inwestycji określa projekt charakterystyki energetycznej.</p>
      </div>
     </aside>
    </div>
   </Container>
  </section>

  <section className="section-space bg-[#f1f0eb]">
   <Container>
    <p className="eyebrow text-[var(--sage)]">Galeria</p>
    <h2 className="mt-5">Z zewnątrz i od środka.</h2>
    <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Bryła modelu oraz trzy uzupełniające ujęcia wnętrza.</p>
    <GalleryLightbox items={gallery} className="reveal-group mt-12 grid auto-rows-[230px] grid-cols-12 gap-4 md:auto-rows-[300px]"/>
   </Container>
  </section>

  <section className="section-space">
   <Container>
    <p className="eyebrow text-[var(--sage)]">Zakres ceny</p>
    <h2 className="mt-5">Standard bazowy i opcje.</h2>
    <p className="section-intro mt-6 leading-8 text-[var(--muted)]">Zakres bazowy jest oddzielony od elementów, które można dodać do konkretnej konfiguracji.</p>
    <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0">
     <div className="md:border-r md:border-[var(--line)] md:pr-12"><h3>W cenie od {model.price.replace("od ","")}</h3><ul className="mt-5 space-y-3 text-left text-[var(--muted)]">{model.included.map(x=><li key={x}>— {x}</li>)}</ul></div>
     <div className="border-t border-[var(--line)] pt-10 md:border-t-0 md:pl-12 md:pt-0"><h3>Opcje dodatkowe</h3><div className="mt-5">{model.options.map(([a,b])=><div key={a} className="border-b border-[var(--line)] py-3 text-left text-sm"><span>{a}</span><strong className="mt-1 block">{b}</strong></div>)}</div></div>
    </div>
   </Container>
  </section>

  <CTA title={`Sprawdź ${model.name} na swojej działce.`} href={`/kontakt?model=${encodeURIComponent(model.name)}`}/>
 </>;
}
