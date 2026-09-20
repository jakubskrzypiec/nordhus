import ProcessTimeline from "@/ProcessTimeline";
import {asset} from "@/asset";
import Image from "next/image";
import Hero from "@/Hero";
import Container from "@/Container";
import CTA from "@/CTA";
import {process} from "@/process";
import {BLUR_DATA_URL} from "@/image";

export const metadata={title:"Proces budowy domu modułowego",description:"Pięć etapów budowy NORDHUS: od wyboru modelu i analizy działki po produkcję, montaż i odbiór.",openGraph:{title:"Proces budowy domu modułowego | NORDHUS",description:"Pięć etapów budowy NORDHUS: od wyboru modelu i analizy działki po produkcję, montaż i odbiór.",images:[asset("/montaz.jpg")],type:"website"},twitter:{card:"summary_large_image",title:"Proces budowy domu modułowego | NORDHUS",description:"Pięć etapów budowy NORDHUS: od wyboru modelu i analizy działki po produkcję, montaż i odbiór.",images:[asset("/montaz.jpg")]}};
const images=[asset("/hero.jpg"),asset("/montaz.jpg"),asset("/produkcja.jpg"),asset("/wnetrze-salon.jpg"),asset("/model-92.jpg")];

export default function Page(){return <>
<Hero image={asset("/montaz.jpg")} alt="Montaż modułu NORDHUS" title="Wiesz, co dzieje się dalej." text="Budowę dzielimy na pięć etapów. Każdy ma określony zakres, dokumenty, odpowiedzialność i orientacyjny czas."/>

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Harmonogram</p><h2 className="mt-5">Od pierwszej rozmowy do odbioru.</h2><p className="mt-6">Standardowy harmonogram zakłada około 5 miesięcy od zamknięcia założeń do gotowego budynku. Formalności administracyjne, badania gruntu, przyłącza i niestandardowe wyposażenie mogą działać równolegle albo wydłużyć termin. Dlatego przed uruchomieniem produkcji oddzielamy terminy zależne od NORDHUS od terminów urzędowych i prac zewnętrznych.</p></div>
 <div className="section-heading mt-16"><p className="eyebrow">Proces budowy</p><h2 className="mt-5">5 etapów. Jeden harmonogram.</h2></div>
 <ProcessTimeline steps={process}/>
</Container></section>

{process.map((x,idx)=><section key={x.number} className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">{String(x.number).padStart(2,"0")} / {x.duration}</p><h2 className="mt-5">{x.title}</h2><p className="mt-6">{x.result}</p></div>
 <div className="balanced-grid mt-12">
  <div className="relative min-h-[520px] overflow-hidden"><Image src={images[idx]} alt={x.title} fill className="object-cover" sizes="(min-width:900px) 50vw,100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div>
  <div className="space-y-5">{x.details.map((p,i)=><p key={i}>{p}</p>)}</div>
 </div>
</Container></section>)}

<section className="section-space"><Container>
 <div className="section-heading"><p className="eyebrow">Płatności</p><h2 className="mt-5">Transze powiązane z etapami.</h2></div>
 <div className="mt-12 overflow-x-auto"><table className="w-full min-w-[720px]"><thead><tr className="border-b border-[var(--ink)]"><th className="py-4 text-left">Transza</th><th className="text-left">Moment</th><th className="text-left">Udział</th><th className="text-left">Co zamyka etap</th></tr></thead><tbody>{[["1","podpisanie umowy","10%","rezerwacja terminu i start projektu"],["2","zatwierdzenie projektu","25%","zamówienia materiałowe"],["3","start produkcji","35%","uruchomienie modułów na hali"],["4","gotowość do transportu","25%","odbiór produkcyjny"],["5","odbiór końcowy","5%","protokół i dokumentacja"]].map(r=><tr key={r[0]} className="border-b border-[var(--line)]">{r.map((v,i)=><td key={v} className={`py-5 pr-5 ${i?"text-[var(--muted)]":"font-normal"}`}>{v}</td>)}</tr>)}</tbody></table></div>
</Container></section>
<CTA/>
</>}