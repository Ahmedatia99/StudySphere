import Defination from "../Courses/atoms/Defination";
import ShowCourses from "./atoms/ShowCourses";
export default function CoursesDetails() {
  return (
    <main>
      <section>
        <Defination
          heading="Online Courses on Design and Development"
          paragraph="Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey."
        />
      </section>
      <section>
        <ShowCourses />
      </section>
    </main>
  );
}
