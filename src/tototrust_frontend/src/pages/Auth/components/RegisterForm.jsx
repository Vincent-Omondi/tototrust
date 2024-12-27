// src/pages/Auth/components/RegisterForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../components/common/Input';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add registration logic here
    console.log('Register attempt with:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Input
        label="Full name"
        name="name"
        type="text"
        required
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <Input
        label="Email address"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        required
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        required
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Create account
        </button>
      </div>

      <div className="text-sm text-center">
        <span className="text-gray-500">Already have an account?</span>{' '}
        <Link to="/auth/login" className="font-medium text-primary-600 hover:text-primary-500">
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;