// inicioInfra.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from './components/cad_Infra';
import Navbar from './components/navbar';

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
    <div className="bg-gray-100 min-h-screen pt-16"> {/* Añadimos padding-top para compensar el navbar fijo */}
      <Navbar />
      
      <div className="sticky top-16 bg-white shadow-md z-10"> {/* Hacemos este contenedor sticky */}
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold italic">LISTA TIKET PEDIDOS</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;