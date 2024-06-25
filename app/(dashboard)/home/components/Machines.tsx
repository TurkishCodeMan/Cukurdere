import Link from "next/link";

export default function Machines() {
  return (
    <section id="machines" className="min-h-screen py-12 my-4 bg-[#1d1d1b]">
      <div className="container mx-auto px-4 text-center md:text-left">
        <h2 className="text-4xl font-bold  text-white mb-12">Makinalarımız</h2>
        
        {/* PD-500 Bölümü */}
        <div className="mb-12 animate-slide-in-right flex flex-wrap items-center bg-[#2a2a2a] shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2">
            <img src="/c2.jpeg" alt="PD-500" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-3xl font-bold text-white mb-4">PD-500</h3>
            <p className="text-lg text-gray-300 mb-4">
              PD-500, yüksek performans ve dayanıklılık sunan bir sondaj makinesidir. Gelişmiş teknolojisi ve kullanımı kolay arayüzü ile en zorlu sondaj projelerinde bile mükemmel sonuçlar sağlar.
            </p>
            <a href="#contact" className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700 transition-all duration-300">Daha Fazla Bilgi</a>
          </div>
        </div>

        {/* Tetra 2500 Bölümü */}
        <div className="flex animate-slide-in-right flex-wrap items-center bg-[#2a2a2a] shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 md:order-2">
            <img src="/c11.jpeg" alt="Tetra 2500" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-3xl font-bold text-white mb-4">Tetra 2500</h3>
            <p className="text-lg text-gray-300 mb-4">
              Tetra 2500, büyük ölçekli sondaj projeleri için tasarlanmış, güçlü ve güvenilir bir makinedir. Yüksek verimliliği ve dayanıklılığı ile sektörün en çok tercih edilen modellerindendir.
            </p>
            <a href="#contact" className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700 transition-all duration-300">Daha Fazla Bilgi</a>
          </div>
        </div>
      </div>
    </section>
  );
}
