'use client'

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact" className="relative z-0 min-h-screen bg-cover bg-center text-white py-20" style={{ backgroundImage: "url('/contact-bg.jpg')" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">İletişim</h2>
        <div className="relative bg-black bg-opacity-60 p-8 rounded-lg" style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)" }}>
          <form action="https://formsubmit.co/huseyinaltikulac4@gmail.com" method="POST" className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold">Adınız</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-2 p-3 rounded bg-gray-800 text-white" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">E-posta</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-2 p-3 rounded bg-gray-800 text-white" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold">Mesajınız</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-2 p-3 rounded bg-gray-800 text-white h-32" required></textarea>
            </div>
            <button type="submit" className="px-6 py-2 bg-red-500 rounded hover:bg-red-700 transition duration-300">Gönder</button>
          </form>
        </div>
      </div>
    </section>
  );
}
