'use client';
import Products from '@/components/Products/Products';
import React, { useEffect, useState } from 'react';
import { IoIosCart } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { removeItem } from '@/components/Slices/cartSlice';
import AddressForm from '@/components/AddressForm/AddressForm';

export default function Page() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [modal,setModal] = useState(false)

  const toggleModal = ()=> setModal(!modal);

  // Track quantity for each item
  const [quantities, setQuantities] = useState([]);

  // Sync quantities with cart items
  useEffect(() => {
    setQuantities(cart.map(() => 1));
  }, [cart]);

  const increaseQty = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseQty = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem({ index }));
  };

  return (
    <div className="mx-1 md:mx-5 my-5 py-2">
    {
      modal && ( <div className={`fixed top-38 mx-auto flex justify-center w-full z-50 `} >
        <AddressForm onClick={toggleModal} modal={modal}/>
        </div>)
    }
      <section>
        {cart.length > 0 ? (
          <div className="shadow-md w-full bg-gray-100 mb-5 pb-5 pt-3 px-2 md:p-5 xs:text-sm md:text-base">
            {cart.map((i, index) => (
              <div key={index} className="flex gap-5 items-center mb-3">
                <Image
                  src={i.src}
                  alt={i.src}
                  className="w-20 h-20 rounded-md"
                  width={100}
                  height={100}
                />
                <div className="border-r pr-2">
                  <span>{i.name}</span>
                  <br />
                  <span>${i.price}</span>
                </div>
                <div className="flex-1">
                  <p>Quantity: {quantities[index]}</p>
                  <button
                    onClick={() => increaseQty(index)}
                    className="bg-gray-400 text-xl rounded-md p-1"
                  >
                    <FaPlus size={16} className="text-gray-600" />
                  </button>{" "}
                  <button
                    disabled={quantities[index] === 1}
                    onClick={() => decreaseQty(index)}
                    className="bg-gray-400 text-xl rounded-md p-1"
                  >
                    <FaMinus size={16} className="text-gray-600" />
                  </button>
                </div>
                <div>
                  <button
                    className="bg-red-600 px-2 py-1 text-white rounded-md shadow-md cursor-pointer"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Delete
                  </button>
                </div>
                
              </div>
            ))}
            <div className='mx-auto w-80'>
                  <button className='bg-red-600 px-2 py-1 text-white rounded-md shadow-md cursor-pointer w-full transition duration-100 hover:scale-110' onClick={toggleModal}>
                    Place order
                  </button>
                </div>
          </div>
        ) : (
          <section className="shadow-md w-full h-52 bg-gray-100 mb-5 flex flex-col items-center justify-center gap-4 p-5">
            <IoIosCart size={70} className="bg-gray-300/50 rounded-full p-2 text-gray-800" />
            <span className="font-semibold text-gray-700">Your cart is empty!</span>
            <span className="font-semibold text-gray-700">Browse our categories and discover our best deals!</span>
          </section>
        )}
      </section>

      <section className="pt-2 shadow-md mt-10">
        <Products />
      </section>
    
    </div>
  );
}
