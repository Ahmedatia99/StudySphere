export default function Defination({ heading, paragraph }) {
  return (
    <main className=" mx-auto border-b-2">
      <section className="py-20 flex justify-between">
        <h2 className="text-4xl font-semibold max-w-xl leading-snug">
          {heading}
        </h2>
        <p className="text-base max-w-xl">{paragraph}</p>
      </section>
    </main>
  );
}
