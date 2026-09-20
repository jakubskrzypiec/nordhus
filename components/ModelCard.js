import Image from "next/image";
import Link from "next/link";
import {BLUR_DATA_URL} from "@/lib/image";

export default function ModelCard({model}){return <article className="reveal group">
 <Link href={`/modele/${model.slug}`} className="focus-ring block">
  <div className="relative aspect-[4/3] overflow-hidden bg-[#e7e6e1]"><Image src={model.image} alt={`${model.name} — dom modułowy ${model.area} m²`} fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]" sizes="(min-width: 768px) 50vw, 100vw" placeholder="blur" blurDataURL={BLUR_DATA_URL}/></div>
  <div className="border-b border-[var(--line)] py-5">
   <h3 className="text-link mx-auto w-fit">{model.name}</h3>
   <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-left text-sm text-[var(--muted)]"><span>{model.area} m² · {model.short}</span><span className="font-medium text-[var(--ink)]">{model.price}</span></div>
  </div>
 </Link>
 </article>}
