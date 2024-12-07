import { useEffect, useState } from "react";
import { SeeMoreIcon } from "./SVGs";

export default function Footer() {
  const [message, setMessage] = useState(true);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Check if the time is between 10:30 PM and 6:30 AM
      if (
        (hours === 23 && minutes >= 30) ||
        hours > 23 ||
        hours < 6 ||
        (hours === 6 && minutes < 30)
      ) {
        setMessage(false);
      } else {
        setMessage(true);
      }
    };

    checkTime(); // Initial check
    const timer = setInterval(checkTime, 60000); // Check every minute

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <footer className="border mt-8 border-dashed lg:px-[10%] px-[5%] py-12 lg:py-16 flex items-center justify-between bg-slate-900 lg:sticky bottom-0">
      <div>
        <p>
          Currently{" "}
          {message ? <span>🧑🏼&zwj;💻 working </span> : <span>💤 crashed</span>}{" "}
        </p>
        <a href="mailto:adewalestephennifemi@gmail.com">
          <button className="p-2 text-xl flex items-start gap-2 border border-transparent hover:border-slate-50 border-dashed rounded-lg mt-4">
            Reach out
            <SeeMoreIcon />
          </button>
        </a>
      </div>

      <div className="text-3xl md:text-6xl">{time}</div>
    </footer>
  );
}
