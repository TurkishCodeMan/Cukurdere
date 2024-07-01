'use client';

import { useTranslations } from 'next-intl';

export default function Logo() {
  const t = useTranslations('logo');

  return (
    <span className="relative block bg-red-500 text-white p-3 clip-path-custom shadow-lg animate-slide-in-right">
      <span className="font-bold text-3xl">
        {t('text')}
      </span>
    </span>
  );
}
