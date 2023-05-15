import { useState } from "react";
//import './App.css'
import Sidenav from "./components/Sidenav";
import Main from "./components/main";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      style={{
        backgroundColor: "ghostwhite",
      }}
    >
      <Sidenav />
      <Main />
      <Work />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
