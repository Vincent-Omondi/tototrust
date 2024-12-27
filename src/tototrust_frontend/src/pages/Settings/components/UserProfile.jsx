// src/pages/Settings/components/UserProfile.jsx
import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotification } from '../../../contexts/NotificationContext';
import Input from '../../../components/common/Input';

function UserProfile() {
  const { user, updateProfile } = useAuth();
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    avatarUrl: user?.avatarUrl || ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateProfile(formData);
      showNotification({
        message: 'Profile updated successfully!',
        type: 'success'
      });
    } catch (error) {
      showNotification({
        message: error.message || 'Failed to update profile',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={formData.avatarUrl || '/default-avatar.png'}
                  alt="Profile"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <button
                  type="button"
                  className="absolute bottom-0 right-0 rounded-full bg-white p-1 shadow-sm border border-gray-300 hover:bg-gray-50"
                >
                  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="ml-6">
                <h4 className="text-sm font-medium text-gray-900">Profile Photo</h4>
                <p className="text-sm text-gray-500">Update your profile photo</p>
              </div>
            </div>

            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;