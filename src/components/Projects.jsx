import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfólio Pessoal",
    description: "Site portfólio moderno com React, animações com Framer Motion e design responsivo.",
    tags: ["React", "CSS", "Framer Motion"],
  },
  {
    title: "Em construção 🚀",
    description: "Novos projetos chegando em breve. Fique de olho neste espaço!",
    tags: ["Soon"],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Meus <span>Projetos</span>
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Uma seleção dos trabalhos que venho desenvolvendo
      </motion.p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            className="project-card"
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -8 }}
          >
            <div className="inner">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="chips">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
