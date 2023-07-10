import React from "react";
import { motion } from "framer-motion";
import { Skills } from "./Skills";
import { DownloadPdf } from "./DownloadPdf";
import styles from "../../../../styles/Home.module.css";
export const EnglishAboutMe = () => {
  return (
    <div
      id="hero"
      className="w-full h-auto min-h-[90vh] bg-customGray pt-10 flex flex-col items-center justify-center overflow-hidden sm:pb-10 px-10 sm:px-0"
    >
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        className="w-full sm:w-4/5 flex flex-col sm:flex-row items-start justify-between gap-10"
      >
        <section className="w-full sm:w-2/5 flex flex-col items-center justify-center sm:items-start sm:justify-start">
          <div className="w-full flex items-center justify-center gap-x-2 mb-4 sm:mb-10 relative">
            <div className="w-4 h-4 bg-customBlue rounded-full" />
            <h1
              className={`text-3xl h-auto sm:text-[4rem] text-customBlue font-bold uppercase ${styles.front}`}
            >
              About me
            </h1>
          </div>
          <ul className="flex flex-col gap-4 w-full">
            <li>
              <p className="text-white text-base sm:text-xl">
                My name is Gonzalo Cervan, I am 21 years old and I am from
                Argentina.
              </p>
            </li>
            <li>
              <p className="text-white text-base sm:text-xl">
                I am looking to join an exciting team of passionate people, who
                can help me grow both professionally and personally, and
                participate in challenging and innovative projects.
              </p>
            </li>
            <li>
              <p className="text-white text-base sm:text-xl">
                I am excited to find an opportunity where I can apply my skills
                and passion for programming.
              </p>
            </li>
          </ul>
          <DownloadPdf />
        </section>
        <section className="w-full sm:w-2/5 h-full flex flex-col items-center justify-start">
          <div className="w-full flex items-center justify-center gap-x-2 mb-4 sm:mb-10 relative">
            <div className="w-4 h-4 bg-customBlue rounded-full" />
            <h1
              className={`text-3xl h-fit sm:text-[4rem] text-customBlue font-bold uppercase ${styles.front}`}
            >
              Skills
            </h1>
          </div>
          <ul className="w-full flex flex-wrap items-start justify-center gap-5 sm:px-4">
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Native Spanish
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Autonomous
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Teamwork
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Creativity
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Curiosity
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              SCRUM
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Attention to detail
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Adaptability
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Good communication
            </li>
            <li className="text-white text-base sm:text-xl border border-white rounded-full px-4 py-1 cursor-default hover:bg-white hover:text-black transition-all">
              Critical thinking
            </li>
          </ul>
        </section>
      </motion.div>
      <div className="w-full flex items-center justify-center mt-20 gap-x-2 relative">
        <div className="w-4 h-4 bg-customBlue rounded-full" />
        <h1
          className={`text-3xl h-fit sm:text-[4rem] text-customBlue font-bold uppercase ${styles.front}`}
        >
          Technologies
        </h1>
      </div>
      <Skills />
    </div>
  );
};
