import { ArrowIcon } from "./icons";
import { SectionHead } from "./SectionHead";

const projects = [
  { num:"Project 01", title:"MJU University", image:"/images/image-3.jpg", alt:"MJU University UX/UI design preview", tags:["UX/UI Design","University Website Concept","Figma"], href:"https://www.figma.com/design/wSEdsRb5bZD0B4jOeHomvR/mjuUniversity?t=WToEsVlRI0RpKyhF-1" },
  { num:"Project 02", title:"Workspace", image:"/images/image-4.jpg", alt:"Workspace UX/UI design preview", tags:["UX/UI Design","Web Interface","Figma"], href:"https://www.figma.com/design/XqzjfmFvvSNoj3n6FqKrCY/workspace?node-id=0-1&t=PF9U1Deaj6OSjCDI-1" },
];

export function Works() {
  return <section id="works"><div className="wrap"><SectionHead number="04 — Works" title="Selected projects" subtitle="ผลงานด้าน UX/UI และการออกแบบ Interface ที่ได้ทดลองออกแบบและพัฒนาขึ้น" thai/><div className="works-list">{projects.map((p,i)=><article className={`work-card reveal ${i ? "d1" : ""}`} key={p.title}><div className="work-visual"><img src={p.image} alt={p.alt}/></div><div className="work-text"><span className="work-num">{p.num}</span><h3 className="work-title serif">{p.title}</h3><div className="work-tags">{p.tags.map(t=><span className="work-tag" key={t}>{t}</span>)}</div><a className="work-link" href={p.href} target="_blank" rel="noopener noreferrer">View in 
  Figma <ArrowIcon/></a></div></article>)}</div></div></section>;
}
