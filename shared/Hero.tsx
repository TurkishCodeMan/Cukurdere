"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  A11y,
  EffectFade,
  Autoplay // Autoplay eklendi
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "../app/(dashboard)/home/styles/custom_swiper.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react"; // useRef eklendi
import type { Swiper as SwiperType } from 'swiper';
import { useTranslations } from "next-intl";
import { Volume2, VolumeX } from "lucide-react"; // İkonlar için lucide-react (projenizde yoksa npm install lucide-react yapmalısınız)


// ... TypewriterText bileşeni aynı kalıyor ...
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

const SlideContent = ({ 
  index, 
  currentIndex, 
  mediaUrl, 
  alt, 
  isVideo,
  isMuted,
  setIsMuted
}: { 
  index: number, 
  currentIndex: number, 
  mediaUrl: string, 
  alt: string,
  isVideo?: boolean,
  isMuted: boolean,
  setIsMuted: (val: boolean) => void
}) => {
  const isActive = index === currentIndex;
  const isSpecialSlide = !isVideo && (index === 8 || index === 9); 
  const objectFitClass = isSpecialSlide ? "object-fill" : "object-cover";
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ses değiştiğinde videoyu güncelle
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full h-full"
      >
        {isVideo ? (
          <video
            ref={videoRef}
            src={mediaUrl}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={mediaUrl}
            alt={alt}
            fill
            priority={index === 0}
            className={`${objectFitClass} object-center`}
          />
        )}
      </motion.div>
    </div >
  );
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Ses durumu
  const t = useTranslations("hero");

  const slides = [
    { type: "image", src: "/1.png", text: t("slide1"), alt: t("slideAlt1") },
    { type: "video", src: "/tanitim_compressed.mp4", text: "" }, 
    { type: "image", src: "/2.png", text: t("slide2"), alt: t("slideAlt2") },
    { type: "image", src: "/3.png", text: t("slide3"), alt: t("slideAlt3") },
    { type: "image", src: "/4.png", text: t("slide4"), alt: t("slideAlt4") },
    { type: "image", src: "/5.png", text: t("slide5"), alt: t("slideAlt5") },
    { type: "image", src: "/6.png", text: t("slide6"), alt: t("slideAlt6") },
    { type: "image", src: "/7.png", text: t("slide7"), alt: t("slideAlt7") },
    { type: "image", src: "/sert.png", text: t("slide8"), alt: t("slideAlt8") },
  ];

  // Video slaytının indexini bul (sadece video olan slayt için buton gösterilecek)
  const videoSlideIndex = slides.findIndex(s => s.type === "video");

  return (
    <section className="relative z-0 shadow-md bg-cover bg-center min-h-screen flex items-center justify-center text-white">
      <div className="w-full h-screen">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Scrollbar, A11y, EffectFade, Autoplay]}
          navigation={true}
          effect="fade"
          keyboard={{ enabled: true }}
          // autoplay={{
          //   delay: 5000, // 5 saniyede bir geçiş
          //   disableOnInteraction: false, // Kullanıcı dokunsa bile devam etsin
          // }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          className="w-full h-full"
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative w-full h-screen">
              <SlideContent 
                index={index} 
                currentIndex={activeIndex} 
                mediaUrl={slide.src} 
                alt={slide.alt || ""} 
                isVideo={slide.type === "video"}
                isMuted={isMuted}
                setIsMuted={setIsMuted}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Ses Kontrol Butonu (Sadece video slaytındayken görünür) */}
      <AnimatePresence>
        {activeIndex === videoSlideIndex && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-8 right-8 z-50 p-3 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full transition-all text-white"
          >
            {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Logo Kontrolü */}
      <AnimatePresence mode="wait">
        {activeIndex !== 7 && activeIndex !== 8 && (
          <motion.div
            key={`logo-${activeIndex}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
            className="absolute left-8 md:left-12 bottom-0 z-30"
          >
            <Image 
              src="/cs_logo_white.png" 
              alt={t("logoAlt")}
              width={120} 
              height={70}
              className="object-fill drop-shadow-2xl mb-2"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Yazı Kontrolü */}
      <AnimatePresence mode="wait">
        {activeIndex !== 8 && slides[activeIndex].text && (
          <motion.div
            key={`text-${activeIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute left-8 md:left-12 bottom-0 z-30 max-w-[550px]"
          >
            <TypewriterText 
              text={slides[activeIndex].text} 
              key={activeIndex}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full h-20 z-20"></div>
    </section>
  );
}