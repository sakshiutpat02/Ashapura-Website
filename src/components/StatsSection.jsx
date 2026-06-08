const stats = [
  ["5000+", "Happy Customers"],
  ["1000+", "Quality Products"],
  ["Fresh", "Stock Daily"],
  ["Trusted", "Local Supermarket"]
];

export default function StatsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container-pad grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
        {stats.map(([value, label]) => (
          <div key={label} className="card p-6 text-center hover:-translate-y-1 hover:shadow-hover sm:p-8">
            <div className="font-heading text-2xl font800 text-primary sm:text-3xl">{value}</div>
            <div className="mt-2 text-sm font700 text-body">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
