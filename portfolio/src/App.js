import React from "react";
import { Switch, Route } from 'react-router-dom';
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <main>
//       <Header />
//       <Project />
//       <AboutMe />
//       <Projects />
//       <ContactMe />
//       <Resume />
//       <Footer />
//     </main>
//   );
// }

const Main = () => {
  return (
    <div className="App" class="bg-gray-500">
      <Header />
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={AboutMe}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/resume' component={Resume}></Route>
      <Route exact path='/contactme' component={ContactMe}></Route>
      </Switch>
      
      <Footer />
      </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

export default Main;
