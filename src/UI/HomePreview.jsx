import Stack from "../Components/Stack";
import Thought from "../Components/Thought";
import react from "../assets/Image/stacks/react.png";
import html from "../assets/Image/stacks/html.png";
import figma from "../assets/Image/stacks/figma.png";
import js from "../assets/Image/stacks/js.png";
import css from "../assets/Image/stacks/css.png";
import tailwind from "../assets/Image/stacks/Tailwind.png";
import { Link } from "react-router-dom";

export function Thoughts() {
  return (
    <section className="lg:w-4/5 lg:mx-[10%] border border-dashed px-[5%] py-[2rem] lg:p-4 lg:rounded-lg lg:mt-8">
      <header>
        <h2 className="text-2xl lg:text-4xl">Thoughts</h2>
        <p>
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </header>
      <section className="mt-4">
        <section className="grid lg:grid-cols-2 gap-4">
          <Thought
            title="Why the super rich are inevitible"
            tagline={["Business & Finance"]}
          />
          <Thought title="Why you need a website?" tagline={["General"]} />
          <Thought
            mobile={true}
            title="How much do we need JavaScript in 2025?"
            tagline={["Website Development"]}
          />
          <Thought
            mobile={true}
            title="Don't get too greedy and don't get too scared."
            tagline={["General"]}
          />
          <Thought
            mobile={true}
            title="How to sell your products"
            tagline={["General", "Business"]}
          />
          <Thought
            title="You need both Soft Skill & Hard Skill"
            tagline={["General"]}
          />
          <span className=" lg:col-span-2">
            <Link to="/Blog">
              <button className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg border border-dashed w-full">
                See more
              </button>
            </Link>
          </span>
        </section>
      </section>
    </section>
  );
}

export function Stacks() {
  return (
    <section className="lg:w-4/5 lg:mx-[10%] border border-dashed px-[5%] py-[2rem] lg:p-4 lg:rounded-lg lg:mt-8">
      <header>
        <h2 className="text-2xl lg:text-4xl">Stacks</h2>
        <p>Software and resources I use on a regular basis.</p>
      </header>
      <section className="mt-4">
        <section className="grid lg:grid-cols-2 gap-4">
          <Stack image={react} name="React" about="JavScript Library" />
          <Stack image={html} name="HTML" about="HyperText Markup Language" />
          <Stack
            image={js}
            name="JavaScript"
            about="Programming language of the Web"
          />
          <Stack image={figma} name="Figma" about="Collaborative design tool" />

          <Stack image={css} name="CSS" about="Cascading Style Sheets" />
          <Stack
            image={tailwind}
            name="Tailwind CSS"
            about="Utility first CSS framework"
          />

          <span className=" lg:col-span-2">
            <Link to="/Stack">
              <button className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg border border-dashed w-full">
                See more
              </button>
            </Link>
          </span>
        </section>
      </section>
    </section>
  );
}
