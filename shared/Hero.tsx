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
export default function Hero() {
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
              <div className="text-center p-8 relative">
                <div className="flex items-center justify-center">
                  <div className="md:flex items-center">
                    <img
                      src="/unnamed.png"
                      alt="Çukurdere Sondaj"
                      className="w-24 h-auto"
                    />
                  </div>
                </div>

                <p
                  className="text-xl font-sans opacity-80
                   mt-4  text-white relative z-10"
                >
                  <Bandrol />  olarak, doğru ve verimli bir çalışmanın ancak güvenli ve sağlıklı bir 
çalışma ortamında gerçekleştirilebileceğine inanmaktayız. 

                </p>
                <a
                  href="/machines"
                  className="relative inline-block mt-8 px-6 py-2 font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10 text-lg">Makinalarımız</span>
                  <div className="absolute inset-0 bg-red-500 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
                </a>

                <div className="absolute inset-0   z-0"></div>
              </div>
            </div>

            {/* <div
              className="w-1/2  h-screen bg-black bg-opacity-50 flex items-center justify-center custom-border-blur"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('/c5.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="relative bg-red-500 p-8 mt-auto text-white font-bold text-4xl mb-8"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)",
                }}
              >
                <h1 className="animate-slide-in-right">
                  Derinlerdeki Gücünüz!
                </h1>
              </div>
            </div> */}
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
              <div className="text-center p-8 relative">
                

                <p
                  className="text-xl font-sans opacity-80
                   mt-4  text-white relative z-10"
                >
                  <Bandrol /> , her zaman en iyi ekipmanları kullanarak modern
                  ve yenilikçi sondaj çözümleri sunar.
                </p>
                <a
                  href="#"
                  className="relative inline-block mt-8 px-6 py-2 font-semibold text-white overflow-hidden group"
                >
                  <span className="relative z-10 text-lg">Makinalarımız</span>
                  <div className="absolute inset-0 bg-red-500 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
                </a>

                <div className="absolute inset-0  z-0"></div>
              </div>
            </div>

            {/* <div
              className="w-1/2  h-screen bg-black bg-opacity-50 flex items-center justify-center custom-border-blur"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('/c5.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="relative bg-red-500 p-8 mt-auto text-white font-bold text-4xl mb-8"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)",
                }}
              >
                <h1 className="animate-slide-in-right">
                  Derinlerdeki Gücünüz!
                </h1>
              </div>
            </div> */}
          </div>
        </SwiperSlide>
       
      </Swiper>
    </section>
  );
}
