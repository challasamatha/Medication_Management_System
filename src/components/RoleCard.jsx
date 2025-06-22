import React from "react";

const RoleCard = ({ role, description, features, buttonText, color, onClick }) => {
  const borderColor = color === "blue" ? "border-blue-600" : "border-green-600";
  const buttonColor = color === "blue" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700";
  const iconColor = color === "blue" ? "text-blue-600" : "text-green-600";

  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${borderColor} w-80`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`text-2xl ${iconColor}`}>
          {color === "blue" ? "👤" : "👥"}
        </div>
        <h3 className={`text-lg font-semibold ${iconColor}`}>I'm a {role}</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <ul className="text-sm text-gray-600 list-disc pl-4 mb-4">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <button
        onClick={onClick}
        className={`w-full ${buttonColor} text-white py-2 rounded transition duration-300`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default RoleCard;
