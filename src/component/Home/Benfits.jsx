import Reusable from "../Home/Reusable";
import DefineCompo from "../atoms/DefineCompo";
export default function Benfits() {
  return (
    <main className="tablet:container mx-auto px-5 rounded-xl pt-12">
      <section className="">
        <DefineCompo
          title={"Benefits"}
          value={true}
          description={
            "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          }
        />
      </section>
      <div className=" laptop:my-14  mobile:my-10">
        <Reusable
          defineNum="01"
          title="Flexible Learning Schedule"
          description="Fit your coursework around your existing commitments and obligations."
        />
      </div>
    </main>
  );
}
