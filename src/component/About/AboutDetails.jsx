import AboutHeading from "./atoms/AboutHeading";
import Cta from "./atoms/Cta";
export default function AboutDetails() {
  return (
    <main className="md:container mx-auto mt-20 md:px-4">
      <AboutHeading />
      <Cta />
    </main>
  );
}
