import React from "react";
import { proyectos } from "./Projects/Proyectos";
import { Card } from "./Projects/Card";
export const Projects = () => {
  return (
    <div
      id="Projects"
      className="w-full min-h-screen seccion bg-customGray flex flex-col items-center justify-start pt-5"
    >
      {proyectos.map((el, i) => (
        <Card key={i} title={el.title} description={el.description} img={el.img} link={el.link} index={i}/>
      ))}
    </div>
  );
};
