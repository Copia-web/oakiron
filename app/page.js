import Image from "next/image";
import hero from "@/components/assets/hero.jpg";
import { CiSearch } from "react-icons/ci";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="text-3xl flex flex-col sm:flex-row xs:gap-8 sm:gap-28 p-4 my-8 w-full  justify-center items-center text-center sm:text-left pb-14 border-b">
        <div className="flex flex-col justify-center items-center sm:items-start gap-4 font-semibold">
          <span>
            Buy your<br /> dream furniture
          </span>
          <div className="flex gap-4">
            <span className="border-r pr-4">
              50<sup>+</sup><br />
              <span className="text-xs font-sans">Timeless Furniture</span>
            </span>
            <span className="">
              100<sup>+</sup><br />
              <span className="text-xs font-sans">Customers</span>
            </span>
          </div>
          <div className="bg-gray-600/10 rounded-md flex gap-3 px-1 h-10 items-center w-full  ">
            <input
              type="text"
              className="outline-none placeholder:text-xs text-xs w-full bg-transparent ml-1"
              placeholder="What are you looking for?"
            />
            <CiSearch className="bg-black text-white rounded-md py-1 px-1 cursor-pointer" size={30} />
          </div>
        </div>
        <Image
          src={hero}
          alt="alt"
          
          className="rounded-md shadow-md max-w-[350px]"
        />
      </section>

      {/* Products Section */}
      <section className="p-4 w-full max-w-5xl">
        <h1 className="text-3xl text-center mb-20">Explore Our Products</h1>
        <Products />
      </section>
    </div>
  );
}
