import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FotoPerfil from "../../public/Imagenes/Foto.jpg";
export const AboutMe = () => {
  return (
    <div
      id="hero"
      className="w-full h-[90vh] bg-bgBlack flex items-center justify-center overflow-hidden"
    >
 
      
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="w-4/5 flex items-center justify-center gap-10"
      >
        <Image
          src={FotoPerfil}
          width={200}
          height={200}
          alt="Foto de perfil de Gonzalo Cervan"
        />
      <div className="w-2/5 flex flex-col items-start justify-start">
        <h1 className="text-[45px] text-customBlue mb-10 font-bold">
          Acerca de mí
        </h1>
        <ul className="flex flex-col gap-4 w-full">
          <li>
            <p className="text-customBlue text-xl">
              Mi nombre es Gonzalo Cervan, tengo 21 años y soy de Argentina.
            </p>
          </li>
          <li>
            <p className="text-customBlue text-xl">
              Mis intereses incluyen unirme a un equipo emocionante de gente
              apasionada, que me ayuden a crecer de manera profesional y
              personal y participar de proyectos desafiantes e innovadores.
            </p>
          </li>
          <li>
            <p className="text-customBlue text-xl">
              Aparte de programar me gusta hacer deporte, pasar el tiempo con mi familia y amigos y los videojuegos.
            </p>
          </li>
        </ul>
        <button className="ml-20 text-customBlue mt-10 font-semibold border-2 py-2 px-5 border-customBlue hover:scale-110 transition-transform">
          Ver mi CV
        </button>
      </div>
      </motion.div>
    </div>
  );
};
