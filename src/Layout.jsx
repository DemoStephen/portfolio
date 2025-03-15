import { Outlet } from "react-router-dom";
import Navigation from "./UI/Navigation";
import me from "./assets/me.jpg";
import Footer from "./UI/Footer";
export default function Layout() {
  return (
    <>
      <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row max-h-screen">
        <Navigation />
        <main
          style={{ scrollbarWidth: "none" }}
          className="lg:pt-16 w-full md:border border-dashed max-h-screen overflow-scroll snap-none"
        >
          <nav className="flex lg:hidden sticky top-0 bg-slate-900 items-center gap-4 py-4 border-y border-dashed px-[5%] z-50">
            <img
              src={me}
              alt=""
              className="w-10 h-10 rounded-full bg-slate-50"
            />
            <div>
              <h3 className="-mb-1">Stephen Adewale</h3>
              <p className="text-sm">FrontEnd Developer</p>
            </div>
          </nav>
          <Outlet />
          <Footer />
        </main>
      </section>
    </>
  );
}
