'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function References() {
  const t = useTranslations('references');

  return (
    <section id="references" className="relative z-0 bg-white min-h-screen text-black md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 md:text-left text-center text-red-800">{t('title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.raw('items').map((item:any, index:any) => (
            <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center justify-center transition transform hover:-translate-y-2 hover:shadow-2xl">
              <Image src={item.src} alt={item.alt} width={64} height={64} className="h-16 w-auto my-auto filter grayscale" />
              <p className="text-xl font-semibold text-gray-700 mt-4">{item.name}</p>
              <div className="absolute bottom-0 right-0">
                <Image src="/logo_cukurdere_white_.png" alt="Çukurdere Sondaj" width={50} height={70} className="h-10 w-16 rounded-tl-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
