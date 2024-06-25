import Brand from "@/shared/Brand";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div
      id="about"
      className="relative pb-12 w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url('/c4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 90%)",
      }}
    >
      <div className="container mx-auto p-6 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 animate-slide-in-right">
          Hakkımızda
        </h2>
        <p className="text-md md:text-xl mt-4 opacity-80 animate-slide-in-left">
          <Brand  name="Çukurdere Sondaj"/>
          , modern ve yenilikçi sondaj çözümleri sunarak sektörde öncü olmayı
          hedeflemektedir. Uzman ekibimiz ve son teknoloji ekipmanlarımız ile
          her türlü sondaj ihtiyacınıza profesyonel çözümler sunuyoruz. Müşteri
          memnuniyetini ön planda tutarak güvenilir, hızlı ve kaliteli hizmet
          sağlıyoruz.
        </p>
        <br/>
        <p className="text-md md:text-xl mt-4 opacity-80 animate-slide-in-left">
          <Brand name="Vizyonumuz"/> , sektörde fark yaratan projelere imza atarak hem yerel hem de uluslararası alanda saygın bir marka olmayı sürdürmekte kararlıdır. Teknolojiyi yakından takip eden yaklaşımımız ve yenilikçi çözümlerimizle, müşterilerimize en yüksek kalite standartlarında hizmet sunmaya devam ediyoruz.

        </p>

        <br/>
        <p className="text-md md:text-xl mt-4 opacity-80 animate-slide-in-left">
          <Brand  name="Misyonumuz"/> , müşterilerimize sürdürülebilir ve verimli sondaj çözümleri sunarak, çevreye duyarlı ve topluma katkı sağlayan projeler geliştirmektir. Çalışanlarımızın gelişimini destekleyerek, güçlü bir ekip ruhu ile hizmet kalitemizi sürekli artırmayı amaçlıyoruz.



        </p>
        <div className="mt-8 ">
          <a
            href="#contact"
            className="relative inline-block my-2 px-6 py-2 font-semibold text-white group transition-all duration-500 ease-in-out hover:text-red-700"
          >
            <span className="relative z-10 text-lg">Daha Fazla Bilgi</span>
            <div className="absolute inset-0 bg-red-500 transition-all duration-200 ease-in-out clip-path-right group-hover:clip-path-full"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
