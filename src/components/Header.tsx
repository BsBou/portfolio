interface HeaderProps {
  name: string;
  title: string;
}

export default function Header({ name, title }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </header>
  );
}
