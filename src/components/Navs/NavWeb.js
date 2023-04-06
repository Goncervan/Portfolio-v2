import React from "react";
export const NavWeb = () => {
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

  return (
    <nav
      id="menu"
      className="w-full hidden sm:flex bg-[#fff] shadow-xl h-[10vh] sticky top-0 overflow-hidden sm:text-lg text-xs"
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
        className="w-[0px] h-[7px] bg-customBlue absolute bottom-0 transition-all"
      ></span>
    </nav>
  );
};
