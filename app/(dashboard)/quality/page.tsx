'use client';

import { useTranslations } from 'next-intl';

export default function Quality() {
  const t = useTranslations('quality');

  return (
    <section id="quality" className="relative z-0 bg-white min-h-screen text-black md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-6 text-red-800">{t('title')}</h2>
          <p className="text-lg text-gray-700 mb-4">
            {t('content')}
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-red-800">{t('principlesTitle')}</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            {t.raw('principlesList').map((principle:any, index:any) => (
              <li key={index}>{principle}</li>
            ))}
          </ul>
          <h3 className="text-2xl font-semibold mb-4 text-red-800">{t('customerSatisfactionTitle')}</h3>
          <p className="text-lg text-gray-700 mb-4">
            {t('customerSatisfactionContent')}
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-red-800">{t('employeeSatisfactionTitle')}</h3>
          <p className="text-lg text-gray-700 mb-4">
            {t('employeeSatisfactionContent')}
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 gap-4">
          <img src="/a12.png" alt="Quality" className="h-96 w-full rounded-lg mb-4" />
          <img src="/a13.png" alt="Quality" className="w-full h-auto rounded-lg shadow-lg mb-4" />
        </div>
      </div>
    </section>
  );
}
