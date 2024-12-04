export default function Defination({ heading, paragraph }) {
  return (
    <main className=" mx-auto border-b-2 px-5">
      <section className="py-20 flex md:flex-row mobile:flex-col justify-between gap-10">
        <h2 className="md:text-4xl mobile:text-3xl font-semibold max-w-xl leading-snug">
          {heading}
        </h2>
        <p className="text-base max-w-xl mobile:mt-5 text-spantext">
          {paragraph}
        </p>
      </section>
    </main>
  );
}
