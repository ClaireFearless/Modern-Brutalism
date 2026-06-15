"use client";

import { useState } from "react";
import { profile, navLinks } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleInvert = () => {
    document.body.classList.toggle("invert");
  };

  return (
    <>
      <nav>
        <div className="wrap">
          <div className="logo">
            {profile.logo}
            <span>{profile.logoSuffix}</span>
          </div>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <button
              className="invert-btn"
              onClick={toggleInvert}
              title="Toggle invert"
            >
              ●/○
            </button>
            <button
              className="menu-btn"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`overlay ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
