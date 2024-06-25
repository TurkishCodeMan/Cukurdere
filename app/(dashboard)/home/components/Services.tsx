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

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-0 shadow-md bg-cover bg-center min-h-screen flex items-center justify-center text-white"
    >
      <div className="container mx-auto text-center md:text-left">
      <h2 className="text-4xl font-bold mb-4 animate-slide-in-right">
          Hizmetlerimiz
        </h2>
  
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, Scrollbar, A11y]}
        navigation
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          className="bg-cover bg-center md:bg-left min-h-screen flex items-center justify-center md:bg-contain"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/c8.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-30 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative">
                <h2 className="text-4xl font-bold">
                  Wireline Yüzey Karotlu Sondajlar
                </h2>
                <p className="text-xl mt-4">
                  En ileri teknolojiyi kullanarak, yüzey karotlu sondaj
                  çalışmalarımızla hızlı ve güvenilir çözümler sunuyoruz.
                </p>
                <div className="absolute inset-0 bg-black opacity-50 blur-lg z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center md:bg-left min-h-screen flex items-center justify-center md:bg-contain"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/c9.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-30 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative">
                <h2 className="text-4xl font-bold">
                  Wireline Yer altı Karotlu Sondajlar
                </h2>
                <p className="text-xl mt-4">
                  Yer altı karotlu sondaj hizmetlerimizle zorlu koşullarda bile
                  güvenilir ve etkili çözümler sunuyoruz.
                </p>
                <div className="absolute inset-0 bg-black opacity-50 blur-lg z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center md:bg-left min-h-screen flex items-center justify-center md:bg-contain"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/c12.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-30 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative">
                <h2 className="text-4xl font-bold">
                  Havalı ve Çamurlu Rotary Sondajlar
                </h2>
                <p className="text-xl mt-4">
                  Havalı ve çamurlu rotary sondaj hizmetlerimizle, geniş çaplı
                  projelerde güvenilir sonuçlar elde ediyoruz.
                </p>
                <div className="absolute inset-0 bg-black opacity-50 blur-lg z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center md:bg-left min-h-screen flex items-center justify-center md:bg-contain"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/c7.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-30 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative">
                <h2 className="text-4xl font-bold">
                  Konvansiyonel Karotlu Sondajlar
                </h2>
                <p className="text-xl mt-4">
                  Konvansiyonel karotlu sondaj hizmetlerimizle, geleneksel
                  yöntemlerle yüksek kaliteli sonuçlar elde ediyoruz.
                </p>
                <div className="absolute inset-0 bg-black opacity-50 blur-lg z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center min-h-screen flex items-center justify-center md:bg-contain"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/c6.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-30 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative">
                <h2 className="text-4xl font-bold">
                  Ters Sirkülasyon Sondajlar
                </h2>
                <p className="text-xl mt-4">
                  Ters sirkülasyon sondaj hizmetlerimizle, hızlı ve verimli
                  sondaj işlemleri sunuyoruz.
                </p>
                <div className="absolute inset-0 bg-black opacity-50 blur-lg z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-center md:bg-left min-h-screen flex items-center justify-center md:bg-contain"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/c11.jpeg')",
          }}
        >
          <div className="md:flex md:flex-row flex flex-col">
            <div
              className="md:w-1/2 w-full h-screen bg-black bg-opacity-30 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 80%)" }}
            >
              <div className="text-center p-8 relative">
                <h2 className="text-4xl font-bold">RAB Sondajlar</h2>
                <p className="text-xl mt-4">
                  RAB sondaj hizmetlerimizle, hızlı ve etkili sondaj çözümleri
                  sunuyoruz.
                </p>
                <div className="absolute inset-0 bg-black opacity-50 blur-lg z-0"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
}
