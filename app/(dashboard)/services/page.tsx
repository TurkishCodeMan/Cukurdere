'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Services() {
  const t = useTranslations('services');

  return (
    <section
      id="services"
      className="relative z-0 bg-white min-h-screen flex items-center justify-center text-black md:py-24"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-red-800 mb-8 text-center">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.raw('items').map((item:any, index:any) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={item.img} alt={item.alt} width={500} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
