import React, { useRef, useState } from "react";
import { AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { GrMailOption } from "react-icons/gr";
import { motion } from "framer-motion";
import styles from "../../styles/Contact.module.css";
import emailjs from "emailjs-com";
import { ColorRing } from "react-loader-spinner";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ighpywo",
        "template_j5x0jag",
        form.current,
        "_CSI2FYbP0lxTWEJF"
      )
      .then(
        () => {
          setLoading(false);
          setResult("Mensaje enviado! Gracias!");
        },
        (error) => {
          setLoading(false);
          setError(error.text);
        }
      );
    e.target.reset();
  };
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div
      id="Contact"
      className="w-full bg-bgBlack seccion flex items-end justify-evenly p-20"
    >
      <div className="w-1/3 flex items-center justify-center pb-10 bg-customBlue">
        <AiOutlineLinkedin className="text-3xl text-white" />
        <AiOutlineWhatsApp className="text-3xl text-white" />
        <GrMailOption className="text-3xl text-white" />
      </div>
      {error.length === 0 && result.length === 0 && (
        <form
          onSubmit={(e) => sendEmail(e)}
          ref={form}
          className="w-1/3 h-[450px] flex items-center justify-center flex-col pb-10 gap-10"
        >
          <h1 className="text-white text-2xl font-semibold mb-5">CONTACTAME</h1>
          <div className="relative group w-full">
            <input
              type="text"
              required
              name="name"
              className={`${styles.inputName} w-full px-4 py-2 border rounded-md text-customBlue bg-transparent border-customBlue focus:border-white valid:border-white focus:outline-none`}
            />
            <span
              className={`${styles.spanName} absolute left-2 bottom-2 text-customBlue group-focus:bottom-8 transition-all`}
            >
              Nombre y Apellido
            </span>
          </div>
          <div className="relative group w-full mt-2">
            <input
              type="text"
              required
              name="email"
              className={`${styles.inputEmail} w-full px-4 py-2 border rounded-md text-customBlue bg-transparent border-customBlue focus:border-white valid:border-white focus:outline-none`}
            />
            <span
              className={`${styles.spanEmail} absolute left-2 bottom-2 text-customBlue group-focus:bottom-8 transition-all`}
            >
              Correo
            </span>
          </div>
          <div className="relative group w-full mt-4">
            <textarea
              type="text"
              required
              name="message"
              className={`${styles.inputMessage} w-full h-40 px-4 py-2 border rounded-md text-customBlue bg-transparent border-customBlue focus:border-white valid:border-white focus:outline-none resize-none`}
            />
            <span
              className={`${styles.spanMessage} absolute left-2 top-2 text-customBlue group-focus:bottom-8 transition-all`}
            >
              Mensaje
            </span>
          </div>
          {loading ? (
            <div className="w-full flex items-center justify-center">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#1AB1C6", "#fff", "#1AB1C6", "#fff", "#1AB1C6"]}
              />
            </div>
          ) : (
            <input
              type="submit"
              value="Enviar"
              className="w-1/2 bg-customBlue text-white py-1 rounded-full"
            />
          )}
        </form>
      )}
      {error.length > 0 && (
        <div className="w-1/3 h-[450px] flex items-center justify-center">
          <p className="text-white text-2xl">{error}</p>
        </div>
      )}
      {result.length > 0 && (
        <div className="w-1/3 h-[450px] flex items-center justify-center">
          <p className="text-white text-2xl">{result}</p>
        </div>
      )}
    </div>
  );
};
