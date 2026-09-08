"use client";

import { BackgroundGrid } from "../components/BackgroundGrid";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Works } from "../components/Works";
import { Freelance } from "../components/Freelance";
import { CodeBand } from "../components/CodeBand";
import { Contact } from "../components/Contact";
import { ScrollEffects } from "../components/ScrollEffects";
import { ArrowUpIcon } from "../components/icons";

export default function Home() {
  const { active, showTop } = ScrollEffects();
  return <><BackgroundGrid/><Header active={active}/><main><Hero/><About/><Skills/><Works/><Freelance/><CodeBand/><Contact/></main><footer className="wrap"><span>©BaConpor05 2026</span><span className="thai">ออกแบบด้วยความตั้งใจ</span></footer><button className={`to-top ${showTop ? "show" : ""}`} aria-label="เลื่อนขึ้นด้านบน" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}><ArrowUpIcon/></button></>;
}
