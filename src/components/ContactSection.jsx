import { useState } from "react";
import Icon from "./Icon.jsx";
import { store } from "../data/site.js";
export default function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-pad max-w-4xl mx-auto">
          <div className="card p-10 sm:p-14 text-center">
          <p className="text-sm font800 uppercase tracking-[0.3em] text-primary">
          Bulk Orders
          </p>
          <h3 className="mt-4 font-heading text-4xl leading-tight text-ink">
          Need Supplies For Events Or Businesses?
          </h3>
          <p className="mt-6 text-body leading-7">
          From housing societies and offices to family functions and special occasions, we provide bulk quantities of groceries, grains, pulses, spices and household essentials at competitive prices.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
          href={`tel:${store.phone}`}
          className="rounded-2xl bg-primary px-8 py-4 font800 text-white"
          >
          CALL FOR BULK ORDERS
          </a>
          <a
          href="https://g.page/r/CS9TOZo6VkZ6EBE/review"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-line px-8 py-4 font800 text-ink transition hover:border-primary hover:text-primary"
          >
          LEAVE US A REVIEW
          </a>
          </div>
          </div>
        </div>
    </section>
  );
}