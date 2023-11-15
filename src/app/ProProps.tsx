import React from 'react';
import Project from './Project';
import data from '@/utils/mock';
import pro1 from '/public/pro1.jpg';
import pro2 from '/public/pro2.jpg';
import pro3 from '/public/pro3.jpg';
import pro4 from '/public/pro4.jpg';
import pro5 from '/public/pro5.jpg';
import pro6 from '/public/pro6.jpg';

const ProProps = (props:any) => {
  return (
    <div>
      <div className='text-center text-white mt-12 text-3xl border-white font-extrabold'>Projects</div>
    <div className=' flex mt-12 flex-wrap justify-center items-center gap-x-10 mx-5'>
      <Project img={pro1} title={data[0].title} desc={data[0].desc} />
      <Project img={pro2} title={data[1].title} desc={data[1].desc} />
      <Project img={pro3} title={data[2].title} desc={data[2].desc} />
      <Project img={pro4} title={data[3].title} desc={data[3].desc} />
      <Project img={pro5} title={data[4].title} desc={data[4].desc} />
      <Project img={pro6} title={data[5].title} desc={data[5].desc} />
      </div>
      </div>
   
  );
};

export default ProProps;
