interface ContentItem {
  text: string;
  link?: {
    url: string;
    label: string;
  };
}

interface MainContentProps {
  content: ContentItem[];
}

export default function MainContent({ content }: MainContentProps) {
  return (
    <main>
      {content.map((item, index) => (
        <p key={index}>
          {item.text}
          {item.link && (
            <a href={item.link.url} target="_blank" rel="noopener noreferrer">
              {item.link.label}
            </a>
          )}
        </p>
      ))}
    </main>
  );
}
