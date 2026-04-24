import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { useI18n } from "../i18n.jsx";

const skills = [
  { name: "HTML",       Icon: SiHtml5,      level: 95 },
  { name: "CSS",        Icon: SiCss,        level: 90 },
  { name: "JavaScript", Icon: SiJavascript, level: 88 },
  { name: "SQL",        Icon: FaDatabase,   level: 82 },
  { name: "Python",     Icon: SiPython,     level: 85 },
  { name: "React.js",   Icon: SiReact,      level: 80 },
  { name: "Node.js",    Icon: SiNodedotjs,  level: 75 },
  { name: "PostgreSQL", Icon: SiPostgresql, level: 78 },
];

export default function Skills() {
  const { t } = useI18n();
  return (
    <section className="skills" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {t.skills.title}
      </motion.h2>
      <motion.p
        className="section-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {t.skills.sub}
      </motion.p>

      <div className="cards">
        {skills.map(({ name, Icon, level }, i) => (
          <motion.div
            className="card"
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ y: -3 }}
          >
            <span className="icon">
              <Icon />
            </span>
            <div className="name">{name}</div>
            <div className="level-bar">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 + 0.2, duration: 0.7, ease: "easeOut" }}
              />
            </div>
            <span className="level-text">{level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
