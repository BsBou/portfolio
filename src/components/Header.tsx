import { headerContent } from "../data/content";

export default function Header() {
  return (
    <header>
      <h1>{headerContent.name}</h1>
      <h2>{headerContent.title}</h2>
    </header>
  );
}
