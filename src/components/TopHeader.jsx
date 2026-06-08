import Icon from "./Icon.jsx";
import { store } from "../data/site.js";

export default function TopHeader() {
  return (
    <div className="hidden bg-inverse py-2 text-white md:block">
      <div className="container-pad flex items-center justify-between text-sm font-semibold">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Icon name="phone" className="h-4 w-4 text-orange-200" />
            {store.phone}
          </span>
          <span className="flex items-center gap-2">
            <Icon name="clock" className="h-4 w-4 text-orange-200" />
            {store.hours}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-orange-100 transition hover:bg-primary hover:text-white"
            aria-label="Share Shree Aashapura Supermarket"
          >
            <Icon name="share" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
