import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/AboutSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
