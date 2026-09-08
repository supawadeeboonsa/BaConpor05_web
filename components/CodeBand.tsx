import { ArrowIcon } from "./icons";

export function CodeBand() {
  return <section className="code-band"><div className="wrap code-inner reveal"><div><span className="label">Code &amp; experiments</span>
  <h3 className="code-title serif">Code, Design &amp; Experiments</h3>
  <p className="code-desc">สำรวจผลงานด้านการพัฒนา โปรเจกต์ที่ได้ทดลองทำ และเส้นทางการเรียนรู้ของฉัน</p>
  </div><a className="btn btn-line disabled-link" aria-disabled="true" href="https://github.com/supawadeeboonsa" target="_blank" rel="noopener noreferrer">View GitHub <ArrowIcon/></a>
  </div></section>;
}
