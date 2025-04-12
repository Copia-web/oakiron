import React from 'react'
import avatar from "@/components/assets/avatar.png";
import Image from 'next/image';

export default function page() {
  return (
    <section className='flex flex-col items-center '>
        <div className='flex gap-2 items-center mb-4 border-b' >
            <Image className='max-w-52' src={avatar} alt='avatar'/>
            <div className='flex flex-col gap-2'>
            <button type='button' className='bg-black w-fit h-fit text-white px-2 py-1 rounded-md transition duration-75 hover:scale-105 cursor-pointer '>Change</button>
            <button type='button' className='bg-black w-fit h-fit text-white px-3 py-1 rounded-md transition duration-75 hover:scale-105 cursor-pointer '>Delete</button>
            </div>
        </div>
        <div className='mb-6 '>
            <div className='flex justify-between items-center gap-16 mb-5'>
               <div>
               <p className='font-semibold'>username </p>
               <p className='text-sm'>
                starboi
               </p>
               </div>
               <button type='button' className='bg-black w-fit h-fit text-white px-3 py-1 rounded-md transition duration-75 hover:scale-105 cursor-pointer '>Edit</button>
            </div>
            <div className='flex justify-between items-center gap-16 mb-5'>
               <div>
               <p className='font-semibold'>email </p>
               <p className='text-sm'>
                raymondasajoseph@gmail.com
               </p>
               </div>
               <button type='button' className='bg-black w-fit h-fit text-white px-3 py-1 rounded-md transition duration-75 hover:scale-105 cursor-pointer '>Edit</button>
            </div>
            <div className='flex justify-between items-center gap-16'>
               <div>
               <p className='font-semibold'>password </p>
               <p className='text-sm text-gray-500'>
                ******************
               </p>
               </div>
               <button type='button' className='bg-black w-fit h-fit text-white px-3 py-1 rounded-md transition duration-75 hover:scale-105 cursor-pointer '>Edit</button>
            </div>
        </div>
        <button type='button' className='bg-red-600 text-white px-2 rounded-md shadow-md mb-5 w-52 h-10 cursor-pointer'>Deactivate account</button>
    </section>
  )
}
