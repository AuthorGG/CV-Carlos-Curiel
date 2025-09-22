import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Loader from "./components/Loader";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import "./assets/css/styles.css";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 4500);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const loaderTimer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(loaderTimer);
  }, []);

  if (loading) return <Loader />;
  if (showIntro) return <Intro />;

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
