// src/services/api/index.jsx
import { useCallback } from 'react';
import { useNotification } from '../../contexts/NotificationContext';
import { useAuth } from '../../hooks/useAuth';  // Updated import path

export const useApi = () => {
  const { showNotification } = useNotification();
  const { getToken } = useAuth();
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

  const handleResponse = async (response) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
  };

  const fetchWithAuth = useCallback(async (endpoint, options = {}) => {
    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers
    };

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers
      });
      return handleResponse(response);
    } catch (error) {
      showNotification({
        type: 'error',
        message: error.message || 'API request failed'
      });
      throw error;
    }
  }, [getToken, showNotification]);

  // API Methods
  const api = {
    // Milestone endpoints
    milestones: {
      getAll: () => fetchWithAuth('/milestones'),
      getById: (id) => fetchWithAuth(`/milestones/${id}`),
      create: (data) => fetchWithAuth('/milestones', {
        method: 'POST',
        body: JSON.stringify(data)
      }),
      update: (id, data) => fetchWithAuth(`/milestones/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      }),
      delete: (id) => fetchWithAuth(`/milestones/${id}`, {
        method: 'DELETE'
      })
    },

    // User endpoints
    user: {
      getProfile: () => fetchWithAuth('/user/profile'),
      updateProfile: (data) => fetchWithAuth('/user/profile', {
        method: 'PUT',
        body: JSON.stringify(data)
      }),
      getSettings: () => fetchWithAuth('/user/settings'),
      updateSettings: (data) => fetchWithAuth('/user/settings', {
        method: 'PUT',
        body: JSON.stringify(data)
      })
    },

    // Dashboard endpoints
    dashboard: {
      getSummary: () => fetchWithAuth('/dashboard/summary'),
      getStats: () => fetchWithAuth('/dashboard/stats'),
      getRecentActivity: () => fetchWithAuth('/dashboard/activity')
    }
  };

  return api;
};

export default useApi;