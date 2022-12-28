import "./App.css";
import About from "./section/about/About";
import Banner from "./section/banner/Banner";
import Navbar from "./section/navbar/Navbar";
import Portfolio from "./section/portfolio/Portfolio";
import Skills from "./section/skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
    </>
  );
}

export default App;
