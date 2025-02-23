import { footerContent } from "../data/content";
import { ContentItemRenderer } from "./ContentItemRenderer";

export default function Footer() {
  return (
    <footer>
      <p>
        {footerContent.map((item, index) => (
          <ContentItemRenderer key={index} item={item} />
        ))}
      </p>
    </footer>
  );
}
