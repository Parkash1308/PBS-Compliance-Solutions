import Heading from "@/components/Heading";
import CTA from "@/components/CTA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BrickWall,
  Building,
  ClipboardList,
  Hammer,
  HardHat,
  Tractor,
} from "lucide-react";
import { useEffect, useRef } from "react";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * @typedef {Object} ServiceItem
 * @property {string} heading - Title of the service
 * @property {string} text - Description of the service
 * @property {React.ComponentType} icon - Lucide React icon component to display
 */

/**
 * Services Component
 *
 * A section that displays company services with scroll-triggered animations.
 * Features include:
 * - GSAP animations that trigger when the section enters the viewport
 * - Responsive grid layout that adapts to different screen sizes
 * - Service cards with icons, headings, and descriptions
 * - Call-to-action button in the left section
 *
 * The component is divided into two main sections:
 * 1. Left section with heading, description, and CTA button
 * 2. Right section with a grid of animated service cards
 *
 * @returns {JSX.Element} The rendered Services component
 */
const Services = () => {
  /**
   * Reference to the container holding the service cards for GSAP animations
   * @type {React.RefObject}
   */
  const cardsRef = useRef(null);

  /**
   * Array of service items to display in the grid
   * Each item includes a heading, description text, and icon component
   *
   * @type {ServiceItem[]}
   */
  const serviceItems = [
    {
      heading: "What we Specialize in:",
      text: [
        " • Compliance Inspections",
        " • Expediting & Permitting",
        " • Annual Mailings",
        " • Owner Representation",
        " • Portfolio Management",
        " • Consultancy over your Projects",
      ],
      icon: HardHat, // Icon for list items
    },
    {
      heading: "Why NYC Trusts PBS?",
      description: '50+ Combined years of experience in industry for navigating NYC’s Complex Building Codes 360° Compliance Guardrails',
      text: [
        "NYC Expertise",
        "End-to-End Solutions",
        "Proactive Approach",
        "1 Stop Shop",
        "Client-First Focus",
      ],
      icon: Building, // Icon for list items
    },
  ];

  /**
   * Effect hook to set up GSAP scroll-triggered animations
   *
   * When the component mounts:
   * 1. Selects all elements with the .service-card class inside the container
   * 2. Creates an animation that triggers when the container enters the viewport
   * 3. Animates the cards from invisible and offset to visible and in position
   * 4. Uses staggered timing for a sequential reveal effect
   */
  useEffect(() => {
    if (cardsRef.current) {
      // Animate all elements with the .service-card class within the container
      gsap.from(cardsRef.current.querySelectorAll(".service-card"), {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%", // Animation starts when top of container reaches 80% down the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on exit
          // markers: true, // Uncomment for debugging
        },
        opacity: 0, // Start invisible
        y: 50, // Start 50px below final position
        duration: 0.7, // Animation takes 0.7 seconds
        ease: "power2.out", // Easing function for smooth animation
        stagger: 0.3, // Each card starts 0.3 seconds after the previous one
      });
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="bg-[#141414] text-white sm:py-32">
      <div className="container p-8 md:p-0 mx-auto py-32 flex flex-col xl:flex-row justify-between md:w-[90vw]">
        {/* Left Section: Title and Description */}
        <div className="xl:border-r flex flex-col justify-center border-gray-600 pr-10 md:ml-10 md:w-3/4 mx-auto xl:w-2/3 mb-32 xl:mb-0 xl:mr-8 3xl:mr-16 xl:pr-16 3xl:pr-32 xl:gap-4 3xl:gap-8">
          {/* Reusable Heading Component */}
          <Heading main="PBS" subpart="Introduction to " />

          {/* Description Paragraphs */}
          <div className="pl-5 text-gray-400 space-y-6">
            <p>
              Compliance Made Simple, Projects Done Right
            </p>
            <p>
              Proactive Building Solutions is a collaboration of its core team members and fellow New
              Yorkers, each representing a crucial subdivision that together form the foundation for the PBS
              network. PBS has honed the skills and built the relationships necessary to revolutionize the
              industry.
            </p>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-10 pl-5">
            <CTA text="Know more about us" href="/about-us" />
            {/* <button
              className="flex items-center gap-2 text-white bg-transparent border border-green-600 px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
              aria-label="Get in touch with our team"
            >
              Know more about us
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
            </button> */}
          </div>
        </div>

        {/* Right Section: Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-y-16 mt-16 md:mt-0 md:w-2/3 lg:w-[80vw] px-5"
        >
          {/* Map through service items to create cards */}
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="service-card space-y-4 text-center md:text-left w-2/3 mx-auto xl:mx-10"
            >
              {/* Service Icon */}
              <div className="flex text-green-600 justify-center md:justify-start">
                <item.icon className="text-brand-green2 w-12 h-12" aria-hidden="true" />
              </div>

              {/* Service Heading */}
              <h3 className="text-xl font-semibold border-b-[3px] border-brand-gray1 inline-block pb-[2px]">
                {item.heading}
              </h3>

              {/* Description (Only for the second section) */}
              {index === 1 && (
                <div className="text-gray-400 space-y-1">
                  <p>50+ Combined years of experience in industry for navigating NYC’s Complex Building Codes</p>
                  <p>360° Compliance Guardrails</p>
                  <p>Pre-inspection audits</p>
                  <p>Real-time documentation</p>
                </div>
              )}

              {/* List Rendering */}
              {index === 0 ? (
                // Unordered list for "What we Specialize in"
                <ul className="text-gray-400 space-y-2">
                  {item.text.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">

                      {point}
                    </li>
                  ))}
                  <CTA text="Our Offerings" href="/services" />
                </ul>
              ) : (
                // Ordered list for "Why NYC Trusts PBS?"
                <ol className="text-gray-400 space-y-2">
                  {item.text.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">

                      {i + 1}. {point}
                    </li>
                  ))}
                </ol>
              )}

              {/* Short Testimonial Section (For Authority & Expertise) */}
              {index === 1 && (
                <blockquote className="mt-4 text-brand-green2 font-semibold italic border-l-4 border-green-500 pl-4">
                  "PBS has been an invaluable partner in ensuring compliance and smooth project execution across NYC. Their expertise is unmatched!" – John Doe, Real Estate Developer
                </blockquote>
              )}
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Services;
