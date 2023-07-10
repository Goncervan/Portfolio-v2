import React from "react";
import { CoursesCard } from "../../ExperienceAndEducation/CoursesCard";
import { cursos } from "./Courses";
import styles from "../../../../styles/Home.module.css"
export const Education = () => {
  return (
    <section className="w-full sm:w-1/2 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center gap-x-2 mb-4 sm:mb-10 relative">
        <div className="w-4 h-4 bg-customBlue rounded-full" />
        <h1
          className={`text-3xl h-fit sm:text-[4rem] text-customBlue font-bold uppercase ${styles.front}`}
        >
          Education
        </h1>
      </div>
      <ol className="w-full flex flex-col items-center justify-center gap-6 sm:gap-10">
        {cursos.map((curso) => (
          <CoursesCard key={curso.key} {...curso} />
        ))}
      </ol>
    </section>
  );
};
