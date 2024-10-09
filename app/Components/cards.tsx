import React from 'react';
import { SiWeblate } from "react-icons/si";
import { TbBrandDolbyDigital } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

const Cards = () => {
  return (
    <section className="categories-area section-padding3 mb-40">
      <div className="container mt-10">
        <div className="section-title ml-12 font-bold text-6xl md:text-4xl mt-4 text-[#000a2d] mb-20 ">
          <h2>What Services You Will <br />Get From Me!</h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-10 mx-3 mb-10"> 
      <div className="flex flex-col mb-4 w-full md:w-1/3 lg:w-1/4">
          <div className="relative bg-white border border-gray-200 rounded shadow h-80 overflow-hidden transition-all duration-300 hover:shadow-lg group">
            <div className="absolute inset-0 bg-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative z-10 p-4 h-full flex flex-col justify-center items-center">
              <div className="flex items-center justify-center h-screen">
                <div className="bg-red-500 text-white p-4 rounded-full transition-colors duration-300 hover:bg-white">
                <SiWeblate className="text-6xl transition-colors duration-300 hover:text-red-500" />
                </div>
              </div>
              <h5 className="text-[#000a2d] text-3xl mb-6 group-hover:text-white text-center">Website Design</h5>
              <p className='text-[#6c757d] group-hover:text-white text-center'>
               A comprehensive resource designed to guide you through the web design process,
                helping you craft engaging and effective user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-4 w-full md:w-1/3 lg:w-1/4">
          <div className="relative bg-white border border-gray-200 rounded shadow h-80 overflow-hidden transition-all duration-300 hover:shadow-lg group">
            <div className="absolute inset-0 bg-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative z-10 p-4 h-full flex flex-col justify-center items-center">
              <div className="flex items-center justify-center h-screen">
                <div className="bg-red-500 text-white p-4 rounded-full transition-colors duration-300 hover:bg-white">
                <TbBrandDolbyDigital className="text-6xl transition-colors duration-300 hover:text-red-500" />
                </div>
              </div>
              <h5 className="text-[#000a2d] mb-6 group-hover:text-white text-center text-3xl">Digital Marketing</h5>
              <p className='text-[#6c757d] group-hover:text-white text-center'>
              A valuable resource designed to help you master digital marketing strategies 
              and elevate your online presence.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4 w-full md:w-1/3 lg:w-1/4"> 
          <div className="relative bg-white border border-gray-200 rounded shadow h-80 overflow-hidden transition-all duration-300 hover:shadow-lg group">
            <div className="absolute inset-0 bg-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative z-10 p-4 h-full flex flex-col justify-center items-center">
              <div className="flex items-center justify-center h-screen">
                <div className="bg-red-500 text-white p-4 rounded-full transition-colors duration-300 hover:bg-white">
                <RiCustomerService2Line className="text-6xl transition-colors duration-300 hover:text-red-500" />
                </div>
              </div>
              <h5 className="text-[#000a2d] text-3xl mb-6 group-hover:text-white text-center">Customer Service</h5>
              <p className='text-[#6c757d] group-hover:text-white text-center'>
              A valuable resource crafted to help you master the design process and 
              enhance the quality of your work,ensuring exceptional customer service experiences.
               
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Cards;
