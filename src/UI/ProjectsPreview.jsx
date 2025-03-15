import Project from "../UI/Project";
import conference from "../assets/Project/Intermediate/conference-ticket-generator-website-desktop.png";
import spaceTourism from "../assets/Project/Intermediate/space-tourism-website-desktop.png";
import productPage from "../assets/Project/Intermediate/product-list-with-cart-desktop.png";
import ubuntuMart from "../assets/Project/Intermediate/ubuntu-mart-desktop.png";
import calculator from "../assets/Project/Intermediate/calculator-app-desktop.png";
import mortgage from "../assets/Project/Intermediate/mortgage-repayment-calculator-app-desktop.png";
import crypto from "../assets/Project/Intermediate/crypto-landing-page-desktop.png";
export default function ProjectPreview() {
  return (
    <section className="px-[5%] md:px-[10%]">
      <Project
        date="December 2024"
        link="//conference-ticket-generator-pink.vercel.app/"
        title="Conference Ticket Generator"
        img={conference}
      >
        A conference ticket generator website that enables event organizers to
        create customizable, secure digital and printable tickets with attendee
        details and seamless distribution through email.
      </Project>
      <Project
        date="November 2024"
        link="//codewithstephenspace-tourism.vercel.app/"
        title="Space Tourism"
        img={spaceTourism}
      >
        This website showcases luxurious interstellar travel packages, offering
        breathtaking experiences aboard state-of-the-art spacecraft with
        stunning visuals, user-friendly booking options, and detailed
        itineraries for adventurous travelers.
      </Project>
      <Project
        date="October 2024"
        link="//demostephen.github.io/product-list-with-cart-main/"
        title="Smart Breakfast"
        img={productPage}
      >
        This website features innovative, nutritious breakfast solutions
        tailored to busy lifestyles, showcasing customizable meal plans, quick
        recipes, and smart kitchen gadgets to simplify morning routines and
        boost energy.
      </Project>
      <Project
        date="September 2024"
        link="//ubuntumart.vercel.app/"
        title="Ubuntu Mart"
        img={ubuntuMart}
      >
        UbuntuMart embraces the Caregiver archetype, focusing on nurturing,
        supporting, and improving the well-being of the community. The brand
        reflects compassion and the desire to help others prosper through shared
        commerce and cooperation
      </Project>
      <Project
        date="August 2024"
        link="//calculator-app-eight-wheat.vercel.app/"
        title="Themed Calculator"
        img={calculator}
      >
        This projects offers different themes offers a visually engaging
        interface where users can choose from a variety of aesthetic designs,
        including minimalist, retro, and modern styles, while performing
        calculations with ease and efficiency.
      </Project>
      <Project
        date="July 2024"
        link="//demostephen.github.io/Crypto/"
        title="Crypto Landing Page"
        img={crypto}
      >
        This is a unites and secures a growing ecosystem of specialized
        blockchains called parachains. Apps and services on Polkadot can
        ecosystem of specialized called. Polkadot unites and secures a growing
        ecosystem of specialized blockchains called parachains. Apps and
        services.
      </Project>
      <Project
        date="June 2024"
        link="//calculator-app-eight-wheat.vercel.app/"
        title="Mortgage Calculator"
        img={mortgage}
      >
        My solution provides users with intuitive tools to estimate monthly
        mortgage payments, compare loan options, and understand the impact of
        interest rates, all while offering helpful resources and educational
        content on home financing.
      </Project>

      <p className="text-center my-8">
        Project built before June 2024 wasn&apos;t very well-documented :)
      </p>
    </section>
  );
}
