import React from "react";
import { motion } from "framer-motion";
import { Skills } from "./Skills";
import { DownloadPdf } from "./DownloadPdf";
export const AboutMe = () => {
  return (
    <div
      id="hero"
      className="w-full min-h-[90vh] bg-customGray flex flex-col items-center justify-center overflow-hidden sm:pb-10 px-10 sm:px-0"
    >
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="w-full sm:w-4/5 flex flex-col sm:flex-row items-start justify-between gap-10"
      >
        <section className="w-full sm:w-2/5 flex flex-col items-center justify-center sm:items-start sm:justify-start">
          <h1 className="text-3xl sm:text-[35px] text-white font-bold uppercase mb-4 sm:mb-10 relative">
            <span className="text-customBlue absolute -left-3 sm:-left-5">
              .{" "}
            </span>
            Acerca de mí
          </h1>
          <ul className="flex flex-col gap-4 w-full">
            <li>
              <p className="text-white text-base sm:text-xl">
                Mi nombre es Gonzalo Cervan, tengo 21 años y soy de Argentina.
              </p>
            </li>
            <li>
              <p className="text-white text-base sm:text-xl">
                Estoy buscando unirme a un equipo emocionante de gente
                apasionada, que pueda ayudarme a crecer tanto profesional como
                personalmente, y participar en proyectos desafiantes e
                innovadores.
              </p>
            </li>
            <li>
              <p className="text-white text-base sm:text-xl">
                Además de programar, disfruto de hacer deporte, pasar tiempo con
                mi familia y amigos, y jugar videojuegos. Creo que es importante
                tener un equilibrio entre el trabajo y la vida personal para
                poder rendir al máximo en ambas áreas. Estoy entusiasmado por
                encontrar una oportunidad en la que pueda aplicar mis
                habilidades y pasión por la programación, mientras también me
                permita disfrutar de mis intereses fuera del trabajo.
              </p>
            </li>
          </ul>
        <DownloadPdf/>
        </section>
        <section className="w-full sm:w-2/5 h-full flex flex-col items-center justify-start">
          <h1 className="text-3xl sm:text-[35px] text-white font-bold uppercase relative mb-10">
            <span className="text-customBlue absolute -left-3 sm:-left-5">
              .{" "}
            </span>
            Habilidades
          </h1>
          <ul className="w-full flex flex-wrap items-start justify-center gap-5 sm:px-4">
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Ingles Avanzado
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Trabajo en equipo
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Creatividad
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Curiosidad
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Atención al detalle
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Adaptabilidad
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Buena comunicación
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Pensamiento crítico
            </li>
          </ul>
        </section>
      </motion.div>
      <h1 className="text-3xl sm:text-[35px] text-white font-bold uppercase relative mt-20">
        <span className="text-customBlue absolute -left-3 sm:-left-5">. </span>
        Tecnologias
      </h1>
      <Skills />
    </div>
  );
};
