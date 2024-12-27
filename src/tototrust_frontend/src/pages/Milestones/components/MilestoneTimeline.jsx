// src/pages/Milestones/components/MilestoneTimeline.jsx
import React from 'react';

function MilestoneTimeline() {
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
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="milestone-timeline py-8">
      {milestones.map((milestone, index) => (
        <div key={milestone.id} className="timeline-item mb-8">
          <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full`}>
            {/* Date */}
            <div className="w-5/12 px-4">
              <div className={`text-right ${index % 2 !== 0 && 'text-left'}`}>
                <span className="text-sm font-medium text-gray-500">
                  {new Date(milestone.date).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Line and Dot */}
            <div className="w-2/12 flex justify-center relative">
              <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="w-5/12 px-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">
                  {milestone.title}
                </h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${
                  milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                  milestone.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {milestone.status}
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  {milestone.description}
                </p>
                <div className="mt-2 text-sm text-gray-500">
                  Category: {milestone.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {milestones.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No milestones recorded yet.</p>
        </div>
      )}
    </div>
  );
}

export default MilestoneTimeline;