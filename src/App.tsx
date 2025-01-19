import "./App.css";
import Section from "./Section";
import SectionDetail from "./SectionDetail";

function App() {
  return (
    <>
      <header>
        <h1>Borhan Boulandier</h1>
        <h2>Software Engineer</h2>
      </header>

      <main>
        <p>Hi, I'm Borhan</p>
        <p>I like working on hard problems with great people.</p>
        <br />
        <p>
          Backend engineer at <a href="http://passentry.com">PassEntry</a>
        </p>
        <p>
          Lecturer at{" "}
          <a href="https://www.lewagon.com/london">Le Wagon London</a>
        </p>
      </main>
      <br />

      <Section title="about.">
        <div className="sub-section">
          <div>
            <SectionDetail
              title="experience"
              content={[
                "2022 - Present",
                "Backend Engineer",
                "<a href='http://passentry.com'>PassEntry</a>",
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
            title="tools"
            content={["Ruby on Rails", "React", "PostgreSQL", "Docker", "AWS"]}
          />
        </div>
      </Section>

      <Section
        title="contact."
        children={
          <SectionDetail
            content={[
              "<a href='mailto:borhan.boulandier@gmail.com'>borhan.boulandier@gmail.com</a>",
              "<a href='https://github.com/BsBou'>https://github.com/BsBou</a>",
              "<a href='https://www.linkedin.com/in/borhanbou/'>https://www.linkedin.com/in/borhanbou/</a>",
            ]}
          />
        }
      />
    </>
  );
}

export default App;
