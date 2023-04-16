import React from "react";
import { JobsCard } from "../../ExperienceAndEducation/JobsCard";
import { jobs } from './Jobs'
export const Experience = () => {
  return (
    <section className="w-full sm:w-1/2 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-[35px] text-white font-bold uppercase mb-4 sm:mb-10 relative">
        <span className="text-customBlue absolute -left-3 sm:-left-5">. </span>
        Experience
      </h1>
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
