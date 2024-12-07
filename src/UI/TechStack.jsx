/* eslint-disable react/prop-types */
import Stack from "../Components/Stack";
export default function TechStack({ title, stack }) {
  return (
    <section className="border p-4 border-dashed rounded-lg">
      <h2 className="text-2xl lg:text-3xl mb-4">{title}</h2>
      <section>
        <div className="grid md:grid-cols-2 gap-5">
          {stack.map((info) => {
            return (
              <Stack
                key={info.name}
                image={info.image}
                name={info.name}
                invert={info.name === "Github"}
                about={info.about}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
}
