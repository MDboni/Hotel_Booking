import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm'>
      <form className='flex bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden max-md:mx-4'>
        
        {/* Left side image */}
        <img 
          src={assets.regImage} 
          alt="hotel registration" 
          className='w-1/2 object-cover hidden md:block' 
        />

        {/* Right side form */}
        <div className='relative flex flex-col w-full md:w-1/2 p-8 md:p-10'>
          
          {/* Close Button */}
          <img 
            src={assets.closeIcon} 
            alt="close-icon" 
            className='absolute top-4 right-4 h-5 cursor-pointer hover:rotate-90 transition-transform duration-300' 
          />

          {/* Title */}
          <h2 className='text-2xl font-semibold text-gray-800 mt-3 mb-2 text-center'>
            Register Your Hotel
          </h2>
          <p className='text-sm text-gray-500 mb-6 text-center'>
            Fill out the form below to get your hotel listed
          </p>

          {/* Hotel Name */}
          <div className='w-full mb-4'>
            <label htmlFor="name" className='font-medium text-gray-600'>Hotel Name</label>
            <input 
              type="text" 
              id="name"
              placeholder='e.g. Sea View Resort'
              className='border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-light'
              required 
            />
          </div>

          {/* Contact */}
          <div className='w-full mb-4'>
            <label htmlFor="contact" className='font-medium text-gray-600'>Phone</label>
            <input 
              type="text" 
              id="contact"
              placeholder='+8801XXXXXXXXX'
              className='border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-light'
              required 
            />
          </div>

          {/* Address */}
          <div className='w-full mb-4'>
            <label htmlFor="address" className='font-medium text-gray-600'>Address</label>
            <input 
              type="text" 
              id="address"
              placeholder='e.g. Cox’s Bazar, Bangladesh'
              className='border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-light'
              required 
            />
          </div>

          {/* City Dropdown */}
          <div className='w-full mb-6'>
            <label htmlFor="city" className='font-medium text-gray-600'>City</label>
            <select  
              id="city" 
              className='border border-gray-300 rounded-lg w-full px-3 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-light bg-white'
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className='bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all text-white font-medium py-2.5 w-full rounded-lg shadow-md'
          >
            Register Hotel
          </button>
        </div>

      </form>
    </div>
  )
}

export default HotelReg
