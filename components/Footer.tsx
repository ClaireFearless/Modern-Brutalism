"use client";

import { footerText } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="wrap">
        <span>{footerText}</span>
        <button className="to-top" aria-label="Back to top" onClick={scrollToTop}>
          ↑
        </button>
      </div>
    </footer>
  );
}
