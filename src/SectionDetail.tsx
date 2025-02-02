import {
  ContentItem,
  ContentItemRenderer,
} from "./components/ContentItemRenderer";

interface SectionDetailProps {
  title?: string;
  content: ContentItem[];
}

function SectionDetail({ title, content }: SectionDetailProps) {
  return (
    <div className="section-detail">
      {title && <h3>{title}</h3>}
      {content.map((item, index) => (
        <p key={index}>
          <ContentItemRenderer item={item} />
        </p>
      ))}
    </div>
  );
}

export default SectionDetail;
