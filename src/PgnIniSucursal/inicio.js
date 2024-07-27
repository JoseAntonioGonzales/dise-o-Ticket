import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from './components/card';
import Button from './components/Button';

const Inicio = () => {
  const items = [
    {
      description: 'Se reventaron los focos de la sucursal de forma inesperada, solicito un cambio',
      images: [
        '/333.png',
        '/222.png',
        '/logo192.png',
        '/logo192.png',
      ]
    },
    {
      description: 'Se reventaron los focos de la sucursal de forma inesperada, solicito un cambio',
      images: [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
      ]
    },
    {
      description: 'Se reventaron los focos de la sucursal de forma inesperada, solicito un cambio',
      images: [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
      ]
    },
    // Agrega más elementos según sea necesario
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="sticky top-0 z-10 bg-gray-100 p-4">
        <header className="flex flex-col md:flex-row justify-between items-center mb-4 bg-white p-4 rounded shadow-md">
          <h1 className="text-2xl font-bold italic mb-4 md:mb-0">LISTA TIKET</h1>
          <div className="flex items-center space-x-2 bg-gray-200 p-2 rounded w-full md:w-auto">
            <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 border-none outline-none py-1 px-2 w-full md:w-64 rounded"
            />
          </div>
        </header>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <Button />
    </div>
  );
};

export default Inicio;
