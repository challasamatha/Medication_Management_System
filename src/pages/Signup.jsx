import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/signup', form);
      localStorage.setItem('token', res.data.token);
      navigate('/patient'); // Redirect
    } catch (err) {
      setError('Signup failed. Try a different email.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full" required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
