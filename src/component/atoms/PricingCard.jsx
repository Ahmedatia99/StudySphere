import { Button } from "./Button/Button.tsx";
import { RiCheckFill } from "react-icons/ri";

export default function PricingCard(probs) {
  return (
    <main>
      <section className="labtop:py-10 mobile:py-6 laptop:px-6 mobile:px-4 border-stroke border-2 rounded-xl">
        <div className="flex-col flex items-center">
          <div className="w-full bg-liteorange p-3 rounded-md text-center">
            {" "}
            {probs.plan}
          </div>
          <h2 className="py-12 laptop:text-6xl tablet:text-4xl font-semibold">
            {probs.price} <span className="text-base">/month</span>{" "}
          </h2>
        </div>

        <div className="laptop:p-8 mobile:p-2 pb-0 text-spantext border-stroke border-2 rounded-xl rounded-b-none">
          <h2 className="mb-6 text-textcook text-center laptop:text-xl mobile:text-lg font-medium">
            Available Features
          </h2>
          <div className="flex border-stroke border-2 laptop:p-3 mobile:p-2 mb-5 justify-start items-center rounded-md ">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span className="laptop:text-base mobile:text-xs">
              Access to selected free courses.
            </span>{" "}
          </div>
          <div className="flex border-stroke border-2 laptop:p-3 mobile:p-2 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span className="laptop:text-base mobile:text-xs">
              Limited course materials and resources.
            </span>{" "}
          </div>
          <div className=" flex border-stroke border-2 laptop:p-3 mobile:p-2 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span className="laptop:text-base mobile:text-xs">
              Basic community support.
            </span>{" "}
          </div>
          <div className=" flex border-stroke border-2 laptop:p-3 mobile:p-2 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span className="laptop:text-base mobile:text-xs">
              No certification upon completion.
            </span>{" "}
          </div>
          <div className=" flex border-stroke border-2 laptop:p-3 mobile:p-2 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span className="laptop:text-base mobile:text-xs">
              No certification upon completion.
            </span>{" "}
          </div>
          <div className=" flex border-stroke border-2 laptop:p-3 mobile:p-2 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span className="laptop:text-base mobile:text-xs">
              Ad-supported platform.
            </span>{" "}
          </div>
          <div className=" flex border-stroke border-2 laptop:p-3 mobile:p-2 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span className="laptop:text-base mobile:text-xs">
              Access to exclusive Pro Plan community forums.
            </span>{" "}
          </div>
          <div className=" flex border-stroke border-2 laptop:p-3 mobile:p-2 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span className="laptop:text-base mobile:text-xs">
              Early access to new courses and updates.
            </span>{" "}
          </div>
        </div>
        <div>
          <Button
            action="Get Started"
            variant="primary"
            paddingname="w-full py-5 px-6 rounded-t-none"
          />
        </div>
      </section>
    </main>
  );
}
// <RiCheckFill />
