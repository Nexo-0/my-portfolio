import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/AboutSection";
import Portfolio from "./components/PortfolioSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
