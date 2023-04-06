import React from "react";
import { motion } from "framer-motion";
import { SiJavascript } from "react-icons/si";
export const AboutMe = () => {
  return (
    <div
      id="hero"
      className="w-full h-[90vh] bg-customGray flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="w-4/5 flex items-start justify-center gap-10"
      >
        <section className="w-2/5 flex flex-col items-start justify-start">
          <h1 className="text-[45px] text-white font-bold uppercase mb-10 relative">
            <span className="text-customBlue absolute -left-5">. </span>
            Acerca de mí
          </h1>
          <ul className="flex flex-col gap-4 w-full">
            <li>
              <p className="text-white text-xl">
                Mi nombre es Gonzalo Cervan, tengo 21 años y soy de Argentina.
              </p>
            </li>
            <li>
              <p className="text-white text-xl">
                Mis intereses incluyen unirme a un equipo emocionante de gente
                apasionada, que me ayuden a crecer de manera profesional y
                personal y participar de proyectos desafiantes e innovadores.
              </p>
            </li>
            <li>
              <p className="text-white text-xl">
                Aparte de programar me gusta hacer deporte, pasar el tiempo con
                mi familia y amigos y los videojuegos.
              </p>
            </li>
          </ul>
          <button className="ml-20 text-customBlue mt-10 font-semibold border-2 py-2 px-5 border-customBlue hover:scale-110 transition-transform">
            Ver mi CV
          </button>
        </section>
        <section className="w-2/5 h-full flex flex-col items-center justify-start">
          <h1 className="text-[45px] text-white font-bold uppercase relative mb-10">
            <span className="text-customBlue absolute -left-5">. </span>
            Habilidades
          </h1>
          <ul className="w-full flex flex-wrap items-start justify-center gap-5 px-4">
            <li className="text-white text-xl">- Trabajo en equipo</li>
            <li className="text-white text-xl">- Creatividad</li>
            <li className="text-white text-xl">- Atención al detalle</li>
            <li className="text-white text-xl">- Buena comunicación</li>
            <li className="text-white text-xl">- Pensamiento crítico</li>
            <li className="text-white text-xl">- Adaptabilidad</li>
            <li className="text-white text-xl">- Curiosidad</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};
