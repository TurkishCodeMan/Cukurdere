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
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from 'swiper';
import { useTranslations } from "next-intl";

// Daktilo animasyonu için özel bir bileşen
const TypewriterText = ({ text, key }: { text: string, key: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Yeni key geldiğinde animasyonu sıfırla
    setDisplayText("");
    setCurrentIndex(0);
  }, [key]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Her harfin yazılma hızı
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.div 
      className="h-[120px] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <p className="text-white text-2xl font-serif italic font-semibold text-center max-w-[600px] drop-shadow-sm">
        {displayText}
      </p>
    </motion.div>
  );
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("hero"); // Hero için çevirileri al
  
  // Her slide için farklı metinler - artık i18n'den al
  const slideTexts = [
    t("slide1"),
    t("slide2"),
    t("slide3"),
    t("slide4"),
    t("slide5"),
    t("slide6"),
    t("slide7")
  ];

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
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        >
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/1.png"
              alt={t("slideAlt1")}
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
          
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/2.png"
              alt={t("slideAlt2")}
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
           
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/3.png"
              alt={t("slideAlt3")}
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
         
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/4.png"
              alt={t("slideAlt4")}
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
         
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/5.png"
              alt={t("slideAlt5")}
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
           
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/6.png"
              alt={t("slideAlt6")}
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
           
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-screen">
            <Image
              src="/7.png"
              alt={t("slideAlt7")}
              fill
              priority
              className="object-cover object-[50%_150%]"
            />
         
          </SwiperSlide>
        </Swiper>
      </div>
      
      {/* Logo - sabit konumda */}
      <motion.div
        key={activeIndex}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
        className="absolute left-8 bottom-48 z-30"
      >
        <Image 
          src="/logo_cukurdere_black_.png" 
          alt={t("logoAlt")}
          width={280} 
          height={100}
          className="object-contain drop-shadow-xl -mb-16"
        />
      </motion.div>
      
      {/* Yazı animasyonu - ayrı bir bileşen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute left-8 bottom-20 z-30 p-6 max-w-[700px] text-center"
      >
        <TypewriterText 
          text={slideTexts[activeIndex]} 
          key={activeIndex} // Her slide değişiminde komponenti yeniden render etmek için
        />
      </motion.div>
    </section>
  );
}
