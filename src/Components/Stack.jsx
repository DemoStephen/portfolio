import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Stack({ image, name, about }) {
  return (
    <Link to="/Stack">
      <div className="flex items-center gap-4 border p-2 rounded-lg border-dashed cursor-pointer hover:bg-slate-900">
        <img src={image} alt={name} className="w-12 h-12 p-1" />
        <div>
          <h4 className="text-xl">{name}</h4>
          <p className="text-sm text-slate-400">{about}</p>
        </div>
      </div>
    </Link>
  );
}
