'use client'

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
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative z-0 shadow-md bg-cover bg-center min-h-screen flex items-center justify-center text-white">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, Scrollbar, A11y]}
        navigation
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 12000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          className="bg-cover bg-center md:bg-bottom min-h-screen flex items-center justify-center "
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/c11.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row  flex flex-col ">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-0 flex items-center justify-center"
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
                <p className="text-xl font-sans opacity-80 mt-4 text-white relative z-10">
                  <Bandrol /> {t('text1')}
                </p>
                <a
                  href="/machines"
                  className="relative inline-block mt-8 px-6 py-2 font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10 text-lg">{t('machines')}</span>
                  <div className="absolute inset-0 bg-red-500 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
                </a>
                <div className="absolute inset-0 z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center md:bg-bottom min-h-screen flex items-center justify-center "
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/c12.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col ">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-0 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative mr-auto">
                <p className="text-xl font-sans opacity-80 mt-4 text-white relative z-10">
                  <Bandrol /> {t('text2')}
                </p>
                <a
                  href="/quality"
                  className="relative inline-block mt-8 px-6 py-2 font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10 text-lg">{t('quality_policy')}</span>
                  <div className="absolute inset-0 bg-red-500 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
                </a>
                <div className="absolute inset-0 z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover md:bg-contain md:bg-repeat-round min-h-screen flex items-center justify-center "
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/a15.png')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col ">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-0 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative mr-auto">
                <p className="text-xl font-sans opacity-80 mt-4 text-white relative z-10">
                  <Bandrol />
                </p>
                <a
                  href="/isg"
                  className="relative inline-block mt-8 px-6 py-2 font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10 text-lg">{t('isg_and_environment')}</span>
                  <div className="absolute inset-0 bg-red-500 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
                </a>
                <div className="absolute inset-0 z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center md:bg-center min-h-screen flex items-center justify-center "
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/a3.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col ">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-0 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative mr-auto">
                <p className="text-xl font-sans opacity-80 mt-4 text-white relative z-10">
                  <Bandrol />
                </p>
                <a
                  href="/references"
                  className="relative inline-block mt-8 mb-2 px-6 py-2 font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10 text-lg">{t('references')}</span>
                  <div className="absolute inset-0 bg-red-500 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
                </a>
                <div className="absolute inset-0 z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center md:bg-bottom min-h-screen flex items-center justify-center "
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/a2.JPG')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col ">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-0 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative mr-auto">
                <p className="text-xl font-sans opacity-80 mt-4 text-white relative z-10">
                  <Bandrol />
                </p>
                <a
                  href="/about"
                  className="relative inline-block mt-8 mb-2 px-6 py-2 font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10 text-lg">{t('about_us')}</span>
                  <div className="absolute inset-0 bg-red-500 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
                </a>
                <div className="absolute inset-0 z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
