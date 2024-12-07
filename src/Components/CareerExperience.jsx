/* eslint-disable react/prop-types */
export default function CareerExperience({ date, description, post, role }) {
  return (
    <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
      <p className="text-sm lg:w-1/5">{date}</p>
      <div className="w-4/5">
        <h4 className="uppercase font-semibold text-xl">{description}</h4>
        <p className="font-bold">{post}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}
