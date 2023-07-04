import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import FotoPerfil from "../../public/Imagenes/Imagen-portfolio.png";
import { GrMail } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export const Presentation = () => {
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard
      .writeText("gonfedecer@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        return;
      });
  };

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      if (navigator?.language.startsWith("en")) {
        router.push("En");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div
      id="Presentation"
      className="w-full h-fit pb-10 bg-customGray flex items-start justify-center flex-col "
    >
      <div className="w-full hidden absolute top-0 left-0 border-b-2 border-gray-600 h-14 sm:flex justify-between items-center pr-20 pl-10 px-10 sm:px-28">
        <p className="text-white font-semibold text-xlg">Gonzalo Cervan</p>
        <div className="flex gap-8 items-center">
          <button className="relative" onClick={handleClick}>
            <GrMail className="text-white text-3xl" />
            <AnimatePresence>
              {copied ? (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  transition={{duration:.24}}
                  animate={{ opacity: 1, y: 5 }}
                  exit={{ opacity: 0, y: -100 }}
                  className="absolute w-40 bg-customBlue rounded-sm py-1"
                >
                  Email copiado!
                </motion.div>
              ) : null}
            </AnimatePresence>
          </button>
          <a href="https://www.linkedin.com/in/gonzalo-cervan/" target="_blank">
            <BsLinkedin className="text-white text-2xl" />
          </a>
          <a href="https://github.com/Goncervan" target="_blank">
            <BsGithub className="text-white text-2xl" />
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row border-b-2 pt-10 border-gray-600 px-10 sm:px-28">
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
            Hola! soy
          </h1>
          <h1 className="text-[3rem] sm:text-[5rem] italic text-white font-bold">
            Gonzalo Cervan, 
          </h1>
          <h1 className="text-[3rem] sm:text-[5rem] text-white font-bold">
            FrontEnd Developer
          </h1>
          <a href="#Contact" className="text-2xl bg-customBlue text-white rounded-full px-6 py-2 focus:outline-none mx-auto sm:ml-28 mt-10">
            Contacto
          </a>
        </motion.div>
        <div className="w-full sm:w-1/2 h-full relative flex items-end justify-center ">
          <Image src={FotoPerfil} alt="Imagen" className="w-2/3" />
        </div>
      </div>
    </div>
  );
};
