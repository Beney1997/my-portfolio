"use client"; 
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = aboutRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="p-4 bg-white min-h-screen relative p-4 ">
      <div className="bg-gray-300 p-4 h-auto flex flex-col justify-center py-20 sm:py-30 mb-8">
        <h1 className="text-[#002d5b] font-medium text-3xl sm:text-4xl md:text-6xl ml-4 sm:ml-10">About Me</h1>
        <Link href="/" className="text-red-500 mt-4 inline-block ml-4 sm:ml-10">
          Home / About Me
        </Link>
      </div>
    
      <div className="flex flex-col md:flex-row items-start md:items-center mx-auto max-w-5xl px-4 md:px-0">
        <div className="flex-shrink-0">
          <Image 
            src="/images/gift.png"  
            alt="Egharevba Gift"
            width={200}  
            height={200} 
            className="object-cover rounded-full"
          />
        </div>

        <div
          ref={aboutRef}
          className={`flex flex-col transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-md ml-40`} 
        >
          <p className="text-[#002d5b] font-medium text-4xl sm:text-4xl md:text-6xl mb-3">
            Building is the goal .
          </p>
          <p className="text-gray-800 text-sm sm:text-base mt-4">
          Hello! I am Egharevba Gift, a dedicated web developer with a 
          strong passion for programming. I specialize in creating intuitive, 
          user-centric applications designed to solve practical challenges.
          I believe that programming thrives on a combination of passion and
          commitment when you invest both, the results speak for themselves.
          </p>
          <p className="text-gray-800 text-sm sm:text-base mt-4">
          As a skilled front-end engineer, I have experience in 
          designing and implementing seamless web applications. With proficiency
          in modern front-end technologies and frameworks, I am eager to contribute to a 
          dynamic development team, driving innovative solutions and enhancing user experiences.
          </p>
        </div>
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
}

export default AboutPage;
