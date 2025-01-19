export default function Section(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </section>
  );
}
