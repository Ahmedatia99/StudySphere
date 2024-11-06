import { Button } from "./Button/Button.tsx";

export default function CardCourses(probs) {
  return (
    <main>
      <section className="bg-white laptop:p-10 mobile:p-5 text-textcook rounded-xl">
        <div>
          <img src={probs.url} className="w-full" />
        </div>
        <div className="flex justify-between laptop:my-6 mobile:my-3">
          <div className="text-sm">
            <span className="laptop:px-5 mobile:px-2 py-2 border-2 rounded-md laptop:mr-5 mobile:mr-2 laptop:text-sm mobile:text-xs">
              {probs.subj}
            </span>
            <span className="laptop:px-5 mobile:px-2 py-2 border-2 rounded-md laptop:text-sm mobile:text-xs">
              {probs.level}
            </span>
          </div>
          <div>
            <span className="laptop:text-base mobile:text-xs font-medium">
              {probs.user}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="laptop:text-xl  mobile:text-base font-semibold laptop:mb-3 mobile:mb-1">
            {probs.course}
          </h2>
          <p className="laptop:text-base mobile:text-xs laptop:mb-10 mobile:mb-2">
            {probs.description}
          </p>
          <Button
            action="Get it Now"
            variant="greedy"
            paddingname="w-full py-4"
          />
        </div>
      </section>
    </main>
  );
}
