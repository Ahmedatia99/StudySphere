import DefineCompo from "../atoms/DefineCompo";
import PricingCard from "../atoms/PricingCard";
export default function Pricing() {
  return (
    <main className="container mx-auto">
      <section className=" px-4 mb-20 rounded-xl">
        <DefineCompo
          title={"Our Pricing"}
          value={true}
          description={
            "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in"
          }
        />
      </section>
      <section className="bg-white laptop:p-12 mobile:p-5 grid tablet:grid-cols-2 mobile: grid-cols-1 laptop:gap-8 mobile:gap-4 rounded-xl">
        <PricingCard plan="Free Plan" price="0$" />
        <PricingCard plan="Pro Plan" price="79$" />
      </section>
    </main>
  );
}
