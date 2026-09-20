import Hero from "@/components/Hero";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import FullBleedImage from "@/components/FullBleedImage";
import Image from "next/image";

export const metadata={title:"Technologia prefabrykacji",description:"Konstrukcja, izolacja, wentylacja, ogrzewanie i parametry cieplne domów modułowych NORDHUS.",openGraph:{title:"Technologia prefabrykacji | NORDHUS",description:"Konstrukcja, izolacja, wentylacja, ogrzewanie i parametry cieplne domów modułowych NORDHUS.",images:["/images/produkcja.jpg"],type:"website"},twitter:{card:"summary_large_image",title:"Technologia prefabrykacji | NORDHUS",description:"Konstrukcja, izolacja, wentylacja, ogrzewanie i parametry cieplne domów modułowych NORDHUS.",images:["/images/produkcja.jpg"]}};

export default function Page(){
 const wall=[["01","Elewacja wentylowana","20–28 mm okładziny + szczelina wentylacyjna"],["02","Poszycie zewnętrzne","płyta konstrukcyjna 12–15 mm"],["03","Warstwa wiatroizolacyjna","membrana wysokoparoprzepuszczalna"],["04","Konstrukcja","drewno klasy C24, słupki 45 × 195 mm"],["05","Izolacja między słupkami","wełna mineralna 195 mm"],["06","Warstwa instalacyjna","ruszt 45 mm + dodatkowa izolacja"],["07","Paroizolacja / warstwa szczelna","ciągła warstwa po ciepłej stronie"],["08","Wykończenie wewnętrzne","płyta g-k lub włóknowo-gipsowa 12,5–15 mm"]];
 return <>
<Hero image="/images/produkcja.jpg" alt="Produkcja modułów w hali" eyebrow="TECHNOLOGIA" title={<>Dom powstaje w hali.<br/>Warstwa po warstwie.</>} text="Prefabrykacja nie zmienia fizyki budynku. Zmienia miejsce, w którym powstają przegrody, instalacje i większość wykończenia."/>

<section className="section-space overflow-hidden">
 <Container>
  <div className="grid grid-cols-12 gap-y-12">
   <div className="col-span-12 lg:col-span-7">
    <div className="relative aspect-[4/3] w-full overflow-hidden lg:ml-[calc(-1*max(0px,(100vw-1280px)/2))] lg:w-[calc(100%+max(0px,(100vw-1280px)/2))]">
     <Image src="/images/produkcja.jpg" alt="Prefabrykowane moduły w hali" fill quality={90} className="object-cover" sizes="(min-width:1024px) 62vw,100vw"/>
    </div>
   </div>
   <div className="col-span-12 lg:col-span-4 lg:col-start-9">
    <p className="eyebrow text-[var(--sage)]">Konstrukcja</p>
    <h2 className="display mt-5 text-4xl md:text-5xl">Szkielet drewniany klasy C24.</h2>
    <div className="mt-7 space-y-5 leading-8 text-[var(--muted)]"><p>W demonstracyjnym standardzie NORDHUS przyjmujemy konstrukcję z drewna iglastego sortowanego wytrzymałościowo do klasy C24. Dobór przekrojów i rozstawów zawsze wynika z obliczeń konkretnego budynku.</p><p>Drewno przeznaczone do zamknięcia w przegrodzie powinno być wysuszone i chronione przed ponownym zawilgoceniem. Hala upraszcza kontrolę tego warunku.</p><p>Grubość słupków, poszycia i łączniki mogą zmienić się przy większych przeszkleniach, innym rozstawie podpór albo obciążeniu śniegiem i wiatrem.</p></div>
   </div>
  </div>
 </Container>
</section>

<section className="section-space bg-[#f1f0eb]">
 <Container>
  <div className="grid grid-cols-12 gap-y-10">
   <div className="col-span-12 lg:col-span-4"><p className="eyebrow text-[var(--sage)]">Przekrój ściany</p><h2 className="display mt-5 text-4xl md:text-5xl">Od elewacji do wnętrza.</h2></div>
   <div className="col-span-12 lg:col-span-7 lg:col-start-6">{wall.map(([n,a,b])=><div key={n} className="grid gap-3 border-t border-[var(--line)] py-5 md:grid-cols-[70px_1fr_1fr]"><p className="text-sm text-[var(--muted)]">{n}</p><h3 className="font-medium">{a}</h3><p className="text-[var(--muted)]">{b}</p></div>)}</div>
  </div>
 </Container>
</section>

<FullBleedImage image="/images/montaz.jpg" alt="Montaż modułu NORDHUS" eyebrow="Z HALI NA DZIAŁKĘ" title="Prefabrykacja kończy się dopiero po montażu." text="Dokładność modułu ma znaczenie dopiero wtedy, gdy fundament, transport i połączenia na działce są przygotowane do tego samego standardu." align="right"/>

<section className="section-space">
 <Container>
  <div className="grid grid-cols-12 gap-y-10">
   <div className="col-span-12 lg:col-span-4"><p className="eyebrow text-[var(--sage)]">Izolacyjność cieplna</p><h2 className="display mt-5 text-4xl md:text-5xl">Projektujemy poniżej dopuszczalnych wartości U.</h2></div>
   <div className="col-span-12 lg:col-span-7 lg:col-start-6">
    <p className="max-w-[68ch] leading-8 text-[var(--muted)]">Dla ogrzewanych pomieszczeń Warunki Techniczne przyjmują maksymalnie 0,20 W/(m²K) dla ściany zewnętrznej, 0,15 dla dachu, 0,30 dla podłogi na gruncie oraz Uw 0,90 dla okien pionowych. Finalne wyniki potwierdza projekt energetyczny.</p>
    <div className="mt-10 grid grid-cols-2 gap-px bg-[var(--line)] md:grid-cols-4">{[["Ściana","U ok. 0,15","WT max 0,20"],["Dach","U ok. 0,12","WT max 0,15"],["Podłoga","U ok. 0,18","WT max 0,30"],["Okna","Uw ≤ 0,90","WT max 0,90"]].map(([a,b,c])=><div key={a} className="bg-white p-5"><p className="text-xs uppercase tracking-[.12em] text-[var(--muted)]">{a}</p><p className="mt-3 text-xl font-medium">{b}</p><p className="mt-2 text-xs text-[var(--muted)]">{c}</p></div>)}</div>
   </div>
  </div>
 </Container>
</section>

<section className="section-space bg-[#f7f8f5]">
 <Container>
  <div className="grid grid-cols-12 gap-y-10">
   <div className="col-span-12 lg:col-span-5"><p className="eyebrow text-[var(--sage)]">Instalacje</p><h2 className="display mt-5 text-4xl md:text-5xl">Ogrzewanie i wentylacja są częścią projektu modułu.</h2></div>
   <div className="col-span-12 space-y-6 lg:col-span-6 lg:col-start-7"><p className="max-w-[68ch] leading-8 text-[var(--muted)]">Standard demonstracyjny zakłada pompę ciepła powietrze–woda i wodne ogrzewanie podłogowe. Moc urządzenia dobiera się do obliczeniowego obciążenia cieplnego konkretnego domu.</p><p className="max-w-[68ch] leading-8 text-[var(--muted)]">Wentylację rozwiązujemy mechanicznie z odzyskiem ciepła. Centrala, rozdzielacze i trasy kanałów są uwzględniane na etapie projektu produkcyjnego.</p><p className="max-w-[68ch] leading-8 text-[var(--muted)]">Instalacja elektryczna, wodno-kanalizacyjna i teletechniczna jest wykonywana w modułach do punktów połączeń transportowych.</p></div>
  </div>
 </Container>
</section>

<section className="section-space">
 <Container>
  <div className="grid grid-cols-12 gap-y-10">
   <div className="col-span-12 lg:col-span-4"><p className="eyebrow text-[var(--sage)]">Prefabrykacja a budowa tradycyjna</p><h2 className="display mt-5 text-4xl md:text-5xl">Różnica jest głównie w organizacji procesu.</h2></div>
   <div className="col-span-12 overflow-x-auto lg:col-span-8 lg:col-start-5"><table className="w-full min-w-[760px]"><thead><tr className="border-b border-[var(--ink)]"><th className="py-4 text-left"></th><th className="text-left">NORDHUS</th><th className="text-left">Budowa etapowa</th></tr></thead><tbody>{[["Czas głównych prac","8–10 tyg. produkcji","kolejne ekipy przez wiele miesięcy"],["Przewidywalność kosztu","zakres zamknięty przed produkcją","więcej decyzji w trakcie"],["Wpływ pogody","ograniczony podczas produkcji","wysoki dla prac na działce"],["Kontrola jakości","stałe stanowiska i checklisty","zmienne warunki"],["Odpady","sortowane w hali","więcej składowania na działce"],["Uciążliwość działki","krótki, intensywny montaż","długotrwały ruch ekip"]].map(r=><tr key={r[0]} className="border-b border-[var(--line)]">{r.map((x,i)=><td key={x} className={`py-5 pr-6 align-top ${i===0?"font-medium":"text-[var(--muted)]"}`}>{x}</td>)}</tr>)}</tbody></table></div>
  </div>
 </Container>
</section>

<CTA href="/proces" label="Zobacz proces" title="Zobacz, jak technologia przekłada się na harmonogram."/>
</>}