import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
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

  return (
    <div className="w-full bg-customGray flex flex-col justify-between sm:gap-10 gap-5 px-5 lg:px-40 py-12 flex-1 relative">
      <div className="flex-1 flex flex-col items-start justify-start">
        <h3 className="text-[2.5rem] mb-4 text-white">{title}.</h3>
        {img !== undefined && (
          <div className="rounded-xl bg-customBlue relative">
            <Image src={img} alt={title} className="rounded-xl" />
            <div className="absolute opacity-0 hover:opacity-100 p-10 bg-customGray bg-opacity-90 border border-customBlue transition-all duration-[500] rounded-xl left-0 top-0 w-full h-full flex flex-col items-center justify-center gap-y-10">
              <p className="px-10 text-customBlue my-auto text-center text-lg">
                {description}
              </p>
              <div className="w-full flex items-end">
                <div className="w-full">
                  <h1 className="text-white text-2xl mb-4">Tecnologías</h1>
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
      </div>
    </div>
  );
};
