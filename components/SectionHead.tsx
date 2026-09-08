export function SectionHead({ number, title, subtitle, thai = false }: { number: string; title: string; subtitle?: string; thai?: boolean }) {
  return <div className="section-head reveal">
    <div><span className="label">{number}</span><h2 className="section-title serif">{title}</h2>{subtitle && <p className={`section-sub ${thai ? "thai" : ""}`}>{subtitle}</p>}</div>
  </div>;
}
