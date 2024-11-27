/* eslint-disable react/prop-types */
export default function Thought({ mobile, title, tagline }) {
  return (
    <div
      className={`border border-dashed py-2 px-4 rounded-lg flex cursor-pointer hover:bg-slate-900 ${
        mobile && "lg:flex hidden"
      } flex-col gap-3`}
    >
      <h3 className="text-xl">{title}</h3>
      <p className="flex gap-2">
        {tagline.map((tag) => {
          return (
            <span
              key={tag}
              className="px-2 py-1 border rounded-2xl hover:bg-slate-800 border-dashed"
            >
              {tag}
            </span>
          );
        })}
        <span className="px-2 py-1 border rounded-2xl hover:bg-slate-800 border-dashed">
          Blog
        </span>
      </p>
    </div>
  );
}
