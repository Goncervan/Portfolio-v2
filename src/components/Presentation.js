import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import FotoPerfil from "../../public/Imagenes/Imagen-portfolio.png";
import { GrMail } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import jsPDF from "jspdf";

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
  }, []);

  const handleDownloadEs = () => {
      let doc = jsPDF("portrait", "px", "a4", false);
      doc.addImage(
        "https://i.ibb.co/WzVsqF3/CV-Gonzalo-Cervan-ES.jpg",
        "JPG",
        0,
        0,
        417,
        653
      );
      doc.save("Gonzalo Cervan Curriculum");
  };

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
                  transition={{ duration: 0.24 }}
                  animate={{ opacity: 1, y: 5 }}
                  exit={{ opacity: 0, y: -100 }}
                  className="absolute w-40 bg-customBlue rounded-sm py-1"
                >
                  Email copied!
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
      <div className="w-full flex flex-col h-auto md:flex-row border-b-2 py-10 border-gray-600 px-10 sm:px-28 relative md:h-[90vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="w-full md:w-2/3 h-auto flex flex-col items-start pt-5 sm:pt-20 justify-center z-[9999]"
        >
          <h1 className="text-[2rem] lg:text-[5rem] text-white font-bold">
            Hola! Soy
          </h1>
          <h1 className="text-[2rem] lg:text-[5rem] italic text-white font-bold">
            Gonzalo Cervan
          </h1>
          <h1
            className={`text-[2.5rem] lg:text-[5rem] text-customBlue font-bold z-[99] ${styles.front}`}
          >
            DESARROLLADOR 
          </h1>
          <h1
            className={`text-[2.5rem] lg:text-[5rem] text-customBlue font-bold z-[99] ${styles.front}`}
          >
            FRONT END 
          </h1>
          <div className="w-full gap-4 mt-4 md:mt-0 md:inline hidden flex-col sm:ml-28 sm:mt-10 sm:mx-auto ">
            <a
              href="#Contact"
              className="w-full md:text-2xl bg-customBlue border-4 border-customBlue text-center text-white rounded-full px-6 py-2 focus:outline-none "
            >
              Contacto
            </a>
            <button
              onClick={() => handleDownloadEs()}
              className="w-full md:w-min md:text-2xl border-4 border-customBlue text-customBlue text-center rounded-full px-6 py-2 focus:outline-none md:ml-10"
            >
              Curriculum
            </button>
          </div>
        </motion.div>
        <div className="w-full h-auto md:absolute right-24 -bottom-10 md:w-3/5 md:h-fit flex items-center justify-center">
          <Image src={FotoPerfil} alt="Imagen" className="w-full md:w-2/3" />
        </div>
        <div className="w-full gap-4 mt-4 md:mt-0 md:hidden flex flex-col sm:ml-28 sm:mt-10 sm:mx-auto ">
          <a
            href="#Contact"
            className="w-full md:text-2xl bg-customBlue border-4 border-customBlue text-center text-white rounded-full px-6 py-2 focus:outline-none "
          >
            Contacto
          </a>
          <button
            onClick={() => handleDownloadEs()}
            className="w-full md:w-min md:text-2xl border-4 border-customBlue text-customBlue text-center rounded-full px-6 py-2 focus:outline-none md:ml-10"
          >
            Curriculum
          </button>
        </div>
      </div>
    </div>
  );
};
