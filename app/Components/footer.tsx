import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="bg-red-50">
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full py-20"> 
        <div className="w-full md:w-1/2 mb-8 md:mb-0"> 
          <h2 className="section-title font-bold text-6xl md:text-5xl mt-4 text-[#000a2d] mb-10">
            If Not Now, When? <br /> Let us Work Together!
          </h2>
          <p className="text-[#000a2d] mb-4">
            My name is Gift, and I am excited about the possibility of working together to bring 
            your ideas to life. With a passion for creating innovative and impactful solutions, 
            I believe that every great partnership starts with the right timing and that time is now.
          </p>
          <p className="text-[#000a2d]">
            Are you looking to build a user-friendly website, improve your digital presence,
            a beautiful customer service experience or craft seamless experiences, 
            I am here to help you achieve your goals. Let us work together to create something truly remarkable.
          </p>
        </div>

        <div className="w-full md:w-1/2"> 
          <form className="rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                className="mt-1 block w-full p-5 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Write your message"
              ></textarea>
            </div>
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="w-1/2 bg-red-500 text-white p-3 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <div className="bg-blue-950 py-10 md:py-20 mt-4 text-center w-full"> 
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
            No 8, Abijio, GRA off Lekki -Epe Expressway, Lagos, Nigeria.
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
};

export default Footer;
