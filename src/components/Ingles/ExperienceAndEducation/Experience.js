import React from "react";
import { JobsCard } from "../../ExperienceAndEducation/JobsCard";
import { jobs } from "./Jobs";
import styles from "../../../../styles/Home.module.css";
export const Experience = () => {
  return (
    <section className="w-full sm:w-1/2 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center gap-x-2 mb-4 sm:mb-10 relative">
        <div className="w-4 h-4 bg-customBlue rounded-full" />
        <h1
          className={`text-3xl h-fit sm:text-[4rem] text-customBlue font-bold uppercase ${styles.front}`}
        >
          Experience
        </h1>
      </div>
      <ol className="w-full flex flex-col items-center justify-center gap-10">
        {jobs.map((trabajo) => (
          <JobsCard
            key={trabajo.id}
            id={trabajo.id}
            posicion={trabajo.posicion}
            nombre={trabajo.nombre}
            inicio={trabajo.inicio}
            final={trabajo.final}
            puntosClave={trabajo.puntosClave}
          />
        ))}
      </ol>
    </section>
  );
};
