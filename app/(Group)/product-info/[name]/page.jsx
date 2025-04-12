import Image from 'next/image';
import React from 'react'
import { images } from '@/components/Products/Products';


export async function generateMetadata({ params }) {
  const productName = decodeURIComponent(params.name); 
   return { title: `${productName}` };
}



export default  async function page({params}) {
  const productName = decodeURIComponent(params.name);
  const product = images.find((p) => p.name === productName);

  return (
    <div className='flex gap-20 items-center justify-center mb-10 mt-10'>
    <div>
       <Image src={product.src} width={500} height={700} alt={product.name} className='rounded-md'/>
    </div>
    <div className='w-58'>
      <span className='text-xl '>{product.description}</span><br/>
       <span className='text-md inline-block mt-5 mb-3'> {product.name} | {`$${product.price}`}</span>
       <button className="text-sm bg-black px-2 py-1 rounded-md text-white w-fit transition duration-100 hover:scale-105 cursor-pointer hover:bg-white hover:text-black hover:border"> Add to cart</button>{" "}
       <button className="text-sm bg-black px-2 py-1 rounded-md text-white w-fit transition duration-100 hover:scale-105 cursor-pointer hover:bg-white hover:text-black hover:border"> Add to wishlist</button>
    </div>
  </div>
  )
}
