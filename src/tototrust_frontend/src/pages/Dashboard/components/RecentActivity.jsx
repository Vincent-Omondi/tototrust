// src/pages/Dashboard/components/RecentActivity.jsx
import React from 'react';

function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: 'New milestone recorded',
      description: 'First steps milestone recorded on June 15, 2024'
    },
    {
      id: 2,
      title: 'Development update',
      description: 'Monthly development check completed'
    }
  ];

  return (
    <div className="mt-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Recent Activity
          </h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <li key={activity.id} className="px-4 py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecentActivity;