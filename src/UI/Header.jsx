import { Copy } from "./SVGs";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="lg:pl-[10%] lg:pr-[15%] lg:w-4/5 text-left px-[5%] py-16 lg:py-0">
      <h1 className="text-3xl lg:text-5xl my-2 lg:my-3">
        Hey, I&apos;m Stephen a sustainable web developer for purpose-led brands
      </h1>
      <p className="lg:text-xl lg:w-4/5">
        Based in Nigeria, I create efficient, low-carbon websites from scratch
        for businesses around the world.
      </p>
      <div className="flex gap-4 mt-8">
        <Link to="/About">
          <button className="border-dashed px-8 py-3 rounded-lg bg-slate-800 border">
            About
          </button>
        </Link>
        <a href="mailto:adewalestephennifemi@gmail.com">
          <button className="border-dashed px-8 py-3 rounded-lg border flex items-center gap-2">
            <Copy /> E-Mail
          </button>
        </a>
      </div>
    </header>
  );
}
