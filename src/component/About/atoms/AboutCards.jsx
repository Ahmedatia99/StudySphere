import { PiBackpackFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { BsPuzzleFill } from "react-icons/bs";
import { SiLighthouse } from "react-icons/si";

export default function AboutCards() {
  return (
    <main>
      <section className="grid grid-cols-2 gap-5 mt-14 ">
        <div className="bg-white flex flex-col justify-between items-start p-20 rounded-xl">
          <PiBackpackFill
            className="p-3 bg-liteorange rounded-md text-morning mb-6 border border-stroke"
            size="50px"
          />
          <h2 className="text-xl mb-3 font-medium text-textcook">
            Provide Practical Skills
          </h2>
          <p className="text-base text-spantext">
            We focus on delivering practical skills that are relevant to the
            current industry demands. Our courses are designed to equip learners
            with the knowledge and tools needed to excel in their chosen field.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-between items-start p-20 rounded-xl">
          <FaBook
            className="p-3 bg-liteorange rounded-md text-morning mb-6 border border-stroke"
            size="50px"
          />
          <h2 className="text-xl mb-3 font-medium text-textcook">
            Foster Creative Problem-Solving{" "}
          </h2>
          <p className="text-base text-spantext">
            We encourage creative thinking and problem-solving abilities,
            allowing our students to tackle real-world challenges with
            confidence and innovation.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-between items-start p-20 rounded-xl">
          <BsPuzzleFill
            className="p-3 bg-liteorange rounded-md text-morning mb-6 border border-stroke"
            size="50px"
          />
          <h2 className="text-xl mb-3 font-medium text-textcook">
            Promote Collaboration and Community
          </h2>
          <p className="text-base text-spantext">
            We believe in the power of collaboration and peer learning. Our
            platform fosters a supportive and inclusive community where learners
            can connect, share insights, and grow together.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-between items-start p-20 rounded-xl">
          <SiLighthouse
            className="p-3 bg-liteorange rounded-md text-morning mb-6 border border-stroke"
            size="50px"
          />
          <h2 className="text-xl mb-3 font-medium text-textcook">
            Stay Ahead of the Curve{" "}
          </h2>
          <p className="text-base text-spantext">
            The digital landscape is constantly evolving, and we strive to stay
            at the forefront of industry trends. We regularly update our course
            content to ensure our students receive the latest knowledge .
          </p>
        </div>
      </section>
    </main>
  );
}
