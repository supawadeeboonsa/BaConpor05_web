import { SectionHead } from "./SectionHead";


const highlights = ["UX/UI Design", "Frontend Development", "Software Design", "Web Development"];

export function About() {
  return <section id="about"><div className="wrap">
    <SectionHead number="02 — About" title="A designer who codes, a developer who designs."/>
    <div className="about-grid">
      <div className="about-text reveal d1 thai"><p>กำลังศึกษาอยู่ในสาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้ มีความสนใจด้าน UI/UX, Frontend, Software Design และการพัฒนาเว็บไซต์ ชอบออกแบบและพัฒนาเว็บไซต์ให้ใช้งานง่าย สวยงาม และตอบโจทย์ผู้ใช้งาน</p>
      <p>เป็นคนที่ชอบเรียนรู้จากการลงมือทำ เปิดรับสิ่งใหม่และ Feedback พร้อมค้นคว้าและทดลองเพื่อพัฒนาทักษะของตัวเองอยู่เสมอ เมื่อเจอปัญหาจะพยายามหาวิธีแก้ไขและเรียนรู้จากมัน เพื่อนำความรู้ด้านการออกแบบและการพัฒนาไปสร้างผลงานที่สามารถใช้งานได้จริง</p></div>
      <div className="highlight-grid reveal d2">{highlights.map((x,i)=><div className="highlight-card" key={x}><p className="highlight-num en">0{i+1}</p><p className="highlight-title">{x}</p></div>)}</div>
    </div>
    <div className="edu-grid">
      <div className="profile-card reveal d1">
        {[['ชื่อ','สุภาวดี บุญสา'],['English Name','Supawadee Boonsa'],['ตำแหน่ง','Frontend Developer & UX/UI Designer'],['สถานะ','นักศึกษาวิทยาการคอมพิวเตอร์'],['มหาวิทยาลัย','มหาวิทยาลัยแม่โจ้'],['ที่อยู่','6/2 อ.เกาะสมุย จ.สุราษฎร์ธานี 84310']].map(([k,v])=><div className="profile-row" key={k}><span className={`k ${k === 'English Name' ? 'en' : ''}`}>{k}</span><span className={`v ${k === 'English Name' ? 'en' : ''}`}>{v}</span></div>)}
      </div>
      <div className="reveal d2"><p className="timeline-title">การศึกษา</p><div className="timeline"><div className="timeline-item"><p className="timeline-years en">2024–2026</p><p className="timeline-school">Maejo University</p><p className="timeline-detail">วิทยาการคอมพิวเตอร์ (Computer Science)</p></div><div className="timeline-item"><p className="timeline-years en">2021–2023</p><p className="timeline-school">โรงเรียนเทพมิตรศึกษา</p><p className="timeline-detail">มัธยมศึกษาตอนปลาย ม.4–ม.6 · แผนการเรียนวิทย์-คณิต</p></div></div></div>
    </div>
  </div></section>;
}
