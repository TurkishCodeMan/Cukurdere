const AboutUs = () => {
    return (
      <div className="bg-white py-16 min-h-screen">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-800 mb-8">Hakkımızda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Kimiz?</h3>
                <p className="text-gray-600 mb-6">
                  2015 yılında birikim, deneyim ve tecrübelerini Madencilik sektörüne profesyonel bir hizmet verme adına kurulmuştur. Amacı; günümüz teknolojisine uygun makine ve ekipmanları kullanarak, projeleri daha ekonomik koşullarla, kaliteli ve profesyonel kadrosuyla verimliliği en yüksek seviyeye çıkartmaktır. Sağlık, iş emniyeti ve çevre konularındaki ilkeleri benimseyerek projelerini yürütmektedir.
                </p>
                <p className="text-gray-600">
                  ÇUKURDERE SONDAJ hedeflerine ulaşmak için operasyonlarını yüksek standartlarda başarı ile tamamlamaktan sorumludur. Çalıştığı bölgede, toplumun gelişmesine ve yaşam tarzına, yerel çalışan personel ile saygın ilişkilerin sürdürülmesine büyük önem verir.
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-red-800">Vizyon</h3>
            <p className="text-lg text-gray-700 mb-4">
              Hizmet verdiğimiz sektörde, teknolojinin getirdiği tüm imkanları uygulayan, güvenilir, iş veren odaklı ve kaliteli hizmet veren, iş veren ve çalışanlarının haklarına saygılı, sektöründe nitelikli çalışanlar yetiştiren, yenilikçi ve sürekli kendini geliştiren bir kuruluşuz.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-red-800">Misyon</h3>
            <p className="text-lg text-gray-700 mb-4">
              Profesyonelliğimiz ve takım çalışmamız ile birlikte çalıştığımız sektörün her alanında güvenilir ve kaliteli hizmet verebilecek, tanınan bir kuruluş olmaktır.
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
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Başlıca Hedeflerimiz</h3>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Müşteri odaklı ve güvene dayalı kaliteli hizmet,</li>
                  <li>Sağlanan teknik ve yönetim hizmetlerinde sürekli verimlilik artışı,</li>
                  <li>İş güvenliğinin artırılması ve sıfır kaza,</li>
                  <li>Çevreye duyarlı çalışma ve planlama,</li>
                  <li>İş birliği ve ekip çalışmasının gelişmesi, yerleşmesi,</li>
                  <li>Yüksek verim ve kalite bilincinin yerleşmesi,</li>
                  <li>Daha güzele ve mükemmele ulaşmanın amaç haline gelmesidir.</li>
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
  