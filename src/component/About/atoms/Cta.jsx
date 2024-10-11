import { Button } from "../../atoms/Button/Button.tsx";
import "./cta/clip.css";
export default function Cta() {
  return (
    <main>
      <section className="container mx-auto mt-14 bg-white flex justify-between items-center p-14 relative z-0 ">
        <div className="">
          <h2 className="text-4xl font-semibold mb-4 text-textcook max-w-2xl leading-snug ">
            <span className="text-morning">Together</span>, let's shape the
            future of digital innovation
          </h2>
          <p className="text-base text-spantext">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <div className="bg-litewhite clip w-64 h-72 relative  scale-150 overflow-hidden">
          <div className="bg-white w-24 h-24 absolute left-1/3 top-1/3"></div>
        </div>
        <Button action="Join Now" varient="primary" paddingname="px-6 py-4" />
      </section>
    </main>
  );
}
