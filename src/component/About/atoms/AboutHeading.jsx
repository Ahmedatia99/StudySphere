import AboutCards from "./AboutCards";
import { FaCrown } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { FaMasksTheater } from "react-icons/fa6";
import { GiBoltShield } from "react-icons/gi";
import AboutTitle from "./AboutTitle";
export default function AboutHeading() {
  return (
    <main>
      <AboutTitle
        head="Achievements"
        info="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
      />
      <section className="grid md:grid-cols-2 gap-5 mt-14 mb-24">
        <div className="bg-white flex flex-col justify-between items-start lg:p-20 md:p-10 mobile:p-5 rounded-xl">
          <FaCrown
            className="p-3 bg-liteorange rounded-md text-morning mb-6 border border-stroke"
            size="50px"
          />
          <h2 className="text-xl mb-3 font-medium text-textcook">
            Trusted by Thousands
          </h2>
          <p className="text-base text-spantext">
            We have successfully served thousands of students, helping them
            unlock their potential and achieve their career goals.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-between items-start lg:p-20 md:p-10 mobile:p-5  rounded-xl">
          <FaMedal
            className="p-3 bg-liteorange rounded-md text-morning mb-6 border border-stroke"
            size="50px"
          />
          <h2 className="text-xl mb-3 font-medium text-textcook">
            Award-Winning Courses
          </h2>
          <p className="text-base text-spantext">
            Our courses have received recognition and accolades in the industry
            for their quality, depth of content, and effective teaching
            methodologies.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-between items-start lg:p-20 md:p-10 mobile:p-5  rounded-xl">
          <FaMasksTheater
            className="p-3 bg-liteorange rounded-md text-morning mb-6 border border-stroke"
            size="50px"
          />
          <h2 className="text-xl mb-3 font-medium text-textcook">
            Positive Student Feedback{" "}
          </h2>
          <p className="text-base text-spantext">
            We take pride in the positive feedback we receive from our students,
            who appreciate the practicality and relevance of our course
            materials.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-between items-start lg:p-20 md:p-10 mobile:p-5  rounded-xl">
          <GiBoltShield
            className="p-3 bg-liteorange rounded-md text-morning mb-6 border border-stroke"
            size="50px"
          />
          <h2 className="text-xl mb-3 font-medium text-textcook">
            Trusted by Thousands
          </h2>
          <p className="text-base text-spantext">
            We have successfully served thousands of students, helping them
            unlock their potential and achieve their career goals.
          </p>
        </div>
      </section>
      <AboutTitle
        head="Our Goals"
        info="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.Through our carefully crafted courses, we aim to"
      />
      <AboutCards />
    </main>
  );
}
