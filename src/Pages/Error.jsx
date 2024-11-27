import Navigation from "../UI/Navigation";

export default function Error() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row h-screen">
      <Navigation />
      <h1>404 Not Found</h1>
    </section>
  );
}
