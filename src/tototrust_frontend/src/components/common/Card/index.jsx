import React from 'react';

function Card({ children, title, className = '', ...props }) {
  return (
    <div className={`bg-white shadow overflow-hidden sm:rounded-lg ${className}`} {...props}>
      {title && (
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
        </div>
      )}
      <div className="px-4 py-5 sm:p-6">
        {children}
      </div>
    </div>
  );
}

export default Card;