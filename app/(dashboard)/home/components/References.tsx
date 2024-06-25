import Image from 'next/image';

export default function References() {
  return (
    <section id="references" className="relative z-0 bg-cover bg-center min-h-screen text-white py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Referanslar</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative bg-black bg-opacity-30 p-6 flex flex-col items-center justify-center">
          <img src="/alacer_gold.png" alt="Alacer Gold" className="h-32 w-auto my-auto filter grayscale" />
          <p className="text-xl font-semibold opacity-80">Alacer Gold</p>
        </div>
        <div className="relative bg-black bg-opacity-30 p-6 flex flex-col items-center justify-center">
          <img src="/altintepe.png" alt="Altıntepe Madencilik" className="h-16 w-auto my-auto filter grayscale" />
          <p className="text-xl font-semibold opacity-80">Altıntepe Madencilik</p>
        </div>
        <div className="relative bg-black bg-opacity-30 p-6 flex flex-col items-center justify-center">
          <img src="/anagold.png" alt="Anagold Madencilik" className="h-16 w-auto my-auto  filter grayscale" />
          <p className="text-xl font-semibold opacity-80">Anagold Madencilik</p>
        </div>
        <div className="relative bg-black bg-opacity-30 p-6 flex flex-col items-center justify-center">
          <img src="" alt="Bahar Madencilik" className="h-16 w-auto my-auto  filter grayscale" />
          <p className="text-xl font-semibold opacity-80">Bahar Madencilik</p>
        </div>
        <div className="relative bg-black bg-opacity-30 p-6 flex flex-col items-center justify-center">
          <img src="/demir.png" alt="Demir Export" className="h-16 w-auto my-auto  filter grayscale" />
          <p className="text-xl font-semibold opacity-80">Demir Export</p>
        </div>
        <div className="relative bg-black bg-opacity-30 p-6 flex flex-col items-center justify-center">
          <img src="/path/to/elittas_logo.png" alt="Elittaş Madencilik" className="h-16 w-auto my-auto  filter grayscale" />
          <p className="text-xl font-semibold opacity-80">Elittaş Madencilik</p>
        </div>
        <div className="relative bg-black bg-opacity-30 p-6 flex flex-col items-center justify-center">
          <img src="/limak.png" alt="Limak" className="h-16 w-auto my-auto  filter grayscale" />
          <p className="text-xl font-semibold opacity-80">Limak</p>
        </div>
        <div className="relative bg-black bg-opacity-30 p-6 flex flex-col items-center justify-center">
          <img src="/kangal.png" alt="Kangal Termik A.Ş" className="h-16 w-auto my-auto  filter grayscale" />
          <p className="text-xl font-semibold opacity-80">Kangal Termik A.Ş</p>
        </div> <div className="relative bg-black bg-opacity-30 p-6 flex flex-col items-center justify-center">
          <img src="/pozitif.png" alt="Pozitif Sondaj" className="h-16 w-auto my-auto  filter grayscale" />
          <p className="text-xl font-semibold opacity-80">Pozitif Sondaj</p>
        </div>
        </div>
         

    </div>
  </section>
  
  )
}
