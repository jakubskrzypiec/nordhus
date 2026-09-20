export default function ProcessTimeline({steps}){
 return <div className="process-timeline mt-12">
  {steps.map(step=><article key={step.number} className="process-node">
   <p className="process-number">{String(step.number).padStart(2,"0")}</p>
   <div className="process-dot" aria-hidden="true"/>
   <h3>{step.title}</h3>
   <p className="mt-2 text-sm text-[var(--muted)]">{step.duration}</p>
  </article>)}
 </div>
}