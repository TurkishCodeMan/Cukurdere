export default function Brand({ name = "Çukurdere Sondaj" }: { name: string }) {
  return (
    <span
      className="font-bold block hover:scale-105 transition-all md:w-1/4 bg-red-600 text-white p-2 rounded-md"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 90%)" }}
    >
      {name}
    </span>
  );
}
