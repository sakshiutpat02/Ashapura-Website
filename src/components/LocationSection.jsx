import Icon from "./Icon.jsx";
import { store } from "../data/site.js";

const mapSrc =
  "https://www.google.com/maps?q=Alankar%20Shopping%20Center%20NNP%20Goregaon%20East%20Mumbai%20400065&output=embed";

export default function LocationSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <div className="flex min-h-[500px] flex-col overflow-hidden rounded-3xl bg-white shadow-soft lg:flex-row">
          <div className="min-h-[360px] w-full bg-soft lg:w-2/3">
            <iframe
              title="Shree Aashapura Supermarket location map"
              src={mapSrc}
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <aside className="w-full bg-soft p-7 sm:p-10 lg:w-1/3">
            <h2 className="font-heading text-2xl font800 text-ink">Visit Our Store</h2>
            <div className="mt-7 space-y-6">
              <Info icon="map" text={store.address} />
              <Info icon="clock">
                <p className="font700 text-ink">Store Hours</p>
                <p>{`Mon - Sun: ${store.hours}`}</p>
              </Info>
              <Info icon="card" text="Accepted: Cash, Cards, UPI" />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Alankar%20Shopping%20Center%20NNP%20Goregaon%20East%20Mumbai%20400065"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl border-2 border-primary px-5 py-4 font-heading text-sm font800 text-primary transition hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
              Get Directions
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, text, children }) {
  return (
    <div className="flex gap-4 text-sm leading-6 text-body">
      <Icon name={icon} className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
      <div>{children || <p>{text}</p>}</div>
    </div>
  );
}
