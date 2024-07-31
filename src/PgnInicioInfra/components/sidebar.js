import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-[#262442] text-white shadow-md z-20 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 text-white"
      >
      </button>
      <div className="p-4 pt-16">
        <div className="flex items-center space-x-2 mb-6">
          <FontAwesomeIcon icon={faUser} />
          <span className="font-semibold">Juancito Perez</span>
        </div>
        <button className="flex items-center space-x-2 text-white hover:text-gray-300 mb-4 w-full">
          <FontAwesomeIcon icon={faHome} />
          <span>INICIO</span>
        </button>
        <button className="flex items-center space-x-2 text-white hover:text-gray-300 mb-4 w-full">
          <FontAwesomeIcon icon={faFileAlt} />
          <span>REPORTE</span>
        </button>
        <button className="flex items-center space-x-2 text-white hover:text-gray-300 w-full">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>CERRAR SESIÓN</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;