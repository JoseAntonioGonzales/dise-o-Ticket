import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-white shadow-md z-20 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
      <div className="relative h-full p-4">
        <div className="mt-16"> {/* Añadimos margen superior para dar espacio al botón */}
          <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 mb-4">
            <FontAwesomeIcon icon={faHome} />
            <span>INICIO</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 mb-4">
            <FontAwesomeIcon icon={faFileAlt} />
            <span>REPORTE</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>CERRAR SESIÓN</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
