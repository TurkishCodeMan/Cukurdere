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
import "swiper/css/scrollbar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-0 shadow-md bg-cover bg-center min-h-screen flex items-center justify-center text-white">
      <div className="w-full h-screen">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay, Scrollbar, A11y]}
          navigation={true}
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/4.png"
              alt="Slide 4"
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
          
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/1.png"
              alt="Slide 1"
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
           
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/2.png"
              alt="Slide 2"
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
         
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/3.png"
              alt="Slide 3"
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
         
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/5.png"
              alt="Slide 5"
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
           
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/6.png"
              alt="Slide 6"
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
           
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/7.png"
              alt="Slide 7"
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
         
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
