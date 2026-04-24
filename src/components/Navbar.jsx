import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="logo">Kaike.dev</h1>
      <ul>
        <li><a href="#home">Início</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projetos</a></li>
      </ul>
    </motion.nav>
  );
}
