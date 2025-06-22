import React from 'react';

const StatCard = ({ label, value, color = 'gray' }) => {
  const colorClass = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-500',
    red: 'text-red-600',
    purple: 'text-purple-600',
    gray: 'text-gray-700',
  };

  const borderColorClass = {
    blue: 'border-blue-100',
    green: 'border-green-100',
    yellow: 'border-yellow-100',
    red: 'border-red-100',
    purple: 'border-purple-100',
    gray: 'border-gray-200',
  };

  return (
    <div className={`bg-white shadow rounded-lg p-4 border-l-4 ${borderColorClass[color]} `}>
      <h4 className="text-sm text-gray-500">{label}</h4>
      <p className={`text-xl font-bold ${colorClass[color]}`}>{value}</p>
    </div>
  );
};

export default StatCard;












