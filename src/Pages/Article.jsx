import Footer from "../UI/Footer";
import Navigation from "../UI/Navigation";

export default function Articles() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row max-h-screen">
      <Navigation />
      <section
        style={{ scrollbarWidth: "none" }}
        className="lg:pt-16 w-full md:border border-dashed max-h-screen overflow-scroll snap-none"
      >
        <header className="mb-8 px-[5%] lg:px-[10%]">
          <h1 className="text-4xl lg:text-5xl my-2 lg:my-3">Articles</h1>
          <p className="lg:text-xl">
            A Selection of ideas and thoughts to inspire, learn, and create.
          </p>
        </header>
        <Footer />
      </section>
    </section>
  );
}
