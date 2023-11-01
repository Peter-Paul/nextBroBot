import React from 'react';
import Image from 'next/image';
import BG from '../public/BG Video.gif'
const PreLoader = () => {
  return (
    <div className="preloader">
     <Image src={BG} alt='loader' />
    </div>
  );
};

export default PreLoader;
