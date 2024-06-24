import React from 'react';
import Cta from './Cta';
const Form = () => {

  return (
    <div className=" flex flex-col lg:flex lg:flex-row  lg:space-around items-center bg-[#F3F3F6] xl:space-x-6  rounded-3xl my-4 p-4 ">
      <h2 className="lg:text-3xl w-full  text-xl md:text-2xl text-center   font-semibold ">Are You Looking For Doctor Appointment ?</h2>
      <div className='w-full'>
      <Cta/>
      </div>
     
{
   /*   <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full lg:flex md:space-x-8 space-y-4  md:space-y-0"
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
      */
      }
    </div>
  );
};

export default Form;
