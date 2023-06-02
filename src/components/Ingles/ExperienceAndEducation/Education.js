import React from "react";
import { CoursesCard } from "../../ExperienceAndEducation/CoursesCard";
import { cursos } from "./Courses";
export const Education = () => {
  return (
    <section className="w-full sm:w-1/2 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-[35px] text-white font-bold uppercase mb-4 sm:mb-10 relative">
        <span className="text-customBlue absolute -left-3 sm:-left-5">. </span>
        Education
      </h1>
      <ol className="w-full flex flex-col items-center justify-center gap-6 sm:gap-10">
        {cursos.map(curso => (
          <CoursesCard key={curso.key} {...curso}/>
        ))}
      </ol>
    </section>
  );
};
