import { Button } from "../../atoms/Button/Button.tsx";
import "./cta/clip.css";
export default function Cta() {
  return (
    <main>
      <section className="md:container mx-auto mt-14 bg-white flex justify-between items-center md:p-14 mobile:p-2 relative z-0 mobile:rounded-xl">
        <div>
          <h2 className="md:text-4xl mobile:text-lg font-semibold mb-4 text-textcook max-w-2xl leading-snug ">
            <span className="text-morning mobile:font-extrabold">Together</span>, let&apos;s shape the
            future of digital innovation
          </h2>
          <p className="md:text-base mobile:text-xs text-spantext">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <div className="bg-litewhite clip w-64 h-72 relative  md:scale-150 overflow-hidden">
          <div className="bg-white md:w-24 md:h-24 absolute left-1/3 top-1/3"></div>
        </div>
        <Button action="Join Now" varient="primary" paddingname="md:px-6 md:py-4 mobile:p-2 text-xs mobile:mr-0" />
      </section>
    </main>
  );
}
