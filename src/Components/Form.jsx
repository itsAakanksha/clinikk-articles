import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [errors, setErrors] = useState({});

  const treatments = ['Dengue',
  'Diabetes',
  'Hypertension',
  'Thyroid Disorders',
  'Allergic reactions',
  'Dermatitis',
  'Fungal Infections',
  'Fever',
  'Sore throat',
  'Headaches',
  'Joint Pain',
  'Back Pain',
  'Body Aches',
  'Viral infections',
  'Urinary Tract Infections (UTI)',
  'Wound Infections', 'Asthma'];

  const validate = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = 'Name is required';
    if (!phone) tempErrors.phone = 'Phone number is required';
    if (!treatment) tempErrors.treatment = 'Treatment is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className=" xl:flex xl:justify-between items-center bg-[#7E3AF2]  rounded-3xl m-4 p-4">
      <h2 className="text-2xl font-semibold mb-6">Need Some Help ?</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full md:flex md:space-x-8 space-y-4  md:space-y-0"
      >
        <div className="flex-1">
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="flex-1">
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={phone}
            placeholder='Phone Number'
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="flex-1">
          <select
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7E3AF2]"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
        
          >
            <option value="" disabled>Select Treatment</option>
            {treatments.map((treatment, index) => (
              <option key={index} value={treatment}>{treatment}</option>
            ))}
          </select>
          {errors.treatment && <p className="text-red-500 text-sm mt-1">{errors.treatment}</p>}
        </div>

        <div className="flex-1 flex items-end">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-2 text-sm rounded-full hover:bg-indigo-600 transition"
          >
            Request Call Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
