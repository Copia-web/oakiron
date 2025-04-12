import Image from 'next/image'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import Link from 'next/link';
import Card from '../Header/Card';

const collections = [
  {name:'Office Setup', url:'/'},
  { name: "Living Room Essentials", url: "/" },
  { name: "Bedroom Basics", url: "/" },
  { name: "Dining & Kitchen", url: "/" },
  { name: "Outdoor Comfort", url: "/" },
];

export default function Footer() {
  return (
    <footer className='bg-gray-200 p-6 pb-5 flex xs:flex-col xs:gap-10 sm:flex-row sm:gap-28 justify-center items-center w-full'>
    <div className=''>
    <div className='flex items-center gap-2 border-b border-gray-300 '>
     <Image src='/logo.svg' width={50} height={50} alt='logo'/>
     <span className='text-lg font-bold'>Oak & Iron</span>
     </div>
     <div className='flex flex-col gap-10 text-sm mt-6'>
      <a href='mailto:raymondasajoseph@gmial.com' className='inline-flex gap-2 items-center'>
      <AiFillMessage size={30}/>
        <span>
      raymondasajoseph@gmial.com
        </span>
        </a>
      <a href='tel:0201356858'><IoIosCall size={30}  className='inline-flex gap-3 items-center'/>0201356858</a>
      <div className='flex gap-3'>
      <a href='/' className=''>
        <FaFacebook size={30}/>
      </a>
      <a href='/' className=''>
        <FaWhatsappSquare size={30}/>
      </a>
      <a href='/' className=''>
        <FaYoutube size={30}/>
      </a>
      <a href='/' className=''>
        <FaLinkedin size={30}/>
      </a>
      </div>
     </div>
    </div>


     {/* Links  */}
     <div>
      <h1 className='mb-4 text-2xl font-bold'>collections</h1>     
      <Card collections={collections} size={200}/>
     </div>
    </footer>
  )
}
