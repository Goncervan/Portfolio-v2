import React from "react";
import { motion } from "framer-motion";
import { container, listItemEven, listItemOdd } from "../../animations/Nav";
export const LinksMobile = ({setVerNav}) => {
  const links = [
    { id: 0, href: "#Presentation", text: "Presentación" },
    { id: 1, href: "#Hero", text: "Acerca de mí" },
    { id: 2, href: "#Projects", text: "Proyectos" },
    { id: 3, href: "#Experience", text: "Experiencia" },
    { id: 4, href: "#Education", text: "Educación" },
    { id: 5, href: "#Contact", text: "Contacto" },
  ];
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full flex flex-col h-full items-center justify-center py-40 gap-4"
    >
      {links.map((el, i) => (
        <motion.li
          variants={i % 2 === 0 ? listItemEven : listItemOdd}
          key={el.id}
          className="w-full flex items-center justify-center flex-1 border-y bg-customGray border-customBlue text-white"
        >
          <a onClick={()=>setVerNav(prev => !prev)} href={el.href}>{el.text}</a>
        </motion.li>
      ))}
    </motion.ul>
  );
};