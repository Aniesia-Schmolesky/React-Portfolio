import React from "react";
import React from "react";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Resume />
    </main>
  );
}