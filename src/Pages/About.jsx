import me from "../assets/me_landscape.jpg";
import { Stacks } from "../UI/HomePreview";
import AboutPreview from "../UI/AboutPreview";
export default function About() {
  return (
    <>
      <header className="pb-16 px-[5%] lg:px-[10%]">
        <h1 className="text-4xl lg:text-5xl my-2 lg:my-3">About Stephen</h1>
        <p className="lg:text-xl">
          I started developing websites on the 4th of march 2024. This followed
          on from a few months of designing for print and web as a graphic
          designer. Over the years my focus has shifted, now very firmly
          focussing my efforts on digital sustainability. I enjoy learning new
          tools, tech, and methods to make my development the best it can be.
        </p>
        <img
          src={me}
          alt="me"
          className="mb-0 mt-16 rounded-lg lg:w-4/5 m-auto lg:scale-105 lg:hover:scale-110 transition-all bg-red-400"
        />
      </header>
      <AboutPreview />
      <Stacks />
    </>
  );
}
