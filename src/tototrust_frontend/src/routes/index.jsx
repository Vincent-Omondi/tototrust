// src/routes/index.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProtectedRoute from '../components/common/ProtectedRoute';

// Pages
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Milestones from '../pages/Milestones';
import Settings from '../pages/Settings';
import Auth from '../pages/Auth';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth/*" element={<Auth />} />
        
        {/* Protected Routes */}
        <Route 
          path="dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="milestones" 
          element={
            <ProtectedRoute>
              <Milestones />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="settings" 
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } 
        />

        {/* 404 Route */}
        <Route 
          path="*" 
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
                <p className="text-gray-600">The page you're looking for doesn't exist.</p>
              </div>
            </div>
          } 
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;