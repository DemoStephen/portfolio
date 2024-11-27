import Navigation from "../UI/Navigation";

export default function TechStacks() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row h-screen">
      <Navigation />
      <section
        style={{ scrollbarWidth: "none" }}
        className="lg:pt-16 w-full border border-dashed max-h-screen overflow-scroll snap-none"
      >
        Stephen is working on updates
      </section>
    </section>
  );
}