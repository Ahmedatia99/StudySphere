import { Button } from "./Button/Button.tsx";
import data from "../../data/testimonials.json";
export default function StoryCard() {
  return (
    <main className="grid grid-cols-2 gap-8 laptop:my-14  mobile:my-10 px-4">
      {data.map((card) => {
        return (
          <section key={card.id} className="text-textcook rounded-xl bg-white">
            <div className="p-12 text-lg font-normal">
              <p>{card.description}</p>
            </div>
            <div className="flex justify-between items-center px-12 py-8 border-t-2 border-stroke">
              <div className="flex justify-center items-center">
                <img src={card.image} />
                <span className="font-semibold text-lg ml-4">{card.name}</span>
              </div>
              <Button
                action="Read Full Story"
                variant="greedy"
                paddingname="px-8 py-4 font-medium"
              />
            </div>
          </section>
        );
      })}
    </main>
  );
}
