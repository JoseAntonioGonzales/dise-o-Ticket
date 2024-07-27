// components/navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-start items-center space-x-4">
        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faHome} />
          <span>INICIO</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faFileAlt} />
          <span>REPORTE</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>CERRAR SESION</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;