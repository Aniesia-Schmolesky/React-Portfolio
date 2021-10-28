import React from "react";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Aniesia Schmolesky's Portfolio
      </div>
    );
  }
}

export default function App() {
  return (
    <main>
      <Header />
      <Project />
      <Footer />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Resume />
    </main>
  );
}