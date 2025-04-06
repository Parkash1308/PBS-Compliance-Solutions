/**
 * @file About Us Page Component
 * @description Main About Us page that displays company information with a hero section and content section
 * @requires HeroSection - Hero section component for page header
 */

import HeroSection from "@/components/HeroSection";
import { aboutContent } from "./data"; // Import data from data.js
import CTA from "@/components/CTA";

/**
 * About Us Page Component
 * @returns {JSX.Element} The rendered About Us page
 */
const page = () => {
  return (
    <div>
      {/* Hero section with title and introductory text */}
      <HeroSection
        heading="Built by New Yorkers, For New York"
        text="For Decades, we’ve followed the rules of Inspection, Expediting and portfolio management, Not as Outsiders, but as neighbors, collaborators, and guardians of this city’s skyline."
      />



      {/* Main content section with dark background and responsive padding */}
      <section className="bg-[#38403e] text-[#dec2e1] px-6 md:px-16 lg:px-24 py-12 py-[150px] xl:py-[200px]">
        <div className="container mx-auto">
          {/* Our Story and Our Vision in two columns with green border */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {aboutContent
              .filter((section) => section.id === "our-story" || section.id === "our-vision")
              .map((section) => (
                <div
                  key={section.id}
                  className="p-6 border border-green-600 rounded-lg shadow-md"
                >
                  <h3 className="text-green-400 font-semibold uppercase tracking-wide my-2">
                    About Us
                  </h3>
                  <h1 className="text-4xl font-bold leading-tight my-4">
                    {section.headline || section.tagline}
                  </h1>
                  {section.body &&
                    (Array.isArray(section.body) ? (
                      section.body.map((paragraph, index) => (
                        <p key={index} className="text-gray-300 my-6">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-300 my-6">{section.body}</p>
                    ))}
                  {section.pillars && (
                    <ul className="grid grid-cols-1 gap-y-4 text-sm text-gray-300 py-6">
                      {section.pillars.map((pillar, index) => (
                        <li key={index}>✔ {pillar}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>

          {/* Our Mission with green border */}
          <div className="mb-16">
            {aboutContent
              .filter((section) => section.id === "our-mission")
              .map((section) => (
                <div key={section.id} className="p-6 border border-green-600 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold my-4">{section.tagline}</h2>
                  <p className="text-gray-300 my-6">{section.body}</p>
                  <div className="py-6">
                    {Object.entries(section.impacts).map(([key, value], index) => (
                      <div key={index} className="my-4">
                        <h3 className="font-semibold">{key}:</h3>
                        <p className="text-gray-300">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Service Areas with green border */}
          <div className="mb-16">
            {aboutContent
              .filter((section) => section.id === "service-areas")
              .map((section) => (
                <div key={section.id} className="p-6 border border-green-600 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold my-4">{section.headline}</h2>
                  <p className="text-gray-300 my-6">{section.body}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
                    <div>
                      <h3 className="font-semibold">Locations:</h3>
                      <ul className="text-gray-300">
                        {section.locations.map((location, index) => (
                          <li key={index}>- {location}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Building Types:</h3>
                      <ul className="text-gray-300">
                        {section.buildingTypes.map((type, index) => (
                          <li key={index}>- {type}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Client Types:</h3>
                      <ul className="text-gray-300">
                        {section.clientTypes.map((client, index) => (
                          <li key={index}>
                            <h4 className="font-semibold">{client.title}</h4>
                            <p>{client.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* CTA with green border */}
          <div className="p-6 border border-green-600 rounded-lg shadow-md">
            {aboutContent
              .filter((section) => section.id === "cta")
              .map((section) => (
                <div key={section.id}>
                  <p className="text-gray-300 my-6">{section.text}</p>
                  <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                    {section.buttonText}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;