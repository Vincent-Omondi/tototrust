// src/pages/Milestones/components/MilestoneList.jsx
import React from 'react';
import MilestoneCard from './MilestoneCard';

function MilestoneList() {
  // Sample data - replace with actual data from your backend
  const milestones = [
    {
      id: 1,
      title: 'First Steps',
      date: '2024-06-15',
      category: 'Motor Skills',
      description: 'Took first independent steps',
      status: 'completed',
    },
    {
      id: 2,
      title: 'First Words',
      date: '2024-05-20',
      category: 'Language',
      description: 'Said "mama" and "dada" with meaning',
      status: 'completed',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {milestones.map((milestone) => (
          <MilestoneCard
            key={milestone.id}
            milestone={milestone}
          />
        ))}
      </div>

      {milestones.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No milestones recorded yet.</p>
        </div>
      )}
    </div>
  );
}

export default MilestoneList;