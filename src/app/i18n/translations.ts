export type Language = "en" | "es";

interface LeadershipCardCopy {
  title: string;
  text: string;
}

interface ProjectItemCopy {
  description: string;
  caption?: string;
  imageCreditLabel?: string;
}

export interface Translations {
  nav: {
    links: {
      about: string;
      stack: string;
      leadership: string;
      projects: string;
      research: string;
      contact: string;
    };
    home: string;
    downloadCv: string;
    openMenu: string;
    closeMenu: string;
    switchToLight: string;
    switchToDark: string;
    switchToSpanish: string;
    switchToEnglish: string;
  };
  intro: {
    greeting: string;
    badge1: string;
    badge2: string;
    tagline: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    heading: string;
    bio: string;
    languages: string;
    bookRecLabel: string;
    bookAuthor: string;
  };
  stack: {
    heading: string;
    intro: string;
    groups: [string, string, string, string];
  };
  leadership: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    intro: string;
    cards: [
      LeadershipCardCopy,
      LeadershipCardCopy,
      LeadershipCardCopy,
      LeadershipCardCopy,
      LeadershipCardCopy
    ];
    quote: string;
    quoteAttribution: string;
    certifiedLabel: string;
  };
  projects: {
    heading: string;
    viewProject: string;
    items: [ProjectItemCopy, ProjectItemCopy, ProjectItemCopy];
  };
  research: {
    badge: string;
    heading: string;
    scopusLink: string;
    introPrefix: string;
    introHighlight: string;
    introSuffix: string;
    readMore: string;
  };
  education: {
    heading: string;
    degrees: [string, string, string];
  };
  contact: {
    heading: string;
    intro: string;
    shelterTitle: string;
    shelterText: string;
    shelterFreeWord: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sending: string;
    send: string;
    successMessage: string;
  };
  footer: {
    copyright: string;
    creditsLabel: string;
    picrewCredit: string;
    catDoodlesCredit: string;
    graphCredit: string;
  };
}

const en: Translations = {
  nav: {
    links: {
      about: "About",
      stack: "Stack",
      leadership: "Leadership",
      projects: "Projects",
      research: "Research",
      contact: "Contact",
    },
    home: "Home",
    downloadCv: "Download CV",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    switchToSpanish: "Switch to Spanish",
    switchToEnglish: "Switch to English",
  },
  intro: {
    greeting: "Hi! I'm Ericka",
    badge1: "Cat Parent",
    badge2: "Full-stack AI Developer",
    tagline: "I like solving problems with people. Made of books and Monster Energy.",
    ctaProjects: "See projects",
    ctaContact: "Say hi →",
  },
  about: {
    heading: "About me",
    bio: "Hello there! I'm Ericka, a problem solver who often ends up writing code to fix things. I believe in the power of teamwork and thrive in finding how all the pieces fit together. I care about good system design, clean code and responsible AI. When I'm not coding, you'll find me enjoying a book next to my cats.",
    languages: "Spanish (native) · English (fluent, TOEFL iBT 108) · Basic Chinese & Korean",
    bookRecLabel: "📖 Current book rec",
    bookAuthor: "by Karen Hao",
  },
  stack: {
    heading: "What do I do?",
    intro:
      "I enjoy learning more than anything and I'm always ready to jump to the right tool for the job. Here's the stack I've used most so far.",
    groups: ["Languages & Frameworks", "AI / ML", "Data & Cloud", "Other"],
  },
  leadership: {
    badge: "How I roll",
    headingPrefix: "Tech is always about",
    headingHighlight: "people",
    intro:
      "I focus on products that make people happy and building structure that actually helps engineers grow.",
    cards: [
      {
        title: "Leadership",
        text: "I stay close to the work — the team, the code, the decisions. Good systems come from teams who trust each other; that's what I love most.",
      },
      {
        title: "Responsible Technology",
        text: "Technology should leave people better off than it found them: that's not a given, it's something you must build for on purpose. I spend real time on the intersection of AI and ethics.",
      },
      {
        title: "Teaching",
        text: "Teaching tech for a few years now; honestly, maybe the biggest impact I get to have, and I just love doing it. Grateful to add my grain of sand to future colleagues. Taught programming, databases, cloud, even Spanish.",
      },
      {
        title: "Always Learning",
        text: "I'm a book nerd first and foremost. But what really pulls me in isn't the next framework or tech stack, it's research, the impact tech has on society, and hearing what brilliant minds are figuring out right now.",
      },
      {
        title: "System Design",
        text: "I love a system that just makes sense, but it alone doesn't solve the problem: it only works when the whole team and the client are actually on the same page. So I spend as much energy listening and translating as I do designing.",
      },
    ],
    quote:
      "“Not finance. Not strategy. Not technology. It is teamwork that remains the ultimate competitive advantage.”",
    quoteAttribution: "— Patrick Lencioni · a leadership book I keep coming back to",
    certifiedLabel: "Certified:",
  },
  projects: {
    heading: "Some stuff I've worked on",
    viewProject: "View project →",
    items: [
      {
        description:
          "Omnichannel AI messaging & CRM platform integrating WhatsApp, Instagram, and Facebook for multi-tenant business clients. Built the multi-tenant AI agent system (LangChain + RAG, per-client personality and knowledge base) and a centralized Meta API OAuth middleware.",
      },
      {
        description:
          "Context-aware Q&A system built on Neo4j + Azure OpenAI, grounding answers in a structured knowledge graph built from legal documents.",
        caption: "internal client work · no public link",
        imageCreditLabel: "Sample graph · Benjamin Prescott",
      },
      {
        description:
          "A simple pokedex app that lets you search for a pokemon and see its details. The fun-and-fundamentals entry.",
      },
    ],
  },
  research: {
    badge: "Peer-reviewed",
    heading: "Research",
    scopusLink: "FIND ME IN SCOPUS →",
    introPrefix:
      "I believe ML shouldn't cost people their privacy. That belief is basically what my published research is about:",
    introHighlight: "federated learning",
    introSuffix: "and privacy-preserving ML.",
    readMore: "Read →",
  },
  education: {
    heading: "Education",
    degrees: [
      "Master's in Engineering, Data Analytics",
      "B.S. Computer Science",
      "B.S. Information & Communication Technologies Management",
    ],
  },
  contact: {
    heading: "Let's connect!",
    intro:
      "Excited to chat? Whether you have a project in mind, want to talk code, or simply want to connect, I'd love to hear from you!",
    shelterTitle: "Run a shelter or nonprofit?",
    shelterText:
      "If you're an animal shelter or a mission-driven nonprofit and you need a hand with tech, please reach out. I'd be honored to help for",
    shelterFreeWord: "free",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sending: "Sending...",
    send: "Send message",
    successMessage: "Thanks for reaching out! I'll get back to you soon.",
  },
  footer: {
    copyright: "© 2026 Ericka Bermúdez · made with 🧡 and my cat Gordo as supervisor.",
    creditsLabel: "Credits & sources",
    picrewCredit: "Profile picture · Picrew",
    catDoodlesCredit: "Cat doodles · HoneyBloomGraphics",
    graphCredit: "Graph diagram · Benjamin Prescott",
  },
};

const es: Translations = {
  nav: {
    links: {
      about: "Sobre mí",
      stack: "Stack",
      leadership: "Liderazgo",
      projects: "Proyectos",
      research: "Investigación",
      contact: "Contacto",
    },
    home: "Inicio",
    downloadCv: "Descargar CV",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchToLight: "Cambiar a tema claro",
    switchToDark: "Cambiar a tema oscuro",
    switchToSpanish: "Cambiar a español",
    switchToEnglish: "Switch to English",
  },
  intro: {
    greeting: "¡Hola! Soy Ericka",
    badge1: "Guarda de gatos",
    badge2: "Desarrollo Full-Stack de IA",
    tagline: "Me gusta resolver problemas junto a otras personas. Soy 70% libros y 30% Monster Energy.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Saluda →",
  },
  about: {
    heading: "Sobre mí",
    bio: "¡Hola! Soy Eri, soluciono problemas normalmente escribiendo código. Creo en el poder del trabajo en equipo y disfruto encontrar cómo encajan todas las piezas. Me importa el buen diseño de sistemas, el código limpio y la IA responsable. Cuando no estoy programando, me encontrarás disfrutando un libro junto a mis gatos.",
    languages: "Español (nativo) · Inglés (fluido, TOEFL iBT 108) · Chino y coreano básico",
    bookRecLabel: "📖 Recomendación de libro",
    bookAuthor: "por Karen Hao",
  },
  stack: {
    heading: "¿Qué hago?",
    intro:
      "Disfruto aprender más que ninguna otra cosa y siempre estoy lista para usar la herramienta correcta para cada trabajo. Este es el stack que más he usado hasta ahora.",
    groups: ["Lenguajes y Frameworks", "IA / ML", "Datos y Nube", "Otros"],
  },
  leadership: {
    badge: "How I roll",
    headingPrefix: "La tecnología siempre se trata de",
    headingHighlight: "las personas",
    intro:
      "Me enfoco en productos que hacen felices a las personas y en construir estructuras que ayuden a crecer a los ingenieros.",
    cards: [
      {
        title: "Liderazgo",
        text: "Nunca me alejo demasiado de la carnita de los proyectos: el equipo, el código, las decisiones técnicas. Los buenos sistemas nacen de equipos que confían entre sí, así que me esfuerzo en crear este ambiente de confianza.",
      },
      {
        title: "Tecnología Responsable",
        text: "La tecnología debería siempre ayudar a las personas: eso no es algo que se de naturalmente, es algo que hay que construir a propósito. Dedico tiempo real a la intersección entre la IA y la ética.",
      },
      {
        title: "Enseñanza",
        text: "Llevo ya algunos años enseñando tecnología; honestamente, quizás sea el mayor impacto que puedo tener, y amo mucho hacerlo. Agradezco poder aportar mi granito de arena a futuros colegas. He enseñado programación, bases de datos, nube, hasta español.",
      },
      {
        title: "Aprendizaje Constante",
        text: "Soy una amante de los libros antes que nada. Lo que realmente me atrae no es el próximo framework o stack tecnológico, sino la investigación, el impacto de la tecnología en la sociedad, y escuchar lo que mentes brillantes están descubriendo en este momento.",
      },
      {
        title: "Diseño de Sistemas",
        text: "Me encanta un sistema que tiene sentido, pero por sí solo no resuelve el problema: solo funciona cuando todo el equipo y el cliente están realmente alineados. Por eso dedico tanta energía a escuchar y traducir como a diseñar.",
      },
    ],
    quote:
      "“No son las finanzas. No es la estrategia. No es la tecnología. El trabajo en equipo sigue siendo la ventaja competitiva definitiva.”",
    quoteAttribution: "— Patrick Lencioni · un libro de liderazgo al que siempre vuelvo",
    certifiedLabel: "Certificaciones:",
  },
  projects: {
    heading: "Algunas cosas en las que he trabajado",
    viewProject: "Ver proyecto →",
    items: [
      {
        description:
          "Plataforma omnicanal de mensajería con IA y CRM que integra WhatsApp, Instagram y Facebook para clientes empresariales multi-tenant. Construí el sistema de agentes de IA multi-tenant (LangChain + RAG, personalidad y base de conocimiento por cliente) y un middleware centralizado de OAuth para la API de Meta.",
      },
      {
        description:
          "Sistema de preguntas y respuestas sensible al contexto, construido sobre Neo4j + Azure OpenAI, que fundamenta las respuestas en un grafo de conocimiento estructurado a partir de documentos legales.",
        caption: "trabajo interno para cliente · sin enlace público",
        imageCreditLabel: "Grafo de muestra · Benjamin Prescott",
      },
      {
        description:
          "Una pokedex sencilla que te permite buscar un pokémon y ver sus detalles. La entrada de diversión y fundamentos.",
      },
    ],
  },
  research: {
    badge: "PEER-REVIEWED",
    heading: "Investigación",
    scopusLink: "ENCUÉNTRAME EN SCOPUS →",
    introPrefix:
      "Creo que el aprendizaje automático no debería costarle la privacidad a las personas. Básicamente, esa creencia es de lo que trata mi investigación publicada:",
    introHighlight: "aprendizaje federado",
    introSuffix: "y aprendizaje automático que preserva la privacidad.",
    readMore: "Leer →",
  },
  education: {
    heading: "Educación",
    degrees: [
      "Maestría en Ingeniería, Análisis de Datos",
      "Licenciatura en Ciencias de la Computación",
      "Licenciatura en Gestión de Tecnologías de Información y Comunicación",
    ],
  },
  contact: {
    heading: "¡Conectemos!",
    intro:
      "¿Platicamos? Ya sea que tengas un proyecto en mente, quieras hablar de código limpio o simplemente conectar, ¡me encantaría saber de ti!",
    shelterTitle: "¿Diriges un refugio u ONG?",
    shelterText:
      "Si eres un refugio de animales o una organización sin fines de lucro con una misión importante y necesitas ayuda con tecnología, contáctame. Será un honor ayudarte",
    shelterFreeWord: "gratis",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Mensaje",
    sending: "Enviando...",
    send: "Enviar mensaje",
    successMessage: "¡Gracias por escribir! Te responderé pronto.",
  },
  footer: {
    copyright: "© 2026 Ericka Bermúdez · hecho con 🧡 y mi gato Gordo como supervisor.",
    creditsLabel: "Créditos y fuentes",
    picrewCredit: "Foto de perfil · Picrew",
    catDoodlesCredit: "Ilustraciones de gatos · HoneyBloomGraphics",
    graphCredit: "Diagrama de grafo · Benjamin Prescott",
  },
};

export const translations: Record<Language, Translations> = { en, es };
