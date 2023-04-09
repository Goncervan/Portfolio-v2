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
    { text: "HTML", icon: SiHtml5 },
    { text: "CSS", icon: SiCss3 },
    { text: "React Js", icon: SiReact },
    { text: "Javascript", icon: SiJavascript },
    { text: "Typescript", icon: SiTypescript },
    { text: "Tailwind", icon: SiTailwindcss },
    { text: "Next Js", icon: SiNextdotjs },
    { text: "Framer", icon: SiFramer },
    { text: "Gitlab", icon: SiGitlab },
  ];
  return (
    <div
      id="Skills"
      className="w-full flex flex-row items-center justify-center mt-10 px-20 h-40"
    >
      {tecnologias.map((el) => (
        <motion.div
          key={el.text}
          onHoverStart={() => setShow(el.text)}
          onHoverEnd={() => setShow("")}
          className="flex-1 flex flex-col items-center justify-center relative"
        >
          <el.icon className="text-[50px] text-white flex-1 relative transition-all cursor-pointer" />
          <AnimatePresence>
            {show === el.text ? (
              <motion.p
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "just", duration:.2 }}
                exit={{ opacity: 0, y: -500 }}
                className="text-white absolute -bottom-8"
              >
                {el.text}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
