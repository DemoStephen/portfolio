import Navigation from "../UI/Navigation";

export default function Services() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row h-screen">
      <Navigation />
      <section
        style={{ scrollbarWidth: "none" }}
        className="lg:pt-16 w-full border border-dashed max-h-screen overflow-scroll snap-none"
      >
        <header>
          <h2>Services</h2>
          <p>
            From front-end development to websites built with WordPress;
            lightweight web design to consultancy, I have services to offer
            everyone and every budget.
          </p>
        </header>
      </section>
    </section>
  );
}
