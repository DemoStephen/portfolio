import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function List({
  icon,
  tagline,
  index,
  href,
  sideBarWidth,
  view,
  hide,
}) {
  return (
    <>
      {href ? (
        <a href={href} target="_black">
          <li
            className={`w-full lg:w-auto p-2 lg:p-3 flex justify-center border-dashed ${
              sideBarWidth ? "" : "lg:justify-between"
            } items-center content-center hover:text-slate-50 border hover:border-slate-700 hover:bg-gray-800 transition-all cursor-pointer`}
          >
            {sideBarWidth ? (
              <p className="flex items-center content-center gap-0.5 lg:gap-2 flex-col lg:flex-row">
                <span>{icon}</span>
              </p>
            ) : (
              <>
                <p className="flex items-center content-center gap-0.5 lg:gap-2 flex-col lg:flex-row">
                  <span>{icon}</span>
                  <span className="text-xs lg:text-base">{tagline}</span>
                </p>
                <span className="hidden w-6 xl:w-7 justify-center lg:flex border border-slate-500 rounded-md">
                  {index}
                </span>
              </>
            )}
          </li>
        </a>
      ) : (
        <li
          className={`flex justify-center lg:block w-full border lg:w-auto hover:border-slate-700 hover:bg-gray-800 transition-all cursor-pointer hover:text-slate-50 ${
            !view ? "flex" : "lg:hidden"
          } ${hide ? "hidden md:flex" : ""}`}
        >
          <Link to={`/${tagline}`}>
            <button
              className={`w-full items-center content-center p-2 lg:p-3 justify-center border-dashed ${
                !view ? "flex" : "lg:hidden"
              } ${sideBarWidth ? "" : "lg:justify-between"}`}
            >
              {sideBarWidth ? (
                <p className="flex items-center content-center gap-0.5 lg:gap-2 flex-col lg:flex-row">
                  <span>{icon}</span>
                </p>
              ) : (
                <>
                  <p className="flex items-center content-center gap-0.5 lg:gap-2 flex-col lg:flex-row">
                    <span>{icon}</span>
                    <span className="text-xs lg:text-base">{tagline}</span>
                  </p>
                  <span className="hidden w-6 xl:w-7 justify-center lg:flex border border-slate-500 rounded-md">
                    {index}
                  </span>
                </>
              )}
            </button>
          </Link>
        </li>
      )}
    </>
  );
}
