import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const InfraInfoModal = ({ isOpen, onRequestClose, ticket }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!ticket) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalles del Ticket"
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75 z-40"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl h-auto flex flex-col sm:flex-row relative">
        <button onClick={onRequestClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-30">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <div className="flex-shrink-0 w-full sm:w-1/2">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            {ticket.images.map((imageSrc, index) => (
              <div key={index} className="w-full h-48 sm:h-56">
                <img className="w-full h-full object-contain" src={imageSrc} alt={`Imagen ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex-1 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Detalles del Ticket</h2>
          <div className="text-base sm:text-lg">
            <p><strong>Área:</strong> {ticket.area}</p>
            <p><strong>Descripción:</strong> {ticket.description}</p>
            <p><strong>Prioridad:</strong> {ticket.priority}</p>
            <p><strong>Fecha:</strong> {ticket.date}</p>
            <p><strong>Estado:</strong> {ticket.status}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InfraInfoModal;
