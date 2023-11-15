import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({ imageUrl, name, remarks, stars }:any) => {
  return (
    <div className="mt-24 max-w-sm rounded overflow-hidden shadow-lg mx-4 my-8">
      <div className="relative h-40">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className=" text-base text-white">{remarks}</p>
      </div>
      <div className="px-6 py-4">
        {Array.from({ length: stars }).map((_, index) => (
          <span key={index} className="text-yellow-500">&#9733;</span>
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <TestimonialCard
        imageUrl="/t1.avif"
        name="John Doe"
        remarks="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros velit."
        stars={5}
      />
      <TestimonialCard
        imageUrl="/t2.jpg"
        name="Jane Smith"
        remarks="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        stars={4}
      />
      <TestimonialCard
        imageUrl="/t3.jpeg"
        name="Bob Johnson"
        remarks="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        stars={5}
      />
    </div>
  );
};

export default TestimonialSection;
