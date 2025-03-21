import Form from "../UI/Form";
import StayInTouch from "../UI/StayInTouch";
import { Copy } from "../UI/SVGs";

export default function ContactPage() {
  return (
    <>
      <header className="mb-8 px-[5%] lg:px-[10%]">
        <h1 className="text-4xl lg:text-5xl my-2 lg:my-3">Contact</h1>
        <p className="lg:text-xl">
          Whether it is a website project, low-carbon initiative, podcast
          appearance, or a digital sustainability-related question, I’d love to
          chat.
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

    </>
  );
}
