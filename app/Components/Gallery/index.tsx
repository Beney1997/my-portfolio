'use client';
import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  return (
    <>
      <section className="section-title ml-12 font-bold text-6xl md:text-4xl mt-10 text-[#000a2d] mb-20">
        <h2>Other Services You can <br />Get From Me!</h2>
      </section>

      <section>
        <div className="flex flex-col md:flex-row flex-wrap justify-start items-start space-y-6 md:space-y-0 md:space-x-4 mb-40">
         
          <div className="flex flex-col w-full md:w-auto">
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services1.png"
              alt='Dress'
              width={800}
              height={200}
              className="w-full md:w-auto"
            />
          </div>

          <div className="flex flex-col w-full md:w-auto">
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services2.png"
              alt='Car'
              className="mt-0 w-full md:w-auto" 
              width={350}
              height={150}
            />

            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services3.png"
              alt='Shoe'
              className="mt-10 w-full md:w-auto"
              width={350}
              height={100}
            />
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mt-10 md:mt-0">
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services4.png"
              alt='Image 3'
              width={350}
              height={150}
              className="w-full md:w-auto"
            />
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services5.png"
              alt='Image 4'
              width={350}
              height={150}
              className="w-full md:w-auto"
            />
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services6.png"
              alt='Image 5'
              width={350}
              height={150}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
