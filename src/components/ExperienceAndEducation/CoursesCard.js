import React from "react";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";

export const CoursesCard = ({ posicion, institucion, fechas, puntos }) => {
  return (
    <li className="w-full sm:w-2/3 flex flex-col gap-2">
      <h1 className="text-2xl italic text-white font-semibold underline">{posicion}</h1>
      <h1 className="text-white">
        {institucion} <span>|</span>
        <span className="text-customBlue"> {fechas}</span>
      </h1>
      <ul>
        {puntos.map((punto, i) => (
          <li key={i} className="pl-6 relative text-white">
            <VscDebugBreakpointFunctionUnverified  className="absolute left-0 text-customBlue text-2xl"/> {punto}
          </li>
        ))}
      </ul>
    </li>
  );
};
