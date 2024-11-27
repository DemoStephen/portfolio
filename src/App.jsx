import Home from "./Pages/Home";
import Navigation from "./UI/Navigation";

function App() {
  return (
    <section className="flex relative text-slate-50 justify-start  flex-col-reverse md:flex-col lg:flex-row h-screen">
      <Navigation />
      <Home />
    </section>
  );
}

export default App;
