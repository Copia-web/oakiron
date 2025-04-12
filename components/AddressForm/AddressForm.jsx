'use client'
import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { resetCart } from '../Slices/cartSlice';

export default function AddressForm({ onClick, modal }) {
  const [processed, setProcessed] = useState(false);
  const dispatch = useDispatch();
  const [country,setCountry]= useState('');
  const [address,setAddress]= useState('');
  const [payment,setPayment]= useState('');
  // Update processed state when modal changes

  
  const handleSubmit = () => {
    const check = Boolean(country) && Boolean(address) && Boolean(payment)

  if (!check){
    alert('please fill out the details')
  }else{
   
      dispatch(resetCart())
      setProcessed(false);
    };
  }
  useEffect(() => {
    if (modal) {
      setProcessed(true);
    }
  }, [modal]);

 
  return (
    <div className='bg-white p-5 w-90 rounded-md'>
      <div className='mb-3 flex justify-end'>
        <IoCloseOutline size={30} onClick={onClick} className='cursor-pointer' />
      </div>

      {
        processed ? (
          <div>
            <p className='mb-2 text-center text-lg'>Enter your details</p>
            <form>
              <label className='mb-2 inline-block'>Enter Country</label>
              <input
                type='text'
                className='outline-none ring-1 focus:ring-gray-600 w-full rounded-md p-1 mb-5'
                placeholder='Ghana'
                required
                value={country}
                onChange={(e)=>setCountry(e.target.value)}
              />
              <label className='mb-2 inline-block'>Enter Address</label>
              <input
                type='text'
                className='outline-none ring-1 focus:ring-gray-600 w-full rounded-md p-1 mb-5'
                placeholder='Address'
                required
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
              />
              <label className='mb-2 inline-block'>Payment method</label>
              <input
                type='text'
                className='outline-none ring-1 focus:ring-gray-600 w-full rounded-md p-1 mb-5'
                required
                value={payment}
                onChange={(e)=>setPayment(e.target.value)}
              />
              <button
                type='button'
                className='bg-red-600 text-white w-full h-8 rounded-md transition duration-100 hover:scale-105'
                onClick={handleSubmit}
              >
                Continue with order
              </button>
            </form>
          </div>
        ) : (
          <div className='text-lg mx-auto text-center'>
           
            Order Processed
            <div className='flex justify-center mt-2'>
              <FaRegCheckCircle size={40} className='text-green-500' />
            </div>
          </div>
        )
      }
    </div>
  );
}
