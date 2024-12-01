import { Link } from "react-router-dom";
import me from "../assets/me_landscape.jpg";
import CareerExperience from "../Components/CareerExperience";
import Footer from "../UI/Footer";
import { Stacks } from "../UI/HomePreview";
import Navigation from "../UI/Navigation";
export default function About() {
  return (
    <section className="flex relative text-slate-50 justify-start flex-col-reverse md:flex-col lg:flex-row max-h-screen">
      <Navigation />
      <section
        style={{ scrollbarWidth: "none" }}
        className="lg:pt-16 pt-8 w-full border border-dashed h-auto overflow-scroll snap-none"
      >
        <header className="pb-16 px-[5%] lg:px-[10%]">
          <h1 className="text-3xl lg:text-5xl my-2 lg:my-3">About Stephen</h1>
          <p className="lg:text-xl">
            I started developing websites on the 4th of march 2024. This
            followed on from a few months of designing for print and web as a
            graphic designer. Over the years my focus has shifted, now very
            firmly focussing my efforts on digital sustainability. I enjoy
            learning new tools, tech, and methods to make my development the
            best it can be.
          </p>
          <img
            src={me}
            alt="me"
            className="my-16 rounded-lg lg:w-4/5 m-auto lg:scale-105 lg:hover:scale-110 transition-all"
          />
          <div>
            <h2 className="text-3xl lg:text-5xl my-2 lg:my-3 uppercase">Me</h2>
            <p>
              Stephen began his journey in the digital space as a self-taught
              enthusiast, diving deep into the intricacies of design and the
              limitless potential of the web. After attaining his degree in Web
              Development from{" "}
              <a
                href="//www.cr8ivexpats.com/"
                target="_blank"
                className="text-red-500"
              >
                Cr8ive Xpats
              </a>
              , he decided to embark on a mission to transform the web, one site
              at a time.
              <br /> <br />
              I’ve loved making things for as long as I can remember, and wrote
              my{" "}
              <Link to="/Projects">
                <span className="text-red-500">first program</span>
              </Link>
              as at march 2024, just two weeks after I started learning Web
              Development.
              <br /> <br />
              His work is a fusion of modern aesthetics and time-honored design
              principles, resulting in websites that are not just platforms but
              experiences. With a firm belief that a website is the digital face
              of a brand, Stephen takes great pride in ensuring every site
              reflects the unique story and essence of its owner.
              <br /> <br />
              Clients praise Stephen for his unwavering commitment to quality,
              his attention to detail, and his ability to translate complex
              ideas into stunning web realities. When he&apos;s not decoding the
              latest design trends or mastering new programming languages, you
              can find Stephen capturing the beauty of the{" "}
              <a
                href="//en.wikipedia.org/wiki/Lagos"
                target="_blank"
                className="text-red-500"
              >
                Lagos City
              </a>{" "}
              through his photography.
              <br />
              <br />
              Choosing Stephen Adewale means choosing a <b>vision</b>, a
              <b>passion</b>, and a commitment to digital excellence. Let&apos;s
              build something beautiful together.
            </p>
          </div>
          <div id="career">
            <h2 className="text-3xl lg:text-5xl mt-8 my-2 lg:my-3 lg:mt-16 uppercase">
              Career
            </h2>
            <p>
              I’m currently working at{" "}
              <a href="#" target="_blank" className="text-red-500">
                PrinZadi
              </a>{" "}
              Printing Press. In my experiences that I&apos;ve been studying and
              working in design. In this years, I focused on designing and
              developing software products. I’ve worked in large design teams as
              well as performed as the sole developer for startups. If you are
              interested to know more, you can find me on{" "}
              <a
                href="//www.linkedin.com/in/codewithstephen/"
                target="_blank"
                className="text-red-500"
              >
                Linkedin
              </a>
              . I’ve also added a summary below.
            </p>
            <section className="mt-8 flex justify-center flex-col items-center gap-8 ">
              <section className="flex flex-col items-center gap-8 lg:w-[90%]">
                <CareerExperience
                  date="Jan 2025 - Present"
                  description="PrintZadi"
                  post="FRONTEND DEVELOPER(LEAD)"
                />
                <CareerExperience
                  date="Mar 2024 - Present"
                  description="Cr8ive Xpats"
                  post="CREATIVE FRONTEND ENGINEER"
                />
              </section>
              <p className="text-center text-sm md:text-base">
                Career experiences before 2024 wasn&apos;t very well-documented
                :)
              </p>
            </section>
          </div>
        </header>
        <Stacks />
        <Footer />
      </section>
    </section>
  );
}
