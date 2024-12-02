import TechStack from "../UI/TechStack";
import { STACKS } from "../util";
export default function TechStacksPreview() {
  return (
    <section className="flex flex-col gap-8 px-[5%] lg:px-[10%]">
      {STACKS.map((stack) => {
        return (
          <TechStack
            key={stack.title}
            title={stack.title}
            stack={stack.stack}
          />
        );
      })}
    </section>
  );
}
