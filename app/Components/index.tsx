"use client";
import React from 'react';
import Gallery from './Gallery';
import Footer from './footer';
import Contact from './contactmap';



const Index = () => {
  return (
    <section className="relative p-4">
       <Gallery />
       <Contact />
       <Footer/>
      </section>
      
  );
}

export default Index;
