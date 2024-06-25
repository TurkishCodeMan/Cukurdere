'use client';

import { useState } from "react";

const machinesData = [
  {
    id: 1,
    name: "PD-500",
    description: "PD-500, yüksek performans ve dayanıklılık sunan bir sondaj makinesidir. Gelişmiş teknolojisi ve kullanımı kolay arayüzü ile en zorlu sondaj projelerinde bile mükemmel sonuçlar sağlar.",
    image: "/c2.jpeg",
    specs: "Teknik Özellikler: 5000m derinlik kapasitesi, 2000Nm tork, 250hp motor gücü.",
  },
  {
    id: 2,
    name: "Tetra 2500",
    description: "Tetra 2500, büyük ölçekli sondaj projeleri için tasarlanmış, güçlü ve güvenilir bir makinedir. Yüksek verimliliği ve dayanıklılığı ile sektörün en çok tercih edilen modellerindendir.",
    image: "/c11.jpeg",
    specs: "Teknik Özellikler: 2500m derinlik kapasitesi, 3000Nm tork, 250hp motor gücü.",
  },
  {
    id: 2,
    name: "ERN 1000",
    description: "ERN 1000, güçlü ve güvenilir bir makinedir. Yüksek verimliliği ve dayanıklılığı ile sektörün en çok tercih edilen modellerindendir.",
    image: "/a17.png",
    specs: "Teknik Özellikler: 2500m derinlik kapasitesi, 3000Nm tork, 250hp motor gücü.",
  },
];

export default function Machines() {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (machine:any) => {
    setSelectedMachine(machine);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMachine(null);
  };

  return (
    <section id="machines" className="min-h-screen md:py-24  bg-white">
      <div className="container mx-auto px-4 text-center md:text-left">
        <h2 className="text-4xl font-bold text-red-800 mb-12">Makinalarımız</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {machinesData.map((machine) => (
            <div
              key={machine.id}
              className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden animate-slide-in-right"
            >
              <img
                src={machine.image}
                alt={machine.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {machine.name}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  {machine.description}
                </p>
                <button
                  onClick={() => openModal(machine)}
                  className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700 transition-all duration-300"
                >
                  Daha Fazla Bilgi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
