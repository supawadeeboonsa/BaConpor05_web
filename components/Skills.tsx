import { SectionHead } from "./SectionHead";

const skillGroups = [
  ["Design", ["Figma", "UI/UX Design", "Color Design"]],
  ["Frontend", ["HTML / CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"]],
  ["Backend / Database", ["Node.js", "NestJS", "Python", "MongoDB", "MySQL"]],
  ["Tools", ["Git / GitHub", "VS Code", "Canva"]],
] as const;

export function Skills() {
  return <section id="skills">
    <div className="wrap"><SectionHead number="03 — Skills" title="My Skills" />
      <div className="skillset-grid">{skillGroups.map(([cat, tags], i) => <div className={`skillset-card reveal ${i ? `d${i}` : ""}`} key={cat}>
        <p className="skillset-cat">{cat}</p>
        <div className="skillset-tags">{tags.map(tag => <span className="pill" key={tag}>{tag}</span>)}</div></div>)}</div>
      <div className="lang-softskills">
        <div className="reveal d1"><p className="softskill-title">Languages</p>
          <div className="lang-card"><span className="lang-name">ภาษาไทย</span>
            <span className="lang-level">เจ้าของภาษา</span>
          </div>
          <div className="lang-card"><span className="lang-name">ภาษาอังกฤษ</span>
            <span className="lang-level">พื้นฐาน – ปานกลาง</span>
          </div>
        </div>
        <div className="reveal d2">
          <p className="softskill-title">Soft Skills</p><div className="softskill-tags">{["การสื่อสาร", "การแก้ไขปัญหา", "การทำงานเป็นทีม", "การเรียนรู้สิ่งใหม่ ๆ", "ความใส่ใจในรายละเอียด", "การเปิดรับ Feedback"].map(x => <span className="pill" key={x}>{x}</span>)}</div>
        </div>
      </div>
    </div></section>;
}
