import React from 'react'
import Image from 'next/image'

const Project = (props:any) => {
  return (
    <div className='mb-8'>
        <Image src={props.img} alt='' width={400} height={400} />
        <div className='text-white font-semibold'>{props.title}</div>
        <div className='text-white'>{props.desc}</div>
           </div>
  )
}

export default Project