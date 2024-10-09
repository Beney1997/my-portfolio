import React from 'react';
import Link from 'next/link';
import { MdOutlineOtherHouses } from "react-icons/md";
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white p-4">
      <div className="bg-gray-300 p-4 h-[300px] flex flex-col justify-center py-40">
        <h1 className="text-[#002d5b] font-medium text-4xl md:text-6xl ml-10">Contact Me</h1>
        <Link href="/" className="text-red-500 mt-4 inline-block ml-10 ">Home/Contact Me</Link>
      </div>

      <div className="text-black mt-40 font-bold text-3xl ml-20">
        <h1>Get In Touch</h1>
      </div>

      <div className="flex mt-10 ml-20 mr-20">

        <div className="w-7/12 pr-4">
          <form className="flex flex-col space-y-4">
            <textarea
              className="w-full h-32 p-2 border border-gray-400 rounded focus:outline-none text-black"
              placeholder="Enter your message here..."
              required
            />
            <div className="flex space-x-4">
              <input
                type="text"
                className="flex-grow p-2 border border-gray-400 rounded focus:outline-none text-black"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                className="flex-grow p-2 border border-gray-400 rounded focus:outline-none text-black"
                placeholder="Email"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white border border-red-500 text-red-500 px-4 py-2 w-20"
            >
              Send
            </button>
          </form>
        </div>

      
        <div className="w-5/12 bg-white p-4 rounded ml-20">

          <div className="flex items-center mb-4">
            <MdOutlineOtherHouses className="text-gray-600 mr-2 text-4xl" />
            <h2 className="font-bold text-xl text-black">Lagos, Nigeria</h2>
          </div>
          <p className="text-gray-700 mb-6">
            No 8, Abijio, GRA off Lekki-Epe Expressway, Lagos, Nigeria.
          </p>

          <div className="flex items-center mb-4">
            <GiVibratingSmartphone className="text-gray-600 mr-2 text-4xl" />
            <h2 className="font-bold text-xl text-black">+234 9055467605</h2>
          </div>
          <p className="text-gray-700 mb-6">Mon-Fri, 9am-6pm</p>

          <div className="flex items-center mb-4">
           <FaGithub className="text-gray-600 mr-2 text-4xl" />
            <h2 className="font-bold text-xl text-black"> Beney1997</h2>
          </div>
          <p className="text-gray-700 mb-6">Check a few projects I worked on.</p>

          <div className="flex items-center mb-4">
            <MdOutlineMailOutline className="text-gray-600 mr-2 text-4xl" />
            <h2 className="font-bold text-xl text-black">egharevbagift79@gmail.com</h2>
          </div>
          <p className="text-gray-700">
            Always open to receive emails, and I will respond as soon as possible.
          </p>
        </div>
      </div>
      <footer>
      <div className="bg-blue-900 py-20 text-center">
        <img
          src="https://preview.colorlib.com/theme/personalportfolio/assets/img/logo/logo2_footer.png"
          alt="Portfolio Logo"
          className="mx-auto mt-8"
        />
        <a 
               href="mailto:egharevbagift79@gmail.com" 
              className="text-white text-4xl font-bold mt-10 underline inline-block"
            >
              egharevbagift79@gmail.com
          </a>
          <p className="text-1xl mt-5">
            No 8,Abijio,GRA off Lekki -epe-expressway,Lagos,Nigeria.</p>
            <p className="text-[#000a2d] text-sm md:text-base ml-0 mt-8">
          Copyright ©2024 All rights reserved | This template is made with ❤️ by Gift.
        </p>
        <p className="text-[#000a2d] mt-20 ">
            Stay Connected.
        </p>
      </div> 
      </footer>
    </section>
  );
};

export default Contact;
