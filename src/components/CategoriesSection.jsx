import { categories } from "../data/site.js";

export default function CategoriesSection() {
  return (
    <section id="categories" className="section-pad bg-cream">
      <div className="container-pad text-center">
        <h2 className="font-heading text-3xl font800 text-ink sm:text-[32px]">Shop By Category</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-body">
          Browse through our wide range of categories designed to make your grocery
          shopping seamless.
        </p>
      </div>
      <div className="container-pad mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {categories.map((category) => (
          <article key={category.title} className="group cursor-pointer">
            <div className="card p-5 text-center hover:-translate-y-2 hover:shadow-hover sm:p-6">
              <div
                className={`mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full ${category.tone}`}
              >
                <img
                  src={category.image}
                  alt={`${category.title} category`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  width="160"
                  height="160"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font700 text-ink">{category.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
