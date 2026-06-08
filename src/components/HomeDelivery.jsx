import Icon from "./Icon.jsx";
import { WHATSAPP_URL, images, store } from "../data/site.js";

export default function HomeDelivery() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-pad flex flex-col items-center gap-14 lg:flex-row lg:gap-16">
        <div className="lg:w-1/2">
          <img
            src={"/Home Delivery.png"}
            alt="Grocery delivery bag prepared for home delivery"
            className="mx-auto w-full max-w-lg rounded-3xl object-cover shadow-soft"
            width="560"
            height="430"
            loading="lazy"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="font700 text-sm uppercase tracking-[0.22em] text-secondary">
            Convenience at your doorstep
          </p>
          <h2 className="mt-4 font-heading text-4xl font800 leading-tight text-ink sm:text-5xl">
            Order From Home <br />
            No Long Queues!
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-body">
            Why wait in line when you can simply text us? Get your favorite groceries
            delivered fresh within 2 hours. Just send us your list on WhatsApp!
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center justify-center gap-3 rounded-3xl bg-success px-7 py-4 font-heading text-sm font700 text-white shadow-soft transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-success/25"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="chat" className="h-5 w-5" />
              Order Now On WhatsApp
            </a>
            <a
              className="inline-flex items-center justify-center gap-3 rounded-3xl bg-inverse px-7 py-4 font-heading text-sm font700 text-white transition hover:-translate-y-0.5 hover:bg-ink focus:outline-none focus:ring-4 focus:ring-ink/20"
              href={`tel:${store.phone.replace(/\s/g, "")}`}
            >
              <Icon name="phone" className="h-5 w-5" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
