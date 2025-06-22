import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoleCard from '../components/RoleCard';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <div className="text-4xl sm:text-5xl font-bold mb-4">Welcome to MediCare Companion</div>
        <p className="text-lg max-w-xl mx-auto text-gray-700">
          Your trusted partner in medication management. Choose your role to get started with personalized features.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <RoleCard
          role="Patient"
          description="Track your medication schedule and maintain your health records."
          features={[
            "Mark medications as taken",
            "Upload proof photos (optional)",
            "View your medication calendar",
            "Large, easy-to-use interface",
          ]}
          buttonText="Continue as Patient"
          color="blue"
          onClick={() => navigate("/dashboard/patient")}
        />

        <RoleCard
          role="Caretaker"
          description="Monitor and support your loved one's medication adherence."
          features={[
            "Monitor medication compliance",
            "Set up notification preferences",
            "View detailed reports",
            "Receive email alerts",
          ]}
          buttonText="Continue as Caretaker"
          color="green"
          onClick={() => navigate("/dashboard/caretaker")}
        />
      </div>
    </div>
  );
};

export default Home;



