'use client';


export default function Services() {
  return (
    <section
      id="services"
      className="relative z-0 bg-white min-h-screen flex items-center justify-center text-black md:py-24"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-red-800 mb-8 text-center">
          Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/c8.jpeg" alt="Wireline Yüzey Karotlu Sondajlar" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Wireline Yüzey Karotlu Sondajlar
              </h3>
              <p className="text-gray-600 mb-4">
                En ileri teknolojiyi kullanarak, yüzey karotlu sondaj
                çalışmalarımızla hızlı ve güvenilir çözümler sunuyoruz.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/c9.jpeg" alt="Wireline Yer altı Karotlu Sondajlar" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Wireline Yer altı Karotlu Sondajlar
              </h3>
              <p className="text-gray-600 mb-4">
                Yer altı karotlu sondaj hizmetlerimizle zorlu koşullarda bile
                güvenilir ve etkili çözümler sunuyoruz.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/c12.jpeg" alt="Havalı ve Çamurlu Rotary Sondajlar" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Havalı ve Çamurlu Rotary Sondajlar
              </h3>
              <p className="text-gray-600 mb-4">
                Havalı ve çamurlu rotary sondaj hizmetlerimizle, geniş çaplı
                projelerde güvenilir sonuçlar elde ediyoruz.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/c7.jpeg" alt="Konvansiyonel Karotlu Sondajlar" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Konvansiyonel Karotlu Sondajlar
              </h3>
              <p className="text-gray-600 mb-4">
                Konvansiyonel karotlu sondaj hizmetlerimizle, geleneksel
                yöntemlerle yüksek kaliteli sonuçlar elde ediyoruz.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/c6.jpeg" alt="Ters Sirkülasyon Sondajlar" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Ters Sirkülasyon Sondajlar
              </h3>
              <p className="text-gray-600 mb-4">
                Ters sirkülasyon sondaj hizmetlerimizle, hızlı ve verimli
                sondaj işlemleri sunuyoruz.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/c11.jpeg" alt="RAB Sondajlar" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                RAB Sondajlar
              </h3>
              <p className="text-gray-600 mb-4">
                RAB sondaj hizmetlerimizle, hızlı ve etkili sondaj çözümleri
                sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
