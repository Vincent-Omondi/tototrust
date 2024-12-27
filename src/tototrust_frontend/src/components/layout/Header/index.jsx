// src/components/layout/Header/index.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFormatters } from '../../../utils/formatters';

function Header() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { formatDate } = useFormatters();
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const navigationLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/milestones', label: 'Milestones' },
    { path: '/settings', label: 'Settings' }
  ];

  const getLastLoginDate = () => {
    if (user?.lastLogin) {
      return `Last login: ${formatDate(user.lastLogin, 'relative')}`;
    }
    return null;
  };

  return (
    <header className="bg-white shadow dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                TT
              </div>
              <span className="ml-2 text-xl font-bold text-primary-600 dark:text-primary-400">
                TotoTrust
              </span>
            </Link>
          </div>

          {/* Navigation Menu */}
          {user && (
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigationLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                    ${isActiveRoute(link.path)
                      ? 'border-primary-500 text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Right side - User menu and theme toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white focus:outline-none"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>

            {user ? (
              <div className="relative flex items-center space-x-4">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {user.name}
                  </span>
                  {getLastLoginDate() && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {getLastLoginDate()}
                    </span>
                  )}
                </div>
                <button
                  onClick={logout}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/auth/login"
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="text-sm bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;