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
  meta,
  tesla,
  shopify,
  efa,
  jobit,
  tripguide,
  threejs,
  symfony,
  mairie
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
    title: "Projects",
  },
  {
    id: 'blog',
    title: 'Blog'
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Développeur web",
    icon: web,
  },
  {
    title: "Développeur mobile Flutter",
    icon: mobile,
  },
  {
    title: "Développeur Full Stack",
    icon: creator,
  },
  {
    title: "Ingénieur d'IA",
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
    title: "Développeur web",
    company_name: "Freelance",
    icon: symfony,
    iconBg: "#fff",
    date: "Mars 2019 - Avril 2021",
    points: [
      "Expert dans le développement et la maintenance d'applications web, avec une expertise particulière dans l'utilisation synergique de Symfony, React.js et Next.js.",
      "Collaborer avec des équipes interfonctionnelles, notamment des concepteurs, des chefs de produits et d'autres développeurs, pour créer des produits de haute qualité.",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre navigateurs.",
      "Participer aux révisions de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur mobile Flutter",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Janvier 2021 - Février 2022",
    points: [
      "Développeur mobile expérimenté spécialisé dans Flutter œuvrant à la création et à la maintenance d'applications de qualité supérieure.",
      "Travail en étroite collaboration avec des équipes pluridisciplinaires, alliant les compétences des designers, des chefs de produit et des développeurs, pour créer des produits remarquables et hautement fonctionnels.",
      "Création d'expériences utilisateur fluides grâce à la mise en œuvre de designs réactifs et à la garantie d'une compatibilité sans faille sur différents navigateurs et dispositifs.",
    ],
  },
  {
    title: "Développeur Full stack",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Janvier 2022 - Janvier 2023",
    points: [
      "Développeur Full Stack aguerri, maîtrisant les technologies telles que Symfony, React.js et Next.js pour créer des applications web et mobiles innovantes.",
      "Collaboration étroite au sein d'équipes pluridisciplinaires pour concevoir et mettre en œuvre des produits de haute qualité, alliant expertise back-end et front-end.",
      "Implémentation de solutions réactives pour une expérience utilisateur fluide et une compatibilité multiplateforme, en tirant parti de mon expertise complète en développement full stack.",
    ],
  },
  {
    title: "Ingénieur d'IA",
    company_name: "Shopify",
    icon: meta,
    iconBg: "#383E56",
    date: "Janvier 2022 - Janvier 2024",
    points: [
      "En tant que développeur Full Stack spécialisé dans l'Intelligence Artificielle (IA), mon expertise s'étend à la conception de solutions technologiques axées sur l'analyse des données et l'IA.",
      "Je travaille en étroite collaboration avec des équipes pluridisciplinaires pour créer des produits innovants qui intègrent des fonctionnalités avancées d'analyse des données et d'IA.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "En utilisant des technologies telles que Symfony, React.js et Next.js côté frontend, combinées à des frameworks d'IA côté backend, je développe des solutions robustes et évolutives.",
      "Mon implication dans les revues de code et la fourniture de retours constructifs visent à garantir la qualité et l'efficacité des solutions IA que nous développons, tout en veillant à ce qu'elles répondent aux besoins spécifiques de nos clients."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "En tant que développeur, Donatien excelle dans la création de solutions techniques élégantes et innovantes, démontrant une expertise remarquable et un engagement sans faille envers la qualité et la réussite des projets.",
    name: "SOGBO Luc",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Dans toute ma carrière, je n'ai jamais rencontré un développeur web qui se soucie vraiment du succès de ses clients comme le fait Rick. Son dévouement sans faille envers la satisfaction et la réussite de ses clients est véritablement remarquable.",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
