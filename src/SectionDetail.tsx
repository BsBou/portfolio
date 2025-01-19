function SectionDetail(props: { title?: string; content: string[] }) {
  return (
    <div className="section-detail">
      {props.title && <h3>{props.title}</h3>}
      {props.content.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default SectionDetail;
