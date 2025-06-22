import React from 'react';

const MedicationList = ({ meds = [], markAsTaken }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Today's Medications</h3>

      {meds.length === 0 ? (
        <p className="text-gray-500">No medications found.</p>
      ) : (
        <ul className="space-y-3">
          {meds.map((med) => (
            <li key={med.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{med.name}</p>
                <p className="text-sm text-gray-500">
                  Dosage: {med.dosage}, Frequency: {med.frequency}
                </p>
              </div>
              <button
                onClick={() => markAsTaken && markAsTaken(med.id)}
                disabled={med.takenToday}
                className={`px-3 py-1 rounded ${
                  med.takenToday
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {med.takenToday ? 'Taken' : 'Mark as Taken'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MedicationList;









