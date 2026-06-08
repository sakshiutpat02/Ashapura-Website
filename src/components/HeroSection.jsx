import Icon from "./Icon.jsx";
import { images } from "../data/site.js";

const trustItems = [
  ["leaf", "Fresh Products"],
  ["card", "Affordable Price"],
  ["grid", "Wide Selection"],
  ["smile", "Friendly Service"]
];

export default function HeroSection() {
  return (
    <section id="home" className="overflow-hidden bg-cream py-16 lg:min-h-[700px] lg:py-20">
      <div className="container-pad grid items-center gap-12 lg:grid-cols-2">
        <div className="relative z-10">
          <h1 className="font-heading text-4xl font800 leading-tight text-ink sm:text-5xl lg:text-[48px] lg:leading-[1.16]">
            Smart Shopping <br />
            <span className="text-primary">Everyday.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-body">
            Discover the freshest groceries and premium household essentials at Shree
            Ashapura Supermarket. Your trusted local partner for quality and value since
            1998.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#categories" className="btn-primary">
              Explore Categories
            </a>
            <a href="#contact" className="btn-outline">
              Contact Us
            </a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
            {trustItems.map(([icon, label]) => (
              <div key={label} className="flex items-center gap-3 text-sm font700 text-ink">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <Icon name={icon} className="h-5 w-5" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-8 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <img
            src={images.hero}
            alt="Fresh supermarket basket filled with colorful fruits and vegetables"
            className="relative aspect-[4/3] w-full rotate-2 rounded-3xl object-cover shadow-2xl transition duration-500 hover:rotate-0"
            width="720"
            height="540"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
