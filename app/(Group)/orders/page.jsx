import Products from '@/components/Products/Products';
import React from 'react'
import { IoIosCart } from "react-icons/io";

export default function page() {
  return (
    <div className='mx-5 my-5 py-2'>
      <section className='  shadow-md w-full h-52 bg-gray-100 mb-5 flex flex-col items-center justify-center gap-4 p-5'>
        <IoIosCart size={70} className='bg-gray-300/50 rounded-full p-2 text-gray-800   '/>
        <span className='font-semibold text-gray-700'>Your have no Orders</span>
        <span className='font-semibold text-gray-700'> Browse our categories and discover our best deals!</span>
      </section>

      <section className='pt-2 shadow-md  mt-10'>
        <Products/>
      </section>
    </div>
  )
}
