import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <h1 className="text-black text-2xl md:text-3xl font-bold">PORTFOLIO</h1>
      <div className="flex space-x-6">
        <Link href="/" className="text-black hover:text-red-400">Home</Link>
        <Link href="/about" className="text-black hover:text-red-400">About</Link>
        <Link href="/service" className="text-black hover:text-red-400">Service</Link>
        <Link href="/contact" className="text-black hover:text-red-400">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
