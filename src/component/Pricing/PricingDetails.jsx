import Defination from "../Courses/atoms/Defination";
import { Button } from "../atoms/Button/Button.tsx";
import PricingCard from "../atoms/PricingCard";
import Questions from "../Home/Questions";
export default function PricingDetails() {
  return (
    <main className="container mx-auto">
      <section>
        <Defination
          heading="Our Pricings"
          paragraph="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        />
      </section>
      <section className="flex justify-center items-center mt-20">
        <button className="bg-white px-6 py-4 flex justify-center items-center text-textcook font-medium rounded-xl">
          <Button
            action="Monthly"
            variant="primary"
            paddingname="px-5 py-4 mr-8"
          />
          Yearly
        </button>
      </section>
      <section className="bg-white p-12 grid grid-cols-2 gap-8 rounded-xl mt-14 mb-24">
        <PricingCard plan="Free Plan" price="0$" />
        <PricingCard plan="Pro Plan" price="79$" />
      </section>
      <section>
        <Questions />
      </section>
    </main>
  );
}
