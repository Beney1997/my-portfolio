import React, { useState } from 'react';
import feedbackData from "@/app/Data/feedbackdata"; 
import Image from 'next/image';

const ContactMap = () => {
  const [showContact, setShowContact] = useState(false);

  const handleButtonClick = () => {
    setShowContact(!showContact);
  };

  return (
   <section className="w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 mt-0 h-80 mb-40 bg-red-50">
  <div className="flex flex-col justify-center items-start md:ml-10 ">
    <p className="text-red-500 font-bold text-4xl md:text-4xl">
      Do not worry about contact <br />
      I am available
    </p>
  </div>
  
  <div className="flex flex-col items-center justify-center p-4">
    <button
      onClick={handleButtonClick}
      className="bg-red-500 px-4 py-2 rounded text-white"
    >
      Contact Me Now
    </button>
    {showContact && (
      <p className="mt-2 text-black text-lg">+2349055467605</p>
    )}
  </div>
</div>

<section>
  <div className="container mb-40">
    <h2 className="section-title ml-12 font-bold text-6xl md:text-4xl mt-4 text-[#000a2d] mb-10">
      Some Positive Feedback <br /> That Encourage Us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 mb-10">
      {feedbackData.map((feedback, index) => (
        <div key={index} className="flex flex-col h-full"> 
          <div className="relative bg-white border border-gray-200 rounded shadow h-full p-4 flex"> 
            <Image
              src={feedback.image}
              alt={`${feedback.name}'s feedback`}
              height={65}
              className="w-16 h-16 rounded-full mr-4"
              width={64}
            />
            <div className="flex flex-col justify-center h-full"> 
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
