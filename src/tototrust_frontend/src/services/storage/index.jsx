// src/services/storage/index.jsx
import { useCallback } from 'react';
import { useNotification } from '../../contexts/NotificationContext';

// Create and export the hook properly
export const useStorage = () => {
  const { showNotification } = useNotification();

  const set = useCallback((key, value) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      return true;
    } catch (error) {
      showNotification({
        type: 'error',
        message: 'Failed to save data'
      });
      return false;
    }
  }, [showNotification]);

  const get = useCallback((key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      showNotification({
        type: 'error',
        message: 'Failed to retrieve data'
      });
      return defaultValue;
    }
  }, [showNotification]);

  const remove = useCallback((key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      showNotification({
        type: 'error',
        message: 'Failed to remove data'
      });
      return false;
    }
  }, [showNotification]);

  const clear = useCallback(() => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      showNotification({
        type: 'error',
        message: 'Failed to clear storage'
      });
      return false;
    }
  }, [showNotification]);

  return {
    set,
    get,
    remove,
    clear
  };
};

// Make sure to export as default as well
export default useStorage;