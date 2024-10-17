"use client";
import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section>
      <section className="section-title ml-12 font-bold text-6xl md:text-4xl mt-10 text-[#000a2d] mb-20">
        <h2>
          Beauty is creative , 
          Desgin is pure!
        </h2>
      </section>
      <div>
        <div className=" flex justify-center items-center mb-20 gap-10 bg-gradient-to-r from-pink-500 to-purple-500 py-10 w-screen ">
          <div className="relative">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR422yPT1HGdLWBadQ8aN7PTG0vi7S7UvOG_Q&s"
              alt="Design"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
            <p className="absolute inset-0 flex justify-center items-center text-white text-2xl font-bold bg-black bg-opacity-50">
              Design
            </p>
          </div>
          <p className="text-white text-2xl font-bold">Creativity in Motion</p>
          <div className="relative">
            <Image
              src="https://media.istockphoto.com/id/1314502474/photo/beautiful-woman-with-bright-make-up.jpg?s=612x612&w=0&k=20&c=9kLVEu52tXPd3YnSfD2ICqIRS2-avvPmbrw0GKH0hAo="
              alt="Beauty"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
            <p className="absolute inset-0 flex justify-center items-center text-white text-2xl font-bold bg-black bg-opacity-50">
              Beauty
            </p>
          </div>
        </div>
        <section className="section-title ml-12 font-bold text-6xl md:text-4xl mt-10 text-[#000a2d] mb-20">
        <h2>
          Other Services You  <br />
          Get From Me!
        </h2>
        </section>
        <div className=" flex justify-center items-center mb-20 gap-10 bg-gradient-to-r from-white to-purple-500 py-10 w-screen ">
          <div className="relative">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bHqMFy2O9A1myA4-QGr1ALurq_vLeBZacw&s"
              alt="Design"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
            <p className="absolute inset-0 flex justify-center items-center text-white text-2xl font-bold bg-black bg-opacity-50">
              Design
            </p>
          </div>
          <p className="text-white text-2xl font-bold">
            Designing is Refreshing
          </p>
          <div className="relative">
            <Image
              src="data:image/jpeg;base64,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"
              alt="Beauty"
              width={500}
              height={300}
              className="object-cover rounded-lg"
            />
            <p className="absolute inset-0 flex justify-center items-center text-white text-2xl font-bold bg-black bg-opacity-50">
              Beauty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
