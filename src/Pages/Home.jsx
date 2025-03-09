import Footer from "../UI/Footer";
import Header from "../UI/Header";
import { Stacks, Thoughts } from "../UI/HomePreview";
import me from "../assets/me.jpg";
export default function Home() {
  return (
    <>
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
    </>
  );
}
