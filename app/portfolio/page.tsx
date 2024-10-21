import Link from "next/link";
import React from "react";
import Image from "next/image";
import profile from "../Public/images/gift.png";

const PortfolioPage = () => {
  return (
    <section>
      <div className="bg-gray-300 p-4 flex flex-col justify-center items-center text-center py-40 sm:py-30 mb-20 w-full mt-8">
        <h1 className="text-[#002d5b] font-medium text-3xl sm:text-4xl md:text-5xl">
          My Portfolio
        </h1>
        <Link
          href="/"
          className="text-red-500 mt-4 inline-block text-sm sm:text-base md:text-lg"
        >
          Home / My portfolio
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-40 w-full px-4 md:px-20">
        <div className="flex justify-center md:justify-start md:w-1/2">
          <Image
            src={profile}
            alt="beney"
            width={300}
            height={300}
            className="rounded-full"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="flex flex-col justify-center md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-[#000a2d] font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            My Version
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-5">
            As a programmer, I transform ideas into reality, crafting innovative
            solutions that inspire and connect people through the power of code.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-5">
            My mission is to create impactful, user-centric solutions that enhance everyday life through the fusion of technology and innovation.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-5">
            I aim to build solutions that not only meet but exceed expectations.
            With each line of code, I strive to create something meaningful and user-friendly.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            My journey is not just about writing code, but building solutions
            that make a difference.
          </p>
        </div>
      </div>

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

export default PortfolioPage;
