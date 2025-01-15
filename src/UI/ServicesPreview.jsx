import { Link } from "react-router-dom";
import Service from "../Components/Service";
import damn from "../assets/Image/stacks/react.png";
export default function ServicesPreview() {
  return (
    <section className="px-[5%] md:px-[10%] grid lg:grid-cols-2 gap-8">
      <Service
        img={damn}
        heading="Web Design and Development"
        text="Whether it is adding a new feature to a current website, or a custom website from scratch, then I can help. All my work is tailored to suit the needs of the project. I work in an agile fashion, building websites to cater for the content and the audience they appeal to."
      />
      <Service
        img={damn}
        heading="Website performance audits"
        text="I possess extensive knowledge in web design and development and am now offering website performance audits as a service. Through a comprehensive set of tests, I will identify performance improvements to help minimize your website's impact."
      />
      <Service
        img={damn}
        heading="Consultation"
        text="Are you in need of advice regarding green website hosting? Need a second opinion about a website build? Whether you need help with writing a brief, scoping a job, or a full low-carbon website redesign strategy, I can assist with my consultation service."
      />
      <section className="border border-dashed p-4 rounded-lg">
        <img src={damn} alt="illustration" className="w-16" />
        <header className="my-5">
          <p>See the proof</p>
          <h3 className="text-3xl mb-4">View my work</h3>
          <p>
            I’ve built websites for startups, household names, and multinational
            charities, as well as a number of side projects.
          </p>
        </header>
        <Link to="/Projects">
          <button className="py-3 px-5 rounded-3xl border border-dashed">
            View work
          </button>
        </Link>
      </section>
      <section className="border border-dashed p-4 rounded-lg lg:col-span-2">
        <header className="my-5">
          <h2 className="text-3xl mb-4">Let&apos;s build something great</h2>
          <p>
            Interested in starting your own website project with me? Excellent!
            I&apos;d love to talk to you about your idea.
          </p>
        </header>
        <Link to="/Contact">
          <button className="py-3 px-5 rounded-3xl border border-dashed">
            Get in touch
          </button>
        </Link>
      </section>
    </section>
  );
}
