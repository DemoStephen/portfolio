import { useForm } from "@formspree/react";
export default function Form() {
  const [state, handleSubmit] = useForm("xeoaoojp");

  if (state.succeeded) {
    return (
      <div className="border border-dashed lg:w-4/5 m-auto p-4 rounded-lg text-center">
        <p>You message is sent successfully. We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
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
            required
          />
        </label>
        <label htmlFor="email" className="w-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full p-4 bg-transparent border rounded-lg outline-none"
            required
          />
        </label>
      </div>
      <textarea
        name="message"
        id="message"
        placeholder="Message"
        className="min-h-40 rounded-lg bg-transparent border p-4"
        required
      ></textarea>
      <button
        type="submit"
        disabled={state.submitting}
        className="border p-4 rounded-lg hover:bg-slate-800"
      >
        Send Message
      </button>
    </form>
  );
}
