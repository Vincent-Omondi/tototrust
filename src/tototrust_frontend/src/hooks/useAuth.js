// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return {
    ...context,
    getToken: () => context.getToken?.() || localStorage.getItem('auth_token'),
    isAdmin: context.user?.role === 'admin',
    isProvider: context.user?.role === 'provider',
    isParent: context.user?.role === 'parent'
  };
};

export default useAuth;