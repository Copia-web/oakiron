'use client';
import React from 'react'
import { login } from '@/components/severAction/actions';
import { FaGithub } from "react-icons/fa";

import { useDispatch, useSelector } from 'react-redux';
import { authState } from '@/components/Slices/userState';


export default  function page() {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.user.userStatus)
 
  return (
    <div className='w-[400px] mx-auto h-60 mt-20'>
        <button onClick={async()=>{
          dispatch(authState());
          console.log(state)
          await login();
        }} className='bg-gray-700 w-full text-white flex gap-2 p-2 rounded-md justify-center transition duration-75 hover:scale-105 cursor-pointer'> <FaGithub size={25} className='text-gray-950 '/>login with github account
         
        </button>
    </div>
  )
}
