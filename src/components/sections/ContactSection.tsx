import Section from "./Section";
import SectionDetail from "./SectionDetail";
import { contactContent } from "../../data/content";

export const ContactSection = () => {
  return (
    <Section title="/contact">
      <SectionDetail content={contactContent} />
    </Section>
  );
};
