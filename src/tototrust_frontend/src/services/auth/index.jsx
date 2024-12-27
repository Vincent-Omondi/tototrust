// src/services/auth/index.jsx
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../api';
import useStorage from '../storage';
import { useNotification } from '../../contexts/NotificationContext';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user';

export const useAuth = () => {
  const api = useApi();
  const storage = useStorage();
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  const setToken = useCallback((token) => {
    storage.set(TOKEN_KEY, token);
  }, [storage]);

  const getToken = useCallback(() => {
    return storage.get(TOKEN_KEY);
  }, [storage]);

  const removeToken = useCallback(() => {
    storage.remove(TOKEN_KEY);
  }, [storage]);

  const setUser = useCallback((user) => {
    storage.set(USER_KEY, user);
  }, [storage]);

  const getUser = useCallback(() => {
    return storage.get(USER_KEY);
  }, [storage]);

  const removeUser = useCallback(() => {
    storage.remove(USER_KEY);
  }, [storage]);

  const login = useCallback(async (credentials) => {
    try {
      const response = await api.auth.login(credentials);
      if (response.token) {
        setToken(response.token);
        setUser(response.user);
        showNotification({
          type: 'success',
          message: 'Successfully logged in!'
        });
        navigate('/dashboard');
      }
      return response;
    } catch (error) {
      showNotification({
        type: 'error',
        message: error.message || 'Failed to login'
      });
      throw error;
    }
  }, [api.auth, setToken, setUser, showNotification, navigate]);

  const register = useCallback(async (userData) => {
    try {
      const response = await api.auth.register(userData);
      if (response.token) {
        setToken(response.token);
        setUser(response.user);
        showNotification({
          type: 'success',
          message: 'Successfully registered!'
        });
        navigate('/dashboard');
      }
      return response;
    } catch (error) {
      showNotification({
        type: 'error',
        message: error.message || 'Failed to register'
      });
      throw error;
    }
  }, [api.auth, setToken, setUser, showNotification, navigate]);

  const logout = useCallback(() => {
    try {
      removeToken();
      removeUser();
      showNotification({
        type: 'success',
        message: 'Successfully logged out'
      });
      navigate('/auth/login');
    } catch (error) {
      showNotification({
        type: 'error',
        message: 'Failed to logout'
      });
    }
  }, [removeToken, removeUser, showNotification, navigate]);

  const isAuthenticated = useCallback(() => {
    return !!getToken();
  }, [getToken]);

  return {
    user: getUser(),
    setToken,
    getToken,
    removeToken,
    setUser,
    getUser,
    removeUser,
    login,
    register,
    logout,
    isAuthenticated
  };
};

export default useAuth;