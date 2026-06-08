import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { WHATSAPP_URL, images, store } from "../data/site.js";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Categories", "#categories"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "py-2 shadow-nav" : "py-4 shadow-sm"
      }`}
    >
      <nav className="container-pad flex items-center justify-between gap-4">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Go to home">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-cream ring-1 ring-line">
            <img
              src="/Ashapura Logo.png"
              alt="Shree Aashapura Supermarket"
              className="h-full w-full object-contain"
              width="48"
              height="48"
            />
          </span>
          <span className="hidden font-heading text-xl font800 text-primary lg:block">
            {store.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              className={`border-b-2 pb-1 text-sm font700 transition ${
                index === 0
                  ? "border-primary text-primary"
                  : "border-transparent text-body hover:border-primary/30 hover:text-primary"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-heading text-xs font700 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-primary/25 sm:px-6 sm:text-sm"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="chat" className="h-6 w-6" />
          <span className="hidden sm:inline">Order on WhatsApp</span>
          <span className="sm:hidden">Order</span>
        </a>
      </nav>
    </header>
  );
}
