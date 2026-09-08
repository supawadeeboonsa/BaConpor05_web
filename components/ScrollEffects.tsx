"use client";
import { useEffect, useState } from "react";

const sections = ["home","about","skills","works","freelance","contact"];

export function ScrollEffects() {
  const [active,setActive] = useState("home");
  const [showTop,setShowTop] = useState(false);

  useEffect(() => {
    const grid = document.getElementById("canvasGrid");
    const onScroll = () => { if (grid) grid.style.transform = `translateY(${window.scrollY * 0.04}px)`; setShowTop(window.scrollY > window.innerHeight * 1.1); };
    window.addEventListener("scroll",onScroll,{passive:true}); onScroll();
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("in-view"); revealObserver.unobserve(entry.target); }}),{threshold:.15});
    document.querySelectorAll(".reveal:not(.in-view)").forEach(el=>revealObserver.observe(el));
    const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) setActive(entry.target.id); }),{rootMargin:"-45% 0px -45% 0px",threshold:0});
    sections.forEach(id=>{const el=document.getElementById(id); if(el) sectionObserver.observe(el);});
    return ()=>{window.removeEventListener("scroll",onScroll); revealObserver.disconnect(); sectionObserver.disconnect();};
  },[]);

  return { active, showTop };
}
