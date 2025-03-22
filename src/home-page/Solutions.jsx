"use client";

import CustomImage from "@/app/CustomImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * @typedef {Object} SolutionItem
 * @property {string} title - Title of the solution
 * @property {string} description - Description of the solution
 * @property {string} image - Path to the solution's image
 */

/**
 * Solutions Component
 *
 * A section that displays company solutions with scroll-triggered animations.
 * Features include:
 * - GSAP animations that trigger when the section enters the viewport
 * - Image preloading for improved performance
 * - Responsive card grid that adapts to different screen sizes
 * - Clean, modern design with consistent styling
 *
 * The component is divided into two main sections:
 * 1. Top section with title and description
 * 2. Card grid section with solution cards
 *
 * @returns {JSX.Element} The rendered Solutions component
 */
const Solutions = () => {
  /**
   * Reference to the container element for GSAP animations
   * @type {React.RefObject}
   */
  const containerRef = useRef(null);

  /**
   * Array of solution items to display in the grid
   * Each item includes a title, description, and image path
   *
   * @type {SolutionItem[]}
   */
  const SolutionsItems = [
    {
      title: "MemberShip",
      description:
        "We will promptly and efficiently fulfill any of your orders, from planning to execution, ensuring high-quality results on time and within budget.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png",
    },
    {
      title: "Planning",
      description:
        "Ready to perform any amount of work quickly and efficiently, whether it's new construction, renovations, or site preparation.",
      image:
        "/PBS%20Assets/Brand%20Language/monochromatic-urban-minimal-landscapes.jpg",
    },
    {
      title: "Development",
      description:
        "Ready to perform any amount of work quickly and efficiently, whether it's new construction, renovations, or site preparation.",
      image:
        "/PBS%20Assets/Brand%20Language/foggy-city-skyline-with-boat-water.jpg",
    },
  ];

  /**
   * Effect hook to preload images for the second and third cards
   *
   * Preloading improves user experience by ensuring images are ready
   * when they come into view, preventing layout shifts and blank spaces.
   *
   * Only preloads images after the first one, assuming the first is
   * likely to be visible immediately on page load.
   */
  useEffect(() => {
    // Extract image paths from all items except the first one
    const imagesToPreload = SolutionsItems.slice(1).map((item) => item.image);

    // Create Image objects and set their src to trigger preloading
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []); // Empty dependency array ensures this runs once on mount

  /**
   * Effect hook to set up GSAP scroll-triggered animations
   *
   * Creates a timeline that animates solution cards when they enter the viewport:
   * 1. Cards start invisible and offset vertically
   * 2. Cards fade in and move up to their final position
   * 3. Animation is staggered for a sequential reveal effect
   *
   * The timeline is cleaned up when the component unmounts to prevent memory leaks.
   */
  useEffect(() => {
    // Create a GSAP timeline with scroll trigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%", // Animation starts when top of container reaches 60% down the viewport
        toggleActions: "play none none reverse", // Play on enter, reverse on exit
        // markers: true, // Uncomment for debugging
      },
    });

    // Animate all elements with the .solution-card class
    timeline.from(".solution-card", {
      opacity: 0, // Start invisible
      y: 50, // Start 50px below final position
      duration: 0.7, // Animation takes 0.7 seconds
      ease: "power2.out", // Easing function for smooth animation
      stagger: 0.3, // Each card starts 0.3 seconds after the previous one
      delay: 0.3, // Wait 0.3 seconds before starting the first animation
    });

    // Cleanup function to kill the timeline when component unmounts
    return () => {
      timeline.kill();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="bg-[#141414] text-white md:py-32">
      <div
        className="container mx-auto p-8 sm:p-0 md:w-[90vw]"
        ref={containerRef}
      >
        {/* Top Section: Title and Description */}
        <div className="text-center container mb-16 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-conthrax font-bold mb-10">
            Solutions
          </h1>
          <div className="max-w-4xl lg:w-full text-gray-400 space-y-6 mt-8">
            <p>
              Teams like yours are using InCheck to manage critical onsite work:
            </p>
          </div>
        </div>

        {/* Cards Grid - Responsive layout with different widths at breakpoints */}
        <div className="flex flex-wrap justify-center gap-16 md:gap-8 lg:gap-32 mt-16">
          {/* Map through solution items to create cards */}
          {SolutionsItems.map((item) => (
            <div
              key={item.title}
              className="solution-card w-[80%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[30%] 2xl:w-[25%] bg-gray-800 p-5 rounded-lg"
            >
              {/* Solution Image */}
              <CustomImage
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              {/* Solution Title */}
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              {/* Solution Description */}
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
