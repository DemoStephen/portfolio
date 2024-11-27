import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function List({
  icon,
  tagline,
  index,
  href,
  sideBarWidth,
  view,
}) {
  return (
    <>
      {href ? (
        <a href={href} target="_black">
          <li
            className={`w-full lg:w-auto p-2 flex justify-center border-dashed ${
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
                <span className="hidden w-6 justify-center lg:flex border border-slate-500 rounded-md">
                  {index}
                </span>
              </>
            )}
          </li>
        </a>
      ) : (
        <Link to={`/${tagline}`}>
          <li
            className={`border w-full lg:w-auto p-2 ${
              !view ? "flex" : "lg:hidden"
            } justify-center border-dashed ${
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
                <span className="hidden w-6 justify-center lg:flex border border-slate-500 rounded-md">
                  {index}
                </span>
              </>
            )}
          </li>
        </Link>
      )}
    </>
  );
}
