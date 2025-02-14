import "./App.css";
import Section from "./Section";
import SectionDetail from "./SectionDetail";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import {
  mainContentItems,
  experienceContent,
  toolsContent,
  contactContent,
} from "./data/content";

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
            {experienceContent.map((item, index) => {
              return (
                <SectionDetail
                  key={index}
                  title={item.title}
                  content={item.items}
                />
              );
            })}
          </div>
          <SectionDetail title=".tools" content={toolsContent} />
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        title="/contact"
        children={<SectionDetail content={contactContent} />}
      />
    </>
  );
}

export default App;
