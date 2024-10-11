import { SlEnergy } from "react-icons/sl";
import { Button } from "../atoms/Button/Button.tsx";

export default function Header() {
  return (
    <main className="container flex justify-center pt-20 mx-auto rounded-xl">
      <section className="flex flex-col justify-center items-center">
        <div className="bg-white px-8 py-4 flex  justify-center items-center text-5xl font-semibold rounded-lg relative">
          <div className="p-4 rounded-lg mr-3 bg-liteorange">
            <SlEnergy className="w-10 h-8" />
          </div>
          <h2 className="shaow">
            <img
              src="./images/Abstract Line.svg"
              className="absolute -top-8 -left-10"
            />
            <span className="text-morning">Unlock</span> Your Creative Potential
          </h2>
        </div>
        <div className="text-center">
          <p className="text-4xl py-5">
            with Online Design and Development Courses.
          </p>
          <span className="">
            Learn from Industry Experts and Enhance Your Skills.
          </span>
        </div>
        <div className="flex justify-center pt-16">
          <Button
            variant="primary"
            action="Explore Courses"
            paddingname="desktop:px-5 desktop:py-3 md:p-2 sm:p-2"
          />
          <Button
            variant="second"
            action="View Pricing"
            paddingname="desktop:px-5 desktop:py-3 md:p-2 sm:p-2 text-textcook"
          />
        </div>
      </section>
    </main>
  );
}
