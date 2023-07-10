import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";
export const Card = ({ title, description, img, link, index, tecnologias }) => {
  const [isInglish, setIsInglish] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      if (navigator?.language.startsWith("en")) {
        setIsInglish(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (router.isReady) {
      if (router.pathname.includes("/En")) {
        setIsInglish(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const [expanded, setExpanded] = useState(0);

  return (
    <div className="w-full h-fit bg-customGray flex flex-col justify-between sm:gap-10 gap-5 px-5 lg:px-40 py-12 flex-1 relative">
      <div className="flex-1 flex flex-col items-start justify-start">
        <h3 className="text-xl md:text-[2.5rem] mb-4 text-white">{title}.</h3>
        {img !== undefined && (
          <div className="rounded-xl bg-customBlue relative">
            <Image src={img} alt={title} className="rounded-xl" />
            <div className="hidden md:absolute opacity-0 hover:opacity-100 p-10 bg-customGray bg-opacity-90 border border-customBlue transition-all duration-[500] rounded-xl left-0 top-0 w-full h-full md:flex flex-col items-center justify-center gap-y-10">
              <p className="px-10 text-customBlue my-auto text-center text-lg">
                {description}
              </p>
              <div className="w-full flex items-end">
                <div className="w-full">
                  <h1 className="text-white text-2xl mb-4">
                    {isInglish ? "Technologies" : "Tecnologías"}
                  </h1>
                  <ul className="w-full flex gap-5">
                    {tecnologias.map((el, i) => (
                      <li
                        key={i}
                        className="px-10 py-2 border border-white text-white backdrop-blur-lg flex gap-5 items-center"
                      >
                        {el.icon !== null && <el.icon className="text-2xl" />}
                        <span>{el.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {link !== undefined && (
                  <a
                    className="bg-customBlue px-10 py-2 text-center cursor-pointer text-white mr-10"
                    href={link}
                    target="_blank"
                  >
                    {isInglish ? "Visit" : "Visitar"}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="bg-customGray rounded-xl w-full h-full flex md:hidden flex-col items-center justify-center mt-10">
          <div className="w-full border border-b-0 border-white">
            <button
              onClick={() => setExpanded(expanded === 2 ? 0 : 2)}
              className="text-white text-2xl w-full text-start px-4 py-2 relative"
            >
              {isInglish ? "Description" : "Descripción"}
              <RxDoubleArrowDown
                className={`absolute right-2 text-2xl top-3 text-white ${
                  expanded === 2 && "rotate-180"
                } transition-transform`}
              ></RxDoubleArrowDown>
            </button>
            {/* <p >
          </p> */}
            <AnimatePresence>
              {expanded === 2 ? (
                <motion.p
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  }}
                  className="px-4 py-5 text-customBlue my-auto text-center text-sm overflow-clip"
                >
                  {description}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="w-full flex md:items-end items-center justify-center md:flex-row flex-col">
            <div className="w-full border border-white mb-5">
              <button
                onClick={() => setExpanded(expanded === 1 ? 0 : 1)}
                className="text-white text-2xl w-full text-start px-4 py-2 relative"
              >
                {isInglish ? "Technologies" : "Tecnologías"}
                <RxDoubleArrowDown
                  className={`absolute right-2 text-2xl top-3 text-white ${
                    expanded === 1 && "rotate-180"
                  } transition-transform`}
                ></RxDoubleArrowDown>
              </button>
              <AnimatePresence>
                {expanded === 1 ? (
                  <motion.ul
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="w-full flex flex-col overflow-clip"
                  >
                    {tecnologias.map((el, i) => (
                      <li
                        key={i}
                        className={`w-full flex items-center justify-center py-2 ${
                          i !== tecnologias.length - 1 && "border-b"
                        } border-white text-white gap-5 relative my-2`}
                      >
                        {el.icon !== null && (
                          <el.icon className="text-2xl absolute left-5" />
                        )}
                        <span>{el.name}</span>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </div>
            {link !== undefined && (
              <a
                className="bg-customBlue px-10 py-2 text-center cursor-pointer text-white mr-10"
                href={link}
                target="_blank"
              >
                {isInglish ? "Visit" : "Visitar"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
