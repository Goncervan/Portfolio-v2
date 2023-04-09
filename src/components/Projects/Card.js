import React from "react";
import Image from "next/image";
export const Card = ({ title, description, img, link, index }) => {
  return (
    <div
      className={`w-full border-b border-white flex ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } justify-between border-opacity-20 px-40 py-12`}
    >
      <div className="w-2/5 flex flex-col items-center justify-center h-[275px]">
        <h3 className="text-2xl text-white flex-1">{title}</h3>
        <p className="text-customBlue flex-1 text-center">{description}</p>
        <a
          className="mx-auto mt-10 bg-customBlue px-10 rounded-xl py-1 cursor-pointer text-white"
          href={link}
          target="_blank"
        >
          Visitar
        </a>
      </div>
      <div className="w-2/5 flex flex-col items-start justify-start h-[275px]">
        {img !== undefined && (
          <div className="border-2 rounded-xl bg-customBlue border-customBlue">
            <Image src={img} alt={title} className="rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
};
