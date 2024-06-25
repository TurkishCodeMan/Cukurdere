import Image from 'next/image';

export default function References() {
  return (
    <section id="references" className="relative z-0 bg-white min-h-screen text-black md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 md:text-left text-center text-red-800">Referanslar</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { src: "/alacer_gold.png", alt: "Alacer Gold", name: "Alacer Gold" },
            { src: "/altintepe.png", alt: "Altıntepe Madencilik", name: "Altıntepe Madencilik" },
            { src: "/anagold.png", alt: "Anagold Madencilik", name: "Anagold Madencilik" },
            { src: "", alt: "Bahar Madencilik", name: "Bahar Madencilik" },
            { src: "/demir.png", alt: "Demir Export", name: "Demir Export" },
            { src: "/path/to/elittas_logo.png", alt: "Elittaş Madencilik", name: "Elittaş Madencilik" },
            { src: "/limak.png", alt: "Limak", name: "Limak" },
            { src: "/kangal.png", alt: "Kangal Termik A.Ş", name: "Kangal Termik A.Ş" },
            { src: "/pozitif.png", alt: "Pozitif Sondaj", name: "Pozitif Sondaj" }
          ].map((item, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center justify-center transition transform hover:-translate-y-2 hover:shadow-2xl">
              <img src={item.src} alt={item.alt} className="h-16 w-auto my-auto filter grayscale" />
              <p className="text-xl font-semibold text-gray-700 mt-4">{item.name}</p>
              <div className="absolute bottom-0 right-0">
                <img src="/unnamed.png" alt="Çukurdere Sondaj" className="h-10 w-16 rounded-tl-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
