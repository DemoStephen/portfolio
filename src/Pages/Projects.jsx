import Project from "../UI/Project";
import spaceTourism from "../assets/Project/Intermediate/space-tourism-website-desktop.png";
import productPage from "../assets/Project/Intermediate/product-list-with-cart-desktop.png";
import ubuntuMart from "../assets/Project/Intermediate/ubuntu-mart-desktop.png";
import calculator from "../assets/Project/Intermediate/calculator-app-desktop.png";
import mortgage from "../assets/Project/Intermediate/mortgage-repayment-calculator-app-desktop.png";
import Footer from "../UI/Footer";
import Navigation from "../UI/Navigation";
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
        <section className="px-[5%] md:px-[10%]">
          <Project
            date="November 2024"
            link="//codewithstephenspace-tourism.vercel.app/"
            title="Space Tourism"
            img={spaceTourism}
          >
            This website showcases luxurious interstellar travel packages,
            offering breathtaking experiences aboard state-of-the-art spacecraft
            with stunning visuals, user-friendly booking options, and detailed
            itineraries for adventurous travelers.
          </Project>
          <Project
            date="October 2024"
            link="//demostephen.github.io/product-list-with-cart-main/"
            title="Smart Breakfast"
            img={productPage}
          >
            This website features innovative, nutritious breakfast solutions
            tailored to busy lifestyles, showcasing customizable meal plans,
            quick recipes, and smart kitchen gadgets to simplify morning
            routines and boost energy.
          </Project>
          <Project
            date="September 2024"
            link="//ubuntumart.vercel.app/"
            title="Ubuntu Mart"
            img={ubuntuMart}
          >
            UbuntuMart embraces the Caregiver archetype, focusing on nurturing,
            supporting, and improving the well-being of the community. The brand
            reflects compassion and the desire to help others prosper through
            shared commerce and cooperation
          </Project>
          <Project
            date="August 2024"
            link="//calculator-app-eight-wheat.vercel.app/"
            title="Themed Calculator"
            img={calculator}
          >
            This projects offers different themes offers a visually engaging
            interface where users can choose from a variety of aesthetic
            designs, including minimalist, retro, and modern styles, while
            performing calculations with ease and efficiency.
          </Project>
          <Project
            date="July 2024"
            link="//calculator-app-eight-wheat.vercel.app/"
            title="Mortgage Calculator"
            img={mortgage}
          >
            My solution provides users with intuitive tools to estimate monthly
            mortgage payments, compare loan options, and understand the impact
            of interest rates, all while offering helpful resources and
            educational content on home financing.
          </Project>
          <p className="text-center my-8">
            Project built before July 2024 wasn&apos;t very well-documented :)
          </p>
        </section>
        <Footer />
      </section>
    </section>
  );
}
