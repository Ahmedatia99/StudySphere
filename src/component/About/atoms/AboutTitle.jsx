export default function AboutTitle({ head, info }) {
  return (
    <main>
      <div>
        <h2 className="text-3xl font-medium mb-2 text-textcook">{head}</h2>
        <p className="text-base text-spantext">{info}</p>
      </div>
    </main>
  );
}
