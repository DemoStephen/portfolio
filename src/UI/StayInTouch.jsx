import DownloadButton from "../Components/DownloadButton";
import { LinkedIn, Twitter } from "./SVGs";

export default function StayInTouch() {
  return (
    <section className="mb-8 px-[5%] lg:px-[10%] mt-8 flex items-center justify-between flex-col md:flex-row gap-6">
      <header className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl"> Stay in touch</h3>
        <p>I&apos;m most active on twitter</p>
      </header>
      <div className="flex items-center gap-4">
        <a
          href="https://x.com/codewithstephen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-lg py-3 px-4 border flex items-center gap-2">
            <Twitter /> Twitter
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/codewithstephen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-lg py-3 px-4 border flex items-center gap-2">
            <LinkedIn /> LinkedIn
          </button>
        </a>
        <DownloadButton />
      </div>
    </section>
  );
}
