import Icon from "./Icon.jsx";
import { images, store } from "../data/site.js";

const quickLinks = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Shop by Category", "#categories"],
  ["Contact", "#contact"]
];

const footerCategories = [
  "Fruits & Vegetables",
  "Dairy Products",
  "Personal Care",
  "Household Items",
  "Beverages & Snacks"
];

export default function Footer() {
  return (
    <footer className="bg-inverse px-0 pb-12 pt-16 text-white">
      <div className="container-pad grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={"/Ashapura Logo.png"}
            alt="Shree Aashapura Supermarket logo"
            className="mb-6 h-16 w-16 rounded-2xl object-cover"
            width="64"
            height="64"
            loading="lazy"
          />
          <p className="text-sm leading-7 text-white/70">
            Premium quality groceries and home essentials delivered with trust since 1998.
            Your family's favorite Grain Store.
          </p>
          <a
            className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary"
            href="https://www.instagram.com/ashapuramart.in?igsh=cjM2d3MxdHUxM2Q="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <Icon name="instagram" className="h-5 w-5" />
          </a>
        </div>
        <FooterList title="Quick Links" items={quickLinks} linked />
        <FooterList title="Categories" items={footerCategories} />
        <div>
          <h2 className="mb-6 font-heading text-lg font800 text-orange-200">Contact Info</h2>
          <ul className="space-y-4 text-sm font600 text-white/70">
            <li className="flex gap-3">
              <Icon name="map" className="h-5 w-5 shrink-0 text-orange-200" />
              {store.location}
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-orange-200" />
              {store.phone}
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="h-5 w-5 shrink-0 text-orange-200" />
              {store.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="container-pad mt-12 border-t border-white/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
          <p>Copyright 2026 Shree Ashapura Grain Store. All rights reserved.</p>
          <div className="flex gap-6">           
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items, linked = false }) {
  return (
    <div>
      <h2 className="mb-6 font-heading text-lg font800 text-orange-200">{title}</h2>
      <ul className="space-y-4 text-sm font600 text-white/70">
        {items.map((item) => {
          const label = linked ? item[0] : item;
          const href = linked ? item[1] : "#categories";
          return (
            <li key={label}>
              <a href={href} className="transition hover:text-orange-200">
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
