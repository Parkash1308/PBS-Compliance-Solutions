"use client"; // Marks this as a client-side component in Next.js

/**
 * @file Our History Page Component
 * @description Displays the company's history timeline with animated milestones
 * @requires framer-motion - For animations
 * @requires CustomImage - Custom image component
 * @requires HeroSection - Hero section component
 */

import CustomImage from "@/app/CustomImage";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";

/**
 * Our History Page Component
 * @returns {JSX.Element} The rendered Our History page
 */
const page = () => {
  /**
   * Array of milestone objects representing company history
   * @type {Array<{year: string, title: string, description: string, image: string}>}
   */
  const milestones = [
    {
      year: "2005",
      title: "Foundation Stone",
      description:
        "Established as a small local contractor with a focus on residential projects and quality craftsmanship.",
      image:
        "/PBS%20Assets/Brand%20Language/aerial-view-city-cloudy-sky-day-time.jpg", // Replace with your actual image path
    },
    {
      year: "2012",
      title: "Commercial Expansion",
      description:
        "Won first major commercial contract, expanding our expertise to office complexes and retail spaces.",
      image:
        "/PBS%20Assets/Brand%20Language/aerial-view-city-cloudy-sky-day-time.jpg", // Replace with your actual image path
    },
    {
      year: "2018",
      title: "Sustainability Commitment",
      description:
        "Achieved LEED Gold certification for our first net‑zero energy commercial building project.",
      image:
        "/PBS%20Assets/Brand%20Language/aerial-view-city-cloudy-sky-day-time.jpg", // Replace with your actual image path
    },
    {
      year: "2023",
      title: "Regional Leadership",
      description:
        "Recognized as Top 10 Construction Firm in the region, employing over 200 skilled professionals.",
      image:
        "/PBS%20Assets/Brand%20Language/aerial-view-city-cloudy-sky-day-time.jpg", // Replace with your actual image path
    },
  ];

  return (
    <div>
      {/* Hero section with title and introductory text */}
      <HeroSection
        heading="Our History"
        text="We have been providing top‑notch services for over 20 years."
      />
      <div>
        {/* Main timeline section with dark background */}
        <section className="bg-[#171717] py-16 px-6 md:px-12 lg:px-24">
          <div className="my-32 container mx-auto md:w-[60vw] lg:w-[80vw]">
            {/* Animated Section Heading - Uses framer-motion for fade-in and slide-up effect */}
            <motion.div
              className="text-center mb-24"
              initial={{ opacity: 0, y: 20 }} // Initial invisible state, positioned below final position
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
              viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
              transition={{ duration: 0.5 }} // Animation duration
            >
              <h3 className="text-brand-bright font-semibold uppercase tracking-wide mb-2">
                Our History
              </h3>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-light">
                A Legacy of Excellence
              </h1>
            </motion.div>

            <div className="relative">
              {/* Vertical Timeline Line - Only visible on large screens */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-brand-bright hidden lg:block"></div>

              {/* Milestones - Maps through milestone data to create timeline entries */}
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  // Responsive layout with alternating left/right pattern on larger screens
                  className={`flex flex-col w-[80vw] sm:w-[60vw] md:w-[60vw] xl:w-[55vw] mx-auto md:flex-row md:gap-8 lg:gap-24 items-center justify-center mb-16 xl:mb-24 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  // Animation properties - Each milestone fades in and slides up when scrolled into view
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  // Staggered animation delay based on index for sequential appearance
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Image Container - Adjusts positioning based on even/odd index */}
                  <div
                    className={`w-full md:w-1/2 p-4 flex ${index % 2 === 0
                        ? "justify-end md:pr-8" // Even indexes: right-aligned on desktop
                        : "justify-start md:pl-8" // Odd indexes: left-aligned on desktop
                      }`}
                  >
                    <CustomImage
                      src={milestone.image}
                      alt={milestone.title}
                      width={100}
                      height={100}
                      className="rounded-lg shadow-lg object-cover w-full h-[200px] md:h-[250px] md:w-[300px]"
                    />
                  </div>

                  {/* Content Container - Contains year, title and description */}
                  <div className="w-full md:w-[40%] p-4 text-center md:text-left relative">
                    {/* Horizontal connecting line (hidden by default) */}
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 h-[2px] w-[75px] bg-white hidden ${index % 2 === 0 ? "left-[700px]" : "right-[700px]"
                        }`}
                    ></div>

                    <div>
                      {/* Year displayed in accent color */}
                      <span className="text-brand-bright font-semibold text-lg">
                        {milestone.year}
                      </span>
                      {/* Milestone title */}
                      <h2 className="text-xl md:text-2xl font-bold text-brand-light mt-2">
                        {milestone.title}
                      </h2>
                      {/* Milestone description in lighter color */}
                      <p className="text-brand-midGray mt-4">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
