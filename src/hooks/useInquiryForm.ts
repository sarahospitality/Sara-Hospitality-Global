import { useState } from 'react';
import { FormData, FormErrors, SubmissionState, InquiryCategory } from '@/types/inquiries';

const initialFormData: FormData = {
  full_name: '',
  email: '',
  phone: '',
  location: '',
  message: '',
  category: []
};

const initialErrors: FormErrors = {};

const initialSubmissionState: SubmissionState = {
  isSubmitting: false,
  isSuccess: false,
  isError: false
};

export function useInquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [submissionState, setSubmissionState] = useState<SubmissionState>(initialSubmissionState);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (formData.category.length === 0) {
      newErrors.category = 'Please select at least one category';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateField = (field: keyof FormData, value: string | InquiryCategory[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleCategory = (category: InquiryCategory) => {
    setFormData(prev => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter(c => c !== category)
        : [...prev.category, category]
    }));
    
    // Clear category error when user makes a selection
    if (errors.category) {
      setErrors(prev => ({ ...prev, category: undefined }));
    }
  };

  const submitForm = async (): Promise<boolean> => {
    if (!validateForm()) {
      return false;
    }

    setSubmissionState(prev => ({ ...prev, isSubmitting: true, isError: false, isSuccess: false }));

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionState(prev => ({ ...prev, isSubmitting: false, isSuccess: true }));
        // Reset form after successful submission
        setFormData(initialFormData);
        return true;
      } else {
        setSubmissionState(prev => ({
          ...prev,
          isSubmitting: false,
          isError: true,
          errorMessage: result.error || 'Failed to submit inquiry'
        }));
        return false;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionState(prev => ({
        ...prev,
        isSubmitting: false,
        isError: true,
        errorMessage: 'Network error. Please check your connection and try again.'
      }));
      return false;
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors(initialErrors);
    setSubmissionState(initialSubmissionState);
  };

  return {
    formData,
    errors,
    submissionState,
    updateField,
    toggleCategory,
    submitForm,
    resetForm,
    validateForm
  };
}
