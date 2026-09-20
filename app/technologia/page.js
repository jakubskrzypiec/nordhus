import Hero from "@/Hero";
import Container from "@/Container";
import CTA from "@/CTA";
import FullBleedImage from "@/FullBleedImage";
import Image from "next/image";
import {BLUR_DATA_URL} from "@/image";
import {asset} from "@/asset";

export const metadata={title:"Technologia prefabrykacji",description:"Konstrukcja, izolacja, wentylacja, ogrzewanie i parametry cieplne domów modułowych NORDHUS.",openGraph:{title:"Technologia prefabrykacji | NORDHUS",description:"Konstrukcja, izolacja, wentylacja, ogrzewanie i parametry cieplne domów modułowych NORDHUS.",images:[asset("/produkcja.jpg")],type:"website"},twitter:{card:"summary_large_image",title:"Technologia prefabrykacji | NORDHUS",description:"Konstrukcja, izolacja, wentylacja, ogrzewanie i parametry cieplne domów modułowych NORDHUS.",images:[asset("/produkcja.jpg")]}};

export default function Page(){
 const wall=[["01","Elewacja wentylowana","20–28 mm okładziny + szczelina wentylacyjna"],["02","Poszycie zewnętrzne","płyta konstrukcyjna 12–15 mm"],["03","Warstwa wiatroizolacyjna","membrana wysokoparoprzepuszczalna"],["04","Konstrukcja","drewno klasy C24, słupki 45 × 195 mm"],["05","Izolacja między słupkami","wełna mineralna 195 mm"],["06","Warstwa instalacyjna","ruszt 45 mm + dodatkowa izolacja"],["07","Paroizolacja / warstwa szczelna","ciągła warstwa po ciepłej stronie"],["08","Wykończenie wewnętrzne","płyta g-k lub włóknowo-gipsowa 12,5–15 mm"]];
 return <>
<Hero image={asset("/produkcja.jpg")} alt="Produkcja modułów w hali" title={<>Dom powstaje w hali.<br/>Warstwa po warstwie.</>} text="Prefabrykacja nie zmienia fizyki budynku. Zmienia miejsce, w którym powstają przegrody, instalacje i większość wykończenia."/>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Konstrukcja</p><h2 className="mt-5">Szkielet drewniany klasy C24.</h2></div>
 <div className="balanced-grid mt-12">
  <div className="relative min-h-[540px] overflow-hidden"><Image src={asset("/produkcja.jpg")} alt="Prefabrykowane moduły w hali" fill className="object-cover" sizes="(min-width:900px) 50vw,100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div>
  <div className="space-y-5"><p>W demonstracyjnym standardzie NORDHUS przyjmujemy konstrukcję z drewna iglastego sortowanego wytrzymałościowo do klasy C24. Dobór przekrojów i rozstawów zawsze wynika z obliczeń konkretnego budynku.</p><p>Drewno przeznaczone do zamknięcia w przegrodzie powinno być wysuszone i chronione przed ponownym zawilgoceniem. Hala upraszcza kontrolę tego warunku.</p><p>Grubość słupków, poszycia i łączniki mogą zmienić się przy większych przeszkleniach, innym rozstawie podpór albo obciążeniu śniegiem i wiatrem.</p></div>
 </div>
</Container></section>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Przekrój ściany</p><h2 className="mt-5">Od elewacji do wnętrza.</h2></div>
 <div className="mx-auto mt-12 max-w-[1100px]">{wall.map(([n,a,b])=><div key={n} className="grid gap-3 border-t border-[var(--line)] py-5 md:grid-cols-[70px_1fr_1fr]"><p className="text-sm">{n}</p><h3 className="text-left">{a}</h3><p>{b}</p></div>)}</div>
</Container></section>

<FullBleedImage image={asset("/montaz.jpg")} alt="Montaż modułu NORDHUS" eyebrow="Z HALI NA DZIAŁKĘ" title="Prefabrykacja kończy się dopiero po montażu." text="Dokładność modułu ma znaczenie dopiero wtedy, gdy fundament, transport i połączenia na działce są przygotowane do tego samego standardu."/>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Izolacyjność cieplna</p><h2 className="mt-5">Projektujemy poniżej dopuszczalnych wartości U.</h2><p className="mt-6">Dla ogrzewanych pomieszczeń Warunki Techniczne przyjmują maksymalnie 0,20 W/(m²K) dla ściany zewnętrznej, 0,15 dla dachu, 0,30 dla podłogi na gruncie oraz Uw 0,90 dla okien pionowych. Finalne wyniki potwierdza projekt energetyczny.</p></div>
 <div className="mt-12 grid grid-cols-2 gap-px bg-[var(--line)] md:grid-cols-4">{[["Ściana","U ok. 0,15","WT max 0,20"],["Dach","U ok. 0,12","WT max 0,15"],["Podłoga","U ok. 0,18","WT max 0,30"],["Okna","Uw ≤ 0,90","WT max 0,90"]].map(([a,b,c])=><div key={a} className="bg-white p-6"><p className="tech-label">{a}</p><p className="tech-value mt-3">{b}</p><p className="mt-2 text-sm">{c}</p></div>)}</div>
</Container></section>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Instalacje</p><h2 className="mt-5">Ogrzewanie i wentylacja są częścią projektu modułu.</h2></div>
 <div className="content-thirds mt-12"><p>Standard demonstracyjny zakłada pompę ciepła powietrze–woda i wodne ogrzewanie podłogowe. Moc urządzenia dobiera się do obliczeniowego obciążenia cieplnego konkretnego domu.</p><p>Wentylację rozwiązujemy mechanicznie z odzyskiem ciepła. Centrala, rozdzielacze i trasy kanałów są uwzględniane na etapie projektu produkcyjnego.</p><p>Instalacja elektryczna, wodno-kanalizacyjna i teletechniczna jest wykonywana w modułach do punktów połączeń transportowych.</p></div>
</Container></section>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Prefabrykacja a budowa tradycyjna</p><h2 className="mt-5">Różnica jest głównie w organizacji procesu.</h2></div>
 <div className="mt-12 overflow-x-auto"><table className="w-full min-w-[760px]"><thead><tr className="border-b border-[var(--ink)]"><th className="py-4 text-left"></th><th className="text-left">NORDHUS</th><th className="text-left">Budowa etapowa</th></tr></thead><tbody>{[["Czas głównych prac","8–10 tyg. produkcji","kolejne ekipy przez wiele miesięcy"],["Przewidywalność kosztu","zakres zamknięty przed produkcją","więcej decyzji w trakcie"],["Wpływ pogody","ograniczony podczas produkcji","wysoki dla prac na działce"],["Kontrola jakości","stałe stanowiska i checklisty","zmienne warunki"],["Odpady","sortowane w hali","więcej składowania na działce"],["Uciążliwość działki","krótki, intensywny montaż","długotrwały ruch ekip"]].map(r=><tr key={r[0]} className="border-b border-[var(--line)]">{r.map((x,i)=><td key={x} className={`py-5 pr-6 align-top ${i===0?"font-normal":"text-[var(--muted)]"}`}>{x}</td>)}</tr>)}</tbody></table></div>
</Container></section>

<CTA href="/proces" label="Zobacz proces" title="Zobacz, jak technologia przekłada się na harmonogram."/>
</>}