'use client';

import { useTranslations } from 'next-intl';

export default function Head() {
  const t = useTranslations('head');

  return (
    <>
      <title>{t('title')}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content={t('author')} />
      <link rel="icon" href="/0000246.png" />
      <link rel="canonical" href={t('canonical')} />
      <meta name="google-site-verification" content={t('googleVerification')} />
    </>
  );
}
