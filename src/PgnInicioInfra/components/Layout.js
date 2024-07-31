import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faClipboardList, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1024;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isDesktop) {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {isDesktop && <Sidebar isOpen={sidebarOpen} />}
      {isDesktop && (
        <button
          className="fixed top-4 left-4 z-30 p-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
      )}
      <div className={`flex-1 p-4 transition-all duration-300 ease-in-out ${sidebarOpen && isDesktop ? 'ml-64' : 'ml-0'}`}>
        {children}
      </div>
      {/* Navbar inferior para pantallas pequeñas */}
      {!isDesktop && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around py-2 border-t border-gray-600">
          <NavItem icon={faHome} text="Inicio" />
          <NavItem icon={faClipboardList} text="Pedidos" />
          <NavItem icon={faSignOutAlt} text="Salir" />
          <NavItem icon={faUser} text="Juancito" />
        </div>
      )}
    </div>
  );
};

const NavItem = ({ icon, text }) => (
  <div className="flex flex-col items-center group text-sm">
    <FontAwesomeIcon 
      icon={icon} 
      className="text-xl transform transition-transform duration-300 ease-in-out group-hover:translate-y-[-4px]" 
    />
    <span className="mt-1 transition-all duration-300 ease-in-out group-hover:text-lime-400">
      {text}
    </span>
  </div>
);

export default Layout;
