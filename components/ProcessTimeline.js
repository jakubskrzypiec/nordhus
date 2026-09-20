import {process} from "@/data/process";

export default function ProcessTimeline(){
 return <div className="mt-12">
  <div className="relative hidden grid-cols-5 gap-6 md:grid">
   <div className="absolute left-[10%] right-[10%] top-[3.25rem] h-px bg-[var(--line)]" aria-hidden="true"/>
   {process.map(step=><article key={step.number} className="relative">
    <p className="font-[var(--font-display)] text-[2.5rem] leading-none text-[var(--muted)]">{String(step.number).padStart(2,"0")}</p>
    <div className="relative z-10 mt-4 h-3 w-3 border border-[var(--muted)] bg-[var(--bg)]"/>
    <h3 className="mt-5 text-left">{step.title}</h3>
    <p className="mt-2 text-sm text-[var(--muted)]">{step.duration}</p>
   </article>)}
  </div>
  <div className="relative space-y-8 pl-10 md:hidden">
   <div className="absolute bottom-0 left-[.4rem] top-0 w-px bg-[var(--line)]" aria-hidden="true"/>
   {process.map(step=><article key={step.number} className="relative">
    <span className="absolute -left-[2.05rem] top-[.35rem] h-3 w-3 border border-[var(--muted)] bg-[var(--bg)]"/>
    <p className="font-[var(--font-display)] text-[2.5rem] leading-none text-[var(--muted)]">{String(step.number).padStart(2,"0")}</p>
    <h3 className="mt-2 text-left">{step.title}</h3>
    <p className="mt-2 text-sm text-[var(--muted)]">{step.duration}</p>
   </article>)}
  </div>
 </div>
}
