import { brands } from "../data/site.js";

export default function FeaturedBrands() {
  const loop = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="overflow-hidden bg-soft/70 py-16">
      <div className="container-pad mb-8 text-center">
        <h2 className="font-heading text-2xl font700 text-body">Trusted By Leading Brands</h2>
      </div>
      <div className="marquee overflow-hidden whitespace-nowrap">
        <div className="marquee-track inline-flex animate-marquee items-center gap-14 pr-14">
          {loop.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="brand-text font-heading text-3xl font800 transition duration-300 sm:text-5xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
