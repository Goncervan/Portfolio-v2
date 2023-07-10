import React from "react";
import { motion } from "framer-motion";
import { Skills } from "./Skills";
import { DownloadPdf } from "./DownloadPdf";
import styles from '../../../styles/Home.module.css'
export const AboutMe = () => {
  return (
    <div
      id="hero"
      className="w-full pt-20 bg-customGray flex flex-col items-center justify-center overflow-hidden px-10 sm:px-0"
    >
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="w-full sm:w-4/5 flex flex-col sm:flex-row items-start justify-between gap-10"
      >
        <section className="w-full sm:w-2/5 flex flex-col items-center justify-center sm:items-start sm:justify-start">
          <div className="w-full flex items-center justify-start gap-x-2 mb-4 sm:mb-10 relative">
            <div className="w-4 h-4 bg-customBlue rounded-full" />
            <h1 className={`text-3xl h-fit sm:text-[4rem] text-customBlue font-bold uppercase ${styles.front}`}>
              Acerca de mí
            </h1>
          </div>
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
                Estoy entusiasmado por encontrar una oportunidad en la que pueda
                aplicar mis habilidades y pasión por la programación.
              </p>
            </li>
          </ul>
        </section>
        <section className="w-full sm:w-2/5 h-full flex flex-col items-center justify-start">
          <div className="w-full flex items-center justify-center gap-x-2 mb-4 sm:mb-10 relative">
            <div className="w-4 h-4 bg-customBlue rounded-full" />
            <h1 className={`text-3xl h-fit sm:text-[4rem] text-customBlue font-bold uppercase ${styles.front}`}>
              Habilidades
            </h1>
          </div>
          <ul className="w-full flex flex-wrap items-start justify-center gap-5 sm:px-4">
            <li className="flex items-center justify-center text-center text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Ingles Avanzado
            </li>
            <li className="flex items-center justify-center text-center text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Autónomo
            </li>
            <li className="flex items-center justify-center text-center text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Trabajo en equipo
            </li>
            <li className="flex items-center justify-center text-center text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Creatividad
            </li>
            <li className="flex items-center justify-center text-center text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Curiosidad
            </li>
            <li className="flex items-center justify-center text-center text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              SCRUM
            </li>
            <li className="flex items-center justify-center text-center text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Atención al detalle
            </li>
            <li className="flex items-center justify-center text-center text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Adaptabilidad
            </li>
            <li className="flex items-center justify-center text-center text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Buena comunicación
            </li>
            <li className="flex items-center justify-center text-center text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Pensamiento crítico
            </li>
          </ul>
        </section>
      </motion.div>
      <div className="w-full flex items-center justify-center mt-20 gap-x-2 relative">
            <div className="w-4 h-4 bg-customBlue rounded-full" />
            <h1 className={`text-3xl h-fit sm:text-[4rem] text-customBlue font-bold uppercase ${styles.front}`}>
              Tecnologías
            </h1>
          </div>
      <Skills />
    </div>
  );
};
