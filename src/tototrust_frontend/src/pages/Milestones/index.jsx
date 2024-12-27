// src/pages/Milestones/index.jsx
import React from 'react';
import { useApi } from '../../services/api';
import { useFormatters } from '../../utils/formatters';
import { useHelpers } from '../../utils/helpers';
import MilestonesFeature from '../../components/features/Milestones';

function Milestones() {
  const api = useApi();
  const { formatDate } = useFormatters();
  const { sortBy, groupBy } = useHelpers();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Development Milestones
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Track and monitor important developmental achievements
        </p>
      </div>

      <MilestonesFeature
        formatters={{ formatDate }}
        helpers={{ sortBy, groupBy }}
        api={api}
      />
    </div>
  );
}

export default Milestones;