import { motion } from "framer-motion";

const skills = [
  { name: "HTML",       icon: "🌐", color: "#e34f26", level: 95 },
  { name: "CSS",        icon: "🎨", color: "#2965f1", level: 90 },
  { name: "JavaScript", icon: "⚡", color: "#f7df1e", level: 88 },
  { name: "SQL",        icon: "🗄️", color: "#336791", level: 82 },
  { name: "Python",     icon: "🐍", color: "#3776ab", level: 85 },
  { name: "React.js",   icon: "⚛️", color: "#61dafb", level: 80 },
  { name: "Node.js",    icon: "🟢", color: "#68a063", level: 75 },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", level: 78 },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Minhas <span>Skills</span>
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Tecnologias que utilizo no dia a dia para criar soluções completas
      </motion.p>

      <div className="cards">
        {skills.map((skill, i) => (
          <motion.div
            className="card"
            key={skill.name}
            style={{ "--skill-color": skill.color }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <span className="icon">{skill.icon}</span>
            <div className="name">{skill.name}</div>
            <div className="level-bar">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.9, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
