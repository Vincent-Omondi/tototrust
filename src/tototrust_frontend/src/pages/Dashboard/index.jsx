// src/pages/Dashboard/index.jsx
import React, { useEffect, useState } from 'react';
import { useApi } from '../../services/api';
import { useFormatters } from '../../utils/formatters';
import { useHelpers } from '../../utils/helpers';
import DashboardFeature from '../../components/features/Dashboard';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const api = useApi();
  const { formatDate, formatNumber } = useFormatters();
  const { groupBy, sortBy } = useHelpers();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [summary, stats, activity] = await Promise.all([
          api.dashboard.getSummary(),
          api.dashboard.getStats(),
          api.dashboard.getRecentActivity()
        ]);

        setDashboardData({
          summary,
          stats,
          activity
        });
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [api]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Track your child's development progress
        </p>
      </div>
      
      <DashboardFeature
        data={dashboardData}
        formatters={{ formatDate, formatNumber }}
        helpers={{ groupBy, sortBy }}
      />
    </div>
  );
}

export default Dashboard;