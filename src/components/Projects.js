import React from "react";
import { proyectos } from "./Projects/Proyectos";
import { Card } from "./Projects/Card";
import { NewCard } from "./Projects/NewCard";
// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, EffectCreative, A11y } from 'swiper/modules';
export const Projects = () => {
  return (
    <div
      id="Projects"
      className="w-full h-screen seccion bg-customGray flex flex-col items-center justify-start pt-20"
    >
      <h1 className="text-3xl inline sm:hidden text-white font-bold uppercase relative my-10 ">
        <span className="text-customBlue absolute -left-3 sm:-left-5">. </span>
        Proyectos
      </h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, EffectCreative]}
        slidesPerView={1}
        mousewheel={true}
        className="w-3/4 h-fit"
        autoplay
        spaceBetween={500}
        navigation 
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        pagination={{ clickable: true }}
      >
        {proyectos.map((el, i) => (
          <SwiperSlide key={i} className="h-fit flex items-center justify-center">
            <Card
              title={el.title}
              description={el.description}
              img={el.img}
              link={el.link}
              tecnologias={el.tecnologias}
              index={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </div>
  );
};
