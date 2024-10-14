'use client';
import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section >
      {/* Main content area with text and image wrapped together */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-200 p-10 mt-8 w-full mx-0">
  <div className="text-center md:text-left p-6 ml-10">
    <p className="text-red-400 text-base md:text-lg mt-10 mb-10">Understanding is the solution.</p>
    <p className="text-[#002d5b] font-medium text-4xl md:text-6xl mt-4">
      I&apos;m a programmer <br />
      Egharevba Gift
    </p>
    <p className="text-[#002d5b] mt-5">
      Programming is a version, passion is the process.
    </p>

    <div className="mt-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 mb-20">
      <Link href="/hireme">
        <button className="bg-red-400 text-white px-6 py-3 rounded hover:bg-red-500 transition duration-200">
          Hire Me
        </button>
      </Link>

      <Link target="_blank" href="https://drive.google.com/file/d/1GE3mnd7UabfLds415rlQVSrB0GpGDmqb/view?usp=sharing">
        <button className="bg-red-400 text-white px-6 py-3 rounded hover:bg-red-500 transition duration-200">
          Download CV
        </button>
      </Link>
    </div>
  </div>

  {/* Right side (Image) */}
  {/* <div className="w-full h-full flex justify-center items-center p-6">
    <Image
      src="/images/gift.png"
      alt="Egharevba Gift"
      width={300}
      height={200}
      className="object-cover bg-gray-100"
    />
  </div> */}
</div>


<section className="about-area pt-[65px] pb-[10px] mb-20 ml-10">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 mx-auto px-4">

      {/* Left Column */}
      <div className="about-caption mb-50 p-6 text-[1rem] font-normal leading-[1.5] text-[#212529] text-left bg-white">
        <h3 className="text-[#000a2d] text-3xl font-bold mb-8">
          Designing With Passion While Exploring The World.
        </h3>
        <p className="text-[#10285d] mb-8">
          As a designer, I believe that creativity knows no boundaries. My journey is fueled by a
          deep passion for creating meaningful, impactful designs that resonate with people from
          all walks of life. Each project is an opportunity to blend innovation with inspiration
          drawn from the diverse cultures and experiences I have encountered while exploring the
          world. With every design, I strive to tell a story&mdash;one that not only captivates but
          also connects on a deeper level. 
        </p>
        {/* <p className="text-[#10285d]">
          Whether crafting user-centric interfaces or visually compelling experiences,
          my goal remains the same: to merge purpose with beauty, creating work that inspires
          and makes a difference. By continuously learning and evolving through travel and 
          exploration, I bring fresh perspectives and global insights to every project,
          always aiming to push the boundaries of what&apos;s possible in design.
        </p> */}
      </div>

      {/* Right Column */}
      <div className="about-caption2 w-full p-6 ml-10">
        <h3 className="text-[#000a2d] text-[40px] font-bold mb-[35px] leading-[1.5]">
          Any Type Of Query<br /> &amp; Discussion.
        </h3>
        <p className="mb-4 text-[#6c757d]">Late talk&apos;s with me? That is alright.</p>
        <div className="send-cv">
          <a
            href="mailto:egharevbagift79@gmail.com"
            className="text-[#000a2d] text-[28px] md:text-[35px] font-medium mb-2 md:mb-[10px] underline inline-block"
          >
            egharevbagift79@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </section>
  );
}

export default HeroSection;
