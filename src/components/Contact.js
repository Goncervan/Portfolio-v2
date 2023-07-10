import React, { useRef, useState, useEffect } from "react";
import { AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import styles from "../../styles/Contact.module.css";
import emailjs from "emailjs-com";
import { ColorRing } from "react-loader-spinner";
import { useRouter } from "next/router";
import stylesHome from "../../styles/Home.module.css"
export const Contact = () => {
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

  useEffect(() => {
    if (router.isReady) {
      setIsInglish(router.pathname === "/En");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

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
          if (isInglish) {
            setResult("Message sent! Thank you!");
          } else {
            setResult("Mensaje enviado! Gracias!");
          }
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
      className="w-full bg-customGray h-fit seccion flex flex-col sm:flex-row items-end justify-evenly p-10 sm:p-20"
    >
      <div className="w-full sm:w-fit h-auto sm:h-[450px] flex items-center justify-start flex-col py-10 gap-5 sm:gap-10">
        <div className="w-fit flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-x-2 mb-4 sm:mb-10 relative">
            <div className="w-4 h-4 bg-customBlue rounded-full" />
            <h1 className={`text-3xl h-fit sm:text-[4rem] text-customBlue font-bold uppercase ${stylesHome.front}`}>
            {isInglish ? "Contact" : "Contacto"}
            </h1>
          </div>
          <h2 className="text-white text-xl mb-5">
            {isInglish
              ? "Let's create something incredible!"
              : "Creemos algo increible!"}
          </h2>
        </div>
        <ul className="w-full sm:w-full flex flex-col">
          <li className="flex-1">
            <a
              className="cursor-pointer flex items-center justify-center gap-4 px-5 py-2"
              target="_blank"
              href="https://www.linkedin.com/in/gonzalo-cervan/"
            >
              <AiOutlineLinkedin className="text-[30px] text-white flex-1" />
              <span className="text-white flex-1">LinkedIn</span>
            </a>
          </li>
          <li className="w-full border-b border-gray-400 my-4"></li>
          <li className="flex-1">
            <a
              className="cursor-pointer flex items-center justify-center gap-4px-5 py-2"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=543516767860&text=Hola Gonzalo!&type=phone_number"
            >
              <AiOutlineWhatsApp className="text-3xl text-white flex-1" />
              <span className="text-white flex-1">WhatsApp</span>
            </a>
          </li>
          <li className="w-full border-b border-gra-400 my-4"></li>
          <li className="flex-1">
            <a
              className="cursor-pointer flex items-center justify-center gap-4 px-5 py-2"
              target="_blank"
              href="mailto:gonfedecer@gmail.com"
            >
              <GoMail className="text-3xl text-white flex-1" />
              <span className="text-white flex-1">Correo</span>
            </a>
          </li>
        </ul>
      </div>
      {error.length === 0 && result.length === 0 && (
        <form
          onSubmit={(e) => sendEmail(e)}
          ref={form}
          className="w-full sm:w-1/3 h-auto sm:h-[450px] flex items-center justify-center flex-col pt-10 sm:py-10 gap-10"
        >
          <div className="relative group w-full">
            <input
              type="text"
              required
              name="name"
              className={`${styles.inputName} w-full px-4 py-2 border-b text-white bg-transparent border-gray-400 focus:border-white valid:border-white focus:outline-none`}
            />
            <span
              className={`${styles.spanName} absolute left-2 bottom-2 text-gray-400 group-focus:bottom-8 transition-all`}
            >
              {isInglish ? "Full Name" : "Nombre y Apellido"}
            </span>
          </div>
          <div className="relative group w-full mt-2">
            <input
              type="text"
              required
              name="email"
              className={`${styles.inputEmail} w-full px-4 py-2 border-b text-white bg-transparent border-gray-400 focus:border-white valid:border-white focus:outline-none`}
            />
            <span
              className={`${styles.spanEmail} absolute left-2 bottom-2 text-gray-400 group-focus:bottom-8 transition-all`}
            >
              {isInglish ? "Email" : "Correo"}
            </span>
          </div>
          <div className="relative group w-full mt-4">
            <textarea
              type="text"
              required
              name="message"
              className={`${styles.inputMessage} w-full px-4 h-8 border-b text-white bg-transparent border-gray-400 focus:border-white valid:border-white focus:outline-none resize-none`}
            />
            <span
              className={`${styles.spanMessage} absolute left-2 bottom-4 text-gray-400 group-focus:bottom-8 transition-all`}
            >
              {isInglish ? "Message" : "Mensaje"}
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
              value={isInglish ? "Send" : "Enviar"}
              className="w-3/4 sm:w-1/2 bg-customBlue sm:text-base text-lg text-white py-1 rounded-full cursor-pointer focus:outline-none focus:scale-110 transition-transform"
            />
          )}
        </form>
      )}
      {error.length > 0 && (
        <div className="w-full sm:w-1/3 h-auto sm:h-[450px] flex items-center justify-center gap-0">
          <p className="text-white text-2xl">{error}</p>
        </div>
      )}
      {result.length > 0 && (
        <div className="w-full sm:w-1/3 h-auto sm:h-[450px] flex items-center justify-center gap-0">
          <p className="text-white text-2xl">{result}</p>
        </div>
      )}
    </div>
  );
};
