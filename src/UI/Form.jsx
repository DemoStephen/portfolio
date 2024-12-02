export default function Form() {
  return (
    <form
      action="#"
      className="border border-dashed lg:w-4/5 m-auto p-4 rounded-lg flex flex-col gap-4"
    >
      <h2 className="text-2xl">Send a message</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <label htmlFor="name" className="w-full">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full p-4 bg-transparent border rounded-lg outline-none"
          />
        </label>
        <label htmlFor="email" className="w-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full p-4 bg-transparent border rounded-lg outline-none"
          />
        </label>
      </div>
      <textarea
        name="message"
        id="message"
        placeholder="Message"
        className="min-h-40 rounded-lg bg-transparent border p-4"
      ></textarea>
      <button type="submit" className="border p-4 rounded-lg">
        Send Message
      </button>
    </form>
  );
}
