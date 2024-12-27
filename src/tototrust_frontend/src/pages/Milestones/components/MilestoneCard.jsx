// src/pages/Milestones/components/MilestoneCard.jsx
import React from 'react';

function MilestoneCard({ milestone }) {
  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    upcoming: 'bg-blue-100 text-blue-800'
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">
            {milestone.title}
          </h3>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
              ${statusColors[milestone.status]}`}
          >
            {milestone.status}
          </span>
        </div>
        
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {milestone.description}
          </p>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium text-gray-900">Category:</span>
            <span className="ml-2">{milestone.category}</span>
          </div>
          <div className="mt-1 flex items-center text-sm text-gray-500">
            <span className="font-medium text-gray-900">Date:</span>
            <span className="ml-2">
              {new Date(milestone.date).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="text-sm text-primary-600 hover:text-primary-700"
            onClick={() => {/* Handle edit */}}
          >
            Edit
          </button>
          <button
            className="text-sm text-red-600 hover:text-red-700"
            onClick={() => {/* Handle delete */}}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MilestoneCard;