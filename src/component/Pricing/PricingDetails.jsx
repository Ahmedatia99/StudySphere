import Questions from "../Home/Questions";
import Pricing from "../Home/Pricing";
export default function PricingDetails() {
  return (
    <main className="md:container  mx-auto">
      <div className="mt-20">
        <Pricing />
      </div>
      <section>
        <Questions />
      </section>
    </main>
  );
}
