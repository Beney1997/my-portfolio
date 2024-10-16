'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveringPage, setIsHoveringPage] = useState(false);
  const [isPageActive, setIsPageActive] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true); 
      } else {
        setIsSticky(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    setIsPageActive(!isPageActive); 
  };

  return (
    <div className={`w-full p-4 ${isSticky ? 'fixed top-0 z-50 bg-white shadow-lg' : 'relative bg-transparent'}`}>
      <div className="grid grid-cols-3 items-center w-full max-w-screen-xl mx-auto">
        <h1 className="text-black text-2xl md:text-3xl font-bold">PORTFOLIO</h1>

        <div className="md:hidden flex justify-end col-span-2">
          <button onClick={toggleMenu} className="text-black text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex justify-center space-x-10 font-bold text-lg col-span-2">
          <Link href="/" className="text-black hover:text-red-400">Home</Link>
          <Link href="/about" className="text-black hover:text-red-400">About</Link>
          <Link href="/service" className="text-black hover:text-red-400">Service</Link>
          <Link href="/portfolio" className="text-black hover:text-red-400">Portfolio</Link>
          
          
          <div 
            className="relative"
            onMouseEnter={() => setIsHoveringPage(true)}
            onMouseLeave={() => {
              if (!isPageActive) {
                setIsHoveringPage(false); 
              }
            }}
          >
            <Link 
              href="/page" 
              className="text-black hover:text-red-400"
              onClick={handlePageClick}
            >
              Page
            </Link>
            {(isHoveringPage || isPageActive) && (
              <div className="absolute left-0 top-full mt-8 w-48 bg-white shadow-lg z-5">
                <Link href="/blogs" className="block px-4 py-1 text-black text-sm hover:text-red-400 mb-3">Blogs</Link>
                <Link href="/blogs/details" className="block px-4 py-1 text-black text-sm mb-3 hover:text-red-400">Blog Details</Link>
                <Link href="/portfolio/details" className="block px-4 py-1 text-black text-sm hover:text-red-400">Portfolio Details</Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-black hover:text-red-400">Contact</Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 mt-4">
          <Link href="/" className="text-black hover:text-red-400 text-xl ">Home</Link>
          <Link href="/about" className="text-black hover:text-red-400 text-xl">About</Link>
          <Link href="/service" className="text-black hover:text-red-400 text-xl">Service</Link>
          <Link href="/contact" className="text-black hover:text-red-400 text-xl">Contact</Link>
          <Link href="/portfolio" className="text-black hover:text-red-400">Portfolio</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
