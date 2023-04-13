import React from "react";
import { motion } from "framer-motion";
import { container, listItemEven, listItemOdd } from "../../animations/Nav";
export const LinksMobile = ({ setVerNav }) => {
  const links = [
    { id: 0, href: "#Presentation", text: "Presentación" },
    { id: 1, href: "#hero", text: "Acerca de mí" },
    { id: 2, href: "#Projects", text: "Proyectos" },
    { id: 3, href: "#Experience", text: "Experiencia y Educación" },
    { id: 5, href: "#Contact", text: "Contacto" },
  ];
  return (
    <ul className="w-full flex flex-col h-full items-center justify-center py-40 gap-4">
      {links.map((el, i) => (
        <li
          key={el.id}
          className="w-full flex items-center justify-center flex-1 border-y bg-customGray border-customBlue text-white"
        >
          <a onClick={() => setVerNav((prev) => !prev)} href={el.href}>
            {el.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
