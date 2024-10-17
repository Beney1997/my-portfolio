import React from 'react';
import Link from 'next/link';
import { MdOutlineOtherHouses } from "react-icons/md";
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="bg-white ">
      {/* Header Section */}   <div className="bg-gray-300 p-4 h-auto flex flex-col justify-center items-center text-center py-40 sm:py-30 mb-20 w-full mt-8">
  <h1 className="text-[#002d5b] font-medium text-3xl sm:text-4xl md:text-5xl">Contact Me</h1>
        <Link href="/" className="text-red-500 mt-4 inline-block text-sm sm:text-base md:text-lg  ">
          Home / Contact Me
        </Link>
      </div>

      {/* Get In Touch Section */}
      <div className="text-black mt-20 sm:mt-40 font-bold text-2xl sm:text-3xl ml-4 sm:ml-20">
        <h1>Get In Touch</h1>
      </div>

      {/* Contact Form and Details */}
      <div className="flex flex-col md:flex-row mt-10 mx-4 sm:mx-10 md:mx-20 space-y-10 md:space-y-0 md:space-x-10">
        {/* Form Section */}
        <div className="w-full md:w-7/12 pr-0 md:pr-4">
          <form className="flex flex-col space-y-4">
            <textarea
              className="w-full h-32 p-2 border border-gray-400 rounded focus:outline-none text-black"
              placeholder="Enter your message here..."
              required
            />
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                className="w-full sm:w-1/2 p-2 border border-gray-400 rounded focus:outline-none text-black"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                className="w-full sm:w-1/2 p-2 border border-gray-400 rounded focus:outline-none text-black"
                placeholder="Email"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white border border-red-500 text-red-500 px-4 py-2 w-full sm:w-20"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="w-full md:w-5/12 bg-white p-4 rounded">
          <div className="flex items-center mb-4">
            <MdOutlineOtherHouses className="text-gray-600 mr-2 text-3xl sm:text-4xl" />
            <h2 className="font-bold text-lg sm:text-xl text-black">Lagos, Nigeria</h2>
          </div>
          <p className="text-gray-700 mb-6">
            No 8, Abijio, GRA off Lekki-Epe Expressway, Lagos, Nigeria.
          </p>

          <div className="flex items-center mb-4">
            <GiVibratingSmartphone className="text-gray-600 mr-2 text-3xl sm:text-4xl" />
            <h2 className="font-bold text-lg sm:text-xl text-black">+234 9055467605</h2>
          </div>
          <p className="text-gray-700 mb-6">Mon-Fri, 9am-6pm</p>

          <div className="flex items-center mb-4">
            <FaGithub className="text-gray-600 mr-2 text-3xl sm:text-4xl" />
            <h2 className="font-bold text-lg sm:text-xl text-black"> Beney1997</h2>
          </div>
          <p className="text-gray-700 mb-6">Check a few projects I worked on.</p>

          <div className="flex items-center mb-4">
            <MdOutlineMailOutline className="text-gray-600 mr-2 text-3xl sm:text-4xl" />
            <h2 className="font-bold text-lg sm:text-xl text-black">egharevbagift79@gmail.com</h2>
          </div>
          <p className="text-gray-700">
            Always open to receive emails, and I will respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="bg-blue-950 py-10 sm:py-20 text-center">
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
};

export default Contact;
