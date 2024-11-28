import { useEffect, useState } from "react";

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
        (hours === 22 && minutes >= 30) ||
        hours > 22 ||
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
    <footer className="border mt-8 border-dashed lg:px-[10%] px-[5%] py-12 lg:py-16 flex items-center justify-between bg-slate-950 md:sticky bottom-0">
      <div>
        <p>
          Currently{" "}
          {message ? <span>🧑🏼&zwj;💻 Working </span> : <span>💤 Sleeping</span>}{" "}
        </p>
        <button className="py-2 lg:py-4 text-xl">Reach out</button>
      </div>

      <div className="text-3xl md:text-6xl">{time}</div>
    </footer>
  );
}
