import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { FaCalendarAlt } from 'react-icons/fa';
import dayjs from 'dayjs';

const Greeting = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  return (
    <div className="text-2xl font-bold text-blue-800 mb-4">{greeting}👋,
    Ready to stay on track with your mediaction? </div>
  );
};

const StatCard = ({ label, value, color }) => {
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-700',
    red: 'text-red-600',
  };
  return (
    <div className="bg-white shadow rounded p-4">
      <h4 className="text-sm text-gray-500">{label}</h4>
      <p className={`text-xl font-bold ${colorMap[color]}`}>{value}</p>
    </div>
  );
};

const PatientDashboard = () => {
  const [meds, setMeds] = useState([]);
  const [selectedDate] = useState(dayjs()); // today
  const [calendarData, setCalendarData] = useState({});

  useEffect(() => {
    const fetchMeds = async () => {
      try {
        const res = await axios.get('/medications');
        setMeds(res.data);
        // Simulate calendar data
        const cal = {};
        for (let i = 1; i <= 30; i++) {
          const status = Math.random() > 0.2 ? 'taken' : 'missed';
          cal[i] = status;
        }
        setCalendarData(cal);
      } catch (err) {
        console.error('Error fetching medications');
      }
    };
    fetchMeds();
  }, []);

  const takenToday = meds.filter(m => m.takenToday).length;
  const adherence = meds.length ? Math.round((takenToday / meds.length) * 100) : 0;
  const streak = 3; // Mocked

  const markAsTaken = async (id) => {
    await axios.put(`/medications/${id}/taken`);
    const updated = meds.map(m =>
      m.id === id ? { ...m, takenToday: true } : m
    );
    setMeds(updated);
  };

  return (
    <div className="min-h-screen p-6 bg-blue-50">
      <Greeting />

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard label="Day Streak" value={`${streak} days`} color="yellow" />
        <StatCard
          label="Today's Status"
          value={`${takenToday}/${meds.length} taken`}
          color="blue"
        />
        <StatCard label="Monthly Adherence" value={`${adherence}%`} color="green" />
      </div>

      {/* Today's Medication Header */}
      <div className="flex items-center text-xl font-semibold text-gray-800 mb-3">
        <FaCalendarAlt className="text-blue-600 mr-2" />
        Today's Medication
      </div>

      {/* Medication Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {meds.map((med) => (
          <div
            key={med.id}
            className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-gray-800">{med.name}</h3>
              <p className="text-sm text-gray-500">Time: {med.time || '9:00 AM'}</p>
            </div>
            <button
              onClick={() => markAsTaken(med.id)}
              disabled={med.takenToday}
              className={`px-4 py-2 rounded ${
                med.takenToday
                  ? 'bg-gray-300 cursor-not-allowed text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {med.takenToday ? 'Taken' : 'Mark as Taken'}
            </button>
          </div>
        ))}
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Medication Calendar</h3>
        <div className="grid grid-cols-7 gap-2 text-center">
          {Array.from({ length: 30 }, (_, i) => {
            const date = i + 1;
            const status = calendarData[date];
            const isToday = selectedDate.date() === date;
            let dotColor = 'bg-gray-300';
            if (status === 'taken') dotColor = 'bg-green-500';
            else if (status === 'missed') dotColor = 'bg-red-500';
            return (
              <div
                key={date}
                className={`flex flex-col items-center p-2 rounded ${
                  isToday ? 'bg-blue-500 font-bold' : ''
                }`}
              >
                <div>{date}</div>
                <div className={`w-2 h-2 rounded-full mt-1 ${dotColor}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;





