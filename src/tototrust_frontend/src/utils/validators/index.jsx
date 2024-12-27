// src/utils/validators/index.jsx
import { useCallback } from 'react';

export const useValidators = () => {
  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
      isValid: emailRegex.test(email),
      message: emailRegex.test(email) ? '' : 'Invalid email address'
    };
  }, []);

  const validatePassword = useCallback((password) => {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const isValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;

    let message = '';
    if (!isValid) {
      message = 'Password must contain: ';
      if (!hasMinLength) message += '8+ characters, ';
      if (!hasUpperCase) message += 'uppercase letter, ';
      if (!hasLowerCase) message += 'lowercase letter, ';
      if (!hasNumber) message += 'number, ';
      if (!hasSpecialChar) message += 'special character, ';
      message = message.slice(0, -2);
    }

    return { isValid, message };
  }, []);

  const validateName = useCallback((name) => {
    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
    return {
      isValid: nameRegex.test(name),
      message: nameRegex.test(name) ? '' : 'Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes'
    };
  }, []);

  const validatePhone = useCallback((phone) => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return {
      isValid: phoneRegex.test(phone),
      message: phoneRegex.test(phone) ? '' : 'Please enter a valid phone number'
    };
  }, []);

  const validateDate = useCallback((date) => {
    const dateObj = new Date(date);
    const isValid = !isNaN(dateObj.getTime());
    const isFuture = dateObj > new Date();

    return {
      isValid: isValid && !isFuture,
      message: !isValid ? 'Invalid date' : isFuture ? 'Date cannot be in the future' : ''
    };
  }, []);

  const validateRequired = useCallback((value) => {
    const isValid = value !== null && value !== undefined && value !== '';
    return {
      isValid,
      message: isValid ? '' : 'This field is required'
    };
  }, []);

  const validateForm = useCallback((values, rules) => {
    const errors = {};
    Object.keys(rules).forEach(field => {
      if (rules[field].required) {
        const requiredCheck = validateRequired(values[field]);
        if (!requiredCheck.isValid) {
          errors[field] = requiredCheck.message;
          return;
        }
      }

      if (values[field] && rules[field].validate) {
        const result = rules[field].validate(values[field]);
        if (!result.isValid) {
          errors[field] = result.message;
        }
      }
    });
    return errors;
  }, [validateRequired]);

  return {
    validateEmail,
    validatePassword,
    validateName,
    validatePhone,
    validateDate,
    validateRequired,
    validateForm
  };
};

export default useValidators;