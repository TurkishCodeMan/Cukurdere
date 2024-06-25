'use client'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentLocale = searchParams?.get('locale') || 'tr'; // Varsayılan dil 'tr' olarak ayarlanmıştır
    const locales = ['tr', 'en']; // Diller

    return (
      <div>
        {locales.map((lng) => (
          <Link 
            href={`${pathname}?locale=${lng}`} 
            key={lng}
            legacyBehavior
          >
            <a style={{ margin: 10, textDecoration: currentLocale === lng ? 'underline' : 'none' }}>
              {lng}
            </a>
          </Link>
        ))}
      </div>
    );
}
