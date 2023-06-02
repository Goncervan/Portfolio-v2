import React from "react";
export const EnglishLinksMobile = ({ setVerNav }) => {
  const links = [
    { id: 0, href: "#Presentation", text: "Presentation" },
    { id: 1, href: "#hero", text: "About Me" },
    { id: 2, href: "#Projects", text: "Projects" },
    { id: 3, href: "#Experience", text: "Experience and Education" },
    { id: 5, href: "#Contact", text: "Contact" },
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
