import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaFax, FaMailBulk } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Müşteri Bilgileri */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">{t('customerInfo')}</h3>
            <p className="flex items-center">
              <span className="font-semibold mr-2"><FaPhone size={16}/></span> +90 (501) 103 06 18
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2"><FaPhone size={16}/></span> +90 (312) 354 33 37
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2"><FaFax size={16}/></span> +90 (312) 354 77 71
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2"><FaMailBulk size={16}/></span>
              <a href="mailto:cukurdere@cukurderesondaj.com.tr" className="text-red-500">
                cukurdere@cukurderesondaj.com.tr
              </a>
            </p>
          </div>
          
          {/* Hakkımızda */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">{t('aboutUs')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" legacyBehavior><a className="hover:text-red-500">{t('home')}</a></Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior><a className="hover:text-red-500">{t('about')}</a></Link>
              </li>
              <li>
                <Link href="/services" legacyBehavior><a className="hover:text-red-500">{t('services')}</a></Link>
              </li>
              <li>
                <Link href="/references" legacyBehavior><a className="hover:text-red-500">{t('references')}</a></Link>
              </li>
              <li>
                <Link href="/quality" legacyBehavior><a className="hover:text-red-500">{t('qualityPolicy')}</a></Link>
              </li>
              <li>
                <Link href="/isg" legacyBehavior><a className="hover:text-red-500">{t('hseAndEnvironment')}</a></Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior><a className="hover:text-red-500">{t('contact')}</a></Link>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">{t('callUs')}</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/%C3%87ukurdere-Sondaj-100063763801216/?paipv=0&eav=AfYauWIqmg3KpqGCpDdwtQOPk0Sl7-4VgLy0b2lvRhAbzTce180wW6wekfP_K1hb1A4&_rdr" className="text-2xl hover:text-red-500"><FaFacebook /></a>
              <a href="https://www.facebook.com/p/%C3%87ukurdere-Sondaj-100063763801216/?paipv=0&eav=AfYauWIqmg3KpqGCpDdwtQOPk0Sl7-4VgLy0b2lvRhAbzTce180wW6wekfP_K1hb1A4&_rdr" className="text-2xl hover:text-red-500"><FaTwitter /></a>
              <a href="https://www.instagram.com/cukurderesondaj/" className="text-2xl hover:text-red-500"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/%C3%A7ukurdere-sondaj?originalSubdomain=tr" className="text-2xl hover:text-red-500"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
