import DefineCompo from "../atoms/DefineCompo";
import StoryCard from "../atoms/StoryCard";
export default function Testimonials() {
  return (
    <main className="tablet:container mx-auto px-5 rounded-xl">
      <section className="mb-20">
        <DefineCompo
          title={"Our Testimonials"}
          value={true}
          description={
            "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          }
        />
      </section>
      <section>
        <StoryCard />
      </section>
    </main>
  );
}
