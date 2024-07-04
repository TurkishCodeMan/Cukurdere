"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Bandrol from "@/shared/Bandrol";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative z-0 shadow-md bg-cover bg-center min-h-screen flex items-center justify-center text-white">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, Scrollbar, A11y]}
        navigation
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          className="bg-cover bg-center md:bg-bottom min-h-screen flex items-center justify-start "
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/c11.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row  flex flex-col ">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-0 flex items-center justify-start"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative mr-auto">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center">
                    <img
                      src="/unnamed.png"
                      alt="Çukurdere Sondaj"
                      className="w-24 h-auto"
                    />
                  </div>
                </div>
                <p className="text-xl mb-40 font-sans opacity-80 mt-4 py-3 text-white relative z-10 ">
                  <Bandrol /> {t("text1")}
                </p>

                <div className="absolute inset-0 z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center md:bg-bottom min-h-screen flex items-center justify-start "
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/c12.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col ">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-0 flex items-center justify-start"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative mr-auto">
                <p className="text-xl font-sans opacity-80 mt-4 text-white relative z-10">
                  <Bandrol /> {t("text2")}
                </p>

                <div className="absolute inset-0 z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover min-h-screen flex items-center justify-start md:bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/d1.jpg')",
          }}
        >
          <div className="flex flex-col overflow-hidden pl-12">
            <div className="md:w-1/2  w-full h-screen flex items-center justify-start">
              <div className="text-center container p-8 relative z-30">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center flex-col">
                    <p className="text-5xl font-bold my-2 text-white z-10 animate-fade-in text-nowrap">
                      <Bandrol />
                      {t("text3")}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 z-0"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <img src="/logo_white.png" alt="Bars" className="w-32 h-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover min-h-screen flex items-center justify-start md:bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/d6_.JPG')",
          }}
        >
          <div className="flex flex-col overflow-hidden pl-12">
            <div className="md:w-1/2  w-full h-screen flex items-center justify-start">
              <div className="text-center container p-8 relative z-30">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center flex-col">
                    <p className="text-5xl font-bold my-2 text-white z-10 animate-fade-in text-nowrap">
                      <Bandrol /> {t("text5")}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover min-h-screen flex items-center justify-start md:bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/d5.jpg')",
          }}
        >
          <div className="flex flex-col overflow-hidden pl-12">
            <div className="md:w-1/2 w-full h-screen flex items-center justify-start">
              <div className="text-center container p-8 relative z-30">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center flex-col">
                    <p className="text-5xl font-bold my-2 text-white z-10 animate-fade-in text-nowrap">
                      <Bandrol />
                      {t("text4")}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 z-0"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <img src="/logo_white.png" alt="Bars" className="w-32 h-auto" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
