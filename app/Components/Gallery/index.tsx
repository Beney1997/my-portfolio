"use client";
import React from "react";
import Image from "next/image";
import profile from "../../Public/images/gift.png";

const Gallery = () => {
  return (
    <section className="px-6 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="w-full">
          <Image
            src={profile}
            alt="beney"
            width={300}
            height={300}
            className="rounded-full"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div>
          <h1 className="text-[#000a2d] font-bold text-4xl md:text-6xl mb-6">
            My Version
          </h1>
          <p className="mb-5">
            As a programmer, I transform ideas into reality, crafting innovative solutions that inspire and connect people through the power of code. As a programmer, I blend creativity with logic to build elegant solutions that empower users and enhance experiences.
          </p>

          <p className="mb-5">
            My mission as a programmer is to create impactful, user-centric solutions that enhance everyday life through the seamless fusion of technology and innovation. I leverage technology to bring ideas to life, focusing on creating intuitive and accessible digital experiences for all users.
          </p>

          <p className="mb-5">
            As I continue my journey, I remain dedicated to learning, growing, and applying my skills to build solutions that not only meet but exceed expectations. With each line of code, I aim to create something meaningful, efficient, and user-friendly.
          </p>

          <p>
            Anyone can write code, but not everyone can build. It takes vision, persistence, and a deep understanding of both the user and the technology to create something truly impactful. My journey as a programmer is about not just writing code, but building solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
