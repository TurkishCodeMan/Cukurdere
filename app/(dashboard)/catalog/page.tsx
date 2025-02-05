import React from 'react';

const CatalogPage = () => {
  return (
    <div className="w-full h-screen p-4 bg-white">
      <div className="w-full h-full rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="/cukurdere_katalog.pdf"
          className="w-full h-full"
          style={{ border: 'none' }}
          title="Katalog PDF"
        />
      </div>
    </div>
  );
};

export default CatalogPage;
