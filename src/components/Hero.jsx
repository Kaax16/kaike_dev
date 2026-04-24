import { motion } from "framer-motion";
import foto from "../assets/foto.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="profile-wrap"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img src={foto} className="profile" alt="Kaike Fernandes Paes" />
      </motion.div>

      <motion.span
        className="tag"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        DISPONÍVEL PARA OPORTUNIDADES
      </motion.span>

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Kaike Fernandes Paes
      </motion.h2>

      <motion.p
        className="role"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <strong>Desenvolvedor</strong> • Ciência da Computação • 3º semestre
      </motion.p>

      <motion.p
        className="desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Apaixonado por construir interfaces modernas e sistemas robustos.
        Transformo ideias em código limpo, rápido e escalável.
      </motion.p>

      <motion.div
        className="hero-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <a className="btn btn-primary" href="#projects">Ver Projetos</a>
        <a className="btn btn-ghost" href="#skills">Minhas Skills</a>
      </motion.div>
    </section>
  );
}
