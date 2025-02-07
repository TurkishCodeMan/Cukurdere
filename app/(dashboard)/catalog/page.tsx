import React from 'react';

const CatalogPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
    <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
      
      <div className="w-full aspect-[1/1.4] relative">
        <iframe
          src="/cukurdere_katalog.pdf#toolbar=0&navpanes=0&scrollbar=1&statusbar=0&messages=0&view=FitH"
          className="w-full h-full"
          style={{ border: 'none' }}
          title="Katalog PDF"
        />
      </div>
    </div>
    </div>
  );
};

export default CatalogPage;
