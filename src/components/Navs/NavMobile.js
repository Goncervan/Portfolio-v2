import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const NavMobile = () => {
  const [verNav, setVerNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = verNav ? "hidden" : "auto";
  }, [verNav]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setVerNav(!verNav)}
        className="absolute top-2 right-2 rounded-full bg-customPrimaryBlue w-5 h-5 p-5 flex sm:hidden items-center justify-center z-[999]"
      >
        X
      </button>
      <AnimatePresence>
        {verNav ? (
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "just" }}
            exit={{ opacity: 0, x: 1000 }}
            className="fixed left-0 top-0 bg-white w-full h-screen"
          >
            soy el nav!
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
