import Icon from "./Icon.jsx";
import { store } from "../data/site.js";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3768.4376770945537!2d72.8803091!3d19.1760767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b79e676e66d3%3A0x7a46563a9a39532f!2sShree%20Ashapura%20Grain%20Store!5e0!3m2!1sen!2sin!4v1781098141810!5m2!1sen!2sin";

export default function LocationSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <div className="flex min-h-[500px] flex-col overflow-hidden rounded-3xl bg-white shadow-soft lg:flex-row">
          <div className="min-h-[360px] w-full bg-soft lg:w-2/3">
            <iframe
              title="Shree Aashapura Grain Store location map"
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
              href="https://maps.app.goo.gl/MKEh8HbP4n7EPcfw7"
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
