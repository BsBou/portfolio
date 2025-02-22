import Section from "./Section";
import SectionDetail from "./SectionDetail";
import { experienceContent, toolsContent } from "../../data/content";

export const AboutSection = () => {
  return (
    <Section title="/about">
      <div className="sub-section">
        <div>
          {experienceContent.map((item, index) => (
            <SectionDetail
              key={`experience-${index}`}
              title={item.title}
              content={item.items}
            />
          ))}
        </div>
        <SectionDetail title=".tools" content={toolsContent} />
      </div>
    </Section>
  );
};
