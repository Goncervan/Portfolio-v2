import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import { ColorRing } from "react-loader-spinner";
import jsPDF from "jspdf";
export const DownloadPdf = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  const handleDownloadEn = () => {
    setLoading(true);
    setTimeout(() => {
      let doc = jsPDF("portrait", "px", "a4", false);
      doc.addImage(
        "https://i.ibb.co/cYcqKfQ/CV-Gonzalo-Cervan-EN.jpg",
        "JPG",
        0,
        0,
        417,
        653
      );
      doc.save("Gonzalo Cervan Resume");
      setLoading(false);
      setModal(false);
    }, 1000);
  };
  const handleDownloadEs = () => {
    setLoading(true);
    setTimeout(() => {
      let doc = jsPDF("portrait", "px", "a4", false);
      doc.addImage(
        "https://i.ibb.co/WzVsqF3/CV-Gonzalo-Cervan-ES.jpg",
        "JPG",
        0,
        0,
        417,
        653
      );
      doc.save("Gonzalo Cervan Curriculum");
      setLoading(false);
      setModal(false);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="self-center bg-customBlue mt-10 text-xl text-white rounded-full py-2 px-10 hover:scale-110 transition-transform"

      >
        Download Resume
      </button>
      <AnimatePresence>
        {modal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "just" }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 backdrop-blur-md w-screen h-screen z-[9999] flex items-center justify-center"
          >
            <AnimatePresence>
              {modal ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "just", delay: 0.2 }}
                  exit={{ scale: 0 }}
                  className="w-1/4 h-fit px-5 py-10 bg-customBlue rounded-xl shadow-2xl flex items-center justify-center flex-col gap-5 relative"
                >
                  <button
                    onClick={() => setModal((prev) => !prev)}
                    className="absolute top-1 right-1 text-white text-3xl"
                  >
                    <AiFillCloseCircle />
                  </button>
                  <h1 className="text-3xl italic font-semibold text-white">
                    {loading ? ('Downloading...') : ('Download in...')}
                  </h1>
                  <div className="w-full flex items-center justify-center gap-5">
                    {loading ? (
                      <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                          "#0e6b78",
                          "#fff",
                          "#0e6b78",
                          "#fff",
                          "#0e6b78",
                        ]}
                      />
                    ) : (
                      <>
                        <button
                          onClick={() => handleDownloadEs()}
                          className="flex-1 border-2 border-white py-2 text-white"
                        >
                          Spanish
                        </button>
                        <button
                          onClick={() => handleDownloadEn()}
                          className="flex-1 border-2 border-white py-2 text-white"
                        >
                          English
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
