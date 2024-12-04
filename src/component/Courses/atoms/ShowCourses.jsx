import DefineCompo from "../../atoms/DefineCompo";
import { Button } from "../../atoms/Button/Button.tsx";
import data from "../json/CoursesDefination.json";

export default function ShowCourses() {
  return (
    <main>
      {data.map((element) => (
        <div className="md:container max-sm:px-4 mx-auto pt-20" key={element.id}>
          <section className="bg-white lg:p-10 mobile:p-5 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <DefineCompo
                title="Web Design Fundamentals"
                description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
                value={false}
              />
              <Button
                variant="second"
                action="View Course"
                paddingname="mobile:py-3 mobile:px-4 mr-0 my-0 mobile:my-5 border-2"
              />
            </div>
            <section>
              <div className="grid md:grid-cols-3 mobile:grid-cols-1 lg:gap-20 md:gap-10 mobile:gap-5">
                <img src={element.url1} className="rounded-lg" alt="Course 1" />
                <img src={element.url2} className="rounded-lg" alt="Course 2" />
                <img src={element.url3} className="rounded-lg" alt="Course 3" />
              </div>
              <div className="flex justify-between mt-6 mb-10">
                <div className="text-sm">
                  <span className="md:px-5 mobile:px-3 py-2 border-2 rounded-md md:mr-5 mobile:mr-2">
                    {element.subj}
                  </span>
                  <span className="md:px-5 mobile:px-3 py-2 border-2 rounded-md">
                    {element.level}
                  </span>
                </div>
                <div>
                  <span className="text-base font-semibold">
                    {element.user}
                  </span>
                </div>
              </div>
              <div
                className="table w-full border-2 border-stroke rounded-lg"
                key={element.id}
              >
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-xl font-semibold py-5 px-6">
                        Curriculum
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="grid lg:grid-cols-5 md:grid-cols-3 mobile:grid-col-2">
                      <td className="py-6 lg:px-10 sm:px-3 lg:text-start max-sm:text-center border-t-2">
                        <div className="border-r-2">
                          <h2 className="text-5xl font-extrabold mb-4">01</h2>
                          <p className="text-lg font-medium">{element.col1}</p>
                        </div>
                      </td>
                      <td className="py-6 lg:px-10 sm:px-3 lg:text-start max-sm:text-center border-t-2">
                        <div className="border-r-2">
                          <h2 className="text-5xl font-extrabold mb-4">02</h2>
                          <p className="text-lg font-medium">{element.col2}</p>
                        </div>
                      </td>
                      <td className="py-6 lg:px-10 sm:px-3 lg:text-start max-sm:text-center border-t-2">
                        <div className="border-r-2">
                          <h2 className="text-5xl font-extrabold mb-4">03</h2>
                          <p className="text-lg font-medium">{element.col3}</p>
                        </div>
                      </td>
                      <td className="py-6 lg:px-10 sm:px-3 lg:text-start max-sm:text-center border-t-2 ">
                        <div className="border-r-2">
                          <h2 className="text-5xl font-extrabold mb-4">04</h2>
                          <p className="text-lg font-medium">{element.col4}</p>
                        </div>
                      </td>
                      <td className="py-6 lg:px-10 sm:px-3 lg:text-start max-sm:text-center border-t-2 ">
                        <div>
                          <h2 className="text-5xl font-extrabold mb-4">05</h2>
                          <p className="text-lg font-medium">{element.col5}</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </section>
        </div>
      ))}
    </main>
  );
}
