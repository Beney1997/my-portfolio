"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import feedbackData from "@/app/Data/feedbackdata"; 

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showContact, setShowContact] = useState(false);

  const handleClick = (section: string) => {
    setActiveSection(section);
  };
  const handleButtonClick = () => {
    setShowContact(!showContact);
  };


  return (
    <section className=" bg-white min-h-screen ">
     <div className="bg-gray-300 p-4 h-auto flex flex-col justify-center py-40 sm:py-30 mb-20 w-full mt-8">
  <h1 className="text-[#002d5b] font-medium text-3xl sm:text-4xl md:text-5xl ml-10 sm:ml-20">
    About Me
  </h1>
  <Link href="/" className="text-red-500 mt-2 inline-block text-sm sm:text-base md:text-lg ml-10 sm:ml-20">
    Home / About Me
  </Link>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto max-w-5xl px-4 md:px-0 mb-20">
  <div className="flex justify-center md:justify-start">
    <Image 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTensyN8hNF_xSjHmTcCxwaCHGnQMwNNd5aNpf0PEvwf_grKh8GC8PPqB0&s" 
      alt="Egharevba Gift" 
      width={500}  
      height={300} 
      className="object-cover rounded-lg" 
    />
  </div>
  
  <div className="flex flex-col justify-center">
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
          <li>Soft Skills: Problem Solving, Debugging, Strong Communication and Collaboration Skills, Customer Service, Digital Marketing, etc.</li>
        </div>
      )}
      {activeSection === 'education' && (
        <div className="text-gray-800">
          <p className="mt-2">BSc. Computer Science</p>
        </div>
      )}
      {activeSection === 'experience' && (
        <div className="text-gray-800">
          <li><strong>Front-End Developer Intern</strong><br />Reinvent Security, September 2024-present</li>
          <li className="mt-4"><strong>Front-End Developer Intern</strong><br />ACE EMDED NIG LTD, July 2024-present
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Worked on developing user interfaces for web applications.</li>
              <li>Gained hands-on experience with front-end technologies.</li>
              <li>Participated in code reviews and adopted best practices.</li>
              <li>Contributed to website performance optimization and responsiveness.</li>
            </ul>
          </li>
          <li className="mt-4"><strong>Junior Front-End Software Engineer</strong><br />ParallelScore International, June 2023-November 2023
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
      
<div className="grid grid-cols-1 md:grid-cols-2 mt-0 h-80 mb-40 bg-red-50">
  <div className="flex flex-col justify-center items-start md:ml-10 ">
    <p className="text-red-500 font-bold text-4xl md:text-4xl">
      Do not worry about contact <br />
      I am available
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
<section>
  <div className="container mb-40">
    <h2 className="section-title ml-12 font-bold text-6xl md:text-4xl mt-4 text-[#000a2d] mb-10">
      Some Positive Feedback <br /> That Encourage Us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 mb-10 ml-10">
      {feedbackData.map((feedback, index) => (
        <div key={index} className="flex flex-col h-full"> 
          <div className="relative bg-white border border-gray-200 rounded shadow h-full p-4 flex"> 
            <Image
              src={feedback.image}
              alt={`${feedback.name}'s feedback`}
              height={65}
              className="w-16 h-16 rounded-full mr-4"
              width={64}
            />
            <div className="flex flex-col justify-center h-full"> 
              <h2 className="text-red-500 text-lg font-medium mb-1">{feedback.name}</h2>
              <h5 className="text-[#000a2d] text-lg mb-2">{feedback.title}</h5>
              <p className='text-[#6c757d] mt-2'>
                {feedback.feedback}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
   </section>

   <section className="bg-red-50">
   <div className="flex flex-col md:flex-row items-center justify-between w-full h-full py-20">
  {/* Text Section */}
  <div className="w-full md:w-1/2 mb-12 md:mb-0 ml-5 md:ml-10"> 
    <h2 className="section-title font-bold text-6xl md:text-5xl mt-4 text-[#000a2d] mb-8">
      If Not Now, When? <br /> Let us Work Together!
    </h2>
    <p className="text-[#000a2d] mb-6">
      My name is Gift, and I am excited about the possibility of working together to bring 
      your ideas to life. With a passion for creating innovative and impactful solutions, 
      I believe that every great partnership starts with the right timing and that time is now.
    </p>
    <p className="text-[#000a2d] mb-6">
      Are you looking to build a user-friendly website, improve your digital presence,
      a beautiful customer service experience or craft seamless experiences, 
      I am here to help you achieve your goals. Let us work together to create something truly remarkable.
    </p>
  </div>
  <div className="w-full md:w-1/2 md:ml-10"> 
    <form className="p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          id="name"
          className="mt-2 block w-full p-4 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your full name"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          className="mt-2 block w-full p-4 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          className="mt-2 block w-full p-5 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Write your message"
        ></textarea>
      </div>
      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="w-full md:w-1/2 bg-red-500 text-white p-3 rounded-md"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>

      <footer>
        <div className="bg-blue-950 py-10 md:py-20 mt-4 text-center w-full"> 
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
    </section>
  );
}

export default AboutPage;
