import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <br />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
