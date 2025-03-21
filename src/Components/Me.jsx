/* eslint-disable react/prop-types */
import me from "../assets/me.jpg";
export default function Me({ sideBarWidth }) {
  return (
    <div className="hidden lg:flex items-center gap-4 justify-center lg:justify-start p-2">
      <img
        src={me}
        alt="This is me"
        className="w-10 h-10 rounded-full bg-slate-50"
      />
      <div className={sideBarWidth ? "w-0 hidden" : "w-auto"}>
        <h3 className="-mb-1">Stephen Adewale</h3>
        <p className="text-sm">FrontEnd Developer</p>
      </div>
    </div>
  );
}
