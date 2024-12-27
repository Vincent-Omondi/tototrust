// src/hooks/useApi.js
import { useState, useCallback } from 'react';
import { useAuth } from './useAuth';
import { useNotification } from '../contexts/NotificationContext';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();
  const { showNotification } = useNotification();

  const apiCall = useCallback(async (
    endpoint,
    method = 'GET',
    data = null,
    showError = true
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        ...(data ? { body: JSON.stringify(data) } : {})
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      return result;
    } catch (err) {
      setError(err.message);
      if (showError) {
        showNotification({
          type: 'error',
          message: err.message
        });
      }
      throw err;
    } finally {
      setLoading(false);
    }
  }, [token, showNotification]);

  return {
    loading,
    error,
    apiCall
  };
};