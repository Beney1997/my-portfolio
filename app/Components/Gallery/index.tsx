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
        <div className="flex flex-wrap justify-start items-start space-x-4 mb-40">
          <div className="flex flex-col">
            <Image
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services1.png" 
              alt='Dress'
              width={800}
              height={200}
            />
          </div>

          <div className="flex flex-col">
            <Image 
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services2.png"
              alt='Car'
              className='mt-0'
              width={350}
              height={150}
            />

            <Image 
              src=" https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services3.png"
              alt='Shoe'
              className='mt-10'
              width={350}
              height={100}
            />
          </div>

          <div className="flex space-x-4 mt-10">
            <Image 
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services4.png"
              alt='Image 3'
              className='w-auto h-auto'
              width={350}
              height={150}
            />
            <Image 
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services5.png" 
              alt='Image 4'
              className='w-auto h-auto'
              width={350}
              height={150}
            />
            <Image 
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/services6.png"
              alt='Image 5'
              className='w-auto h-auto'
              width={350}
              height={150}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
