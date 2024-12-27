// src/utils/formatters/index.jsx
import { useCallback } from 'react';

export const useFormatters = () => {
  const formatDate = useCallback((date, format = 'full') => {
    if (!date) return '';
    const d = new Date(date);
    
    switch (format) {
      case 'full':
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(d);
      
      case 'short':
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }).format(d);
      
      case 'time':
        return new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }).format(d);
      
      case 'datetime':
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }).format(d);
      
      case 'relative':
        const now = new Date();
        const diff = now - d;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (seconds < 60) return 'just now';
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        if (days < 30) return `${days}d ago`;
        return formatDate(date, 'short');
      
      default:
        return formatDate(date, 'full');
    }
  }, []);

  const formatCurrency = useCallback((amount, currency = 'USD', style = 'standard') => {
    if (typeof amount !== 'number') return '';
    
    const options = {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    };

    if (style === 'compact') {
      options.notation = 'compact';
      options.compactDisplay = 'short';
    }

    return new Intl.NumberFormat('en-US', options).format(amount);
  }, []);

  const formatNumber = useCallback((number, format = 'standard') => {
    if (typeof number !== 'number') return '';

    switch (format) {
      case 'decimal':
        return new Intl.NumberFormat('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(number);

      case 'percent':
        return new Intl.NumberFormat('en-US', {
          style: 'percent',
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        }).format(number / 100);

      case 'compact':
        return new Intl.NumberFormat('en-US', {
          notation: 'compact',
          compactDisplay: 'short'
        }).format(number);

      default:
        return new Intl.NumberFormat('en-US').format(number);
    }
  }, []);

  const formatPhone = useCallback((phone) => {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phone;
  }, []);

  const formatFileSize = useCallback((bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }, []);

  return {
    formatDate,
    formatCurrency,
    formatNumber,
    formatPhone,
    formatFileSize
  };
};

export default useFormatters;