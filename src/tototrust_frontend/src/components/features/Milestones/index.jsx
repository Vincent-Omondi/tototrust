// src/components/features/Milestones/index.jsx
import React, { useState } from 'react';
import { useNotification } from '../../../contexts/NotificationContext';

function MilestonesFeature() {
  const { showNotification } = useNotification();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Milestones' },
    { id: 'motor', name: 'Motor Skills' },
    { id: 'cognitive', name: 'Cognitive' },
    { id: 'social', name: 'Social & Emotional' },
    { id: 'language', name: 'Language' }
  ];

  const milestones = [
    {
      id: 1,
      title: 'First Steps',
      category: 'motor',
      status: 'completed',
      date: '2024-01-15',
      description: 'Took first independent steps'
    },
    {
      id: 2,
      title: 'First Words',
      category: 'language',
      status: 'completed',
      date: '2024-01-10',
      description: 'Said "mama" and "dada" with meaning'
    },
    // Add more milestone data as needed
  ];

  const handleMilestoneComplete = (id) => {
    showNotification({
      type: 'success',
      message: 'Milestone marked as completed!'
    });
  };

  const filteredMilestones = selectedCategory === 'all'
    ? milestones
    : milestones.filter(m => m.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedCategory === category.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Milestones Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMilestones.map(milestone => (
          <div
            key={milestone.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900">
                  {milestone.title}
                </h3>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    milestone.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {milestone.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {milestone.description}
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Date: {new Date(milestone.date).toLocaleDateString()}
                </p>
              </div>
              {milestone.status !== 'completed' && (
                <button
                  onClick={() => handleMilestoneComplete(milestone.id)}
                  className="mt-4 w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
                >
                  Mark as Complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MilestonesFeature;