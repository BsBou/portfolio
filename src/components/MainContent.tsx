import { ContentItemRenderer } from "./ContentItemRenderer";
import { mainContentItems } from "../data/content";

export default function MainContent() {
  return (
    <main>
      {mainContentItems.map((item, index) => (
        <p key={index}>
          <ContentItemRenderer item={item} />
        </p>
      ))}
    </main>
  );
}
