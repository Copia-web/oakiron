'use client';

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Slices/cartSlice";
import { addWishlist } from '@/components/Slices/wishList';
// Importing images
import bedroom01 from "@/components/assets/bedroom01.jpg";
import bedroom2 from "@/components/assets/bedroom2.jpg";
import bedroom08 from "@/components/assets/bedroom08.jpg";
import bedroom04 from "@/components/assets/bedroom04.jpg";
import bedroom05 from "@/components/assets/bedroom05.jpg";
import bedroom06 from "@/components/assets/bedroom06.jpg";
import bedroom07 from "@/components/assets/bedroom07.jpg";
import bedroom03 from "@/components/assets/bedroom03.jpg";
import office04 from "@/components/assets/office04.jpg";
import office01 from "@/components/assets/office01.jpg";
import office02 from "@/components/assets/office02.jpg";
import office03 from "@/components/assets/office03.jpg";
import living01 from "@/components/assets/living01.jpg";
import living02 from "@/components/assets/living02.jpg";
import living03 from "@/components/assets/living03.jpg";
import living04 from "@/components/assets/living04.jpg";
import living05 from "@/components/assets/living05.jpg";
import { useRef, useState } from "react";
import MsgCart from "../message/MsgCart";
import { redirect } from "next/navigation";

// Product data
export const images = [
  {
    name: "Bedroom 01",
    src: bedroom01,
    price: "270.00",
    description: "A modern and cozy bedroom designed for maximum comfort..."
  },
  {
    name: "Bedroom 02",
    src: bedroom2,
    price: "270.00",
    description: "An elegant bedroom with a warm wooden bed frame..."
  },
  {
    name: "Bedroom 03",
    src: bedroom03,
    price: "270.00",
    description: "Bright and stylish, this bedroom boasts contemporary décor..."
  },
  {
    name: "Bedroom 04",
    src: bedroom04,
    price: "270.00",
    description: "This compact bedroom is ideal for small living spaces..."
  },
  {
    name: "Bedroom 05",
    src: bedroom05,
    price: "270.00",
    description: "A luxurious bedroom that combines soft tones and ambient lighting..."
  },
  {
    name: "Bedroom 06",
    src: bedroom06,
    price: "270.00",
    description: "Featuring neutral tones and modern accents..."
  },
  {
    name: "Bedroom 07",
    src: bedroom07,
    price: "270.00",
    description: "This simple yet elegant bedroom design focuses on clarity and space..."
  },
  {
    name: "Bedroom 08",
    src: bedroom08,
    price: "270.00",
    description: "With sleek lines and contemporary lighting, this bedroom reflects modern luxury..."
  },
  {
    name: "Office 01",
    src: office01,
    price: "270.00",
    description: "A functional home office setup with an ergonomic desk..."
  },
  {
    name: "Office 02",
    src: office02,
    price: "270.00",
    description: "This home office space offers a balance of professionalism and comfort..."
  },
  {
    name: "Office 03",
    src: office03,
    price: "270.00",
    description: "Create your dream workspace with this beautifully designed office..."
  },
  {
    name: "Office 04",
    src: office04,
    price: "270.00",
    description: "A modern office design with spacious shelving and elegant tones..."
  },
  {
    name: "Living Room 01",
    src: living01,
    price: "270.00",
    description: "A spacious living room that blends comfort with elegance..."
  },
  {
    name: "Living Room 02",
    src: living02,
    price: "270.00",
    description: "This living room features airy windows and chic furniture..."
  },
  {
    name: "Living Room 03",
    src: living03,
    price: "270.00",
    description: "A cozy, family-friendly living space perfect for relaxing..."
  },
  {
    name: "Living Room 04",
    src: living04,
    price: "270.00",
    description: "Modern and refined, this living room offers clean lines and artistic décor..."
  },
  {
    name: "Living Room 05",
    src: living05,
    price: "270.00",
    description: "Classic design meets modern comfort in this styled living room..."
  }
];

export default function Products() {
  const dispatch = useDispatch();
  const [showCartMsg,setShowCartMsg] = useState(false);
  const [showMsg,setShowMsg] = useState(false);
  const timeoutRef = useRef(null);
  const cartRef =useRef(null);

  
  const handleCart = (item) => {
    setShowCartMsg(true);

    if (cartRef.current) {
      clearTimeout(cartRef.current);
    }

    cartRef.current = setTimeout(() => {
      setShowCartMsg(false);
    }, 3000);

    dispatch(addCart({ item }));
  };




 
  const handleWishlist = (item) => {
    setShowMsg(true);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowMsg(false);
    }, 3000);
    dispatch(addWishlist({ item }));
  };

  return (
    <div className="flex xs:flex-col md:flex-row flex-wrap gap-6 items-center justify-center">
      {images.map((i, index) => (
        <div
          key={index}
          className="w-80 h-80 mb-4 rounded-md flex flex-col items-center pb-2 shadow-md gap-2"
        >
          <Image
            src={i.src}
            alt={i.name}
            className="rounded-md mb-4 transition duration-150 hover:scale-110 object-cover overflow-hidden w-80 h-48"
          />
          <Link
            href={`/product-info/${encodeURIComponent(i.name)}`}
            className="text-sm"
          >
            {i.name} | ${i.price}
          </Link>
          <div className="flex gap-1 mt-2 mb-3">
            <button
              onClick={() => handleCart(i)}
              className="text-sm bg-black px-2 py-1 rounded-md text-white transition duration-100 hover:scale-105 cursor-pointer hover:bg-white hover:text-black border"
            >
              Add to cart
            </button>
            <button className="text-sm bg-black px-2 py-1 rounded-md text-white transition duration-100 hover:scale-105 hover:bg-white hover:text-black border cursor-pointer"  onClick={() => handleWishlist(i)}>
              Add to wishlist
            </button>
          </div>
        </div>
      ))}
     {showCartMsg && (
  <div className="fixed bottom-9 right-3 z-50 bg-gray-600 rounded-md animate-bounce p-2">
    <MsgCart status={'cart'} />
  </div>
)}

{showMsg && (
  <div className="fixed bottom-24 right-3 z-50 bg-gray-600 rounded-md animate-bounce p-2">
    <MsgCart status={'wishlist'} />
  </div>
)}

    </div>
  );
}
