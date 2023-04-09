import React, { useState } from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiGitlab,
  SiTypescript,
} from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
export const Skills = () => {
  const [show, setShow] = useState("");
  const tecnologias = [
    { text: "HTML", icon: SiHtml5, id: 1 },
    { text: "CSS", icon: SiCss3, id: 2 },
    { text: "React Js", icon: SiReact, id: 3 },
    { text: "Javascript", icon: SiJavascript, id: 4 },
    { text: "Typescript", icon: SiTypescript, id: 5 },
    { text: "Tailwind", icon: SiTailwindcss, id: 6 },
    { text: "Next Js", icon: SiNextdotjs, id: 7 },
    { text: "Framer", icon: SiFramer, id: 8 },
    { text: "Gitlab", icon: SiGitlab, id: 9 },
  ];
  return (
    <div
      id="Skills"
      className="w-full flex flex-row sm:flex-nowrap flex-wrap gap-10 sm:gap-0 items-center justify-center my-10 sm:mt-10 px-5 sm:px-20 h-auto sm:h-40"
    >
      {tecnologias.map((el) => (
        <>
          <motion.div
            key={el.id}
            onHoverStart={() => setShow(el.text)}
            onHoverEnd={() => setShow("")}
            className="flex-1 hidden sm:flex flex-col items-center justify-center relative"
          >
            <el.icon className="text-[50px] text-white flex-1 relative transition-all cursor-pointer" />
            <AnimatePresence>
              {show === el.text ? (
                <motion.p
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "just", duration: 0.2 }}
                  exit={{ opacity: 0, y: -200 }}
                  className="text-white absolute -bottom-8"
                >
                  {el.text}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </motion.div>
          <el.icon className="text-[50px] text-white relative transition-all cursor-pointer" />
        </>
      ))}
    </div>
  );
};
