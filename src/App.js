import "./App.css";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
