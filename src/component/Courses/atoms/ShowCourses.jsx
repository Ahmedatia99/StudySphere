import DefineCompo from "../../atoms/DefineCompo";
import { Button } from "../../atoms/Button/Button.tsx";
import data from "../json/CoursesDefination.json";

export default function ShowCourses() {
  return (
    <main>
      {" "}
      {data.map((element) => {
        return (
          <main className="container hj mx-auto pt-20" key={element.id}>
            <section className="bg-white p-10 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <DefineCompo
                  title="Web Design Fundamentals"
                  description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
                  value={false}
                />
                <Button
                  variant="second"
                  action="View Course"
                  paddingname="  mobile:py-3 mobile:px-4 mr-0 my-0 mobile:my-5 border-2 "
                />
              </div>
              <section>
                <div className="grid grid-cols-3 gap-20">
                  <img src={element.url1} className="rounded-lg" />
                  <img src={element.url2} className="rounded-lg" />
                  <img src={element.url3} className="rounded-lg" />
                </div>
                <div className="flex justify-between mt-6 mb-10">
                  <div className="text-sm">
                    <span className="px-5 py-2 border-2 rounded-md mr-5">
                      {element.subj}
                    </span>
                    <span className="p-5 py-2 border-2 rounded-md">
                      {element.level}
                    </span>
                  </div>
                  <div>
                    <span className="text-base font-semibold">
                      {element.user}
                    </span>
                  </div>
                </div>
                <main
                  className=" table w-full border-2 border-stroke rounded-lg tabel"
                  key={element.id}
                >
                  <thead>
                    <tr className="">
                      <td className="text-xl font-semibold py-5 px-6">
                        Curriculum
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-6 px-10 border-t-2">
                        <div className="border-r-2">
                          <h2 className="text-5xl font-extrabold mb-4">01</h2>
                          <p className="text-lg font-medium">{element.col1}</p>
                        </div>
                      </td>
                      <td className="py-6 px-10 border-t-2">
                        <div className="border-r-2">
                          <h2 className="text-5xl font-extrabold mb-4">02</h2>
                          <p className="text-lg font-medium">{element.col2}</p>
                        </div>
                      </td>
                      <td className="py-6 px-10 border-t-2">
                        <div className="border-r-2">
                          <h2 className="text-5xl font-extrabold mb-4">03</h2>
                          <p className="text-lg font-medium">{element.col3}</p>
                        </div>
                      </td>
                      <td className="py-6 px-10 border-t-2">
                        <div className="border-r-2">
                          <h2 className="text-5xl font-extrabold mb-4">04</h2>
                          <p className="text-lg font-medium">{element.col4}</p>
                        </div>
                      </td>
                      <td className="py-6 px-10 border-t-2">
                        <div>
                          <h2 className="text-5xl font-extrabold mb-4">05</h2>
                          <p className="text-lg font-medium">{element.col5}</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </main>
                {/* );
      })} */}
              </section>
            </section>
          </main>
        );
      })}
    </main>
  );
}
