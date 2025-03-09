import { Outlet } from "react-router-dom";
import Navigation from "./UI/Navigation";

export default function Layout() {
  return (
    <>
      <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row max-h-screen">
        <Navigation />
        <main
          style={{ scrollbarWidth: "none" }}
          className="lg:pt-16 w-full md:border border-dashed max-h-screen overflow-scroll snap-none"
        >
          <Outlet />
        </main>
      </section>
    </>
  );
}
