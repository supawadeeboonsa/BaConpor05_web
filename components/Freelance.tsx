import {
  ArrowIcon,
  CodeIcon,
  DesignIcon,
  LayersIcon,
  RefreshIcon,
  SmartphoneIcon,
  BugIcon,
} from "./icons";

import { SectionHead } from "./SectionHead";

const services = [
  [
    "ออกแบบ UX/UI",
    "ออกแบบหน้าตาเว็บไซต์และแอปพลิเคชันให้ใช้งานง่าย สวยงาม และตอบโจทย์ผู้ใช้จริง ตั้งแต่ Wireframe จนถึง High-fidelity Design ใน Figma",
    DesignIcon,
  ],
  [
    "พัฒนาเว็บไซต์ (Frontend)",
    "พัฒนาเว็บไซต์ด้วย HTML, CSS, JavaScript และ React ตั้งแต่ Landing Page เดียว ไปจนถึงเว็บไซต์หลายหน้า พร้อมรองรับทุกขนาดหน้าจอ",
    CodeIcon,
  ],
  [
    "Portfolio / เว็บไซต์ส่วนตัว",
    "สร้างเว็บไซต์แสดงผลงานหรือเรซูเม่ออนไลน์ที่ช่วยให้คุณโดดเด่นและน่าจดจำ ออกแบบเฉพาะตัวไม่ซ้ำใคร",
    LayersIcon,
  ],
  [
    "Redesign เว็บไซต์เดิม",
    "ปรับปรุงเว็บไซต์เดิมให้ดูทันสมัยและใช้งานง่ายขึ้น โดยยังคงคอนเทนต์และโครงสร้างหลักไว้ตามความเหมาะสม",
    RefreshIcon,
  ],
  [
    "Responsive Design",
    "ออกแบบและพัฒนาให้แสดงผลได้ดีทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์ เพื่อประสบการณ์การใช้งานที่ลื่นไหลในทุกอุปกรณ์",
    SmartphoneIcon,
  ],
  [
    "แก้ไข / เพิ่มฟีเจอร์เว็บไซต์",
    "รับแก้ไขบั๊ก เพิ่มฟีเจอร์ใหม่ หรือปรับแต่งเว็บไซต์ที่มีอยู่แล้วให้ตรงตามความต้องการของคุณ",
    BugIcon,
  ],
] as const;

export function Freelance() {
  return (
    <section id="freelance">
      <div className="wrap">

        <SectionHead
          number="05 — Freelance"
          title="Freelance Services"
        />

        <div className="hire-badge">
          <span className="dot" />
          <span className="thai">เปิดรับงานตอนนี้</span>
        </div>

        <div className="accepting-row reveal thai">
          <span className="lbl">รับงาน:</span>
          <span className="pill-lead">UX/UI Design</span>
          <span className="pill">Frontend Development</span>
          <span className="pill">Portfolio Website</span>
          <span className="pill">Redesign เว็บไซต์เดิม</span>
        </div>

        <div className="services-grid">
          {services.map(([title, desc, Icon], i) => (
            <div
              className={`service-card reveal ${
                i ? `d${Math.min(i, 5)}` : ""
              }`}
              key={title}
            >
              <div className="service-icon">
                <Icon />
              </div>

              <h3 className="service-title thai">
                {title}
              </h3>

              <p className="service-desc thai">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal freelance-cta">
          <a className="btn btn-fill thai" href="#contact">
            ติดต่อจ้างงาน <ArrowIcon />
          </a>
        </div>

      </div>
    </section>
  );
}
