import { ArrowIcon } from "./icons";

export function Hero() {
  return <section className="hero" id="home">
    <div className="wrap hero-grid">
      <div>
        <div className="hero-index reveal"><span className="num">01 — Home</span><span className="rule"/><span className="label">Chiang Mai, Thailand</span></div>
        <h1 className="hero-title serif reveal d1">Hi, I'm Baipor.</h1>
        <p className="hero-role reveal d2">Frontend Developer &amp; UX/UI Designer</p>
        <p className="hero-desc reveal d3">I design and build modern digital experiences that are simple, beautiful and easy to use.</p>
        <p className="hero-thai thai reveal d3">นักออกแบบและนักพัฒนาเว็บไซต์ ที่เชื่อในความเรียบง่ายและใช้งานง่าย</p>
        <div className="reveal d3"><div className="hire-badge"><span className="dot"/><span className="thai">เปิดรับงาน UX/UI Design &amp; Frontend Development</span></div></div>
        <div className="hero-actions reveal d4"><a className="btn btn-fill" href="#works">View My Works <ArrowIcon/></a><a className="btn btn-line thai" href="#freelance">รับงาน</a><a className="btn btn-line" href="#contact">Let's Talk</a></div>
      </div>
      <div className="hero-photo reveal d2"><div className="hero-photo-frame"><img src="/images/image-2.jpg" alt="Baipor Boonsa"/></div></div>
    </div>
  </section>;
}
