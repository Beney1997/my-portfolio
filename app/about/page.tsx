"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className="p-4 bg-white min-h-screen relative">
      <div className="bg-gray-300 p-4 h-auto flex flex-col justify-center py-20 sm:py-30 mb-8">
        <h1 className="text-[#002d5b] font-medium text-3xl sm:text-4xl md:text-6xl ml-4 sm:ml-10">About Me</h1>
        <Link href="/" className="text-red-500 mt-4 inline-block text-sm sm:text-base md:text-lg ml-4 sm:ml-10">
          Home / About Me
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center mx-auto max-w-5xl px-4 md:px-0">
        <div className="flex-shrink-0 mr-10 mb-6 md:mb-0">
          <Image 
            src="data:image/jpeg;base64,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"
            alt="Egharevba Gift"
            width={500}  
            height={500} 
            className="object-cover rounded-lg" 
          />
        </div>
        
        <div className="flex flex-col w-full">
          <p className="text-[#002d5b] font-medium text-4xl sm:text-4xl md:text-6xl mb-3">
            Building is the goal.
          </p>
          <p className="text-gray-800 text-sm sm:text-base mt-4">
            Hello! I am Egharevba Gift, a dedicated web developer with a 
            strong passion for programming. I specialize in creating intuitive, 
            user-centric applications designed to solve practical challenges. 
            I believe that programming thrives on a combination of passion and commitment;
            when you invest both, the results speak for themselves.
          </p>
          <div className="flex flex-row mt-8">
        <div 
          className={`cursor-pointer text-red-500 border-b-2 ${activeSection === 'skills' ? 'border-purple-800' : 'border-transparent'} mr-5`}
          onClick={() => handleClick(activeSection === 'skills' ? '' : 'skills')}
        >
          Skills
        </div>
        <div 
          className={`cursor-pointer text-red-500 border-b-2 ${activeSection === 'education' ? 'border-purple-800' : 'border-transparent'} mr-5`}
          onClick={() => handleClick(activeSection === 'education' ? '' : 'education')}
        >
          Education
        </div>
        <div 
          className={`cursor-pointer text-red-500 border-b-2 ${activeSection === 'experience' ? 'border-purple-800' : 'border-transparent'}`}
          onClick={() => handleClick(activeSection === 'experience' ? '' : 'experience')}
        >
          Experience
        </div>
      </div>

      <div className="mt-4">
        {activeSection === 'skills' && (
          <div className="text-gray-800">
            <li className="mt-2">Languages: HTML5, CSS3, JavaScript, TypeScript</li>
            <li>Frameworks & Libraries: React, Tailwind CSS, Chakra UI</li>
            <li>Web Development: Responsive Web Design, UI/UX Design Principles, Cross-Browser Compatibility</li>
            <li>Tools: Git/GitHub, API Integration</li>
            <li>Soft Skills: Problem Solving, Debugging, Strong Communication and Collaboration Skills,Customer Services ,Digital Marketer etc.
            </li>
          </div>
        )}
        {activeSection === 'education' && (
          <div className="text-gray-800">
            <p className="mt-2">BSc.Computer Science</p>
          </div>
        )}
        {activeSection === 'experience' && (
          <div className="text-gray-800">
            <li>
            <strong>Front-End Developer Intern</strong>
            <br />
            Reinvent Security, Septemeber 2024-present
            </li>
          <li>
        <strong>Front-End Developer Intern</strong>
        <br />
        ACE EMEDED NIG LTD, July 2024-Present
        <ul className="list-disc list-inside ml-5 mt-1">
          <li>Worked on developing user interfaces for web applications.</li>
          <li>Gaining hands-on experience with front-end technologies.</li>
          <li>Participating in code reviews and adopting best practices.</li>
          <li>Contributing to website performance optimization and responsiveness.</li>
          </ul>
          </li>
          <li className="mt-4">
        <strong>Junior Front-End Software Engineer</strong>
        <br />
        ParallelScore International, June 2023-November 2023
        <ul className="list-disc list-inside ml-5 mt-1">
          <li>Developed responsive web applications in collaboration with cross-functional teams.</li>
          <li>Implemented pixel-perfect UI/UX designs using HTML5, CSS3, and JavaScript.</li>
          <li>Enhanced website performance through code optimization and best practices adherence.</li>
          <li>Conducted code reviews and mentored junior developers.</li>
          <li>Integrated third-party APIs to extend website functionality.</li>
          <li>Managed version control using Git/GitHub.</li>
          <li>Worked closely with designers and back-end developers for seamless data integration.</li>
        </ul>
      </li>
          </div>
        )}
      </div>
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
