import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <footer className="footer">
        © {new Date().getFullYear()} Kaike Fernandes Paes — Feito com React + Framer Motion
      </footer>
    </>
  );
}
