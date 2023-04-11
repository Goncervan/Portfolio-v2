import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { LinksMobile } from "./LinksMobile";
export const NavMobile = () => {
  const [verNav, setVerNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = verNav ? "hidden" : "auto";
  }, [verNav]);

  return (
    <>
      {/* <button
        type="button"
        onClick={() => setVerNav(!verNav)}
        className="fixed top-2 right-2 rounded-full bg-customPrimaryBlue w-auto h-auto flex sm:hidden items-center justify-center z-[999]"
      > */}
      <AnimatePresence>
        {verNav ? (
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "just" }}
            exit={{ opacity: 0, x: 1000 }}
            className="fixed left-0 top-0 backdrop-blur-md bg-customGray bg-opacity-40 w-full h-screen"
          >
            <LinksMobile setVerNav={setVerNav}/>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {verNav ? (
          <motion.button
            className="fixed top-2 right-2"
            onClick={() => setVerNav(!verNav)}
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "just" }}
            exit={{ opacity: 0, x: 1000 }}
          >
            <AiOutlineClose className="text-customBlue w-10 h-10" />
          </motion.button>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {!verNav ? (
          <motion.button
            onClick={() => setVerNav(!verNav)}
            className="fixed top-2 right-2 z-[9999999999]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "just" }}
            exit={{ opacity: 0, x: -100 }}
          >
            <BiMenuAltRight className="text-customBlue w-10 h-10 z-[9999999999]" />
          </motion.button>
        ) : null}
      </AnimatePresence>
      {/* </button> */}
    </>
  );
};
