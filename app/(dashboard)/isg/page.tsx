'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ISGveCevre = () => {
  const t = useTranslations('isg');

  return (
    <div className="bg-white py-16 min-h-screen relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">{t('title')}</h2>
        
        <div className="space-y-16">
          {/* İş Sağlığı ve Güvenliği Bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="pr-8">
              <h3 className="text-2xl font-semibold text-red-800 mb-4">{t('title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('subtitle')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('paragraph1')}
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                {t('paragraph2')}
              </p>
            </div>
            <div className="relative mx-auto max-w-[800px] w-full">
              <div className="h-[750px] relative">
                <Image
                  src="/c_baret.jpeg"
                  fill
                  className="rounded-lg shadow-lg"
                  alt={t('title')}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Çevre Politikası Bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative mx-auto max-w-[800px] w-full">
              <div className="h-[750px] relative">
                <Image
                  src="/c_cevre.jpeg"
                  fill
                  className="rounded-lg shadow-lg"
                  alt={t('environmentalPolicyTitle')}
                  priority
                />
              </div>
            </div>
            <div className="order-1 md:order-2 pl-8">
              <h3 className="text-2xl font-semibold text-red-800 mb-4">{t('environmentalPolicyTitle')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('environmentalPolicy')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {t.raw('environmentalPoints').map((point: string, index: number) => (
                  <li key={index} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Genel ISG Görüntüsü */}
          <div className="mt-12 relative mx-auto max-w-[800px]">
            <div className="h-[750px] relative">
              <Image
                src="/isg_c.jpeg"
                fill
                className="rounded-lg shadow-lg"
                alt={t('title')}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISGveCevre;
