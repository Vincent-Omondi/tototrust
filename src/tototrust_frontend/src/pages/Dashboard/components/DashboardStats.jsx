// src/pages/Dashboard/components/DashboardStats.jsx
import React from 'react';

function DashboardStats() {
  const stats = [
    { title: 'Total Milestones', value: '24' },
    { title: 'Recent Activities', value: '12' },
    { title: 'Upcoming Checkups', value: '2' }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.title}
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stat.value}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;