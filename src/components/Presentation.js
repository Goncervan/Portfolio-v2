import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FotoPerfil from "../../public/Imagenes/Foto.jpg";
export const Presentation = () => {
  return (
    <div id="Presentation" className="w-full h-[70vh] sm:h-[90vh] bg-customGray flex items-start justify-center flex-col px-10 sm:px-28">
      <div className="w-full hidden absolute top-0 left-0 border-b-2 border-gray-600 h-14 sm:flex justify-between items-center pr-20 pl-10">
        <p className="text-white font-semibold text-xlg">
          Gonzalo Cervan
        </p>
        <p className="text-white font-semibold sm:inline hidden sm:text-lg">
          gonfedecer@gmail.com
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.6 }}
        className="w-full sm:w-1/2 h-full flex flex-col items-start pt-5 sm:pt-20 justify-center"
      >
        <p className="text-white sm:hidden inline font-semibold text-[2rem]">
          Gonzalo Cervan
        </p>
        <h1 className="text-[3rem] sm:text-[5rem] text-white font-bold">
          FRONT
        </h1>
        <h1 className="text-[3rem] sm:text-[5rem] italic text-white font-bold">
          END <span className="font-normal">{"</>"}</span>
        </h1>
        <h1 className="text-[3rem] sm:text-[5rem] text-white font-bold">
          DEVELOPER
        </h1>
        <button className="text-xl text-customBlue border-2 border-customBlue rounded-full px-4 py-1 focus:outline-none mx-auto sm:ml-28 mt-10">
          Contacto
        </button>
      </motion.div>
      <div className="w-1/2"></div>
    </div>
  );
};
{
  /* <motion.h1
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.75 }}
className="text-white font-semibold text-[100px]"
>
GONZALO CERVAN
</motion.h1>
<ul className="w-full list-none flex items-center justify-center gap-2">
<motion.li
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1.75}}
  className="text-3xl text-customBlue font-bold"
>
  Front
</motion.li>
<motion.li
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 1.75}}
  className="text-3xl text-customBlue font-bold"
>
  End
</motion.li>
<motion.li
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2, duration: 1.75}}
  className="text-3xl text-customBlue font-bold"
>
  Developer
</motion.li>
</ul> */
}
