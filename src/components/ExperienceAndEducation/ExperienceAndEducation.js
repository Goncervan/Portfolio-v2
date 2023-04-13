import React from "react";
import { Experience } from "./Experience";
import { Education } from "./Education";
export const ExperienceAndEducation = () => {
  return (
    <div
      id="Experience"
      className="w-full min-h-[80vh] flex md:flex-row flex-col items-start justify-evenly seccion  pt-10 md:pt-28 bg-customGray px-5 sm:px-0 pb-20"
    >
      <Experience />
      <Education />
    </div>
  );
};
