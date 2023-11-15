import React from 'react';
import Image from 'next/image';
import data from '@/utils/mock';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='flex mt-24 flex-wrap justify-center gap-x-10 items-center'>

      <Link href="https://github.com/abdullahbilal43/Number-Guessing-Game" target="_blank" className='mb-8 sm:flex-col md:w-1/4 flex-wrap mx-4'>
        <Image src='/pro1.jpg' alt='' className='w-96 object-cover' width={400} height={400} />
        <div className='text-white font-extrabold'>{data[0].title}</div>
        <div className='text-white'>{data[0].desc}</div>
      </Link>
     
      <Link href="https://vercel.com/abdullahbilal43/e-commerce" target="_blank" className='mb-8 sm:flex-col md:w-1/4 flex-wrap mx-4'>
        <Image src='/pro2.jpg' alt='' className='w-96 object-cover' width={400} height={400} />
        <div className='text-white font-extrabold'>{data[1].title}</div>
        <div className='text-white'>{data[1].desc}</div>
      </Link>
      <Link href="https://github.com/abdullahbilal43/Calculator" target="_blank" className='mb-8 sm:flex-col md:w-1/4 flex-wrap mx-4'>
        <Image src='/pro6.jpg' alt='' className='w-96 object-cover' width={400} height={400} />
        <div className='text-white font-extrabold'>{data[5].title}</div>
        <div className='text-white'>{data[5].desc}</div>
      </Link> 
      <Link href="https://vercel.com/abdullahbilal43/netflix-series" target="_blank"  className='mb-8 sm:flex-col md:w-1/4 flex-wrap mx-4'>
        <Image src='/pro4.jpg' alt='' className='w-96 object-cover' width={400} height={400} />
        <div className='text-white font-extrabold'>{data[3].title}</div>
        <div className='text-white'>{data[3].desc}</div>
      </Link>
      <Link href="https://github.com/abdullahbilal43/Currency-Converter" target="_blank" className='mb-8 sm:flex-col md:w-1/4 flex-wrap mx-4'>
        <Image src='/pro5.jpg' alt='' className='w-96 object-cover' width={400} height={400} />
        <div className='text-white font-extrabold'>{data[4].title}</div>
        <div className='text-white'>{data[4].desc}</div>
      </Link>
      <Link href="https://vercel.com/abdullahbilal43/spotify-landing-page" target="_blank" className='mb-8 sm:flex-col md:w-1/4 flex-wrap mx-4'>
      <Image src='/pro3.jpg' alt='' className='w-96 object-cover' width={400} height={400} />
        <div className='text-white font-extrabold'>{data[2].title}</div>
        <div className='text-white'>{data[2].desc}</div>
      </Link>
    </div>
  );
};

export default Page;
