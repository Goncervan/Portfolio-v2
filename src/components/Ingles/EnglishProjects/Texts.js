import BannerPqrs from "../../../../public/Proyectos/Pqrs.png";
import BannerCleaner from "../../../../public/Proyectos/Cleaner.png";
import BannerWeeki from "../../../../public/Proyectos/Weeki.png";
import BannerIunctus from "../../../../public/Proyectos/Iunctus.png";
import BannerElecta from "../../../../public/Proyectos/Electa.png";
import BannerElectaAdmin from "../../../../public/Proyectos/Electa-admin.png";
import BannerFormArea2 from "../../../../public/Proyectos/FormArea2.png";
import BannerAsistenciaArea2 from "../../../../public/Proyectos/Asistencia.png";
import BannerVoceros from "../../../../public/Proyectos/Voceros.png";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiGitlab,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

export const proyectos = [
  {
    title: "Area Cuadrada PQRS",
    description: [
      { name: "Development of frontend individually.", icon: null },
      { name: "Web and mobile layout.", icon: null },
      { name: "Development of multi-step forms.", icon: null },
      {
        name: "Implemented branching in forms to adapt to different situations and collect specific information.",
        icon: null,
      },
    ],
    link: "https://pqrs.urban72.co/",
    tecnologias: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Typescript", icon: SiTypescript },
    ],
    img: BannerPqrs,
  },
  {
    title: "Cleaner",
    description: [
      { name: "Development of frontend individually.", icon: null },
      { name: "Web and mobile layout.", icon: null },
      {
        name: "Implementation of a booking system based on available dates and times.",
        icon: null,
      },
      {
        name: "Shopping cart to allow users to add products and services.",
        icon: null,
      },
      {
        name: "Controlled forms to ensure proper collection of user information.",
        icon: null,
      },
      ,
      {
        name: "Added payment methods to provide a complete and secure user experience.",
        icon: null,
      },
    ],
    tecnologias: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Typescript", icon: SiTypescript },
      { name: "Wompi", icon: null },
    ],
    img: BannerCleaner,
  },
  {
    title: "Weeki",
    description: [
      {
        name: "Development of functionalities individually.",
        icon: null,
      },
      {
        name: "Implementation of search and booking system for apartments.",
        icon: null,
      },
      {
        name: "Integration of Cloudbeds API to display availability and rates.",
        icon: null,
      },
      {
        name: "Development of controlled forms to collect user data.",
        icon: null,
      },
      {
        name: "Implementation of payment methods to provide a secure experience",
        icon: null,
      },
      {
        name: "Registration and login for user creation and automatic reservations based on user information.",
        icon: null,
      },
      {
        name: "Collaborated as a team in the layout for web and mobile versions.",
        icon: null,
      },
    ],
    link: "https://www.weeki.rent/",
    tecnologias: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Typescript", icon: SiTypescript },
      { name: "Wompi", icon: null },
    ],
    img: BannerWeeki,
  },
  {
    title: "Iunctus",
    description: [
      { name: "Web layout.", icon: null },
      { name: "Implementation of backend functionalities.", icon: null },
      {
        name: "Admin user functionalities to create, edit, and delete bills, legislative agendas, congressman profiles, and app users.",
        icon: null,
      },
      {
        name: "Search and tracking of elements created by the admin.",
        icon: null,
      },
      {
        name: "Worked as a team to coordinate the integration of different functionalities.",
        icon: null,
      },
    ],
    link: "https://www.tracking.iunctus.com.co/",
    tecnologias: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Typescript", icon: SiTypescript },
    ],
    img: BannerIunctus,
  },
  {
    title: "Form Area Cuadrada",
    description: [
      { name: "Layout of new web and mobile form.", icon: null },
      { name: "Form control and functionality.", icon: null },
      { name: "The form was replicated on multiple pages.", icon: null },
    ],
    link: "https://urban72.co/",
    tecnologias: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Typescript", icon: SiTypescript },
    ],
    img: BannerFormArea2,
  },
  {
    title: "Attendance Form Area Cuadrada",
    description: [
      {
        name: "Planning and layout of web and mobile form template, considering it would be used on different pages.",
        icon: null,
      },
      { name: "Form control and functionality.", icon: null },
      {
        name: "Creating the template facilitated its implementation and replication on multiple pages.",
        icon: null,
      },
    ],
    link: "https://asistencia.vallartaenchia.co/",
    tecnologias: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Typescript", icon: SiTypescript },
    ],
    img: BannerAsistenciaArea2,
  },
  {
    title: "Electa",
    description: [
      {
        name: "Development working as a team with other developers.",
        icon: null,
      },
      { name: "Web layout.", icon: null },
      { name: "Implementation of backend functionalities.", icon: null },
      {
        name: "Development of user creation and registration system through different authentication options.",
        icon: null,
      },
      {
        name: "Implementation of real-time chat with SOCKET.IO.",
        icon: null,
      },
      {
        name: "Contributed to the creation of surveys and charts.",
        icon: null,
      },
    ],
    link: undefined,
    tecnologias: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Typescript", icon: SiTypescript },
      { name: "Socket.Io", icon: SiSocketdotio },
    ],
    img: BannerElecta,
  },
  {
    title: "Electa Admin",
    description: [
      {
        name: "Development working as a team with another developer.",
        icon: null,
      },
      { name: "Web layout.", icon: null },
      { name: "Login functionality.", icon: null },
      { name: "Implementation of backend functionalities.", icon: null },
      {
        name: "Development of multimedia posts, news, surveys, challenges, and WhatsApp groups creation system.",
        icon: null,
      },
    ],
    link: undefined,
    tecnologias: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Typescript", icon: SiTypescript },
      { name: "Socket.Io", icon: SiSocketdotio },
    ],
    img: BannerElectaAdmin,
  },
  {
    title: "Voceros",
    description: [
      {
        name: "Web and mobile layout of a platform for candidate spokespersons.",
        icon: null,
      },
      {
        name: "Controlled registration and login form.",
        icon: null,
      },
      { name: "File upload with native drag and drop.", icon: null },
      { name: "Controlled form for creating new records", icon: null },
    ],
    link: undefined,
    tecnologias: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Typescript", icon: SiTypescript },
    ],
    img: BannerVoceros,
  },
];
