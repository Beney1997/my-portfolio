import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative p-4">
      {/* Main content area with text and image wrapped together */}
      <div className="flex flex-col md:flex-row items-center bg-gray-200 p-6 mt-8 w-full">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-red-400 text-base md:text-lg">Understanding is the solution.</p>
          <p className="text-[#002d5b] font-medium text-4xl md:text-6xl mt-4">
            I'm a programmer <br />
            Egharevba Gift
          </p>

          <div className="mt-10 flex space-y-4 md:space-y-0 space-x-0 md:space-x-4 flex-col md:flex-row items-center md:items-start">
            <Link href="/hireme">
              <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200 w-full md:w-auto">
                Hire Me
              </button>
            </Link>

            <Link target="_blank" href="https://drive.google.com/file/d/1GE3mnd7UabfLds415rlQVSrB0GpGDmqb/view?usp=sharing">
              <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200 w-full md:w-auto">
                Download CV
              </button>
            </Link>
          </div>
        </div>

        {/* Right side (Image) */}
        {/* <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 flex justify-center">
          <Image
            src="/images/gift.png"
            alt="Egharevba Gift"
            width={300}
            height={200}
            className="object-cover bg-gray-100"
          />
        </div> */}
      </div>
      
      <section className="about-area pt-[65px] pb-[10px] mb-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:gap-x-8 ml-10">

            <div className="about-caption mb-50 p-6 text-[1rem] font-normal leading-[1.5] text-[#212529] text-left bg-white w-full md:w-1/2">
              <h3 className="text-[#000a2d] text-3xl font-bold mb-8">
                Designing With Passion While Exploring The World.
              </h3>
              <p className="text-[#10285d] mb-8">
              As a designer, I believe that creativity knows no boundaries. My journey is fueled by a
               deep passion for creating meaningful, impactful designs that resonate with people from
               all walks of life. Each project is an opportunity to blend innovation with inspiration
               drawn from the diverse cultures and experiences I've encountered while exploring the
               world. With every design, I strive to tell a story—one that not only captivates but
               also connects on a deeper level. 
              </p>
              <p className="text-[#10285d]">
              Whether crafting user-centric interfaces or visually compelling experiences,
              my goal remains the same: to merge purpose with beauty, creating work that inspires
              and makes a difference. By continuously learning and evolving through travel and 
              exploration, I bring fresh perspectives and global insights to every project,
               always aiming to push the boundaries of what's possible in design.
              </p>
            </div>

            {/* Right Column */}
            <div className="about-caption2 w-full md:w-1/2 p-6">
              <h3 className="text-[#000a2d] text-[40px] font-bold mb-[35px] leading-[1.5]">
                Any Type Of Query<br /> &amp; Discussion.
              </h3>
              <p className="mb-4 text-[#6c757d]">Late talk's with me ? that's alright .</p>
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
