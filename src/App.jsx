import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PatientDashboard from './pages/PatientDashboard';
import CaretakerDashboard from './pages/CaretakerDashboard';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/patient" element={<PatientDashboard />} />
        <Route path="/dashboard/caretaker" element={<CaretakerDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
export default App;
















