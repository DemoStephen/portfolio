import { Copy } from "./SVGs";

export default function Header() {
  return (
    <header className="lg:w-3/5 text-left px-[5%] py-16 lg:py-0 lg:px-0">
      <p className="font-[Homenaje] text-2xl">Stephen Adewale</p>
      <h1 className="text-3xl lg:text-5xl my-2 lg:my-3">
        Sustainable web developer for purpose-led brands
      </h1>
      <p className="lg:text-xl lg:w-4/5">
        Based in Nigeria, I create efficient, low-carbon websites from scratch
        for businesses around the world.
      </p>
      <div className="flex gap-4 mt-8">
        <button className="px-8 py-3 rounded-lg bg-slate-800 border">
          About
        </button>
        <button className="px-8 py-3 rounded-lg border flex items-center gap-2">
          <Copy /> E-Mail
        </button>
      </div>
    </header>
  );
}
