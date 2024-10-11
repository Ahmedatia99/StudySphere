import Header from "../component/Home/Header";
import Sponser from "../component/Home/Sponser";
import Benfits from "../component/Home/Benfits";
import Courses from "../component/Home/Courses";
import Testimonials from "../component/Home/Testimonials";
import Pricing from "../component/Home/Pricing";
import Questions from "../component/Home/Questions";
import Footer from "../component/Home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-14">
        <Sponser />
        <Benfits />
        <Courses />
        <Testimonials />
        <Pricing />
        <Questions />
      </main>
      <Footer />
    </>
  );
}
