"use client"; 
import React from 'react';
import Link from 'next/link';

const HireMe = () => {
  return (
    <section className="p-4 bg-purple-100 min-h-screen">
      {/* Header */}
      {/* <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black">Hire Me</h1>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div> */}

      {/* Personal Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-2">EGHAREVBA GIFT</h2>
        <p className="text-gray-700">
          Abijo, GRA, Lekki, Lagos State, Nigeria | Phone: <a href="tel:09055467605" className="text-blue-500 hover:underline">09055467605</a>
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:egharevbagift79@gmail.com" className="text-blue-500 hover:underline">egharevbagift79@gmail.com</a> | 
          GitHub: <a href="https://github.com/Beney1997" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Beney1997</a>
        </p>
      </div>

      {/* Objective */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-black mb-2">Objective</h3>
        <p className="text-gray-700">
          Skilled front-end engineer with experience in designing and implementing user-friendly web applications. 
          Proficient in modern front-end technologies and frameworks, seeking to contribute to a dynamic development team.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-black mb-2">Skills</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Languages:</strong> HTML5, CSS3, JavaScript, TypeScript</li>
          <li><strong>Frameworks & Libraries:</strong> React, Tailwind CSS, Chakra UI</li>
          <li><strong>Web Development:</strong> Responsive Web Design, UI/UX Design Principles, Cross-Browser Compatibility</li>
          <li><strong>Tools:</strong> Git/GitHub, API Integration</li>
          <li><strong>Soft Skills:</strong> Problem Solving, Debugging, Strong Communication and Collaboration Skills</li>
        </ul>
      </div>

      {/* Work Experience */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-black mb-4">Work Experience</h3>

        {/* Front-End Developer Intern */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-black">Front-End Developer Intern</h4>
          <p className="text-gray-700 mb-2">ACE EMEDED NIG LTD, July 2024 – Present</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Currently working on developing user interfaces for web applications.</li>
            <li>Gaining hands-on experience with front-end technologies.</li>
            <li>Participating in code reviews and adopting best practices.</li>
            <li>Contributing to website performance optimization and responsiveness.</li>
          </ul>
        </div>

        {/* Junior Front-End Software Engineer */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-black">Junior Front-End Software Engineer</h4>
          <p className="text-gray-700 mb-2">ParallelScore International, June 2023 – November 2023</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Developed responsive web applications in collaboration with cross-functional teams.</li>
            <li>Implemented pixel-perfect UI/UX designs using HTML5, CSS3, and JavaScript.</li>
            <li>Enhanced website performance through code optimization and best practices adherence.</li>
            <li>Conducted code reviews and mentored junior developers.</li>
            <li>Integrated third-party APIs to extend website functionality.</li>
            <li>Managed version control using Git/GitHub.</li>
            <li>Worked closely with designers and back-end developers for seamless data integration.</li>
          </ul>
        </div>
      </div>

      {/* Optional: Add a section for Contact or Additional Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-black mb-2">Get in Touch</h3>
        <p className="text-gray-700 mb-4">
          If you're interested in working with me or have any questions, feel free to reach out!
        </p>
        <a 
          href="mailto:egharevbagift79@gmail.com" 
          className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200 inline-block"
        >
          Send an Email
        </a>
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default HireMe;
