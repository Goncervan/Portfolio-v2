import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";

export const Accordion = ({ id, title, list, setExpanded, expanded }) => {
  return (
    <div className="w-full border border-white mb-5">
      <button
        onClick={() => setExpanded(expanded === id ? 0 : id)}
        className="text-white text-2xl w-full text-start px-4 py-2 relative"
      >
        {title}
        <RxDoubleArrowDown
          className={`absolute right-2 text-2xl top-3 text-white ${
            expanded === id && "rotate-180"
          } transition-transform`}
        ></RxDoubleArrowDown>
      </button>
      <AnimatePresence>
        {expanded === id ? (
          <motion.ul
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="w-full flex flex-col overflow-clip"
          >
            {list.map((el, i) => (
              <li
                key={i}
                className={`w-full flex items-center justify-center py-2 px-4 ${
                  i !== list.length - 1 && "border-b"
                } border-white text-white text-center gap-5 relative my-2`}
              >
                {el.icon !== null && (
                  <el.icon className="text-2xl absolute left-5" />
                )}
                <span>{el.name}</span>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
