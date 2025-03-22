"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CustomImage from "../CustomImage";
import { mainSections, sections } from "./data";

/**
 * SectionList Component
 *
 * An interactive component that displays expandable service sections with detailed information.
 * Features include:
 * - Collapsible/expandable sections with smooth animations using Framer Motion
 * - Lazy-loaded background image for performance optimization
 * - Responsive design for various screen sizes
 * - Animated section transitions and content reveals
 *
 * Each section displays a summary view initially and expands to show detailed information
 * including overview, importance, process steps, regulations, and FAQs when clicked.
 *
 * @returns {JSX.Element} The rendered SectionList component
 */
const SectionList = () => {
  /**
   * State to track which section is currently expanded
   * @type {[number|null, React.Dispatch<React.SetStateAction<number|null>>]}
   */
  const [expandedId, setExpandedId] = useState(null);

  /**
   * State to store the background image URL after it has been loaded
   * @type {[string, React.Dispatch<React.SetStateAction<string>>]}
   */
  const [bgImage, setBgImage] = useState("");

  /**
   * Effect hook to lazy-load the background image
   * Creates a new Image object, sets the source, and updates state once loaded
   */
  useEffect(() => {
    const image = new Image();
    image.src = "/PBS%20Assets/better-assets/Bg/Post%202.webp";
    image.onload = () => {
      setBgImage(image.src);
    };
  }, []);

  /**
   * Toggles the expanded state of a section
   * If the section is already expanded, it collapses it
   * If a different section is clicked, it expands that section
   *
   * @param {number} id - The ID of the section to toggle
   */
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative bg-[#252525] text-[#E5E7EB] py-12 px-4 md:py-16 md:px-12 lg:px-24">
      {/* Background Image with Lazy Loading and Fade-in Effect */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: bgImage
            ? `url(${bgImage})`
            : "url('/PBS%20Assets/placeholder.jpg')", // Placeholder while loading
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: bgImage ? 0.07 : 0, // Fade-in effect when image is loaded
        }}
      ></div>

      <div className="relative container mx-auto flex flex-col justify-between">
        {/* Hero Section with Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-center my-12 xl:mb-8 py-6">
            <div className="text-brand-bright flex flex-col md:flex-row items-center justify-center gap-2 mb-4 md:mb-6">
              {/* <Building className="w-8 h-8" /> */}
              <h3 className="text-[#2d8b6f] text-lg font-gnuolane uppercase tracking-widest mb-2">
                Why Choose Us
              </h3>
            </div>
            <h1 className="text-4xl md:text-5xl font-conthrax sm:w-5/6 md:w-[70%] mx-auto  text-[#f3f4f6]">
              Your Pets Will Be Extremely Happy With Us
            </h1>
          </div>

          {/* Commented out CTA button - preserved for future use
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-bright text-black px-6 py-2.5 md:px-8 md:py-3 text-base md:text-lg rounded-full"
          >
            Get Free Consultation
          </motion.button> */}
        </motion.div>

        {/* Expandable Sections Container */}
        <div
          className={`container ${
            expandedId ? "2xl:ml-24" : "mx-auto"
          } space-y-8 sm:space-y-16 w-[90%] xl:w-[85%] mb-24 lg:my-16`}
        >
          <AnimatePresence>
            {/* Map through each section and create expandable cards */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                layout
                onClick={() => toggleExpand(section.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative cursor-pointer bg-[#252525] rounded-2xl shadow-2xl ${
                  expandedId === section.id ? "border-brand-bright" : ""
                } sm:w-[80%] md:w-[65%] lg:w-[80%] xl:w-[75%] mx-auto`}
              >
                {/* Section Card Header - Always Visible */}
                <motion.div
                  layout
                  className={`flex flex-col lg:flex-row items-center md:mx-auto justify-center xl:gap-16 bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden rounded-full`}
                >
                  {/* Section Image */}
                  <div className="w-full lg:w-2/5 2xl:w-1/5 h-48 lg:h-64">
                    <CustomImage
                      src={section.image}
                      width={100}
                      height={100}
                      alt={section.title}
                      className="w-full h-full object-contain lg:object-cover 2xl:object-contain p-6 2xl:p-0"
                    />
                  </div>

                  {/* Section Summary Content */}
                  <div className="w-full lg:w-3/5 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                    <div className="cursor-pointer">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                        {section.title}
                      </h2>
                      <p className="text-brand-midGray mb-4 md:mb-6 text-sm md:text-base">
                        {section.description}
                      </p>
                      <button className="text-brand-bright font-semibold hover:underline">
                        {expandedId === section.id ? "Collapse" : "Read more"}
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Expanded Content - Only Visible When Section is Expanded */}
                <AnimatePresence mode="wait">
                  {expandedId === section.id && (
                    <motion.div
                      layout="position"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.1 },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.2 },
                      }}
                      className="mt-8 md:my-32 xl:my-16 container ml-4 sm:ml-8 md:ml-[-10%] xl:ml-10 2xl:ml-16 w-[105%] sm:w-[115%] md:w-[120%] xl:w-[120%] overflow-hidden"
                    >
                      {/* Expanded Content Container with Green Border Accent */}
                      <div className="bg-[#1a1a1a] p-6 rounded-lg border-l-4 border-brand-bright shadow-xl">
                        <motion.div
                          layout="position"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-8"
                        >
                          {/* Overview Section - Introduction to the service */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                          >
                            <div className="flex items-center gap-3 mb-6">
                              {React.createElement(
                                mainSections[index].overview.icon,
                                {
                                  className: "w-8 h-8 text-brand-bright",
                                }
                              )}
                              <h2 className="text-2xl font-bold text-white">
                                {mainSections[index].overview.title}
                              </h2>
                            </div>
                            <p className="text-brand-midGray leading-relaxed">
                              {mainSections[index].overview.content}
                            </p>
                          </motion.div>
                          <motion.div
                            layout="position"
                            className="mb-16"
                            viewport={{
                              once: true,
                              margin: "0px 0px -100px 0px",
                            }}
                          >
                            {/* Why Important Section - Highlights the importance of the service */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              className={`mb-16 `}
                            >
                              <div className="flex items-center gap-3 mb-6">
                                {React.createElement(
                                  mainSections[index].whyImportant.icon,
                                  {
                                    className: "w-8 h-8 text-brand-bright",
                                  }
                                )}
                                <h2 className="text-2xl font-bold text-white">
                                  {mainSections[index].whyImportant.title}
                                </h2>
                              </div>

                              <ul className="space-y-4 text-brand-midGray">
                                {mainSections[index].whyImportant.items.map(
                                  (item, index) => (
                                    <li key={index} className="flex gap-3">
                                      <span className="text-brand-bright">
                                        •
                                      </span>
                                      {item}
                                    </li>
                                  )
                                )}
                              </ul>
                            </motion.div>

                            {/* Process Section - Step-by-step explanation of the service process */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              className={`mb-16 `}
                            >
                              <div className="flex items-center gap-3 mb-6">
                                {React.createElement(
                                  mainSections[index].process.icon,
                                  {
                                    className: "w-8 h-8 text-brand-bright",
                                  }
                                )}
                                <h2 className="text-2xl font-bold text-white">
                                  {mainSections[index].process.title}
                                </h2>
                              </div>

                              <div className="space-y-8">
                                {mainSections[index].process.steps.map(
                                  (step) => (
                                    <div key={step.step} className="flex gap-4">
                                      <div className="text-lg pl-2 text-brand-light rounded-full ">
                                        {step.step}
                                      </div>
                                      <div>
                                        <h3 className="text-white font-semibold mb-2">
                                          {step.title}
                                        </h3>
                                        <p className="text-brand-midGray">
                                          {step.description}
                                        </p>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </motion.div>

                            {/* Regulations Section - Compliance and regulatory information */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              className={`mb-16 py-6 rounded-xl bg-[#1A1A1A]`}
                            >
                              <div className="flex items-center gap-3 mb-6">
                                {React.createElement(
                                  mainSections[index].regulations.icon,
                                  {
                                    className: "w-8 h-8 text-brand-bright",
                                  }
                                )}
                                <h2 className="text-2xl font-bold text-white">
                                  {mainSections[index].regulations.title}
                                </h2>
                              </div>

                              <ul className="space-y-3 text-brand-midGray">
                                {mainSections[index].regulations.items.map(
                                  (item, index) => (
                                    <li key={index}>• {item}</li>
                                  )
                                )}
                              </ul>
                            </motion.div>

                            {/* FAQ Section - Common questions and answers about the service */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              className={`mb-16 `}
                            >
                              <div className="flex items-center gap-3 mb-6 ">
                                {React.createElement(
                                  mainSections[index].faq.icon,
                                  {
                                    className: "w-8 h-8 text-brand-bright",
                                  }
                                )}
                                <h2 className="text-2xl font-bold text-white">
                                  {mainSections[index].faq.title}
                                </h2>
                              </div>

                              <div className="space-y-4 p-14 pb-0">
                                {mainSections[index].faq.items.map(
                                  (faq, index) => (
                                    <div
                                      key={index}
                                      className="border-b border-[#2d2d2d] pb-4"
                                    >
                                      <h3 className="text-white font-semibold mb-2">
                                        {faq.question}
                                      </h3>
                                      <p className="text-brand-midGray">
                                        {faq.answer}
                                      </p>
                                    </div>
                                  )
                                )}
                              </div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Final Call To Action - Commented out but preserved for future use
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center bg-[#252525] p-6 md:p-8 rounded-xl"
        >
          <Phone className="w-10 h-10 md:w-12 md:h-12 text-brand-bright mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Start Your Project Today
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-bright text-black px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold text-lg"
          >
            Schedule Site Inspection
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default SectionList;
