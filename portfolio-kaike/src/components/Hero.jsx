import { motion } from "framer-motion";
import foto from "../assets/foto.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="profile-wrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={foto} className="profile" alt="Kaike Fernandes Paes" />
      </motion.div>

      <motion.span
        className="tag"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Disponível para oportunidades
      </motion.span>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Kaike Fernandes Paes
      </motion.h2>

      <motion.p
        className="role"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <strong>Desenvolvedor</strong> — Ciência da Computação, 3º semestre
      </motion.p>

      <motion.p
        className="desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Construo interfaces e sistemas focados em performance e código limpo.
      </motion.p>

      <motion.div
        className="hero-cta"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
      >
        <a className="btn btn-primary" href="#projects">Ver projetos</a>
        <a className="btn btn-ghost" href="#skills">Skills</a>
      </motion.div>
    </section>
  );
}
