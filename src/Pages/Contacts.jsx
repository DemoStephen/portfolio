import Footer from "../UI/Footer";
import Form from "../UI/Form";
import Navigation from "../UI/Navigation";
import StayInTouch from "../UI/StayInTouch";
import { Copy } from "../UI/SVGs";

export default function ContactPage() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row max-h-screen">
      <Navigation />
      <section
        style={{ scrollbarWidth: "none" }}
        className="lg:pt-16 w-full md:border border-dashed max-h-screen overflow-scroll snap-none"
      >
        <header className="mb-8 px-[5%] lg:px-[10%]">
          <h1 className="text-4xl lg:text-5xl my-2 lg:my-3">Contact</h1>
          <p className="lg:text-xl">
            Whether it is a website project, low-carbon initiative, podcast
            appearance, or a digital sustainability-related question, I’d love
            to chat.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="border-dashed px-8 py-3 rounded-lg bg-slate-800 border">
              Schedule free call
            </button>
            <a href="mailto:adewalestephennifemi@gmail.com">
              <button className="border-dashed px-8 py-3 rounded-lg border flex items-center gap-2">
                <Copy /> E-Mail
              </button>
            </a>
          </div>
        </header>

        <Form />

        <StayInTouch />

        <Footer />
      </section>
    </section>
  );
}
