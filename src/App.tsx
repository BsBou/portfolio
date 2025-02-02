import "./App.css";
import Section from "./Section";
import SectionDetail from "./SectionDetail";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const mainContentItems = [
  { text: "Hi, I'm Borhan" },
  { text: "I like working on hard problems with great people." },
  { text: "--" },
  {
    text: "Backend engineer at ",
    link: { url: "https://passentry.com", label: "PassEntry" },
  },
  {
    text: "Lecturer at ",
    link: { url: "https://www.lewagon.com/london", label: "Le Wagon London" },
  },
];

function App() {
  return (
    <>
      <Header name="Borhan Boulandier" title="Software Engineer" />
      <MainContent content={mainContentItems} />
      <br />

      {/* About Section */}
      <Section title="/about">
        <div className="sub-section">
          <div>
            <SectionDetail
              title=".experience"
              content={[
                "2022 - Present",
                "Backend Engineer",
                "<a href='https://passentry.com'>PassEntry</a>",
              ]}
            />
            <SectionDetail
              content={[
                "2021 - Present",
                "Lecturer",
                "<a href='https://www.lewagon.com/london'>Le Wagon London</a>",
              ]}
            />
          </div>
          <SectionDetail
            title=".tools"
            content={["Ruby on Rails", "React", "PostgreSQL", "Docker", "AWS"]}
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        title="/contact"
        children={
          <SectionDetail
            content={[
              "<a href='mailto:borhanbo@proton.me' target='_blank'>borhanbo@proton.me</a>",
              "<a href='https://github.com/BsBou' target='_blank'>github.com/BsBou</a>",
              "<a href='https://www.linkedin.com/in/borhanbo/' target='_blank'>linkedin.com/in/borhanbo/</a>",
            ]}
          />
        }
      />
    </>
  );
}

export default App;
