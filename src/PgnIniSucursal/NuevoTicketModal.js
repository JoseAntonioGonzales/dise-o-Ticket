import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselModal.css';

const NewTicketModal = ({ onClose }) => {
  const [selectedImages, setSelectedImages] = useState([
    '/b.jpg',
    '/a.jpg',
  ]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white p-6 rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-4xl mx-4 overflow-y-auto max-h-screen lg:flex lg:space-x-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-700">
          ✖
        </button>
        <div className="lg:w-1/2">
          <h2 className="text-center text-lg font-bold mb-4 lg:text-left"></h2>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={false}
            showIndicators={true}
            stopOnHover={true}
            className="mb-4"
          >
            {selectedImages.map((image, index) => (
              <div key={index}>
                <img className="object-contain w-full h-48 sm:h-64 lg:h-80" src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <form className="space-y-2 text-sm lg:w-1/2 mt-7">
          <div>
            <label className="font-bold block text-gray-700 font-semibold mb-1">SELEC. EL ÁREA:</label>
            <select className="w-full px-2 py-1 border rounded-lg">
              <option value="">Seleccionar área</option>
              <option value="soporte">Soporte</option>
              <option value="infraestructura">Infraestructura</option>
              <option value="desarrollo">Desarrollo</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">DESCRIPCIÓN:</label>
            <input className="w-full px-2 py-1 border rounded-lg" type="text" placeholder="Descripción" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">PRIORIDAD:</label>
            <select className="w-full px-2 py-1 border rounded-lg">
              <option value="">Seleccionar prioridad</option>
              <option value="alta">Urgente</option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">FECHA DE SOLICITUD:</label>
            <input className="w-full px-2 py-1 border rounded-lg" type="date" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">ESTADO:</label>
            <select className="w-full px-2 py-1 border rounded-lg">
              <option value="">Seleccionar estado</option>
              <option value="abierto">Completado</option>
              <option value="en_progreso">Pendiente</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-lg">Crear Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicketModal;
