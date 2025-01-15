/* eslint-disable react/prop-types */
export default function Stack({ image, name, about, invert, link }) {
  return (
    <a href={link} target="_blank">
      <div className="flex items-center gap-4 border p-2 md:py-3 lg:py-4 xl:py-5 rounded-lg border-dashed cursor-pointer hover:bg-slate-800">
        <img
          src={image}
          alt={name}
          className={`${invert && "invert"} w-12 h-12 p-1`}
        />
        <div>
          <h4 className="text-xl">{name}</h4>
          <p className="text-sm text-slate-400">{about}</p>
        </div>
      </div>
    </a>
  );
}
