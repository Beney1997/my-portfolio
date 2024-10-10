import React, { useState } from 'react';
import feedbackData from "@/app/Data/feedbackdata"; 
import Image from 'next/image';

const ContactMap = () => {
  const [showContact, setShowContact] = useState(false);

  const handleButtonClick = () => {
    setShowContact(!showContact);
  };

  return (
   <section>
    <div className="flex flex-col md:flex-row justify-between items-center bg-red-50 p-6 mt-10 w-full h-80 mb-40">
      <p className="text-red-500 font-bold text-4xl md:text-4xl mt-10 ml-10 flex-grow">
        Do not worry about contact <br />
        I am available
      </p>
      <div className="flex flex-col items-center">
        <button
          onClick={handleButtonClick}
          className="bg-red-500 px-4 py-2 mt-4 md:mt-0 rounded mr-10 text-white"
        >
          Contact Me Now
        </button>
        {showContact && (
          <p className="mt-4 text-black text-lg">+2349055467605</p> 
        )}
      </div>
    </div>

    <section>
      <div className="container mb-40">
        <h2 className="section-title ml-12 font-bold text-6xl md:text-4xl mt-4 text-[#000a2d] mb-10">
          Some Positive Feedback <br /> That Encourage Us
        </h2>
        <div className="flex flex-wrap justify-center md:justify-between gap-10 mx-3 mb-10">
          {feedbackData.map((feedback, index) => (
            <div key={index} className="flex flex-col mb-4 w-full md:w-1/3 lg:w-1/4">
              <div className="relative bg-white border border-gray-200 rounded shadow h-auto p-4 flex">
                <Image
                  src={feedback.image}
                  alt={`${feedback.name}'s feedback`}
                  height={65}
                  className="w-16 h-16 rounded-full mr-4" 
                  width={64}
                 
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-red-500 text-lg font-medium mb-1">{feedback.name}</h2>
                  <h5 className="text-[#000a2d] text-lg mb-2">{feedback.title}</h5>
                  <p className='text-[#6c757d] mt-2'>
                    {feedback.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </section>
  );
}

export default ContactMap;
