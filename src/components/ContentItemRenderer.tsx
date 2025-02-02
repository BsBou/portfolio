import React from "react";

export type ContentItem = {
  text?: string;
  link?: {
    url: string;
    label?: string;
    target?: string;
  };
};

interface ContentItemRendererProps {
  item: ContentItem;
}

export const ContentItemRenderer: React.FC<ContentItemRendererProps> = ({
  item,
}) => {
  if (item.link) {
    console.log(item);
    return (
      <>
        {item.text && item.text + " "}
        <a
          href={item.link.url}
          target={item.link.target || "_self"}
          rel={
            item.link.target === "_blank" ? "noopener noreferrer" : undefined
          }
        >
          {item.link.label && ` ${item.link.label}`}
        </a>
      </>
    );
  }

  return <>{item.text}</>;
};
