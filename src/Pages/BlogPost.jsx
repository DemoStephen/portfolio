import Footer from "../UI/Footer";

export default function BlogPost() {
  return (
    <>
      <header className="mb-8 px-[5%] lg:px-[10%]">
        <h1 className="text-4xl lg:text-5xl my-2 lg:my-3">Blogs</h1>
        <p className="lg:text-xl">
          A series of posts containing my personal journey through sustainable
          web development. You can expect short-form posts, code snippets and
          tutorials, thought pieces, and occasional news.
        </p>
      </header>
      <Footer />
    </>
  );
}
