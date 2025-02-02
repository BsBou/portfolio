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
    text: "Backend engineer at",
    link: {
      url: "https://passentry.com",
      label: "PassEntry",
      target: "_blank",
    },
  },
  {
    text: "Lecturer at",
    link: {
      url: "https://www.lewagon.com/london",
      label: "Le Wagon London",
      target: "_blank",
    },
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
                { text: "2022 - Present" },
                { text: "Backend Engineer" },
                {
                  link: {
                    url: "https://passentry.com",
                    label: "PassEntry",
                    target: "_blank",
                  },
                },
              ]}
            />
            <SectionDetail
              content={[
                { text: "2021 - Present" },
                { text: "Lecturer" },
                {
                  link: {
                    label: "Le Wagon London",
                    url: "https://www.lewagon.com/london",
                    target: "_blank",
                  },
                },
              ]}
            />
          </div>
          <SectionDetail
            title=".tools"
            content={[
              { text: "Ruby on Rails" },
              { text: "React" },
              { text: "PostgreSQL" },
              { text: "Docker" },
              { text: "AWS" },
            ]}
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        title="/contact"
        children={
          <SectionDetail
            content={[
              {
                link: {
                  label: "borhanbo@proton.me",
                  url: "mailto:borhanbo@proton.me",
                },
              },
              {
                link: {
                  label: "github.com/BsBou",
                  url: "https://github.com/BsBou",
                  target: "_blank",
                },
              },
              {
                link: {
                  label: "linkedin.com/in/borhanbo/",
                  url: "https://www.linkedin.com/in/borhanbo/",
                  target: "_blank",
                },
              },
            ]}
          />
        }
      />
    </>
  );
}

export default App;
