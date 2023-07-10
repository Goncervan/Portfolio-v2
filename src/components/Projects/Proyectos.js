import BannerPqrs from "../../../public/Proyectos/Pqrs.png";
import BannerCleaner from "../../../public/Proyectos/Cleaner.png";
import BannerWeeki from "../../../public/Proyectos/Weeki.png";
import BannerIunctus from "../../../public/Proyectos/Iunctus.png";
import BannerElecta from "../../../public/Proyectos/Electa.png";
import BannerElectaAdmin from "../../../public/Proyectos/Electa-admin.png";
import BannerFormArea2 from "../../../public/Proyectos/FormArea2.png";
import BannerAsistenciaArea2 from "../../../public/Proyectos/Asistencia.png";
import BannerVoceros from "../../../public/Proyectos/Voceros.png";
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
      { name: "Desarrollo del frontend de manera individual.", icon: null },
      { name: "Maquetación web y mobile.", icon: null },
      { name: "Desarrollo de formularios con múltiples pasos.", icon: null },
      {
        name: "Implementé ramificaciones en los formularios para adaptarse a diferentes situaciones y recopilar información específica.",
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
      { name: "Desarrollo del frontend de manera individual.", icon: null },
      { name: "Maquetación web y mobile.", icon: null },
      {
        name: "Implementación del sistema de reservas según fechas y horarios disponibles.",
        icon: null,
      },
      {
        name: "Carrito de compras que permitiera a los usuarios añadir productos y servicios.",
        icon: null,
      },
      {
        name: "Formularios controlados para garantizar la correcta recopilación de información de los usuarios.",
        icon: null,
      },
      ,
      {
        name: "Añadí métodos de pago para brindar una experiencia de usuario completa y segura.",
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
        name: "Desarrollo de funcionalidades de manera individual.",
        icon: null,
      },
      {
        name: "Implementación del sistema de búsqueda y reserva de apartamentos.",
        icon: null,
      },
      {
        name: "Integración de la API de Cloudbeds para mostrar disponibilidad y tarifas.",
        icon: null,
      },
      {
        name: "Desarrollo de formularios controlados para recopilación de datos de los usuarios.",
        icon: null,
      },
      {
        name: "Implementación de métodos de pago para brindar una experiencia de segura",
        icon: null,
      },
      {
        name: "Registro e inicio de sesión para la creación de usuarios y reservas automáticas basadas en la información del usuario.",
        icon: null,
      },
      {
        name: "Colaboré en equipo en la maquetación para la versión web y mobile.",
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
      { name: "Maquetación web.", icon: null },
      { name: "Implementación de funcionalidades del backend.", icon: null },
      {
        name: "Funcionalidades del usuario administrador para crear, editar y eliminar: proyectos de ley, agendas legislativas, perfiles de congresistas y usuarios de la app.",
        icon: null,
      },
      {
        name: "Busqueda y seguimiento de los elementos creados por el administrador.",
        icon: null,
      },
      {
        name: "Trabajé en equipo para coordinar la integración de las diferentes funcionalidades.",
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
    title: "Formularios Area Cuadrada",
    description: [
      { name: "Maquetación de nuevo formulario web y mobile.", icon: null },
      { name: "Control de formulario y funcionalidad del mismo.", icon: null },
      { name: "Se replicó el formulario en varias páginas.", icon: null },
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
    title: "Formularios de asistencia Area Cuadrada",
    description: [
      {
        name: "Planeación y maquetación de plantilla web y mobile de un formulario, teniendo en cuenta que este se usaría en diferentes páginas",
        icon: null,
      },
      { name: "Control del formulario y su funcionalidad.", icon: null },
      {
        name: "La creación de la plantilla facilitó su implementación y replicación en varías páginas.",
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
        name: "Desarrollo trabajando en equipo con otros desarrolladores.",
        icon: null,
      },
      { name: "Maquetación web.", icon: null },
      { name: "Implementación de funcionalidades del backend.", icon: null },
      {
        name: "Desarrollo del sistema de creación de usuarios y registro mediante diferentes opciones de autenticación.",
        icon: null,
      },
      {
        name: "Implementación de chat en tiempo real con SOCKET.IO.",
        icon: null,
      },
      { name: "Contribuí con la creación de encuestas y gráficos", icon: null },
    ],
    // " encuestas y gráficos para enriquecer la experiencia de usuario en la red social.",
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
        name: "Desarrollo trabajando en equipo con otro desarrollador.",
        icon: null,
      },
      { name: "Maquetación web.", icon: null },
      { name: "Inicio de sesión.", icon: null },
      { name: "Implementación de funcionalidades del backend.", icon: null },
      {
        name: "Desarrollo del sistema de creación de publicaciones multimedia, noticias, encuestas, retos y grupos de WhatsApp.",
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
        name: "Maquetación web y mobile de una plataforma para que voceros de candidatos.",
        icon: null,
      },
      {
        name: "Formulario de registro e inicio de sesión controlado.",
        icon: null,
      },
      { name: "Subida de archivos con drag and drop nativo.", icon: null },
      { name: "Formulario controlado para crear nuevos registros", icon: null },
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
