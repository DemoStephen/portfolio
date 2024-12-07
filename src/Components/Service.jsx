/* eslint-disable react/prop-types */
export default function Service({ heading, text, img }) {
  return (
    <section className="border border-dashed p-4 rounded-lg">
      <img src={img} alt="illustration" className="w-16" />
      <header className="my-5">
        <h3 className="text-3xl mb-4">{heading}</h3>
        <p>{text}</p>
      </header>
      <button className="py-3 px-5 rounded-3xl border border-dashed">
        Find out more
      </button>
    </section>
  );
}
