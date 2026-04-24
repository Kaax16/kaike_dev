import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfólio Pessoal",
    description: "Site portfólio com React e animações discretas. Layout limpo e responsivo.",
    tags: ["React", "CSS", "Framer Motion"],
  },
  {
    title: "Em construção",
    description: "Novos projetos em desenvolvimento. Em breve disponíveis neste espaço.",
    tags: ["soon"],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projetos
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Trabalhos selecionados.
      </motion.p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            className="project-card"
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="chips">
              {p.tags.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
