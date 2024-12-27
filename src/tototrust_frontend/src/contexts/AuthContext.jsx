// src/contexts/AuthContext.jsx
import React, { createContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStorage from '../services/storage';

export const AuthContext = createContext(null);

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user';

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const storage = useStorage();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = storage.get(USER_KEY);
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, [storage]);

  const login = useCallback(async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      
      // TODO: Replace with actual API call
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({ 
          user: { 
            id: '1', 
            name: credentials.email,
            email: credentials.email 
          },
          token: 'dummy_token'
        }), 1000)
      );

      storage.set(TOKEN_KEY, response.token);
      storage.set(USER_KEY, response.user);
      setUser(response.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to login');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [navigate, storage]);

  const logout = useCallback(() => {
    storage.remove(TOKEN_KEY);
    storage.remove(USER_KEY);
    setUser(null);
    navigate('/auth/login');
  }, [navigate, storage]);

  const getToken = useCallback(() => {
    return storage.get(TOKEN_KEY);
  }, [storage]);

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    getToken,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}