// import React from "react";
// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";
// import { aparecerLinks, aparecerNav } from "../animations/Nav";
// export const Nav = () => {
//   const enlaces = [
//     { text: "Experiencia", id: "#Experience" },
//     { text: "Projectos", id: "#Projects" },
//     { text: "Habilidades", id: "#Skills" },
//     { text: "Educación", id: "#Education" },
//     { text: "Contacto", id: "#Contact" },
//   ];

//   return (
//     <motion.nav
//       // initial={aparecerNav.initial}
//       // animate={aparecerNav.animate}
//       // transition={aparecerNav.transition}
//       className="w-full bg-red-200 py-4 flex items-center justify-center gap-20"
//     >
//       <AnimatePresence>
//         {enlaces.map((el, i) => (
//           <div key={el.id} className="w-24 py-4 relative">
//             <Link href={el.id}>
//               <motion.button
//                 initial={{ top: -100 }}
//                 animate={{ top: 0 }}
//                 transition={{ duration: 0.5, delay: i * 0.2 }}
//                 className="absolute"
//               >
//                 {el.text}
//               </motion.button>
//             </Link>
//           </div>
//         ))}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };
import React, { useEffect } from "react";

export const Nav = () => {
  // useEffect(()=>{
  if (typeof window !== "undefined") {
    const menu = document?.getElementById("menu");
    const indicador = document?.getElementById("indicador");
    const secciones = document?.querySelectorAll(".seccion");

    let tamanoIndicador = menu?.querySelector("a").offsetWidth;
    indicador.style.width = `${tamanoIndicador}px`;
    let indexSeccionActiva;
    // ------------------------------------------ Obsevador ------------------------------------------
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting === true) {
            indexSeccionActiva = [...secciones].indexOf(entrada.target);
            indicador.style.transform = `translate(${
              tamanoIndicador * indexSeccionActiva
            }px)`;
          }
        });
      },
      {
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0.2,
      }
    );

    // Obsevador para el Hero
    observer.observe(document.getElementById("hero"));

    secciones.forEach((seccion) => observer.observe(seccion));

    // Cambiar tamaño del indicador dependiendo del tamaño de pantalla
    const onResize = () => {
      // Obtenemos el tamaño nuevo del indicador
      tamanoIndicador = menu?.querySelector("a").offsetWidth;
      // Le ponemos el tamaño nuevo al indicador
      indicador.style.width = `${tamanoIndicador}px`;
      // Ajustamos el lugar del indicador
      indicador.style.transform = `translate(${
        tamanoIndicador * indexSeccionActiva
      }px)`;
    };
    window.addEventListener("resize", onResize);
  }
  // },[])

  return (
    <nav
      id="menu"
      className="w-full flex bg-[#fff] shadow-xl h-[10vh] sticky top-0 overflow-hidden"
    >
      <a
        href="#Projects"
        className="flex-1 flex items-center justify-center text-center uppercase text-[#000] transition-all font-semibold hover:bg-[#f0f0f0] cursor-pointer"
      >
        Proyectos
      </a>
      <a
        href="#Experience"
        className="flex-1 flex items-center justify-center text-center uppercase text-[#000] transition-all font-semibold hover:bg-[#f0f0f0] cursor-pointer"
      >
        Experiencia
      </a>
      <a
        href="#Skills"
        className="flex-1 flex items-center justify-center text-center uppercase text-[#000] transition-all font-semibold hover:bg-[#f0f0f0] cursor-pointer"
      >
        Habilidades
      </a>
      <a
        href="#Education"
        className="flex-1 flex items-center justify-center text-center uppercase text-[#000] transition-all font-semibold hover:bg-[#f0f0f0] cursor-pointer"
      >
        Educación
      </a>
      <a 
        href="#Contact"
      className="flex-1 flex items-center justify-center text-center uppercase text-[#000] transition-all font-semibold hover:bg-[#f0f0f0] cursor-pointer">
        Contacto
      </a>
      <span
        id="indicador"
        className="w-[0px] h-[7px] bg-[#113cfc] absolute bottom-0 transition-all"
      ></span>
    </nav>
  );
};
