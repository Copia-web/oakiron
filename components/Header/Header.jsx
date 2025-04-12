'use client';
import React, { useEffect, useState } from 'react'
import logo from '@/public/logo.svg';
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';
import avatar from "@/components/assets/avatar.png";
import Card from './Card';
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { IoNotificationsCircle } from "react-icons/io5";
import { sessions } from '../severAction/actions';
import { useSelector } from 'react-redux';

const profile = [
  {name:'Profile',url:'/profile'},
  {name:'Orders',url:'/orders'},
  {name:'Wishlist',url:'/whishlist'},
  {name:'Cart',url:'/cart'},
  {name:'Help & Support',url:'/'},
]
 
const collections = [
  {name:'Office Setup', url:'/'},
  { name: "Living Room Essentials", url: "/" },
  { name: "Bedroom Basics", url: "/" },
  { name: "Dining & Kitchen", url: "/" },
  { name: "Outdoor Comfort", url: "/" },
];


export default function Header() {
  const [showAvatar, setShowAvatar] = useState(false);
  const [showCollection, setShowCollection] = useState(false); 
  const [showProfile, setShowProfile] = useState(false); 
  const [togglemenu,setToggleMenu] = useState(false);
  const [toggleProfile,setProfile] = useState(true);
  const [username,setUsername] = useState(null);
  const handleToggleProfile = ()=> setProfile(!toggleProfile);
/*   const handletoggle = ()=> setToggleMenu(!togglemenu); 
 */  const [userImg,setUserImg] = useState(''); 
  const [refreshState,setRefreshState]= useState(true)

  const state = useSelector((state)=>state.user.userStatus);



  useEffect(() => {
    const getSession = async () => {
      const res = await sessions();
      if (res && res.username) {
        setUsername(res?.username.name || 'Guest');
        setShowAvatar(true);
        setUserImg(res.username.image || '');
      } else {
        setShowAvatar(false);
        setUsername('');
        setUserImg('');
      }
    };
    getSession();
  }, [state]);

  return (
    <header className='px-2 py-4 flex gap-2 border-b border-gray-400 justify-between '>
        <Link href="/" className='hidden md:flex items-center gap-2 '>
            <Image src={logo} alt="alt" width={30} height={30} />
            <span>Oak & Iron</span>
        </Link>
        
        <Link href="/" className='xs:hidden md:flex gap-1 items-center'>
          <span>products</span>
        </Link>
        
     
          
        {
          showAvatar ? (
          <div className='flex gap-2'>
            <IoNotificationsCircle size={30} className='hidden md:block md:ml-28'/>
             <div className=' mr-5 gap-1 relative xs:hidden md:flex' onMouseEnter={() => setShowProfile(!showProfile)} onMouseLeave={() => setShowProfile(!showProfile)}>
              <div  className=''>
             <div className='flex items-center gap-1 mr-4 cursor-pointer'>
              {
                userImg ? <Image src={userImg} alt="avatar" width={30} height={30} className='rounded-full' /> : ( <Image src={avatar} alt="alt" width={30} height={30} />)
              }
             
              <span>{username}</span> {/* replace with username */}
            </div>
           </div>

            {/* profile */}
            {showProfile && (
            <div className="absolute left-0  top-4 mt-2 bg-white shadow-lg border border-gray-300 rounded-md p-2 z-50 flex flex-col  ">
              <Card collections={profile} size={100} showLogout={true} />
            </div>
          )}
           </div>
          </div>
          ) : (<div className=' gap-5 xs:hidden md:flex'>
            
            <Link href='/signup'  className='border pt-1 pb-1 pl-2 pr-2 rounded-md transition duration-150 hover:scale-110 hover:bg-black hover:text-white cursor-pointer'>login</Link >
          </div>)
        }

        {/* Menu for smaller screens */}
      
         <header className='md:hidden flex gap-2  w-full  '>
{/*          <CiMenuBurger size={30} onClick={handletoggle} />
 */}         <Link href="/" className='flex items-center gap-2 flex-1 '>
            <Image src={logo} alt="alt" width={30} height={30} />
            <span>Oak & Iron</span>
        </Link>
        {/*  {
            togglemenu && <div className="fixed left-0 top-0 shadow-lg border border-gray-300  flex flex-col p-2 lg:hidden h-screen bg-white rounded-md  z-50  ">
               <IoCloseOutline size={30} onClick={handletoggle} className='self-end border' />
              <p className='text-lg font-bold mt-5 mb-3 '>Collections</p>
              <Card collections={collections}  />
            </div>
          } */}
            {
              showAvatar ? ( <div className='flex gap-4 relative mr-1'>
                <IoNotificationsCircle size={30} className=''/>
                {/* <Image src={} alt="avatar" width={30} height={30} onClick={handleToggleProfile} /> */}
                {
                userImg ? <Image src={userImg} alt="avatar" width={30} height={30} onClick={handleToggleProfile} className='rounded-full' /> : ( <Image src={avatar} alt="alt" width={30} height={30} />)
              }
               { toggleProfile && (<div className='fixed right-0 top-0 bg-white h-screen   shadow-lg border border-gray-300 rounded-md z-50'>
                   <IoCloseOutline size={30} onClick={handleToggleProfile} className='mb-3 m-4 border ' />
                   <div className='px-6'>
                   <Card collections={profile} size={150} showLogout={true} />
                   </div>
               </div>)
        
               }
                </div>) : (<div className=' gap-5 flex'>
               
                <Link href='/signup'  className='border pt-1 pb-1 pl-2 pr-2 rounded-md transition duration-150 hover:scale-110 hover:bg-black hover:text-white cursor-pointer'>login</Link >
              </div>)
            }
          
         </header>
          
    </header>
  )
}





