import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FotoPerfil from "../../public/Imagenes/Foto.jpg";
export const AboutMe = () => {
  return (
    <div
      id="hero"
      className="w-full h-[90vh] bg-customDarkBlue flex items-center justify-center gap-10 overflow-x-hidden"
    >
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="w-2/5 flex items-end justify-end"
      >
        <Image
          src={FotoPerfil}
          width={200}
          height={200}
          alt="Foto de perfil de Gonzalo Cervan"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="w-3/5 flex items-start justify-start flex-col"
      >
        <h1 className="text-[45px] text-customLigthBlue mb-10 font-bold">
          Acerca de mí
        </h1>
        <ul className="flex flex-col gap-4 w-2/3">
          <li>
            <p className="text-customLigthBlue text-xl">
              Mi nombre es Gonzalo Cervan, tengo 21 años y soy de Argentina.
            </p>
          </li>
          <li>
            <p className="text-customLigthBlue text-xl">
              Mis intereses incluyen unirme a un equipo emocionante de gente
              apasionada, que me ayuden a crecer de manera profesional y
              personal y participar de proyectos desafiantes e innovadores.
            </p>
          </li>
          <li>
            <p className="text-customLigthBlue text-xl">
              Aparte de programar me gusta hacer deporte, pasar el tiempo con mi familia y amigos y los videojuegos.
            </p>
          </li>
        </ul>
        <button className="ml-20 text-customLigthBlue mt-10 font-semibold border-2 py-2 px-5 border-customLigthBlue hover:scale-110 transition-transform">
          Ver mi CV
        </button>
      </motion.div>
    </div>
  );
};
