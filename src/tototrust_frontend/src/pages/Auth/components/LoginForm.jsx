// src/pages/Auth/components/LoginForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../services/auth';
import { useValidators } from '../../../utils/validators';
import { useHelpers } from '../../../utils/helpers';
import Input from '../../../components/common/Input';

function LoginForm() {
  const { login, loading, error } = useAuth();
  const { validateEmail, validatePassword, validateForm } = useValidators();
  const { debounce } = useHelpers();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [validationErrors, setValidationErrors] = useState({});

  const rules = {
    email: {
      required: true,
      validate: validateEmail
    },
    password: {
      required: true,
      validate: validatePassword
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData, rules);
    
    if (Object.keys(errors).length === 0) {
      try {
        await login(formData);
      } catch (err) {
        console.error('Login failed:', err);
      }
    } else {
      setValidationErrors(errors);
    }
  };

  const handleChange = debounce((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, 300);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-400 rounded p-4 text-red-700">
          {error}
        </div>
      )}

      <Input
        label="Email address"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
        error={validationErrors.email}
        disabled={loading}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        required
        value={formData.password}
        onChange={handleChange}
        error={validationErrors.password}
        disabled={loading}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link 
            to="/auth/forgot-password" 
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
            ${loading 
              ? 'bg-primary-400 cursor-not-allowed' 
              : 'bg-primary-600 hover:bg-primary-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </>
          ) : (
            'Sign in'
          )}
        </button>
      </div>

      <div className="text-sm text-center">
        <span className="text-gray-500">Don't have an account?</span>{' '}
        <Link 
          to="/auth/register" 
          className="font-medium text-primary-600 hover:text-primary-500"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;