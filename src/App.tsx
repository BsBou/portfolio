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
              content={["2022 - Present", "Backend Engineer", "PassEntry"]}
            />
            <SectionDetail
              content={["2021 - Present", "Lecturer", "Le Wagon London"]}
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
              "borhan.boulandier@gmail.com",
              "https://github.com/BsBou",
              "https://www.linkedin.com/in/borhanbou/",
            ]}
          />
        }
      />
    </>
  );
}

export default App;
