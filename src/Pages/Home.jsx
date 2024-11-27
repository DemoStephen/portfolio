import Footer from "../UI/Footer";
import Header from "../UI/Header";
import { Stacks, Thoughts } from "../UI/HomePreview";
import Navigation from "../UI/Navigation";
import me from "../assets/me.jpg";
export default function Home() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row h-screen">
      <Navigation />
      <section
        style={{ scrollbarWidth: "none" }}
        className="lg:pt-16 w-full border border-dashed max-h-screen overflow-scroll snap-none"
      >
        <nav className="flex lg:hidden items-center gap-4 py-4 border-y border-dashed px-[5%]">
          <img src={me} alt="" className="w-10 h-10 rounded-full bg-slate-50" />
          <div>
            <h3 className="-mb-1">Stephen Adewale</h3>
            <p className="text-sm">FrontEnd Developer</p>
          </div>
        </nav>
        <Header />
        <Thoughts />
        <Stacks />
        <Footer />
      </section>
    </section>
  );
}
