import { Button } from "./Button/Button.tsx";
import data from "../../data/testimonials.json";
export default function StoryCard() {
  return (
    <main className="grid tablet:grid-cols-2 gap-8 laptop:my-14  mobile:my-10 px-4">
      {data.map((card) => {
        return (
          <section key={card.id} className="text-spantext rounded-xl bg-white">
            <div className="laptop:p-12 mobile:p-5 laptop:text-lg mobile:text-sm font-normal">
              <p>{card.description}</p>
            </div>
            <div className="flex justify-between items-center laptop:px-12 mobile:px-3 laptop:py-8 mobile:py-4 border-t-2 border-stroke">
              <div className="flex justify-center items-center">
                <img
                  src={card.image}
                  className="laptop:w-16 laptop:h-16 mobile:w-10 mobile:h-10"
                />
                <span className="font-semibold laptop:text-lg mobile:text-sm  laptop:ml-4 mobile:ml-1">
                  {card.name}
                </span>
              </div>
              <Button
                action="Read Full Story"
                variant="greedy"
                paddingname="tablet:px-8 mobile:px-4 tablet:py-4 mobile:py-3 !mr-0 font-medium"
              />
            </div>
          </section>
        );
      })}
    </main>
  );
}
