import React from "react";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";

export const CoursesCard = ({ posicion, institucion, fechas, puntos }) => {
  return (
    <li className="w-full sm:w-2/3 flex flex-col gap-2 border border-customBlue rounded-lg">
      <h1 className="text-2xl italic text-white font-semibold p-4 text-center border-b border-customBlue">{posicion}</h1>
      <h1 className="text-white px-4 py-2">
        {institucion} <span>|</span>
        <span className="text-customBlue"> {fechas}</span>
      </h1>
      <ul className="p-2">
        {puntos.map((punto, i) => (
          <li key={i} className="pl-6 relative text-white">
            <VscDebugBreakpointFunctionUnverified  className="absolute left-0 text-customBlue text-2xl"/> {punto}
          </li>
        ))}
      </ul>
    </li>
  );
};
