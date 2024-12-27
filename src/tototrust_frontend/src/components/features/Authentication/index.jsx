// src/components/features/Authentication/index.jsx
import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useNotification } from '../../../contexts/NotificationContext';

export function AuthenticationFeature() {
  const { login, register, isAuthenticated } = useAuth();
  const { showNotification } = useNotification();

  const handleSocialLogin = async (provider) => {
    try {
      // Implement social login logic
      await login({ provider });
      showNotification({
        type: 'success',
        message: 'Successfully logged in!'
      });
    } catch (error) {
      showNotification({
        type: 'error',
        message: error.message
      });
    }
  };

  return (
    <div className="auth-feature">
      {!isAuthenticated && (
        <div className="space-y-4">
          <button
            onClick={() => handleSocialLogin('google')}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <img
              className="h-5 w-5 mr-2"
              src="/google-icon.svg"
              alt="Google"
            />
            Continue with Google
          </button>
          
          <button
            onClick={() => handleSocialLogin('apple')}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <img
              className="h-5 w-5 mr-2"
              src="/apple-icon.svg"
              alt="Apple"
            />
            Continue with Apple
          </button>
        </div>
      )}
    </div>
  );
}