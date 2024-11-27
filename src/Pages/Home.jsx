import Header from "../UI/Header";
import { Stacks, Thoughts } from "../UI/HomePreview";
export default function Home() {
  return (
    <section
      style={{ scrollbarWidth: "none" }}
      className="lg:py-16 lg:px-[10%] w-full border border-dashed max-h-screen overflow-scroll snap-none"
    >
      <nav className="flex lg:hidden items-center gap-4 py-4 border-y border-dashed px-[5%]">
        <img src="" alt="" className="w-10 h-10 rounded-full bg-slate-50" />
        <div>
          <h3 className="-mb-1">Stephen Adewale</h3>
          <p className="text-sm">Software Developer</p>
        </div>
      </nav>
      <Header />
      <Thoughts />
      <Stacks />
    </section>
  );
}
