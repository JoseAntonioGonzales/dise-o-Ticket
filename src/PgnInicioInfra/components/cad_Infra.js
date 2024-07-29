// PgnInicioInfra/components/cad_Infra.js
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const getColorFromProgress = (progress) => {
  if (progress >= 75) return 'bg-green-400'; // Verde claro
  if (progress >= 50) return 'bg-yellow-400'; // Amarillo
  if (progress >= 25) return 'bg-orange-400'; // Naranja
  return 'bg-red-400'; // Rojo
};

const Card = ({ item, onClick }) => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date();
      const requestDate = new Date(item.date);
      const daysSinceRequest = Math.floor((now - requestDate) / (1000 * 60 * 60 * 24));
      
      // Asumimos que el progreso disminuye 1% por día si el estado no es "Completado"
      if (item.status !== 'Completado') {
        const newProgress = Math.max(0, 100 - daysSinceRequest); // Decrementa 1% por día
        setProgress(newProgress);
      }
    };

    calculateProgress();
    // Opcional: puedes usar un intervalo si necesitas actualizar esto periódicamente
    const intervalId = setInterval(calculateProgress, 86400000); // 1 día en milisegundos

    return () => clearInterval(intervalId);
  }, [item.date, item.status]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsImageZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsImageZoomed(false);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? item.images.length - 1 : prevIndex - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === item.images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden m-4 transform transition-transform hover:scale-105">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          {item.images.map((imageSrc, index) => (
            <div key={index} onClick={() => handleImageClick(index)}>
              <img
                className="w-full h-48 object-cover cursor-pointer"
                src={imageSrc}
                alt={`Imagen ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Descripción</h3>
          <p className="text-gray-700 text-base whitespace-pre-line mb-4">
            {item.description}
          </p>
          {/* Barra de progreso */}
          <div className="relative mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-600 text-sm">Progreso</span>
              <span className="text-gray-600 text-sm">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getColorFromProgress(progress)} transition-width duration-300`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={onClick} className="flex items-center text-blue-600 hover:text-blue-800">
              <span>Ver más</span>
              <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {isImageZoomed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={handleCloseZoom}>
          <div className="relative max-w-3xl w-full p-4 bg-transparent rounded-lg" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseZoom} className="absolute top-4 right-4 text-white text-2xl z-50">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img
              className="w-full max-h-[80vh] object-contain"
              src={item.images[currentImageIndex]}
              alt={`Imagen ampliada ${currentImageIndex + 1}`}
            />
            <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
