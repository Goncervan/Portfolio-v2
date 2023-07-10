import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
export const JobsCard = ({
  id,
  posicion,
  nombre,
  inicio,
  final,
  puntosClave,
}) => {
  const [isInglish, setIsInglish] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      if (navigator?.language.startsWith("en")) {
        setIsInglish(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    if(router.isReady){
      setIsInglish(router.pathname === '/En')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[router.isReady])
  return (
    <li
      key={id}
      className="w-full sm:w-4/5 flex flex-col items-start justify-center gap-4 sm:border border-customBlue rounded-xl text-white pb-10"
    >
      <h4 className="w-full py-5 text-2xl font-semibold flex items-center justify-center border-b border-customBlue ">
        {posicion}
      </h4>
      <div className="w-full flex sm:flex-row flex-col items-center gap-5 px-5">
        <h2 className="text-2xl italic">{nombre}</h2>
        <h3 className="text-base font-semibold text-customBlue">
          {inicio} - {final}
        </h3>
      </div>
      <div className="w-full flex flex-col gap-2 sm:px-5">
        <span className="text-xl underline underline-offset-2">
          {isInglish ? 'Responsibilities' : 'Responsabilidades:'}
        </span>
        <ul className="w-full flex flex-col items-start justify-center gap-2">
          {puntosClave.map((punto, i) => (
            <li key={i} className="w-full text-left relative pl-4">
              <VscDebugBreakpointLogUnverified className="absolute left-0 top-1 text-customBlue" />
              <span className="text-base">{punto}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
