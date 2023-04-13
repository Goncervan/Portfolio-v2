import React from "react";
import { proyectos } from "./Projects/Proyectos";
import { Card } from "./Projects/Card";
export const Projects = () => {
  return (
    <div
      id="Projects"
      className="w-full min-h-screen seccion bg-customGray flex flex-col items-center justify-start"
    >
      <h1 className="text-3xl inline sm:hidden text-white font-bold uppercase relative my-10 ">
        <span className="text-customBlue absolute -left-3 sm:-left-5">. </span>
        Proyectos
      </h1>
      {proyectos.map((el, i) => (
        <Card
          key={i}
          title={el.title}
          description={el.description}
          img={el.img}
          link={el.link}
          index={i}
        />
      ))}
    </div>
  );
};
