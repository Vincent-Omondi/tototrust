// src/pages/Auth/index.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function Auth() {
  return (
    <AuthLayout>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </AuthLayout>
  );
}

export default Auth;