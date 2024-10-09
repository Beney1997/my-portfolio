import React from 'react';
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LiaBroadcastTowerSolid } from 'react-icons/lia';
import { RxEnvelopeOpen } from "react-icons/rx";

// Service data array
const servicedata = [
  {
    id: 1,
    icon: <LiaBroadcastTowerSolid className="text-6xl transition-colors duration-300 hover:text-red-500" />,
    title: "UI/UX Design",
    description: "A free resource that will help you understand the design process and improve the quality of your work."
  },
  {
    id: 2,
    icon: <HiOutlineSpeakerphone className="text-6xl transition-colors duration-300 hover:text-red-500" />,
    title: "Digital Marketing",
    description: "A free resource that will help you understand digital marketing strategies and enhance your online presence."
  },
  {
    id: 3,
    icon: <RxEnvelopeOpen className="text-6xl transition-colors duration-300 hover:text-red-500" />,
    title: "Website Design",
    description: "A free resource that will help you understand the website design process and create effective user experiences."
  }
];
