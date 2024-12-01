import Footer from "../UI/Footer";
import Navigation from "../UI/Navigation";
import TechStack from "../UI/TechStack";
import { STACKS } from "../util";

export default function TechStacks() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row max-h-screen">
      <Navigation />
      <section
        style={{ scrollbarWidth: "none" }}
        className="lg:pt-16 w-full border border-dashed max-h-screen overflow-scroll snap-none"
      >
        <header className="mb-8 px-[5%] lg:px-[10%]">
          <h1 className="text-3xl lg:text-5xl my-2 lg:my-3">Stacks</h1>
          <p className="lg:text-xl">
            Tools, resources and software i use daily
          </p>
        </header>
        <section className="flex flex-col gap-8 px-[5%] lg:px-[10%]">
          {STACKS.map((stack) => {
            return (
              <TechStack
                key={stack.title}
                title={stack.title}
                stack={stack.stack}
              />
            );
          })}
        </section>
        <Footer />
      </section>
    </section>
  );
}
