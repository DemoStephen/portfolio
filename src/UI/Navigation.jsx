import { useState } from "react";
import ColapseNavBar from "../Components/ColapseNavBar";
import List from "../Components/List";
import Me from "../Components/Me";
import {
  HomeIcon,
  AboutIcon,
  ProjectsIcon,
  ServicesIcon,
  BlogIcon,
  SeeMoreIcon,
  Twitter,
  GitHub,
  LinkedIn,
  Contact,
} from "./SVGs";
export default function Navigation() {
  const [sideBarWidth, setSidebarWidth] = useState(false);
  function handleSideBarWidth() {
    if (sideBarWidth) {
      setSidebarWidth(false);
    } else {
      setSidebarWidth(true);
    }
  }
  return (
    <nav
      style={{ scrollbarWidth: "none" }}
      className={`flex flex-col justify-between border-dashed font-medium w-full ${
        sideBarWidth ? "lg:w-20" : "lg:w-64 xl:w-72 2xl:w-1/5"
      } px-[5%] py-1 lg:px-2 lg:py-4 h-auto lg:min-h-screen sticky md:top-0 bottom-0 lg:relative border lg:overflow-scroll gap-4 z-50 transition-all`}
    >
      <ColapseNavBar
        handleSideBarWidth={handleSideBarWidth}
        sideBarWidth={sideBarWidth}
      />
      <section className="flex flex-row lg:flex-col lg:gap-4">
        <Me sideBarWidth={sideBarWidth} />
        <ul className="w-full lg:w-auto flex flex-row gap-0.5 md:gap-1 lg:flex-col border-dashed lg:border">
          <List
            sideBarWidth={sideBarWidth}
            icon={<HomeIcon />}
            tagline="Home"
            index="1"
          />
          <List
            sideBarWidth={sideBarWidth}
            icon={<AboutIcon />}
            tagline="About"
            index="2"
          />
          <List
            sideBarWidth={sideBarWidth}
            icon={<ProjectsIcon />}
            tagline="Projects"
            index="3"
          />
          <List
            sideBarWidth={sideBarWidth}
            icon={<ServicesIcon />}
            tagline="Services"
            index="4"
          />
          <List
            sideBarWidth={sideBarWidth}
            icon={<ProjectsIcon />}
            tagline="Stack"
            index="5"
            view="mobile"
          />
          <List
            sideBarWidth={sideBarWidth}
            icon={<Contact />}
            tagline="Contact"
            index="C"
            view="mobile"
          />
          <List
            sideBarWidth={sideBarWidth}
            icon={<BlogIcon />}
            tagline="Blog"
            index="6"
            view="mobile"
            hide="mobile"
          />
          <List
            sideBarWidth={sideBarWidth}
            icon={<AboutIcon />}
            tagline="Articles"
            index="7"
            view="mobile"
            hide="mobile"
          />
        </ul>
        <section className="hidden lg:flex flex-col lg:w-auto lg:border border-dashed">
          {!sideBarWidth && (
            <h3 className="px-4 py-2 lg:py-3 xl:py-4 text-slate-50 uppercase text-xs hidden lg:block">
              Resources
            </h3>
          )}
          <ul className="flex flex-row gap-0.5 md:gap-1 lg:flex-col">
            <List
              sideBarWidth={sideBarWidth}
              icon={<ProjectsIcon />}
              tagline="Stack"
              index="5"
            />
            <List
              sideBarWidth={sideBarWidth}
              icon={<BlogIcon />}
              tagline="Blog"
              index="6"
            />
            <List
              sideBarWidth={sideBarWidth}
              icon={<AboutIcon />}
              tagline="Articles"
              index="7"
            />
          </ul>
        </section>

        <section className="w-2/5 hidden lg:w-auto lg:block border-dashed lg:border">
          {!sideBarWidth && (
            <h3 className="px-4 py-2 lg:py-3 xl:py-4 text-slate-50 uppercase text-xs">
              Stay in touch
            </h3>
          )}

          <ul className="flex flex-col">
            <List
              sideBarWidth={sideBarWidth}
              icon={<Contact />}
              tagline="Contact"
              index="C"
            />
            <List
              sideBarWidth={sideBarWidth}
              icon={<Twitter />}
              tagline="Twitter"
              index={<SeeMoreIcon />}
              href="//x.com/codewithstephen"
            />
            <List
              sideBarWidth={sideBarWidth}
              icon={<GitHub />}
              tagline="GitHub"
              index={<SeeMoreIcon />}
              href="//github.com/DemoStephen"
            />
            <List
              sideBarWidth={sideBarWidth}
              icon={<LinkedIn />}
              tagline="LinkedIn"
              index={<SeeMoreIcon />}
              href="//www.linkedin.com/in/codewithstephen/"
            />
          </ul>
        </section>
      </section>
      {!sideBarWidth && (
        <p className="text-center text-sm text-white font-normal hidden lg:block">
          © 2024 - Present STEPHEN
        </p>
      )}
    </nav>
  );
}
