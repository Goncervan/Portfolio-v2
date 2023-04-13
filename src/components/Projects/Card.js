import React from "react";
import Image from "next/image";

export const Card = ({ title, description, img, link, index }) => {
  return (
    <div
      className={`w-full border-y sm:border-b border-white flex ${
        index % 2 === 0
          ? "flex-col md:flex-row"
          : "flex-col md:flex-row-reverse"
      } justify-between sm:gap-0 gap-5 border-opacity-20 px-5 lg:px-40 py-12 flex-1`}
    >
      <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
        <h3 className="text-2xl text-white flex-1">{title}</h3>
        <p className="text-customBlue flex-1 text-center text-lg">{description}</p>
        <a
          className="mx-auto mt-10 bg-customBlue px-10 rounded-xl py-1 hidden sm:inline cursor-pointer text-white"
          href={link}
          target="_blank"
        >
          Visitar
        </a>
      </div>
      <div className="w-full md:w-2/5 flex flex-col items-start justify-start md:h-[275px]">
        {img !== undefined && (
          <div className="border-2 rounded-xl bg-customBlue border-customBlue">
            <Image src={img} alt={title} className="rounded-xl" />
          </div>
        )}
      </div>
      <a
        className="mx-auto bg-customBlue px-10 rounded-xl py-1 inline sm:hidden cursor-pointer text-white"
        href={link}
        target="_blank"
      >
        Visitar
      </a>
    </div>
  );
};
