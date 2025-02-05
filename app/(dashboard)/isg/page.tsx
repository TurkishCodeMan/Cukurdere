import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ISG() {
  const t  = useTranslations('isg');

  return (
    <section id="isg" className="relative z-0 bg-white min-h-screen text-black md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-6 text-red-800">{t('title')}</h2>
          <p className="text-lg text-gray-700 mb-4">{t('subtitle')}</p>
          <p className="text-lg text-gray-700 mb-4">{t('paragraph1')}</p>
          <p className="text-lg text-gray-700 mb-4">{t('paragraph2')}</p>
          <h2 className="text-4xl font-bold mb-6 text-red-800">{t('environmentalPolicyTitle')}</h2>
          <p className="text-lg text-gray-700 mb-4">{t('environmentalPolicy')}</p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            {t.raw('environmentalPoints').map((point:any, index:any) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 gap-4">
        <div className="relative w-full h-auto mb-4 float-left md:float-none md:w-1/2">
            <Image src="/isg_c.jpeg" alt="İSG" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
          <div className="relative w-full h-auto mb-4 float-left md:float-none md:w-1/2">
            <Image src="/a9.png" alt="İSG" width={500} height={300} className="rounded-lg shadow-lg clip-path-custom-1" />
          </div>
       
          <div className="relative w-full h-auto float-right md:float-none md:w-1/2">
            <Image src="/a11.png" alt="İSG" width={500} height={300} className="rounded-lg shadow-lg clip-path-custom-4" />
          </div>
          <div className="relative w-full h-auto mb-4 float-right md:float-none md:w-1/2">
            <Image src="/a17.png" alt="Çevre" width={500} height={300} className="rounded-lg shadow-lg clip-path-custom-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
