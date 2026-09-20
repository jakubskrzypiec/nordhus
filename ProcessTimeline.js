export default function ProcessTimeline({steps}){
 return <div className="process-timeline mt-12">
  {steps.map(step=><article key={step.number} className="process-node">
   <p className="process-number">{String(step.number).padStart(2,"0")}</p>
   <div className="process-dot" aria-hidden="true"/>
   <h3>{step.title}</h3>
   <p className="process-duration mt-2">{step.duration}</p>
  </article>)}
 </div>
}