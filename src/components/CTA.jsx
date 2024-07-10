import  { useState, useEffect } from 'react';
import 'animate.css/animate.min.css';
import * as Unicons from '@iconscout/react-unicons';

function CTA() {
  const [dynamicText, setDynamicText] = useState('Technology');

  useEffect(() => {
    const interval = setInterval(() => {
      switch (dynamicText) {
        case 'Technology':
          setDynamicText('Robot Industry');
          break;
        case 'Robot Industry':
          setDynamicText('Production');
          break;
        case 'Production':
          setDynamicText('Technology');
          break;
        default:
          setDynamicText('Technology');
      }
    }, 2000); 
    return () => clearInterval(interval);
  }, [dynamicText]);

  
  const animationClass = 'animate__animated animate__fadeInUp';

  return (
    <div className="flex flex-col container w-[600px] h-[400px] bg-white p-14 ml-80 mt-72 mb-36">
      <div>
        <h1 className="text-black font-bold text-5xl font-sans mb-8">
          The Modern Industry<br />
          of <span className={`text-orange-700 ${animationClass}`}>{dynamicText}</span>
        </h1>
        <p className="w-96 text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim nostrud
        </p>
        <div className="flex flex-row items-center">
          <button className="mr-8 py-6 px-10 bg-orange-500 text-white text-xl hover:bg-black hover:text-white hover:shadow-md hover:translate-y-1 transition duration-300 ease-in-out">Contact Us</button>
          <Unicons.UilPlayCircle size="70" className="cursor-pointer"/>
          <button className="py-6 px-10 bg-transparent text-black text-xl hover:text-orange-500 hover:shadow-md hover:translate-y-1 transition duration-300 ease-in-out border-none">Watch Video</button>
        </div>
      </div>
    </div>
  );
}


export default CTA;
