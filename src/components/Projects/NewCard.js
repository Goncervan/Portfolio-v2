import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "../../../styles/Home.module.css";
import stylesNewCard from "../../../styles/NewCard.module.css";
export const NewCard = ({ title, description, img, link, index }) => {
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
      if (router.pathname.includes("/En")) {
        setIsInglish(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
  return (
    <div className="w-[600px] h-fit rounded-2xl bg-blue-900 relative">
      <a href={link} target="_blank">
        <FiArrowUpRight className="text-[2.5rem] absolute top-3 right-3 text-white cursor-pointer" />
      </a>
      <div className="flex h-fit items-end justify-start absolute top-4 left-3">
        <h4
          className={`w-fit text-3xl relative pl-4 text-white font-semibold ${styles.front}`}
        >
          {title}
          <div className="w-2 h-2 rounded-full bg-white absolute left-0 bottom-2" />
        </h4>
      </div>
      <div className={`w-auto h-full flex px-10 pt-16 pb-10 rounded-lg ${stylesNewCard.parent}`}>
        <Image
          src={img}
          alt="none"
          style={{ objectFit: "contain" }}
          className={`w-full h-auto rounded-lg ${stylesNewCard.image}`}
        />
        <div className={stylesNewCard.behind}></div>
      </div>
    </div>
  );
};
