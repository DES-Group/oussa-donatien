import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nextjs,
  efa,
  tripguide,
  threejs,
  symfony,
  mairie, 
  reactNative
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "À Propos",
  },
  {
    id: "experience",
    title: "Expériences",
  },
  {
    id: "projects",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  }
];


const services = [
  {
    title: "Analyser des projets",
    icon: mobile,
  },
  {
    title: "Créer et coder des interfaces utilisateurs",
    icon: web,
  },
  {
    title: "Mettre en place le backend",
    icon: creator,
  },
  {
    title: "Créer et utiliser des APIs",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Symfony",
    icon: symfony,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur web PHP/Symfony",
    company_name: "Freelance",
    icon: symfony,
    iconBg: "#fff",
    date: "Novembre 2018 - Mai 2020",
    points: [
      "Expertise en PHP/Symfony.",
      "Développement d'applications web robustes.",
      "Gestion efficace des bases de données.",
      "Résolution de problèmes et débogage.",
    ],
  },
  {
    title: "Développeur frontend React.js",
    company_name: "Freelance",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Juin 2020 - Septembre 2021",
    points: [
      "Maîtrise de React & React Toolkit.",
      "Connaissance des technologies front-end.",
      "Développement d'applications réactives.",
      "Utilisation des APIs."
    ],
  },
  {
    title: "Développeur Full stack Next.js & React.js",
    company_name: "Shopify",
    icon: nextjs,
    iconBg: "#fff",
    date: "Septembre 2021 - Aujourd'hui",
    points: [
      "Expertise en React et Next.js",
      "Développement d'applications web modernes et performantes",
      "Gestion avancée de l'état de l'application",
      "Capacité à créer des expériences utilisateur dynamiques et réactives"
    ],
  },
  {
    title: "Développeur mobile React-Native",
    company_name: "Freelance",
    icon: reactNative,
    iconBg: "#fff",
    date: "Juin 2022 - Aujourd'hui",
    points: [
      "Développement d'applications mobiles modernes et performantes.",
      "Création d'expériences utilisateur dynamiques et réactives.",
      "Optimisation des performances et intégration fluide avec les API et services backend.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "En tant que développeur, Donatien excelle dans la création de solutions techniques élégantes et innovantes, démontrant une expertise remarquable et un engagement sans faille envers la qualité et la réussite des projets.",
    name: "Luc De PIERRE",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Dans toute ma carrière, je n'ai jamais rencontré un développeur web qui se soucie vraiment du succès de ses clients comme le fait Donatien. Son dévouement sans faille envers la satisfaction et la réussite de ses clients est véritablement remarquable.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Suite à l'optimisation de notre site par Donatien, notre trafic a augmenté de 50%, démontrant son expertise inégalée en matière de développement web. Nous sommes extrêmement reconnaissants pour son travail exceptionnel et son impact positif sur notre entreprise.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Plateforme web de l'église la Foi Apostolique",
    description:
      "Le site de l'Église La Foi Apostolique, francophone, propose des informations sur l'église, ses ressources, événements, jeunesse et contacts.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: efa,
    source_code_link: "#",
  },
  {
    name: "Plateforme numérique de la mairie de Sô-ava",
    description:
      "La plateforme numérique de la mairie de Sô-Ava présente la municipalité, ses services, la cité lacustre avec ses attractions touristiques, ainsi que les actualités locales.",
    tags: [
      {
        name: "symfony",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "blue-text-gradient",
      },
    ],
    image: mairie,
    source_code_link: "https://github.com/DES-Group/so-ava.git",
  },
  {
    name: "Snapgram",
    description:
      "Snapgram est un réseau social exclusif pour les développeurs, offrant un espace pour partager du code, des astuces et des discussions techniques. Les fonctionnalités incluent les mises à jour de statut, la participation à des groupes thématiques, etc",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
