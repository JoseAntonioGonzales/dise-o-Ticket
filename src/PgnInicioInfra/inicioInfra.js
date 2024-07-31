import React, { useState } from 'react';
import Layout from './components/Layout';
import Card from './components/cad_Infra';
import InfraInfoModal from './InfraInfoModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Inicio = () => {
  const [items] = useState([
    {
      id: 1,
      images: ['a.jpg', 'b.jpg', '222.png'],
      area: 'Mantenimiento',
      description: 'Fuga de agua en la planta baja.',
      priority: 'Alta',
      date: '2024-07-29',
      status: 'Pendiente',
    },
    {
      id: 2,
      images: ['a.jpg', 'b.jpg'],
      area: 'Mantenimiento',
      description: 'Fuga de agua en la planta baja.',
      priority: 'Alta',
      date: '2024-07-29',
      status: 'Pendiente',
    },
    {
      id: 3,
      images: ['a.jpg', '222.png'],
      area: 'Mantenimiento',
      description: 'Fuga de agua en la planta baja.',
      priority: 'Alta',
      date: '2024-07-29',
      status: 'Completado',
    },
    {
      id: 4,
      images: ['222.png'],
      area: 'Mantenimiento',
      description: 'Fuga de agua en la planta baja.',
      priority: 'Alta',
      date: '2024-07-29',
      status: 'Completado',
    },
    // Más datos de ejemplo...
  ]);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [filter, setFilter] = useState('Todos');

  const handleCardClick = (item) => {
    setSelectedTicket(item);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };

  const filteredItems = items.filter((item) => {
    if (filter === 'Todos') return true;
    return item.status === filter;
  });

  return (
    <Layout>
      <div className="sticky top-0 bg-white shadow-md z-10 px-4 py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold italic">LISTA TIKET PEDIDOS</h1>
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              className={`text-lg font-semibold ${filter === 'Todos' ? 'text-blue-500' : 'text-gray-500'}`}
              onClick={() => setFilter('Todos')}
            >
              Todos
            </button>
            <button
              className={`text-lg font-semibold ${filter === 'Pendiente' ? 'text-red-500' : 'text-gray-500'}`}
              onClick={() => setFilter('Pendiente')}
            >
              Pendientes
            </button>
            <button
              className={`text-lg font-semibold ${filter === 'Completado' ? 'text-green-500' : 'text-gray-500'}`}
              onClick={() => setFilter('Completado')}
            >
              Completados
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
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
