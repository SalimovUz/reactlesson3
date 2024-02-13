// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import "./main.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Main />
      <Footer />
    </>
  );
}

export default App;
