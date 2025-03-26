"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Autoplay,
  A11y,
  EffectFade
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "../app/(dashboard)/home/styles/custom_swiper.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from 'swiper';
import { useTranslations } from "next-intl";

// Daktilo animasyonu için geliştirilmiş özel bir bileşen
const TypewriterText = ({ text, key }: { text: string, key: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [key]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 35);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text]);

  return (
    <motion.div 
      className="min-h-[50px] flex items-start justify-start w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-white text-base md:text-lg font-serif italic font-semibold text-left w-full max-w-[500px] drop-shadow-lg whitespace-nowrap">
        {displayText}
        <motion.span 
          animate={{ opacity: isComplete ? 0 : 1 }}
          transition={{ duration: 0.5, repeat: !isComplete ? Infinity : 0, repeatType: "reverse" }}
        >|</motion.span>
      </p>
    </motion.div>
  );
};

// Slide için gelişmiş içerik komponenti
const SlideContent = ({ index, currentIndex, imageUrl, alt }: { 
  index: number, 
  currentIndex: number, 
  imageUrl: string, 
  alt: string 
}) => {
  // Animasyonun sırası için gecikmeli çalışma
  const isActive = index === currentIndex;
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: isActive ? 1 : 0
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Image
          src={imageUrl}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
    </div>
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
    t("slide7"),
    t('slide8')
  ];

  // Slidelardaki görseller
  const slideImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/sert.png"
  ];

  return (
    <section className="relative z-0 shadow-md bg-cover bg-center min-h-screen flex items-center justify-center text-white">
      <div className="w-full h-screen">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay, Scrollbar, A11y, EffectFade]}
          navigation={true}
          effect="fade"
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,  // Kullanıcı etkileşiminde bile otomatik oynatmaya devam et
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true, // Dinamik pagination noktaları
          }}
          className="w-full h-full"
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        >
          {slideImages.map((img, index) => (
            <SwiperSlide key={index} className="relative w-full h-screen">
              <SlideContent 
                index={index} 
                currentIndex={activeIndex} 
                imageUrl={img} 
                alt={t(`slideAlt${index + 1}`)} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Sol Alt Köşede Logo */}
      <AnimatePresence mode="wait">
        {activeIndex !== 6 && activeIndex !== 7 && (
          <motion.div
            key={`logo-${activeIndex}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 0.3 
            }}
            className="absolute left-8 md:left-12 bottom-0 z-30"
          >
            <Image 
              src="/logo_cukurdere_black_.png" 
              alt={t("logoAlt")}
              width={120} 
              height={70}
              className="object-fill drop-shadow-2xl mb-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Sol Alt Köşede Yazı */}
      <AnimatePresence mode="wait">
        {activeIndex !== 7 && (
          <motion.div
            key={`text-${activeIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute left-8 md:left-12 bottom-0 z-30  max-w-[550px] "
          >
            <TypewriterText 
              text={slideTexts[activeIndex]} 
              key={activeIndex}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ek alt boşluk, yazıların konumu için */}
      <div className="absolute bottom-0 left-0 w-full h-20  z-20"></div>
    </section>
  );
}
