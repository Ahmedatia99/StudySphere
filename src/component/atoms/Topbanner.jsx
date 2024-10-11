import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Topbannekr() {
  return (
    <main className="container mx-auto">
      <div className="flex justify-center items-center bg-morning mt-5 py-4 text-white rounded-lg ">
        <h2 className="text-base lg:text-base sm:text-sm">
          {" "}
          Free Courses 🌟 Sale Ends Soon, Get It Now{" "}
        </h2>
        <Link
          to="./pricing"
          className="relative transition-all hover:left-1 hover:transition-all p-0 ml-5"
        >
          <GoArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </main>
  );
}
