import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
export const JobsCard = ({
  id,
  posicion,
  nombre,
  inicio,
  final,
  puntosClave,
}) => {
  return (
    <li
      key={id}
      className="w-full flex flex-col items-start justify-center gap-4 border border-customBlue rounded-xl text-white pb-10"
    >
      <h4 className="w-full py-5 text-2xl font-semibold flex items-center justify-center border-b border-customBlue ">
        {posicion}
      </h4>
      <div className="w-full flex flex-col px-5">
        <h2 className="text-2xl italic">{nombre}</h2>
        <h3 className="text-base font-semibold text-customBlue">
          {inicio} - {final}
        </h3>
      </div>
      <div className="w-full flex flex-col gap-2 px-5">
        <span className="text-xl underline underline-offset-2">
          Responsabilidades:
        </span>
        <ul className="w-full flex flex-col items-start justify-center gap-2">
          {puntosClave.map((punto, i) => (
            <li key={i} className="w-full text-left relative pl-4">
              <VscDebugBreakpointLogUnverified className="absolute left-0 top-1 text-customBlue" />
              <span>{punto}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};