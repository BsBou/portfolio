import { ContentItem, ContentItemRenderer } from "./ContentItemRenderer";

interface MainContentProps {
  content: ContentItem[];
}

export default function MainContent({ content }: MainContentProps) {
  return (
    <main>
      {content.map((item, index) => (
        <p key={index}>
          <ContentItemRenderer item={item} />
        </p>
      ))}
    </main>
  );
}
