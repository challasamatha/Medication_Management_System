import React from 'react';
import StatCard from '../components/StatCard';
import CalendarCard from '../components/CalendarCard';

const CaretakerDashboard = () => {
  const adherence = 78;  // Adherence percentage
  const streak = 4;      // Current streak
  const taken = 18;      // Total taken this month
  const missed = 5;      // Missed this month

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, Caretaker DashBoard 👋</h2>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Adherence Rate" value={`${adherence}%`} color="green" />
        <StatCard label="Current Streak" value={`${streak} days`} color="yellow" />
        <StatCard label="Missed This Month" value={missed} color="red" />
        <StatCard label="Taken This Month" value={taken} />
      </div>

      {/* Overview and Calendar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-gray-600">
            Patient has shown improvement in adherence this week. Slight drop on weekends. You can enable reminders.
          </p>

          <div className="mt-4">
            <h4 className="font-medium text-sm mb-1">Recent Activity</h4>
            <ul className="text-sm text-gray-500 list-disc ml-5">
              <li>3 medications taken today</li>
              <li>Missed 1 dosage yesterday</li>
              <li>Reminder sent 2 days ago</li>
            </ul>
          </div>
        </div>

        {/* Medication Calendar */}
        <CalendarCard />
      </div>

      {/* Today’s Medication Status & Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow col-span-2">
          <h3 className="text-lg font-semibold mb-2">Today’s Medication Status</h3>
          <p className="text-gray-600">3 of 4 medications taken as of now.</p>
          <ul className="list-disc ml-5 mt-3 text-sm text-gray-500">
            <li>8 AM - Taken</li>
            <li>1 PM - Taken</li>
            <li>6 PM - Pending</li>
            <li>10 PM - Pending</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
          <button className="bg-green-600 text-white px-3 py-2 mb-2 w-full rounded hover:bg-green-700">
            Send Reminder
          </button>
          <button className="bg-blue-600 text-white px-3 py-2 mb-2 w-full rounded hover:bg-blue-700">
            Call Patient
          </button>
          <button className="bg-yellow-500 text-white px-3 py-2 w-full rounded hover:bg-yellow-600">
            Update Notes
          </button>
        </div>
      </div>

      {/* Monthly Adherence Summary */}
      <div className="bg-white p-4 rounded-xl shadow mt-6">
        <h3 className="text-lg font-semibold mb-2">Monthly Adherence</h3>
        <p className="text-gray-500">Chart placeholder – integrate Recharts, Chart.js, etc. later</p>
        <div className="bg-green-100 text-green-800 p-4 mt-2 rounded text-center font-semibold">
          78% adherence this month
        </div>
      </div>
    </div>
  );
};

export default CaretakerDashboard;





