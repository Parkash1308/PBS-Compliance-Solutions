"use client";

import Heading from "@/components/Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, HomeIcon, ReceiptText } from "lucide-react";
import React, { useEffect, useRef } from "react";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * @typedef {Object} AboutItem
 * @property {React.ComponentType} icon - Lucide React icon component to display
 * @property {string} title - Title text for the statistic
 * @property {number} amount - Numerical value to display (will be formatted with commas)
 */

/**
 * AboutCompany Component
 *
 * A section that displays company statistics and services information with scroll-triggered animations.
 * Features include:
 * - GSAP animations that trigger when the section enters the viewport
 * - Responsive layout that changes from column to row based on screen size
 * - Company statistics with icons and formatted numbers
 * - Services description with a call-to-action button
 *
 * The component is divided into two main sections:
 * 1. Left section with services description and CTA button
 * 2. Right section with company statistics and icons
 *
 * @returns {JSX.Element} The rendered AboutCompany component
 */
const AboutCompany = () => {
  /**
   * Reference to the container element for GSAP animations
   * @type {React.RefObject}
   */
  const containerRef = useRef(null);

  /**
   * Effect hook to set up GSAP scroll-triggered animations
   *
   * When the component mounts:
   * 1. Selects all elements with the .gsap-animate class inside the container
   * 2. Creates an animation that triggers when the container enters the viewport
   * 3. Animates the elements from invisible and offset to visible and in position
   * 4. Uses staggered timing for a sequential reveal effect
   */
  useEffect(() => {
    // Select all child elements with the .gsap-animate class inside the container
    const elements = containerRef.current.querySelectorAll(".gsap-animate");

    // Create the scroll-triggered animation
    gsap.from(elements, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Animation starts when top of container reaches 80% down the viewport
        toggleActions: "play none none none", // Play animation once when triggered
      },
      opacity: 0, // Start invisible
      y: 50, // Start 50px below final position
      duration: 0.6, // Animation takes 0.6 seconds
      stagger: 0.3, // Each element starts 0.3 seconds after the previous one
      delay: 0.3, // Wait 0.3 seconds before starting the first animation
    });
  }, []); // Empty dependency array ensures this runs once on mount

  /**
   * Array of statistics to display in the right section
   * Each item includes an icon, title, and numerical amount
   *
   * @type {AboutItem[]}
   */
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
    <div className="bg-[#38403e] text-white md:py-32" ref={containerRef}>
      <div className="container p-8 2xl:p-0 mx-auto py-32 flex flex-col xl:flex-row-reverse justify-between md:w-[90vw] xl:ml-[50px] 2xl:ml-[75px]">
        {/* Left Section - Services Description */}
        <div className="xl:border-l flex flex-col justify-center border-gray-600  md:w-2/3 mx-auto mb-32 xl:mb-0 2xl:ml-16 2xl:pl-32 xl:pl-16 xl:gap-8 xl:w-[70%] xl:mr-32 2xl:mr-64 gsap-animate">
          {/* Reusable Heading Component */}
          <Heading main="Services" subpart="What we can" />

          {/* Services Description Paragraphs */}
          <div className="pl-5 text-gray-400 space-y-6">
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

          {/* Call-to-Action Button */}
          <div className="mt-10 pl-5">
            <button
              className="flex items-center gap-2 text-white bg-transparent border border-green-600 px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
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
                aria-hidden="true" // Hide from screen readers as it's decorative
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

        {/* Right Section - Company Statistics */}
        <div className="flex flex-row items-end md:w-[60vw] lg:w-[45vw] xl:w-[60vw] 2xl:w-[50vw] md:mx-auto gsap-animate">
          <div className="flex flex-row">
            {/* Map through statistics items */}
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className="space-y-4 space-x-2 text-center md:text-left w-2/3 mx-auto 3xl:mx-10"
              >
                {/* Statistic Icon */}
                <div className="flex justify-center md:justify-start">
                  <item.icon
                    className="text-brand-green2 w-10 h-10 md:w-12 md:h-12"
                    aria-hidden="true" // Hide from screen readers as it's decorative
                  />
                </div>

                {/* Statistic Title */}
                <h3 className="text-lg md:text-xl text-brand-gray2 font-semibold border-b-[3px] border-brand-gray1 inline-block pb-[2px]">
                  {item.title}
                </h3>

                {/* Formatted Numerical Value */}
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
