"use client"; 
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiWeblate } from 'react-icons/si';
import { TbBrandDolbyDigital } from 'react-icons/tb';
import { RiCustomerService2Line } from 'react-icons/ri';

const ServicesPage = () => {

const [showContact, setShowContact] = useState(false);


const handleButtonClick = () => {
  setShowContact(!showContact);
};


  return (
    <section className="bg-white ">
      <div className="bg-gray-300 p-4 h-auto flex flex-col justify-center py-40 sm:py-30 mb-20 mt-8">
        <h1 className="text-[#002d5b] font-medium text-2xl sm:text-4xl md:text-6xl ml-4 sm:ml-10">
          My Service
        </h1>
        <Link href="/" className="text-red-500 mt-4 inline-block text-sm sm:text-base md:text-lg ml-4 sm:ml-10">
          Home / Service
        </Link>
      </div>
      <section className="categories-area section-padding3 mb-40">
      <div className="grid grid-cols-1 gap-5 mx-auto mb-10 md:grid-cols-3 lg:grid-cols-3 max-w-screen-xl px-3 ml-20 mr-20">
  <div className="relative bg-white border border-gray-200 rounded shadow h-full overflow-hidden transition-all duration-300 hover:shadow-lg group flex flex-col">
    <div className="absolute inset-0 bg-[hsla(11,100%,62.2%,1)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    <div className="relative z-10 p-4 flex flex-col flex-grow justify-center items-center">
      <div className="flex items-center justify-center">
        <div className="bg-[hsla(11,100%,62.2%,1)] text-white p-4 rounded-full transition-colors duration-300 group-hover:bg-white">
          <SiWeblate className="text-6xl transition-colors duration-300 group-hover:text-[hsla(11,100%,62.2%,1)]" />
        </div>
      </div>
      <h5 className="text-[#000a2d] text-xl mb-2 group-hover:text-white text-center">Website Design</h5>
      <p className="text-[#6c757d] group-hover:text-white text-center">
        A comprehensive resource designed to guide you through the web design process,
        helping you craft engaging and effective user experiences.
      </p>
    </div>
  </div>
  <div className="relative bg-white border border-gray-200 rounded shadow h-full overflow-hidden transition-all duration-300 hover:shadow-lg group flex flex-col">
    <div className="absolute inset-0 bg-[hsla(11,100%,62.2%,1)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    <div className="relative z-10 p-4 flex flex-col flex-grow justify-center items-center">
      <div className="flex items-center justify-center">
        <div className="bg-[hsla(11,100%,62.2%,1)] text-white p-4 rounded-full transition-colors duration-300 group-hover:bg-white">
          <TbBrandDolbyDigital className="text-6xl transition-colors duration-300 group-hover:text-[hsla(11,100%,62.2%,1)]" />
        </div>
      </div>
      <h5 className="text-[#000a2d] text-xl mb-2 group-hover:text-white text-center">Digital Marketing</h5>
      <p className="text-[#6c757d] group-hover:text-white text-center">
        A valuable resource designed to help you master digital marketing strategies 
        and elevate your online presence.
      </p>
    </div>
  </div>
  <div className="relative bg-white border border-gray-200 rounded shadow h-full overflow-hidden transition-all duration-300 hover:shadow-lg group flex flex-col">
    <div className="absolute inset-0 bg-[hsla(11,100%,62.2%,1)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    <div className="relative z-10 p-4 flex flex-col flex-grow justify-center items-center">
      <div className="flex items-center justify-center">
        <div className="bg-[hsla(11,100%,62.2%,1)] text-white p-4 rounded-full transition-colors duration-300 group-hover:bg-white">
          <RiCustomerService2Line className="text-6xl transition-colors duration-300 group-hover:text-[hsla(11,100%,62.2%,1)]" />
        </div>
      </div>
      <h5 className="text-[#000a2d] text-xl mb-2 group-hover:text-white text-center">Customer Service</h5>
      <p className="text-[#6c757d] group-hover:text-white text-center">
        A valuable resource crafted to help you master the design process and 
        enhance the quality of your work, ensuring exceptional customer service experiences.
      </p>
    </div>
  </div>
</div>

      
<div className="grid grid-cols-1 md:grid-cols-2 mt-0 h-80 mb-40 bg-red-50">
  <div className="flex flex-col justify-center items-start md:ml-10 ">
    <p className="text-red-500 font-bold text-4xl md:text-4xl">
      Do not worry about contact <br />
      I am available
    </p>
  </div>
  
  <div className="flex flex-col items-center justify-center p-4">
    <button
      onClick={handleButtonClick}
      className="bg-red-500 px-4 py-2 rounded text-white"
    >
      Contact Me Now
    </button>
    {showContact && (
      <p className="mt-2 text-black text-lg">+2349055467605</p>
    )}
  </div>
</div>

    </section>

      <footer>
        <div className="bg-blue-950 py-10 md:py-20 mt-4 text-center">
          <Image
            src="https://preview.colorlib.com/theme/personalportfolio/assets/img/logo/logo2_footer.png"
            alt="Portfolio Logo"
            className="mx-auto mt-8"
            width={150}
            height={150}
          />
          <a
            href="mailto:egharevbagift79@gmail.com"
            className="text-white text-2xl sm:text-4xl font-bold mt-4 sm:mt-10 underline inline-block"
          >
            egharevbagift79@gmail.com
          </a>
          <p className="text-white text-sm sm:text-base mt-5">
            No 8, Abijio, GRA off Lekki-Epe Expressway, Lagos, Nigeria.
          </p>
          <p className="text-[#000a2d] text-xs sm:text-base mt-8">
            Copyright ©2024 All rights reserved | This template is made with ❤️ by Gift.
          </p>
          <p className="text-[#000a2d] mt-4 sm:mt-20">
            Stay Connected.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default ServicesPage;
