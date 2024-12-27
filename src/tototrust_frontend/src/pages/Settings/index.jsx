// src/pages/Settings/index.jsx
import React, { useState } from 'react';
import { useApi } from '../../services/api';
import { useValidators } from '../../utils/validators';
import { useFormatters } from '../../utils/formatters';
import ProfileFeature from '../../components/features/Profile';
import useStorage from '../../services/storage';

function Settings() {
  const api = useApi();
  const storage = useStorage();
  const validators = useValidators();
  const { formatDate } = useFormatters();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'privacy', label: 'Privacy & Security' },
    { id: 'preferences', label: 'Preferences' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <ProfileFeature
            api={api}
            storage={storage}
            validators={validators}
            formatters={{ formatDate }}
          />
        );
      case 'notifications':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium">Notifications Settings</h2>
            <p className="text-gray-500 mt-2">Notification settings coming soon</p>
          </div>
        );
      case 'privacy':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium">Privacy & Security Settings</h2>
            <p className="text-gray-500 mt-2">Privacy settings coming soon</p>
          </div>
        );
      case 'preferences':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium">User Preferences</h2>
            <p className="text-gray-500 mt-2">Preference settings coming soon</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Settings
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Settings;