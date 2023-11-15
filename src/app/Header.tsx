/* eslint-disable react-hooks/rules-of-hooks */
'use client' //For using useState.
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {FaOpencart} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai';

const header = () => {  
    
    const [navbar,setNavbar]=useState(false);
  return (
   <div className='flex '>
<nav className='w-full bg-black fixed top-0 right-0 left-0 z-[100]'>
<div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8  '>
     <div>
        <div className='flex items-center justify-between py-3 md:py-5 md:block '>
            <div className='flex items-center'>
            <div className='flex flex-wrap'>
            <Link href="/">
               <div className='text-white text-2xl font-extrabold'>Portfolio.</div>
            </Link>
            </div>

            </div>

            
            <div className="md:hidden"> 
<button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 ' onClick={()=>setNavbar(!navbar)}>
{navbar? (
  <FaBars/>
):(
    <FaBars/>
)
}
</button>
            </div>
        </div>
     </div>
     <div>
        <div className={` md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden' }`}>
            <ul className='h-screen md:h-auto text-center md:flex'>
<li className='pb-6 text-lg text-white py-6 md:px-6 text-center border-b-2 md:border-b-0 hover:opacity-70'>
    <Link href="/" onClick={()=>setNavbar(!navbar)}>Home</Link>
</li>   
<li className='pb-6 text-lg text-white py-6 px-6 text-center border-b-2 md:border-b-0 hover:opacity-70'>
    <Link href="/Projects" onClick={()=>setNavbar(!navbar)}>Projects</Link>
</li>
<li className='pb-6 text-lg text-white py-6 px-6 text-center border-b-2 md:border-b-0 hover:opacity-70'>
    <Link href="/Testimonials " onClick={()=>setNavbar(!navbar)}>Testimonial</Link>
</li>
<li className='pb-6 text-lg text-white py-6 px-6 text-center border-b-2 md:border-b-0 hover:opacity-70'>
    <Link href="/Contact  "onClick={()=>setNavbar(!navbar)}>Contact</Link>
</li>
</ul>
        </div>
     </div>
    



</div>

</nav>
   </div>
  )
}

export default header

