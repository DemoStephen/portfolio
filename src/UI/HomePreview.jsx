import Stack from "../Components/Stack";
import Thought from "../Components/Thought";

export function Thoughts() {
  return (
    <section className="border border-dashed px-[5%] py-[2rem] lg:p-4 lg:rounded-lg lg:mt-8">
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
          <Thought title="Why do I need a website?" tagline={["General"]} />
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
          <button className="p-3 bg-slate-900 hover:bg-slate-950 rounded-lg border lg:col-span-2 border-dashed">
            See more
          </button>
        </section>
      </section>
    </section>
  );
}
import react from "../assets/Image/stacks/react.png";
import html from "../assets/Image/stacks/html.png";
import figma from "../assets/Image/stacks/figma.png";
import js from "../assets/Image/stacks/js.png";
import css from "../assets/Image/stacks/css.png";
import tailwind from "../assets/Image/stacks/tailwind.png";
export function Stacks() {
  return (
    <section className="border border-dashed px-[5%] py-[2rem] lg:p-4 lg:rounded-lg lg:mt-8">
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

          <button className="p-3 bg-slate-900 hover:bg-slate-950 rounded-lg border lg:col-span-2 border-dashed">
            See more
          </button>
        </section>
      </section>
    </section>
  );
}
