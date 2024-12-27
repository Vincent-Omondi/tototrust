// src/components/features/Dashboard/index.jsx
import React from 'react';
import { useAuth } from '../../../hooks/useAuth';

function DashboardFeature() {
  const { user } = useAuth();

  const stats = [
    { name: 'Total Milestones', value: '24' },
    { name: 'Completed', value: '18' },
    { name: 'In Progress', value: '3' },
    { name: 'Upcoming', value: '3' }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'milestone',
      title: 'First Steps',
      date: new Date().toLocaleDateString(),
      status: 'completed'
    },
    {
      id: 2,
      type: 'appointment',
      title: 'Regular Checkup',
      date: new Date().toLocaleDateString(),
      status: 'upcoming'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="mt-1 text-gray-500">
          Here's what's happening with your child's development
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white shadow rounded-lg p-5"
          >
            <dt className="text-sm font-medium text-gray-500 truncate">
              {stat.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          <div className="mt-4 space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center">
                  {activity.type === 'milestone' ? (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">
                      Milestone
                    </span>
                  ) : (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                      Appointment
                    </span>
                  )}
                  <span className="ml-3 text-gray-900">{activity.title}</span>
                </div>
                <div className="text-sm text-gray-500">{activity.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardFeature;