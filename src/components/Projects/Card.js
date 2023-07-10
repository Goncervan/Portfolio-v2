import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Accordion } from "./Accordion";
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
    <div className="w-full bg-customGray flex flex-col justify-between sm:gap-10 gap-5 px-5 lg:px-40 py-12 flex-1 relative">
      <div className="flex-1 flex flex-col items-start justify-start">
        <h3 className="text-xl md:text-[2.5rem] mb-4 text-white">{title}.</h3>
        {img !== undefined && (
          <div className="rounded-xl bg-customBlue relative">
            <Image src={img} alt={title} className="rounded-xl" />
          </div>
        )}
        <div className="bg-customGray rounded-xl w-full h-full flex flex-col items-center justify-center mt-10">
          <Accordion id={1} list={description} title={isInglish ? 'Responsabilites:' : 'Responsabilidades:'} setExpanded={setExpanded} expanded={expanded}/>
          <Accordion id={2} list={tecnologias} title={isInglish ? 'Technologies:' : 'Tecnologías:'} setExpanded={setExpanded} expanded={expanded}/>
        </div>
      </div>
    </div>
  );
};
