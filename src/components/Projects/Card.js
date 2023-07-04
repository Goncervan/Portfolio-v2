import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export const Card = ({ title, description, img, link, index }) => {
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
    <div
      className={`w-full border-y sm:border-b border-white flex ${
        index % 2 === 0
          ? "flex-col md:flex-row"
          : "flex-col md:flex-row-reverse"
      } justify-between sm:gap-10 gap-5 border-opacity-20 px-5 lg:px-40 py-12 flex-1`}
    >
      <div className="flex-1 w-full md:w-2/5 flex flex-col items-center justify-center">
        <h3 className="text-2xl text-white">{title}</h3>
        <p className="text-customBlue my-auto text-center text-lg">
          {description}
        </p>
        {link !== undefined && (
          <a
            className="mx-auto mt-10 bg-customBlue px-10 rounded-xl py-1 hidden sm:inline cursor-pointer text-white"
            href={link}
            target="_blank"
          >
            {isInglish ? "Visit" : "Visitar"}
          </a>
        )}
      </div>
      <div className="flex-1 flex flex-col items-start justify-start">
        {img !== undefined && (
          <div className="border-2 rounded-xl bg-customBlue border-customBlue">
            <Image src={img} alt={title} className="rounded-xl" />
          </div>
        )}
      </div>
      {link !== undefined && (
        <a
          className="mx-auto bg-customBlue px-10 rounded-xl py-1 inline sm:hidden cursor-pointer text-white"
          href={link}
          target="_blank"
        >
          {isInglish ? "Visit" : "Visitar"}
        </a>
      )}
    </div>
  );
};
