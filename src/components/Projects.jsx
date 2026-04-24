import { motion } from "framer-motion";
import { useI18n } from "../i18n.jsx";

const tags = [
  ["React", "CSS", "Framer Motion"],
  ["soon"],
];

export default function Projects() {
  const { t } = useI18n();

  return (
    <section className="projects" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t.projects.title}
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {t.projects.sub}
      </motion.p>

      <div className="projects-grid">
        {t.projects.items.map((p, i) => (
          <motion.div
            className="project-card"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="chips">
              {tags[i]?.map((tag) => (
                <span className="chip" key={tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
