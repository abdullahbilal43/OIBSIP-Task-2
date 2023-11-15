import React from 'react';

const Section = () => {
  return (
    <div className='flex mt-20 flex-wrap justify-center items-center'>
      <div className='w-[50%] p-4'>
        <div className='text-white font-bold text-2xl mb-4'>
          Technologies I work with
        </div>
        <div className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          laudantium! In ipsam, consequuntur vel rerum minus neque ab explicabo
          officia?
        </div>
      </div>
      
      <div className='flex flex-wrap flex-col ml-2 text-white '>
        <div className='mb-2 font-bold text-2xl text-green-500'>Html</div>
        <div className='mb-2 font-bold text-2xl text-green-500'>Tailwind</div>
        <div className='mb-2 font-bold text-2xl text-green-500'>Bootstrap</div>
      </div>
      <div className='flex flex-wrap flex-col ml-10 text-white '>
        <div className='mb-2 font-bold text-2xl text-green-500'>Javascript</div>
        <div className='mb-2 font-bold text-2xl text-green-500'>React.js</div>
        <div className='mb-2 font-bold text-2xl text-green-500'>Next.js</div>
      </div>
      
    </div>
  );
};

export default Section;
