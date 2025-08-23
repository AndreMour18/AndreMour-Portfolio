import Smartly from "./assets/images/smartly.png";
import Hotfloor from "./assets/images/hotfloor.webp";
import UniSearch from "./assets/images/unisearch.png";

const logotext = "ANDRE MOURA";
const meta = {
  title: "Andre Moura",
  description:
    "Meu nome é Andre, e atualmente atuo com desenvolvedor front‑end no grupo Smartly",
};

const introdata = {
  title: "Olá, eu sou André Moura",
  animated: {
    first: "Apaixonado por tecnologia e inovação",
    second: "Crio websites responsivos e modernos",
    third: "Desenvolvo aplicativos que facilitam vidas",
  },
  description:
    "Sou desenvolvedor com 2 anos de experiência em React, React Native. Vamos conversar sobre o seu próximo projeto?",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "Um pouco sobre mim",
  aboutme:
    "Sou André Moura, desenvolvedor front‑end com 2 anos de experiência construindo soluções web e mobile. " +
    "Especializei‑me em React, React Native para criar aplicações em tempo real. " +
    "Adoro transformar ideias em interfaces intuitivas, otimizar desempenho e trabalhar em equipe. " +
    "Busco sempre aprender novas tecnologias e adotar as melhores práticas para entregar valor real aos usuários.",
};
const worktimeline = [
  {
    jobtitle: "Desenvolvedor Front-end",
    where: "Smartly - Curitiba",
    date: "2025",
  },
  {
    jobtitle: "Estágio desenvolvedor Front-end",
    where: "Smartly - Curitiba",
    date: "2024",
  },
];

const skills = [
  {
    name: "Typescript",
    value: 90,
  },
  {
    name: "React Native",
    value: 85,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "Next.js",
    value: 70,
  },
  {
    name: "Node.js",
    value: 60,
  },
  {
    name: "Python",
    value: 40,
  },
];

const services = [
  {
    title: "Design de UI & UX",
    description:
      "Criação de interfaces intuitivas e atraentes, com foco na experiência do usuário e melhores práticas de usabilidade.",
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Construção de websites responsivos e performance‑driven usando React, Next.js e integração com AWS para aplicações escaláveis.",
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Desenvolvimento de apps nativos e híbridos em React Native, com funcionalidades offline, notificações push e otimização de performance.",
  },
];

const dataportfolio = [
  {
    img: Smartly,
    description:
      "Aplicativo de gerenciamento inteligente de dispositivos IoT em tempo real.",
    link: "https://play.google.com/store/apps/details?id=com.smartlybrasil&hl=pt_BR&pli=1",
  },
  {
    img: Hotfloor,
    description:
      "Aplicativo de controle e monitoramento de temperatura para sistemas de piso aquecido.",
    link: "https://play.google.com/store/apps/details?id=br.com.smartlybrasil&hl=pt_BR",
  },
  {
    img: UniSearch,
    description:
      "Aplicativo acadêmico para estudantes da universidade Unicuritiba.",
    link: "https://github.com/AndreMour/UniSearch",
  },
];

const contactConfig = {
  YOUR_EMAIL: "andremourdev@outlook.com",
  YOUR_FONE: "(41) 9 9848-6650",
  description:
    "Estou sempre aberto a novos desafios! Se você tem um projeto interessante ou quer trocar uma ideia sobre tecnologia, envie uma mensagem.",
  // creat an emailjs.com accountaaaa
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/AndreMour",
  linkedin: "https://linkedin.com/in/andre-moura-b82267268",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
