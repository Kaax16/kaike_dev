import { createContext, useContext, useEffect, useState } from "react";

const translations = {
  pt: {
    nav: { home: "Início", skills: "Skills", projects: "Projetos" },
    hero: {
      tag: "Disponível para oportunidades",
      role: "Desenvolvedor",
      roleSuffix: "— Ciência da Computação, 3º semestre",
      desc: "Construo interfaces e sistemas focados em performance e código limpo.",
      ctaProjects: "Ver projetos",
      ctaSkills: "Skills",
    },
    skills: {
      title: "Skills",
      sub: "Tecnologias que utilizo no dia a dia.",
    },
    projects: {
      title: "Projetos",
      sub: "Trabalhos selecionados.",
      items: [
        {
          title: "Portfólio Pessoal",
          description: "Site portfólio com React e animações discretas. Layout limpo e responsivo.",
        },
        {
          title: "Em construção",
          description: "Novos projetos em desenvolvimento. Em breve disponíveis neste espaço.",
        },
      ],
    },
  },
  en: {
    nav: { home: "Home", skills: "Skills", projects: "Projects" },
    hero: {
      tag: "Available for opportunities",
      role: "Developer",
      roleSuffix: "— Computer Science, 3rd semester",
      desc: "I build interfaces and systems focused on performance and clean code.",
      ctaProjects: "View projects",
      ctaSkills: "Skills",
    },
    skills: {
      title: "Skills",
      sub: "Technologies I use on a daily basis.",
    },
    projects: {
      title: "Projects",
      sub: "Selected work.",
      items: [
        {
          title: "Personal Portfolio",
          description: "Portfolio site with React and subtle animations. Clean, responsive layout.",
        },
        {
          title: "Coming soon",
          description: "New projects in development. Available here soon.",
        },
      ],
    },
  },
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "pt");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  const t = translations[lang];

  return (
    <I18nContext.Provider value={{ lang, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
