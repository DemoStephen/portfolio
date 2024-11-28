import Service from "../Components/Service";
import Footer from "../UI/Footer";
import Navigation from "../UI/Navigation";
import img from "../assets/Image/stacks/js.png";

export default function Services() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row h-screen">
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
        <section className="px-[5%] md:px-[10%] grid lg:grid-cols-2 gap-8">
          <Service
            heading="Web Design and Development"
            text="Whether it is adding a new feature to a current website, or a custom website from scratch, then I can help. All my work is tailored to suit the needs of the project. I work in an agile fashion, building websites to cater for the content and the audience they appeal to."
          />
          <Service
            heading="Website performance audits"
            text="I possess extensive knowledge in web design and development and am now offering website performance audits as a service. Through a comprehensive set of tests, I will identify performance improvements to help minimize your website's impact."
          />
          <Service
            heading="Consultation"
            text="Are you in need of advice regarding green website hosting? Need a second opinion about a website build? Whether you need help with writing a brief, scoping a job, or a full low-carbon website redesign strategy, I can assist with my consultation service."
          />
          <section className="border border-dashed p-4 rounded-lg">
            <img src={img} alt="" className="w-16" />
            <header className="my-5">
              <p>See the proof</p>
              <h3 className="text-3xl mb-4">View my work</h3>
              <p>
                I’ve built websites for startups, household names, and
                multinational charities, as well as a number of side projects.
              </p>
            </header>
            <button className="py-3 px-5 rounded-3xl border border-dashed">
              View work
            </button>
          </section>
          <section className="border border-dashed p-4 rounded-lg lg:col-span-2">
            <header className="my-5">
              <h2 className="text-3xl mb-4">
                Let&apos;s build something great
              </h2>
              <p>
                Interested in starting your own website project with me?
                Excellent! I&apos;d love to talk to you about your idea.
              </p>
            </header>
            <button className="py-3 px-5 rounded-3xl border border-dashed">
              Get in touch
            </button>
          </section>
        </section>
        <Footer />
      </section>
    </section>
  );
}
