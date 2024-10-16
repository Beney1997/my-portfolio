import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const PortfolioPage = () => {
  return (
    <section>
      <div className="bg-gray-300 p-4 h-auto flex flex-col justify-center py-40 sm:py-30 mb-20">
        <h1 className="text-[#002d5b] font-medium text-2xl sm:text-4xl md:text-6xl ml-4 sm:ml-10">
          My Portfolio
        </h1>
        <Link href="/" className="text-red-500 mt-4 inline-block text-sm sm:text-base md:text-lg ml-4 sm:ml-10">
          Home / My portfolio
        </Link>
      </div>

      <section className="section-title ml-12 font-bold text-6xl md:text-4xl mt-10 text-[#000a2d] mb-20">
        <h2>Other Services You can <br />Get From Me!</h2>
      </section>

      <section>
        <div className="flex flex-col md:flex-row flex-wrap justify-start items-start space-y-6 md:space-y-0 md:space-x-4 mb-40">
         
          <div className="flex flex-col w-full md:w-auto">
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services1.png"
              alt='Dress'
              width={800}
              height={200}
              className="w-full md:w-auto"
            />
          </div>

          <div className="flex flex-col w-full md:w-auto">
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services2.png"
              alt='Car'
              className="mt-0 w-full md:w-auto" 
              width={350}
              height={150}
            />

            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services3.png"
              alt='Shoe'
              className="mt-10 w-full md:w-auto"
              width={350}
              height={100}
            />
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mt-10 md:mt-0">
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services4.png"
              alt='Image 3'
              width={350}
              height={150}
              className="w-full md:w-auto"
            />
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services5.png"
              alt='Image 4'
              width={350}
              height={150}
              className="w-full md:w-auto"
            />
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services6.png"
              alt='Image 5'
              width={350}
              height={150}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-blue-950 py-10 md:py-20 mt-20 text-center w-full"> 
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
  )
}

export default PortfolioPage;
