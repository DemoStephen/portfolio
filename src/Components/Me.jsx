/* eslint-disable react/prop-types */
export default function Me({ sideBarWidth }) {
  return (
    <div className="hidden lg:flex items-center gap-4 justify-center lg:justify-start p-2">
      <img src="" alt="" className="w-10 h-10 rounded-full bg-slate-50" />
      {sideBarWidth ? (
        ""
      ) : (
        <div>
          <h3 className="-mb-1">Stephen Adewale</h3>
          <p className="text-sm">Software Developer</p>
        </div>
      )}
    </div>
  );
}
