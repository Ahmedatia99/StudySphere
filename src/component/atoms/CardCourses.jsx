import { Button } from "./Button/Button.tsx";

export default function CardCourses(probs) {
  return (
    <main>
      <section className="bg-white p-10 text-textcook rounded-xl">
        <div>
          <img src={probs.url} className="w-full" />
        </div>
        <div className="flex justify-between my-6">
          <div className="text-sm">
            <span className="px-5 py-2 border-2 rounded-md mr-5">
              {probs.subj}
            </span>
            <span className="p-5 py-2 border-2 rounded-md">{probs.level}</span>
          </div>
          <div>
            <span className="text-base font-medium">{probs.user}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-3">{probs.course}</h2>
          <p className="text-base mb-10">{probs.description}</p>
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
