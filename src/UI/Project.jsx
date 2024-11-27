import { SeeMoreIcon } from "./SVGs";

/* eslint-disable react/prop-types */
export default function Project({ date, link, title, img, children }) {
  return (
    <section className="border py-8 px-4 md:p-8 flex flex-col md:flex-row justify-start md:text-left text-center border-dashed">
      <p className="md:w-3/6">{date}</p>
      <a href={link} target="_blank">
        <div className="group">
          <img src={img} alt={children} className="w-full my-4 lg:my-0" />
          <div className="mt-4">
            <h5 className="uppercase text-xl flex justify-center md:justify-start items-center gap-2">
              {title}
              <span className="group-hover:block hidden">
                <SeeMoreIcon />
              </span>
            </h5>
            <p>{children}</p>
          </div>
        </div>
      </a>
    </section>
  );
}
