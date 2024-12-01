/* eslint-disable react/prop-types */
export default function CareerExperience({ date, description, post }) {
  return (
    <div className="flex gap-2 md:gap-8 flex-col md:flex-row">
      <p className="text-sm lg:w-1/5">{date}</p>
      <div>
        <h4 className="uppercase font-semibold text-xl">{description}</h4>
        <p className="text-blue-500">{post}</p>
        <p>
          {" "}
          I worked/works as a frontend developer with the responsibility of
          building, maintaining and managing the websites with a team of
          Creative developers.
        </p>
      </div>
    </div>
  );
}
