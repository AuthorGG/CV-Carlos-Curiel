import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionChange = (sectionKey) => {
    setActiveSection(sectionKey);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Navbar onNavClick={handleSectionChange} activeSection={activeSection} />

      <main>{renderSection()}</main>

      <Footer />
    </>
  );
};

export default App;
