import Icon from "./Icon.jsx";

const reasons = [
  ["leaf", "Farm Fresh Quality", "Fresh fruits, vegetables, and daily essentials carefully selected for your family."],
  ["card", "Great Value", "Fair pricing on household staples without compromising quality."],
  ["basket", "Everything Nearby", "A wide local grain store selection under one convenient roof."],
  ["smile", "Friendly Service", "Helpful staff and a warm neighborhood shopping experience."],
  ["clock", "Opens Daily", "Reliable store timings from morning to late evening every day."],
  ["grid", "Easy Shopping", "Can place your order from anywhere now."]
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad text-center">
        <p className="font700 text-sm uppercase tracking-[0.22em] text-secondary">Why Choose Us</p>
        <h2 className="mt-2 font-heading text-3xl font800 text-ink sm:text-[32px]">
          A Better Everyday Grocery Experience
        </h2>
      </div>
      <div className="container-pad mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map(([icon, title, text]) => (
          <article key={title} className="card p-7 hover:-translate-y-1 hover:shadow-hover">
            <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-primary">
              <Icon name={icon} className="h-7 w-7" />
            </span>
            <h3 className="font-heading text-lg font800 text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-body">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
