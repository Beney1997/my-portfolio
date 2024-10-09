"use client";
import React from 'react';
import Gallery from './Gallery';
import Cards from './cards';
import Footer from './footer';
import Contact from './contactmap';



const Index = () => {
  return (
    <section className="relative p-4">
       <Cards/>
       <Gallery />
       <Contact />
       <Footer/>
      </section>
      
  );
}

export default Index;
