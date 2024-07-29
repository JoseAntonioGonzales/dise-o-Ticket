import React, { useState } from 'react';
import Layout from './components/Layout'; // Asegúrate de ajustar la ruta según tu estructura
import Card from './components/cad_Infra';
import InfraInfoModal from './InfraInfoModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Inicio = () => {
  const [items] = useState([
    // Ejemplo de datos; reemplazar con datos reales.
    {
      id: 1,
      images: [
        'a.jpg',
        'b.jpg',
        '222.png',
      ],
      area: 'Mantenimiento',
      description: 'Fuga de agua en la planta baja.',
      priority: 'Alta',
      date: '2024-07-29',
      status: 'Pendiente'
    },
    {
      id: 2,
      images: [
        'a.jpg',
        'b.jpg',
      ],
      area: 'Mantenimiento',
      description: 'Fuga de agua en la planta baja.',
      priority: 'Alta',
      date: '2024-07-29',
      status: 'Pendiente'
    },
    {
      id: 3,
      images: [
        'a.jpg',
        '222.png',
      ],
      area: 'Mantenimiento',
      description: 'Fuga de agua en la planta baja.',
      priority: 'Alta',
      date: '2024-07-29',
      status: 'Pendiente'
    },
    {
      id: 4,
      images: [
        
        '222.png',
      ],
      area: 'Mantenimiento',
      description: 'Fuga de agua en la planta baja.',
      priority: 'Alta',
      date: '2024-07-29',
      status: 'Pendiente'
    },
    // Más datos...
  ]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleCardClick = (item) => {
    setSelectedTicket(item);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };

  return (
    <Layout>
      <div className="sticky top-0 bg-white shadow-md z-10">
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
            <Card key={index} item={item} onClick={() => handleCardClick(item)} />
          ))}
        </div>
      </div>
      {selectedTicket && (
        <InfraInfoModal
          isOpen={!!selectedTicket}
          onRequestClose={handleCloseModal}
          ticket={selectedTicket}
        />
      )}
    </Layout>
  );
};

export default Inicio;
