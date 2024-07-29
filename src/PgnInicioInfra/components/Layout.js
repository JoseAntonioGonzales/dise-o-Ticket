import React, { useState } from 'react';
import Sidebar from './sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative flex">
      <Sidebar isOpen={sidebarOpen} />
      <button
        className="fixed top-4 left-4 z-30 p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
      </button>
      <div className={`flex-1 p-4 transition-all duration-300 ease-in-out ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
