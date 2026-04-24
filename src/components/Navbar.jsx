import { motion } from "framer-motion";
import { useI18n } from "../i18n.jsx";

export default function Navbar() {
  const { lang, toggle, t } = useI18n();

  return (
    <motion.nav
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="logo">Kaike.dev</h1>
      <div className="nav-right">
        <ul>
          <li><a href="#home">{t.nav.home}</a></li>
          <li><a href="#skills">{t.nav.skills}</a></li>
          <li><a href="#projects">{t.nav.projects}</a></li>
        </ul>
        <button
          className="lang-toggle"
          onClick={toggle}
          aria-label="Toggle language"
        >
          <span className={lang === "pt" ? "active" : ""}>PT</span>
          <span className="sep">/</span>
          <span className={lang === "en" ? "active" : ""}>EN</span>
        </button>
      </div>
    </motion.nav>
  );
}
