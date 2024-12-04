import { Button } from "../atoms/Button/Button.tsx";
import QAF from "../atoms/QAF";
function Questions() {
  const components = [];

  for (let i = 0; i <= 5; i++) {
    components.push(<QAF key={i} />);
  }

  return (
    <main className=" md:container mx-auto md:p-10 mobile:p-5 bg-white mt-24 text-textcook rounded-xl">
      <div className="flex md:flex-row mobile:flex-col justify-between items-start">
        <section className=" flex flex-col justify-center items-baseline mobile:mb-3">
          <div className="justify-center items-center w-full md:flex mobile:hidden">
            <img src="./images/QAf.svg" alt="ask me" />
          </div>
          <h2 className="text-4xl font-semibold my-5">
            Frequently Asked Questions
          </h2>
          <span className="text-base mb-5 text-spantext">
            Still you have any questions? Contact our Team via
            <br />
            support@skillbridge.com
          </span>
          <Button
            action="See All FAQ’s"
            variant="second"
            paddingname="px-5 py-4 border-2 border-stroke"
          />
        </section>
        {/* QAF */}
        <section>{components}</section>
      </div>
    </main>
  );
}

export default Questions;
