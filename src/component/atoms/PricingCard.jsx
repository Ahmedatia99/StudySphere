import { Button } from "./Button/Button.tsx";
import { RiCheckFill } from "react-icons/ri";

export default function PricingCard(probs) {
  return (
    <main>
      <section className="py-10 px-6 border-stroke border-2 rounded-xl">
        <div className="flex-col flex items-center">
          <div className="w-full bg-liteorange p-3 rounded-md text-center">
            {" "}
            {probs.plan}
          </div>
          <h2 className="py-12  text-6xl font-semibold">
            {probs.price} <span className="text-base">/month</span>{" "}
          </h2>
        </div>

        <div className="p-8 pb-0 text-spantext border-stroke border-2 rounded-xl rounded-b-none">
          <h2 className="mb-6 text-textcook text-center text-xl font-medium">
            Available Features
          </h2>
          <div className=" flex border-stroke border-2 p-3 mb-5 justify-start items-center rounded-md ">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span>Access to selected free courses.</span>{" "}
          </div>
          <div className=" flex border-stroke border-2 p-3 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span>Limited course materials and resources.</span>{" "}
          </div>
          <div className=" flex border-stroke border-2 p-3 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span>Basic community support.</span>{" "}
          </div>
          <div className=" flex border-stroke border-2 p-3 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span>No certification upon completion.</span>{" "}
          </div>
          <div className=" flex border-stroke border-2 p-3 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span>No certification upon completion.</span>{" "}
          </div>
          <div className=" flex border-stroke border-2 p-3 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span>Ad-supported platform.</span>{" "}
          </div>
          <div className=" flex border-stroke border-2 p-3 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span>Access to exclusive Pro Plan community forums.</span>{" "}
          </div>
          <div className=" flex border-stroke border-2 p-3 mb-5 justify-start items-center rounded-md">
            <RiCheckFill
              className="mr-3 p-2 bg-liteorange rounded-md"
              size="32px"
            />{" "}
            <span>Early access to new courses and updates.</span>{" "}
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
