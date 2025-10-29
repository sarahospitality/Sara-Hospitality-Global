import { useState } from 'react';
import { FormData, FormErrors, SubmissionState, InquiryCategory } from '@/types/inquiries';

const initialFormData: FormData = {
  full_name: '',
  email: '',
  phone: '',
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
    if (!formData.full_name || !formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message || !formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.category || formData.category.length === 0) {
      newErrors.category = 'Please select at least one category';
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    console.log('useInquiryForm: Validation result:', isValid, 'Errors:', newErrors);
    return isValid;
  };

  const updateField = (field: keyof FormData, value: string | InquiryCategory[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    setErrors(prev => {
      if (prev[field]) {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      }
      return prev;
    });
  };

  const toggleCategory = (category: InquiryCategory) => {
    setFormData(prev => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter(c => c !== category)
        : [...prev.category, category]
    }));
    
    // Clear category error when user makes a selection
    setErrors(prev => {
      if (prev.category) {
        const newErrors = { ...prev };
        delete newErrors.category;
        return newErrors;
      }
      return prev;
    });
  };

  const submitForm = async (): Promise<boolean> => {
    console.log('useInquiryForm: submitForm called');
    console.log('useInquiryForm: formData:', formData);
    
    if (!validateForm()) {
      console.log('useInquiryForm: Validation failed, errors:', errors);
      return false;
    }

    setSubmissionState(prev => ({ ...prev, isSubmitting: true, isError: false, isSuccess: false }));

    try {
      console.log('useInquiryForm: Sending request to /api/inquiries');
      console.log('useInquiryForm: Payload:', JSON.stringify(formData));
      
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('useInquiryForm: Response status:', response.status);
      console.log('useInquiryForm: Response ok:', response.ok);

      let result;
      try {
        const text = await response.text();
        console.log('useInquiryForm: Response text:', text);
        result = text ? JSON.parse(text) : {};
      } catch (parseError) {
        console.error('useInquiryForm: Error parsing response:', parseError);
        setSubmissionState(prev => ({
          ...prev,
          isSubmitting: false,
          isError: true,
          errorMessage: 'Invalid response from server. Please try again.'
        }));
        return false;
      }

      console.log('useInquiryForm: Response data:', result);

      if (response.ok) {
        console.log('useInquiryForm: Success! Inquiry submitted with ID:', result.id);
        setSubmissionState(prev => ({ ...prev, isSubmitting: false, isSuccess: true }));
        // Reset form after successful submission
        setFormData(initialFormData);
        return true;
      } else {
        console.error('useInquiryForm: API error:', result);
        setSubmissionState(prev => ({
          ...prev,
          isSubmitting: false,
          isError: true,
          errorMessage: result.error || result.message || `Server error (${response.status}). Please try again.`
        }));
        return false;
      }
    } catch (error) {
      console.error('useInquiryForm: Form submission error:', error);
      setSubmissionState(prev => ({
        ...prev,
        isSubmitting: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : 'Network error. Please check your connection and try again.'
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
