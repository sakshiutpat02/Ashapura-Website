import Icon from "./Icon.jsx";
import { WHATSAPP_URL } from "../data/site.js";

export default function FloatingWhatsapp() {
  return (
    <a
      className="fixed bottom-6 right-6 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-success text-white shadow-2xl transition hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-success/25"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
    >
      <Icon name="chat" className="h-8 w-8" />
    </a>
  );
}
