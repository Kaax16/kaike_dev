import { motion } from "framer-motion";

const skills = [
  { name: "HTML",       abbr: "H",   level: 95 },
  { name: "CSS",        abbr: "#",   level: 90 },
  { name: "JavaScript", abbr: "JS",  level: 88 },
  { name: "SQL",        abbr: "DB",  level: 82 },
  { name: "Python",     abbr: "Py",  level: 85 },
  { name: "React.js",   abbr: "</>", level: 80 },
  { name: "Node.js",    abbr: "N",   level: 75 },
  { name: "PostgreSQL", abbr: "Pg",  level: 78 },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Tecnologias que utilizo no dia a dia.
      </motion.p>

      <div className="cards">
        {skills.map((skill, i) => (
          <motion.div
            className="card"
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ y: -3 }}
          >
            <span className="icon">{skill.abbr}</span>
            <div className="name">{skill.name}</div>
            <div className="level-bar">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 + 0.2, duration: 0.7, ease: "easeOut" }}
              />
            </div>
            <span className="level-text">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
