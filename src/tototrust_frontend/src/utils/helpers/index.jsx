// src/utils/helpers/index.jsx
import { useCallback } from 'react';
import { useNotification } from '../../contexts/NotificationContext';

export const useHelpers = () => {
  const { showNotification } = useNotification();

  const debounce = useCallback((func, wait = 300) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }, []);

  const throttle = useCallback((func, limit = 300) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification({
        type: 'success',
        message: 'Copied to clipboard'
      });
      return true;
    } catch (err) {
      showNotification({
        type: 'error',
        message: 'Failed to copy to clipboard'
      });
      return false;
    }
  }, [showNotification]);

  const downloadFile = useCallback((content, fileName, contentType) => {
    try {
      const blob = new Blob([content], { type: contentType });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      showNotification({
        type: 'error',
        message: 'Failed to download file'
      });
    }
  }, [showNotification]);

  const arrayToCSV = useCallback((data, headers) => {
    if (!data || !data.length) return '';
    
    const csvHeaders = headers || Object.keys(data[0]);
    const csvRows = data.map(row => 
      csvHeaders.map(header => {
        const cell = row[header];
        return typeof cell === 'string' ? `"${cell}"` : cell;
      }).join(',')
    );
    
    return [csvHeaders.join(','), ...csvRows].join('\n');
  }, []);

  const groupBy = useCallback((array, key) => {
    return array.reduce((result, item) => {
      (result[item[key]] = result[item[key]] || []).push(item);
      return result;
    }, {});
  }, []);

  const sortBy = useCallback((array, key, direction = 'asc') => {
    return [...array].sort((a, b) => {
      if (direction === 'asc') {
        return a[key] > b[key] ? 1 : -1;
      }
      return a[key] < b[key] ? 1 : -1;
    });
  }, []);

  const generateId = useCallback(() => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }, []);

  const retryOperation = useCallback(async (operation, maxAttempts = 3, delay = 1000) => {
    let lastError;
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        if (attempt < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, delay * attempt));
        }
      }
    }
    
    throw lastError;
  }, []);

  return {
    debounce,
    throttle,
    copyToClipboard,
    downloadFile,
    arrayToCSV,
    groupBy,
    sortBy,
    generateId,
    retryOperation
  };
};

export default useHelpers;