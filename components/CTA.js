import Link from "next/link";
import Container from "./Container";
export default function CTA({title="Masz działkę? Zacznijmy od liczb.",text="Podaj lokalizację, planowany metraż i budżet. Wskażemy model, który warto sprawdzić w pierwszej kolejności.",href="/kontakt",label="Zapytaj o wycenę"}){
 return <section className="section-space border-y border-[var(--line)] bg-white"><Container><div className="mx-auto max-w-[720px] text-center"><p className="eyebrow">NASTĘPNY KROK</p><h2 className="mt-5">{title}</h2><p className="section-intro mt-6">{text}</p><Link href={href} className="site-button focus-ring mt-8 inline-flex">{label}</Link></div></Container></section>
}