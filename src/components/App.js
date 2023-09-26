import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Potfolio from "./Potfolio/Potfolio";
import Contact from "./Contact/Contact";
import Footer from "./Footer";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Potfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
