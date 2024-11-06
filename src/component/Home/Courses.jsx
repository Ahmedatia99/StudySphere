import DefineCompo from "../atoms/DefineCompo";
import CardCourses from "../atoms/CardCourses";
export default function Courses() {
  return (
    <main className="tablet:container mx-auto px-5 rounded-xl">
      <section className="">
        <DefineCompo
          title="Our Courses"
          value={true}
          description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        />
      </section>
      <div className=" grid tablet:grid-cols-2 tablet:gap-5 mobile:grid-cols-1 mobile:gap-3 laptop:my-14  mobile:my-10">
        <CardCourses
          subj="4 Week"
          level="Beginner"
          user="By John Smith"
          course="Web Design Fundamentals"
          description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
          url="./images/course-1.svg"
        />
        <CardCourses
          subj="6 Weeks"
          level="Intermediate"
          user="By Emily Johnson"
          course="UI/UX Design"
          description="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
          url="./images/course-2.svg"
        />
        <CardCourses
          subj="8 Weeks"
          level="Intermediate"
          user="By David Brown"
          course="Mobile App Development"
          description="Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
          url="./images/course-3.svg"
        />
        <CardCourses
          subj="10 Weeks"
          level="Beginner"
          user="By Sarah Thompson"
          course="Graphic Design for Beginners"
          description="Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
          url="./images/course-4.svg"
        />
        <CardCourses
          subj="10 Weeks"
          level="Intermediate"
          user="By Michael Adams"
          course="Front-End Web Development"
          description="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
          url="./images/course-5.svg"
        />
        <CardCourses
          subj="6 Weeks"
          level="Advance"
          user="By Jennifer Wilson"
          course="Advanced JavaScript"
          description="Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."
          url="./images/course-6.svg"
        />
      </div>
    </main>
  );
}
