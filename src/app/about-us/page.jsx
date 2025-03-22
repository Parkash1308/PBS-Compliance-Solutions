/**
 * @file About Us Page Component
 * @description Main About Us page that displays company information with a hero section and content section
 * @requires HeroSection - Hero section component for page header
 * @requires CustomImage - Custom image component for optimized image rendering
 */

import HeroSection from "@/components/HeroSection";
import CustomImage from "../CustomImage";

/**
 * About Us Page Component
 * @returns {JSX.Element} The rendered About Us page
 */
const page = () => {
  return (
    <div>
      {/* Hero section with title and introductory text */}
      <HeroSection
        heading="  Built by New Yorkers, For New York"
        text="For Decades, we’ve followed the rules of Inspection, Expediting and portfolio 
management, Not as Outsiders, but as neighbors, collaborators, and guardians of this city’s 
skyline."
      />

      {/* Main content section with dark background and responsive padding */}
      <section className="bg-gray-900 text-white px-6 md:px-16 lg:px-24 py-12 py-[150px] xl:py-[200px]">
        <div className="px-12 lg:w-[80vw] gap-8 md:gap-12 container mx-auto flex flex-col lg:flex-row items-center ">
          {/* Left Section: Circular Image with decorative elements */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative bg-brand-green1 rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              <CustomImage
                src="/PBS Assets/Brand Language/new-york-city-ny-jul-11-empire-state-building-through-manhattan-bridge-july-11-2014-new-york-city-it-is-102-story-landmark-was-world-s-tallest-building-more-than-40-years.jpg" // Replace with your image URL
                alt="Pet and Owner"
                width={100}
                height={100}
                className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] object-cover rounded-full"
              />
              {/* Decorative Circles - Visual elements to enhance design */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-brand-light rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-brand-light rounded-full"></div>
            </div>
          </div>

          {/* Right Section: Text Content with heading, description and features */}
          <div className="w-full lg:w-1/2 mt-8 md:mt-0 md:pl-12">
            {/* Section subtitle */}
            <h3 className="text-green-400 font-semibold uppercase tracking-wide my-2">
              About Us
            </h3>
            {/* Main heading with line break for visual appeal */}
            <h1 className="text-4xl font-bold leading-tight my-4">
              Our Journey to Excellence
              <br />A Passion for Construction
            </h1>
            {/* Company description paragraph */}
            <p className="text-gray-300 my-6">
              For Decades, we’ve followed the rules of Inspection, Expediting and portfolio
              management, Not as Outsiders, but as neighbors, collaborators, and guardians of this city’s
              skyline.
            </p>
            {/* Features list - Two-column grid layout with checkmarks */}
            <ul className="grid grid-cols-2 gap-x-8 gap-y-10 text-sm text-gray-300 py-6">
              <li>✔ Over 10 years of experience</li>
              <li>✔ Talented professionals</li>
              <li>✔ High-quality materials</li>
              <li>✔ Reliable customer support</li>
            </ul>
            {/* Call-to-action Button with hover effects */}
            <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
              Meet the Minds behind your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
