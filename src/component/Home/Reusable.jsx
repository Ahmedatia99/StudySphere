import { BsArrowUpRight } from "react-icons/bs";
import data from "../../data/benefits.json";

export default function Reusable() {
  return (
    <main>
      <section className="grid desktopL:grid-cols-3 tablet:grid-cols-3 sm:grid-cols-1 gap-5 text-textcook">
        {data.map((user) => {
          return (
            <section
              className="bg-white rounded-xl laptop:p-10 tablet:p-5 p-5 "
              key={user.id}
            >
              <div className="flex justify-end  laptop:text-6xl tablet:text-5xl mobile:text-5xl font-bold  tablet:mb-5 mobile:mb-7">
                {user.num}
              </div>
              <div className=" laptop:text-xl tablet:text-base font-semibold mb-3">
                {user.title}{" "}
              </div>
              <div className=" labtop:text-base tablet:text-xs mobile:text-xs text-spantext ">
                {user.description}
              </div>
              <div className="flex justify-end">
                <button className="border-2 border-tasting  rounded-lg transition-all">
                  <BsArrowUpRight className=" text-morning" size="25px" />
                </button>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}
