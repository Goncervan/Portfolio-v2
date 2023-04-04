import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FotoPerfil from "../../public/Imagenes/Foto.jpg";
export const Presentation = () => {
  return (
    <div className="w-full h-[90vh] bg-customDarkBlue flex items-center justify-center flex-col">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.75 }}
        className="text-customLigthBlue font-semibold text-[100px]"
      >
        GONZALO CERVAN
      </motion.h1>
      <ul className="w-full list-none flex items-center justify-center gap-2">
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.75}}
          className="text-3xl text-customSecondaryBlue font-bold"
        >
          Front.
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.75}}
          className="text-3xl text-customSecondaryBlue font-bold"
        >
          End.
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.75}}
          className="text-3xl text-customSecondaryBlue font-bold"
        >
          Developer.
        </motion.li>
      </ul>
    </div>
  );
};
