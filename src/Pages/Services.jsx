import Footer from "../UI/Footer";
import Navigation from "../UI/Navigation";
import ServicesPreview from "../UI/ServicesPreview";

export default function Services() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row max-h-screen">
      <Navigation />
      <section
        style={{ scrollbarWidth: "none" }}
        className="lg:pt-16 w-full border border-dashed max-h-screen overflow-scroll snap-none"
      >
        <header className="pb-16 px-[5%] lg:px-[10%]">
          <h1 className="text-3xl lg:text-5xl my-2 lg:my-3">Services</h1>
          <p className="lg:text-xl">
            From front-end development to Blending creativity and functionality,
            my services transform ideas into captivating realities. lightweight
            web design to consultancy, I have services to offer everyone and
            every budget.
          </p>
        </header>
        <ServicesPreview />
        <Footer />
      </section>
    </section>
  );
}
