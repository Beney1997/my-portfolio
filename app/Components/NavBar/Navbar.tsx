import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white">
      {/* Title */}
      <h1 className="text-black text-2xl md:text-3xl font-bold">PORTFOLIO</h1>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
        <Link href="/" className="text-black hover:text-red-400">Home</Link>
        <Link href="/about" className="text-black hover:text-red-400">About</Link>
        <Link href="/service" className="text-black hover:text-red-400">Service</Link>
        <Link href="/contact" className="text-black hover:text-red-400">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
