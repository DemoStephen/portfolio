import Footer from "../UI/Footer";
import ServicesPreview from "../UI/ServicesPreview";

export default function Services() {
  return (
    <>
      <header className="pb-16 px-[5%] lg:px-[10%]">
        <h1 className="text-4xl lg:text-5xl my-2 lg:my-3">Services</h1>
        <p className="lg:text-xl">
          From front-end development to Blending creativity and functionality,
          my services transform ideas into captivating realities. lightweight
          web design to consultancy, I have services to offer everyone and every
          budget.
        </p>
      </header>
      <ServicesPreview />
      <Footer />
    </>
  );
}
