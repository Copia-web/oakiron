'use client';
import Link from 'next/link';
import React from 'react';
import { signoutUser } from '../severAction/actions';
import { redirect } from 'next/navigation';
import { authState } from '../Slices/userState';
import { useDispatch } from 'react-redux';

  

export default function Card({collections, size = 200, showLogout=false,}) {

  const dispatch = useDispatch();


  return (
    <div className="xs:text-lg md:text-sm flex flex-col gap-3 p-2" style={{ width: `${size}px` }}>
{ 
            collections?.length > 0 && (collections.map((i,index)=>(
              <Link key={index} href={i.url} className=' inline-block transition duration-75 hover:scale-105' >
                  {i.name}
              </Link>
          )))  
        }
        { showLogout && 
          <div>
              <button className='transition duration-75 hover:scale-105 cursor-pointer' onClick={async()=>{
                dispatch(authState())
               await signoutUser();
                redirect('/')
              }}>Logout</button>
           </div> 
        }
    </div>
  )
}
