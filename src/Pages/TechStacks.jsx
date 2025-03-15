import TechStacksPreview from "../UI/TechStacksPreview";

export default function TechStacks() {
  return (
    <>
      <header className="mb-8 px-[5%] lg:px-[10%]">
        <h1 className="text-4xl lg:text-5xl my-2 lg:my-3">Stacks</h1>
        <p className="lg:text-xl">Tools, resources and software I use daily</p>
      </header>
      <TechStacksPreview />
    </>
  );
}
