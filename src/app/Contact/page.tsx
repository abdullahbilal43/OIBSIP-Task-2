'use client'

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Basic validation
    let valid = true;

    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
      valid = false;
    }

    if (!/^\d{10}$/.test(formData.contactNumber)) {
      setErrors((prevErrors) => ({ ...prevErrors, contactNumber: 'Invalid contact number' }));
      valid = false;
    }

    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, message: 'Message is required' }));
      valid = false;
    }

    if (valid) {
      // You can handle form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container mt-16 mx-auto p-8">
      
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            className={`w-full p-3 border ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

