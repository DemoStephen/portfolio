import Footer from "../UI/Footer";
import Navigation from "../UI/Navigation";
import ProjectPreview from "../UI/ProjectsPreview";
export default function Projects() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row max-h-screen">
      <Navigation />
      <section
        style={{ scrollbarWidth: "none" }}
        className="lg:pt-16 pt-8 w-full border border-dashed h-auto overflow-scroll snap-none"
      >
        <header className="pb-16 px-[5%] md:px-[10%]">
          <h2 className="text-4xl lg:text-5xl my-2 lg:my-3">Projects</h2>
          <p className="lg:text-xl">
            Currently, I’m focused on{" "}
            <span className="bg-slate-300 px-2 p-0.5 rounded-md">
              <a href="#" target="_blank" className="text-red-500">
                PrinZadi
              </a>
            </span>
            . Before that, I worked on a few personal coding projects, freelance
            and in-house design jobs. Between early 2024 and early 2025 I worked
            on a variety of creative projects.
          </p>
        </header>
        <ProjectPreview />
        <Footer />
      </section>
    </section>
  );
}
