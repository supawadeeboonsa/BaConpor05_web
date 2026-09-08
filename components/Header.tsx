"use client";
import { useState } from "react";

const sections = ["home", "about", "skills", "works", "freelance", "contact"] as const;

export function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return <header className="nav" id="siteNav">
    <div className="wrap nav-inner">
      <a className="nav-logo" href="#home" onClick={() => setOpen(false)} aria-label="Baipor home">
        <img className="nav-logo-img" src="/images/image-1.jpg" alt="Baipor logo" />
      </a>
      <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
        {sections.map((id) => <a key={id} href={`#${id}`} data-nav={id} className={active === id ? "active" : ""} onClick={() => setOpen(false)}>{id === "about" ? "About" : id[0].toUpperCase() + id.slice(1)}</a>)}
      </nav>
      <div className="nav-actions">
        <a className="btn btn-fill nav-talk" href="#contact" onClick={() => setOpen(false)}>Let's Talk</a>
        <button className={`menu-toggle ${open ? "open" : ""}`} onClick={() => setOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={open}><span/><span/><span/></button>
      </div>
    </div>
  </header>;
}
