// src/components/layout/Layout/index.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Sidebar from '../Sidebar/index';

function Layout() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <div className="flex flex-1">
        {isAuthenticated && (
          <div className="w-64 flex-shrink-0">
            <Sidebar />
          </div>
        )}
        
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;