import { SlEnergy } from "react-icons/sl";
import { Button } from "../atoms/Button/Button.tsx";

export default function Header() {
  return (
    <main className="tablet:container mobile:w-full  mx-auto  flex items-center laptop:pt-20 mobile:pt-16 rounded-xl px-5">
      <section className="flex flex-col w-full items-center">
        <div className="bg-white tablet:px-5 teblet:py-4 mobile:px-3 mobile:py-2 flex  justify-center items-center text-5xl font-semibold rounded-lg relative">
          <div className="tablet:p-4 mobile:p-2 rounded-lg tablet:mr-3 mobile:mr-2 bg-liteorange">
            <SlEnergy className="mobile:w-6 mobile:h-6" />
          </div>
          <h2 className="shaow">
            <img
              src="./images/Abstract Line.svg"
              className="absolute -top-8 -left-8  "
            />
            <h4 className="laptop:text-6xl tablet:text-4xl mobile:text-base">
              <span className="text-morning">Unlock</span> Your Creative
              Potential
            </h4>
          </h2>
        </div>
        <div className="text-center">
          <p className="laptop:text-4xl tablet:text-3xl mobile:text-lg py-5">
            with Online Design and Development Courses.
          </p>
          <span className="text-textcook tablet:text-xl mobile:text-xs">
            Learn from Industry Experts and Enhance Your Skills.
          </span>
        </div>
        <div className="flex justify-center tablet:pt-16 mobile:pt-10">
          <Button
            variant="primary"
            action="Explore Courses"
            paddingname="laptop:px-5 laptop:py-3 mobile:px-4  mobile:py-2"
          />
          <Button
            variant="second"
            action="View Pricing"
            paddingname="laptop:px-5 laptop:py-3 mobile:px-4 mobile:py-2 text-textcook"
          />
        </div>
      </section>
    </main>
  );
}
