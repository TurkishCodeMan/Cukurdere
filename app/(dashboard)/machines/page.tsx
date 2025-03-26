'use client';

import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function Machines() {
  const t = useTranslations('machines');
  const machinesData = t.raw('data');
  const [selectedMachine, setSelectedMachine] = useState<any>(null);
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
    <section id="machines" className="min-h-screen md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center md:text-left">
        <h2 className="text-4xl font-bold text-red-800 mb-12">{t('title')}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {machinesData.map((machine:any) => (
            <div
              key={machine.id}
              className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden animate-slide-in-right flex flex-col h-full"
            >
              <div className="relative h-80">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {machine.name}
                </h3>
             {!machine.capacities && (   <p className="text-lg text-gray-600 mb-4">
                  {machine.description}
                </p>)}
                
                {machine.capacities && (
                  <div className="mb-4 mt-auto">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Kapasite Tablosu</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white border border-gray-200 text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-1 px-2 border-b border-r text-left">Çap</th>
                            <th className="py-1 px-2 border-b border-r text-left">Derinlik (m)</th>
                            <th className="py-1 px-2 border-b text-left">Derinlik (ft)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {machine.capacities.rods.map((rod:any, index:number) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="py-1 px-2 border-b border-r">{rod.diameter}</td>
                              <td className="py-1 px-2 border-b border-r">{rod.depth}</td>
                              <td className="py-1 px-2 border-b">{rod.depth_ft}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
               {!machine.capacities && ( <div className="mt-auto">
                  <button
                    onClick={() => openModal(machine)}
                    className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700 transition-all duration-300"
                  >
                    {t('moreInfo')}
                  </button>
                </div>)}
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedMachine && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedMachine.name}</h2>
              <img src={selectedMachine.image} alt={selectedMachine.name} className="w-full h-64 object-cover mb-4 rounded-lg shadow-lg" />
              <p className="text-lg text-gray-700 mb-4">{selectedMachine.description}</p>
              <p className="text-lg text-gray-700 mb-4">{selectedMachine.specs}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
