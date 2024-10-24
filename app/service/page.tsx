"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiWeblate } from "react-icons/si";
import { TbBrandDolbyDigital } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import profile from "../Public/images/gift.png";

const ServicesPage = () => {
  const [showContact, setShowContact] = useState(false);

  const handleButtonClick = () => {
    setShowContact(!showContact);
  };

  return (
    <section className="bg-white">
      <div className="bg-gray-300 p-4 h-auto flex flex-col justify-center items-center text-center py-40 sm:py-30 mb-20 w-full mt-8">
        <h1 className="text-[#002d5b] font-medium text-3xl sm:text-4xl md:text-5xl">
          My Service
        </h1>
        <Link
          href="/"
          className="text-red-500 mt-4 inline-block text-sm sm:text-base md:text-lg"
        >
          Home / Service
        </Link>
      </div>

      <div className="flex flex-col md:flex-row mb-40 px-6">
        <div className="flex justify-center md:w-1/2">
          <Image
            src={profile}
            alt="beney"
            width={400}
            height={300}
            className="rounded-full"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0">
          <h1 className="text-[#000a2d] font-bold text-3xl md:text-4xl mb-4">
            My Services
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-4">
            <strong>Website Design:</strong> I create visually appealing, user-friendly, and fully responsive websites tailored to meet your specific business needs.
          </p>

          <p className="text-sm sm:text-base md:text-lg mb-4">
            <strong>Digital Marketing:</strong> I help businesses establish a strong digital presence, leveraging social media, SEO, and other tools to reach a larger audience.
          </p>

          <p className="text-sm sm:text-base md:text-lg mb-4">
            <strong>Customer Service Solutions:</strong> I offer expert customer service solutions to improve customer satisfaction and streamline support processes.
          </p>
        </div>
      </div>

      <section className="categories-area section-padding3 mb-40">
        <div className="grid grid-cols-1 gap-5 mx-auto mb-10 md:grid-cols-3 lg:grid-cols-3 max-w-screen-xl px-3">
          <div className="relative bg-white border border-gray-200 rounded shadow h-full overflow-hidden transition-all duration-300 hover:shadow-lg group flex flex-col">
            <div className="absolute inset-0 bg-[hsla(11,100%,62.2%,1)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative z-10 p-4 flex flex-col flex-grow justify-center items-center">
              <div className="flex items-center justify-center">
                <div className="bg-[hsla(11,100%,62.2%,1)] text-white p-4 rounded-full transition-colors duration-300 group-hover:bg-white">
                  <SiWeblate className="text-6xl transition-colors duration-300 group-hover:text-[hsla(11,100%,62.2%,1)]" />
                </div>
              </div>
              <h5 className="text-[#000a2d] text-xl mt-6 mb-3 group-hover:text-white text-center">
                Website Design
              </h5>
              <p className="text-[#6c757d] group-hover:text-white text-center">
                Crafting engaging and user-friendly web experiences tailored to your business needs.
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
              <h5 className="text-[#000a2d] text-xl mt-6 mb-3 group-hover:text-white text-center">
                Digital Marketing
              </h5>
              <p className="text-[#6c757d] group-hover:text-white text-center">
                Empowering your brand with cutting-edge digital marketing strategies for online growth.
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
              <h5 className="text-[#000a2d] text-xl mt-6 mb-3 group-hover:text-white text-center">
                Customer Service
              </h5>
              <p className="text-[#6c757d] group-hover:text-white text-center">
                Delivering top-tier customer service solutions to enhance your business support systems.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 h-80 mb-40 bg-red-50">
          <div className="flex flex-col justify-center items-start p-4 md:ml-10">
            <p className="text-red-500 font-bold text-3xl md:text-4xl">
              Do not worry about contact <br /> I am available
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
        <div className="bg-blue-950 py-10 md:py-20 mt-20 text-center w-full">
          <Image
            src="https://preview.colorlib.com/theme/personalportfolio/assets/img/logo/logo2_footer.png"
            alt="Portfolio Logo"
            className="mx-auto"
            width={150}
            height={150}
          />
          <a
            href="mailto:egharevbagift79@gmail.com"
            className="text-white text-xl sm:text-2xl md:text-4xl font-bold mt-4 sm:mt-10 underline inline-block"
          >
            egharevbagift79@gmail.com
          </a>
          <p className="text-white text-sm sm:text-base mt-5">
            No 8, Abijio, GRA off Lekki -Epe Expressway, Lagos, Nigeria.
          </p>
          <p className="text-[#000a2d] text-xs sm:text-base mt-8">
            Copyright ©2024 All rights reserved | This template is made with ❤️
            by Gift.
          </p>
          <p className="text-[#000a2d] mt-4 sm:mt-20">Stay Connected.</p>
        </div>
      </footer>
    </section>
  );
};

export default ServicesPage;
