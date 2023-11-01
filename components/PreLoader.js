import React from 'react';
import Image from 'next/image';
import bg from '../public/bg.gif'
const PreLoader = () => {
  return (
    <div className="preloader">
     <Image src={bg} alt='loader' />
    </div>
  );
};

export default PreLoader;
