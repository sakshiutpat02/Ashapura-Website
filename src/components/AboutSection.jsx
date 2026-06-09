import Icon from "./Icon.jsx";
import { images } from "../data/site.js";

const features = [
  ["basket", "Fresh Products", "Sourced directly from farms daily.", "border-primary text-primary"],
  ["card", "Affordable", "Competitive prices on all essentials.", "border-secondary text-secondary"],
  ["grid", "Wide Selection", "All your favorite brands in one place.", "border-amber text-amber"],
  ["smile", "Convenient", "Hassle-free shopping experience.", "border-ink text-ink"]
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-pad grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <img
            src={"/About Section.png"}
            alt="Organized Grain Store aisle with fresh products and warm lighting"
            className="h-[360px] w-full rounded-3xl object-cover shadow-soft sm:h-[500px]"
            width="640"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="font700 text-sm uppercase tracking-[0.22em] text-primary">Our Story</p>
          <h2 className="mt-2 font-heading text-3xl font800 leading-tight text-ink sm:text-[32px]">
            About Shree Aashapura Grain Store
          </h2>
          <p className="mt-6 text-base leading-7 text-body">
            We believe that shopping for your family should be an experience of trust and
            freshness. For over two decades, we have been serving our community with the
            highest standards of quality, ensuring that every product on our shelves meets
            your family's needs.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map(([icon, title, text, color]) => (
              <div key={title} className={`card border-l-4 ${color} p-6 hover:-translate-y-1`}>
                <Icon name={icon} className="mb-3 h-6 w-6" />
                <h3 className="font-heading text-base font800 text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
