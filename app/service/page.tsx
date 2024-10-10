import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServicesPage = () => {
  return (
    <section className="bg-white">
      <div className="bg-gray-300 p-4 h-auto flex flex-col justify-center py-20 sm:py-40 mb-8">
        <h1 className="text-[#002d5b] font-medium text-2xl sm:text-4xl md:text-6xl ml-4 sm:ml-10">
          My Service
        </h1>
        <Link href="/" className="text-red-500 mt-4 inline-block text-sm sm:text-base md:text-lg ml-4 sm:ml-10">
          Home / Service
        </Link>
      </div>

      <footer>
        <div className="bg-blue-900 py-10 md:py-20 mt-4 text-center">
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
