import Image from "next/image";
import Link from "next/link";
import {useState} from 'react';

export default function Header() {

  const [clicked, setclicked] = useState(false);

  return (
    <div style={{backgroundColor:"#3F3D56"}} className="sticky top-0 z-20 border-gray-100">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 px-6 py-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a> 
            <h1 className="text-2xl font-bold">DELHI COVID CARE</h1>
          </a>
        </Link>
        </div>
          <label onClick={()=>setclicked(!clicked)} className="block sm:block md:hidden lg:hidden xl:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400  hover-border-blue" htmlFor="menu-toggle"><svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
          <div className={`${clicked?'relative z-30 h-screen w-full':'hidden sm:hidden md:block lg:block xl:block'}  lg:flex lg:items-center lg:w-auto`} id="navbar">
          <div className="py-1 text-sm flex flex-col md:flex-row items-center mr-auto">
              <Link href="/details?id=oxygen">
                <a onClick={()=>setclicked(false)} className="text-white block mt-10 sm:mt-4 lg:mt-0 font-semibold mr-5 text-md">Oxygen</a>
              </Link>
              <Link href="/details?id=beds">
                <a onClick={()=>setclicked(false)} className="text-white block mt-10 sm:mt-4 lg:mt-0 font-semibold mr-5 text-md">Beds</a>
              </Link>
              <Link href="/details?id=plasma">
                <a onClick={()=>setclicked(false)} className="text-white block mt-10 sm:mt-4 lg:mt-0 font-semibold mr-5 text-md">Plasma</a>
              </Link>
              <Link href="/details?id=medicines">
                <a onClick={()=>setclicked(false)} className="text-white block mt-10 sm:mt-4 lg:mt-0 font-semibold mr-5 text-md">Essential Medicines</a>
              </Link>
              <Link href="/request">
                <a onClick={()=>setclicked(false)} className="text-white block mt-10 sm:mt-4 lg:mt-0 font-semibold mr-5 text-md">Request Help</a>
              </Link>
              <Link href="/Register">
                <a onClick={()=>setclicked(false)} className="block mr-5 text-md px-3 py-2 leading-none border rounded-lg border-white hover:border-gray-800 hover:text-gray-800 hover:bg-white text-white mt-10 sm:mt-4 lg:mt-0 font-semibold sm:ml-2">Register Services</a>
              </Link>
            </div>
        </div>
      </nav>
    </div>
  );
}