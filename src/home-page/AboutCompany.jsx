"use client";

import Heading from "@/components/Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, HomeIcon, ReceiptText } from "lucide-react";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutCompany = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".gsap-animate");

    gsap.from(elements, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.3,
      delay: 0.3,
    });
  }, []);

  const aboutItems = [
    {
      icon: HomeIcon,
      title: "Properties Monitored",
      amount: 1453,
    },
    {
      icon: ReceiptText,
      title: "Corrected Violations",
      amount: 9852,
    },
    {
      icon: Building,
      title: "Square Foot Developed",
      amount: 4853018,
    },
  ];

  return (
    <div className="bg-brand-dark text-brand-light py-16 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col xl:flex-row-reverse justify-between">
        <div className="xl:border-l border-brand-gray1 md:w-full xl:w-1/2 mb-16 xl:mb-0 xl:pl-8 2xl:pl-16 gsap-animate">
          <Heading main="Services" subpart="What we can" />
          <div className="text-brand-gray3 space-y-6 mt-6">
            <p>
              We will promptly and efficiently fulfill any of your orders, from
              planning to execution, ensuring high-quality results on time and
              within budget.
            </p>
            <p>
              Ready to perform any amount of work quickly and efficiently,
              whether it's new construction, renovations, or site preparation.
            </p>
          </div>
          <div className="mt-10">
            <button
              className="flex items-center gap-2 text-black bg-[#7af8c4] border border-[#7af8c4] px-6 py-2 rounded-full hover:bg-[#8AC1C1]/80 transition duration-300"
              aria-label="Get in touch with our team"
            >
              Get in touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l9 9m0 0l9-9m-9 9V3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:w-full xl:w-1/2 gsap-animate">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="flex justify-center">
                  <item.icon
                    className="text-brand-green2 w-10 h-10 md:w-12 md:h-12"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg md:text-xl text-brand-gray2 font-semibold border-b-[3px] border-brand-gray1 inline-block pb-[2px] mt-4">
                  {item.title}
                </h3>
                <p className="text-brand-light text-xl md:text-2xl pt-4">
                  {item.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;