import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo ve Açıklama */}
        <div>
          <h2 className="text-lg font-bold mb-4">
            <img src="/logo_cukurdere_black_.png" alt="Çukurdere Sondaj" className="w-40" />
          </h2>
          
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h2 className="text-lg font-bold mb-4">{t("aboutUs")}</h2>
          <ul>
            <li className="mb-2">
              <Link href="/" legacyBehavior>
                <a className="hover:text-red-500 hover:underline">{t("home")}</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about" legacyBehavior>
                <a className="hover:text-red-500 hover:underline">{t("about")}</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/services" legacyBehavior>
                <a className="hover:text-red-500 hover:underline">{t("services")}</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/references" legacyBehavior>
                <a className="hover:text-red-500 hover:underline">{t("references")}</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/quality" legacyBehavior>
                <a className="hover:text-red-500 hover:underline">{t("qualityPolicy")}</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/isg" legacyBehavior>
                <a className="hover:text-red-500 hover:underline">{t("hseAndEnvironment")}</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h2 className="text-lg font-bold mb-4">{t("contactInfo")}</h2>
          <ul>
            <li className="mb-2">
              <FaMapMarkerAlt className="inline-block mr-2" /> {t("address")}
            </li>
            <li className="mb-2">
              {t("cityCountry")}
            </li>
            <li className="mb-2">
              <FaPhone className="inline-block mr-2" /> +90 (501) 103 06 18
            </li>
            <li className="mb-2">
              <FaPhone className="inline-block mr-2" /> +90 (312) 354 33 37
            </li>
            <li className="mb-2">
              <FaFax className="inline-block mr-2" /> +90 (312) 354 77 71
            </li>
            <li className="mb-2">
              <FaEnvelope className="inline-block mr-2" /> 
              <a href="mailto:cukurdere@cukurderesondaj.com.tr" className="hover:text-red-500 hover:underline">
                cukurdere@cukurderesondaj.com.tr
              </a>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h2 className="text-lg font-bold mb-4">{t("callUs")}</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/p/%C3%87ukurdere-Sondaj-100063763801216/?paipv=0&eav=AfYauWIqmg3KpqGCpDdwtQOPk0Sl7-4VgLy0b2lvRhAbzTce180wW6wekfP_K1hb1A4&_rdr"
              className="text-2xl hover:text-red-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.facebook.com/p/%C3%87ukurdere-Sondaj-100063763801216/?paipv=0&eav=AfYauWIqmg3KpqGCpDdwtQOPk0Sl7-4VgLy0b2lvRhAbzTce180wW6wekfP_K1hb1A4&_rdr"
              className="text-2xl hover:text-red-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/cukurderesondaj/"
              className="text-2xl hover:text-red-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/%C3%A7ukurdere-sondaj?originalSubdomain=tr"
              className="text-2xl hover:text-red-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Telif Hakkı Kısmı */}
      <div className="bg-gray-900 text-center py-4 mt-8">
        <p>{t("copyright")}</p>
      </div>
    </footer>
  );
}
