import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations('aboutUs');
  const goalsList = t.raw('goalsList');
  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-800 mb-8">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{t('whoWeAre')}</h3>
              <p className="text-gray-600 mb-6">
                {t('whoWeAreText1')}
              </p>
              <p className="text-gray-600">
                {t('whoWeAreText2')}
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-red-800">{t('vision')}</h3>
              <p className="text-lg text-gray-700 mb-4">
                {t('visionText')}
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-red-800">{t('mission')}</h3>
              <p className="text-lg text-gray-700 mb-4">
                {t('missionText')}
              </p>
            </div>
          </div>
          <div>
            <img src="/c12.jpeg" alt="Çukurdere Sondaj" className="rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col justify-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{t('goals')}</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 flex flex-col">
                {goalsList.map((goal:any, index:any) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img src="/a3.jpeg" alt="Hedeflerimiz" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
