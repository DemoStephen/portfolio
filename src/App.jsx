import Header from "./UI/Header";
import Navigation from "./UI/Navigation";

function App() {
  return (
    <section className="flex text-slate-50">
      <Navigation />
      <section className="lg:py-16 lg:px-[10%] w-full relative border">
        <nav className="flex lg:hidden items-center gap-4 py-4 border-b sticky top-0 border px-[5%]">
          <img src="" alt="" className="w-10 h-10 rounded-full bg-slate-50" />
          <div>
            <h3 className="-mb-1">Stephen Adewale</h3>
            <p className="text-sm">Software Developer</p>
          </div>
        </nav>
        <Header />
      </section>
    </section>
  );
}

export default App;
