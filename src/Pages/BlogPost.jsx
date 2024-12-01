import Footer from "../UI/Footer";
import Navigation from "../UI/Navigation";

export default function BlogPost() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row max-h-screen">
      <Navigation />
      <section
        style={{ scrollbarWidth: "none" }}
        className="lg:pt-16 w-full border border-dashed max-h-screen overflow-scroll snap-none"
      >
        <header className="mb-8 px-[5%] lg:px-[10%]">
          <h1 className="text-3xl lg:text-5xl my-2 lg:my-3">Blogs</h1>
          <p className="lg:text-xl">
            A series of posts containing my personal journey through sustainable
            web development. You can expect short-form posts, code snippets and
            tutorials, thought pieces, and occasional news.
          </p>
        </header>
        <Footer />
      </section>
    </section>
  );
}
