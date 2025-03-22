"use client";

import HeroSection from "@/components/HeroSection";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Testimonials from "./Testimonials";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * @typedef {Object} Project
 * @property {number} id - Unique identifier for the project
 * @property {string} title - Title of the project
 * @property {string} location - Location where the project was completed
 * @property {string} area - Size of the project area
 * @property {string} date - Completion date of the project
 * @property {string} category - Category the project belongs to (commercial, residential, etc.)
 * @property {string} image - Path to the project image
 */

/**
 * Array of project data to be displayed in the portfolio
 * @type {Project[]}
 */
const projects = [
  {
    id: 1,
    title: "Asphalting and Reconstruction of Transport Interchange",
    location: "Moscow",
    area: "4,052 sq. m.",
    date: "Oct 2019",
    category: "commercial",
    image: "/PBS%20Assets/better-assets/Bg/Post%201.webp", // Replace with actual image path
  },
  {
    id: 2,
    title: "Asphalting of Roads on the Territory of Production",
    location: "Saint-Petersburg",
    area: "3,041 sq. m.",
    date: "Sep 2019",
    category: "residential",
    image: "/PBS%20Assets/better-assets/Bg/Post%202.webp", // Replace with actual image path
  },
  {
    id: 3,
    title: "Construction of Residential Complex",
    location: "Kazan",
    area: "6,500 sq. m.",
    date: "Jul 2020",
    category: "industrial",
    image: "/PBS%20Assets/better-assets/Bg/Post%202%20a.webp", // Replace with actual image path
  },
  {
    id: 4,
    title: "Reconstruction of Industrial Facilities",
    location: "Novosibirsk",
    area: "5,200 sq. m.",
    date: "May 2021",
    category: "infrastructure",
    image: "/PBS%20Assets/better-assets/Bg/Post%205.webp", // Replace with actual image path
  },
];

/**
 * Available categories for filtering projects
 * @type {string[]}
 */
const categories = [
  "all",
  "commercial",
  "residential",
  "industrial",
  "infrastructure",
];

/**
 * Portfolio page component that displays projects with filtering, navigation,
 * and animations using Framer Motion and GSAP.
 *
 * @returns {JSX.Element} The portfolio page component
 */
const page = () => {
  /**
   * State to control how many thumbnail images to display based on screen size
   * @type {[number, React.Dispatch<React.SetStateAction<number>>]}
   */
  const [itemsToShow, setItemsToShow] = useState(3);

  /**
   * Effect to adjust the number of thumbnails based on screen width
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    /**
     * Handler for screen resize events
     * @param {MediaQueryListEvent} e - Media query event
     */
    const handleResize = (e) => {
      setItemsToShow(e.matches ? 2 : 3);
    };

    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup event listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  /**
   * State to track the currently active project index
   * @type {[number, React.Dispatch<React.SetStateAction<number>>]}
   */
  const [activeProject, setActiveProject] = useState(0);

  /**
   * State to track the currently selected category filter
   * @type {[string, React.Dispatch<React.SetStateAction<string>>]}
   */
  const [selectedCategory, setSelectedCategory] = useState("all");

  /**
   * State to track the navigation direction for animations
   * 1 = next, -1 = previous
   * @type {[number, React.Dispatch<React.SetStateAction<number>>]}
   */
  const [direction, setDirection] = useState(1);

  /**
   * Filter projects based on the selected category
   * @type {Project[]}
   */
  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

  /**
   * Navigate to the next project in the filtered list
   */
  const handleNext = () => {
    setDirection(1);
    setActiveProject((prev) => (prev + 1) % filteredProjects.length);
  };

  /**
   * Navigate to the previous project in the filtered list
   */
  const handlePrev = () => {
    setDirection(-1);
    setActiveProject((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  /**
   * Animation variants for text content transitions
   * @type {Object}
   */
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  /**
   * Animation variants for project image transitions
   * @type {Object}
   */
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  /**
   * Animation variants for thumbnail transitions
   * @type {Object}
   */
  const thumbnailVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  /**
   * Ref for the project details container for GSAP animations
   * @type {React.RefObject}
   */
  const textContainerRef = useRef(null);

  /**
   * Ref for the project image container for GSAP animations
   * @type {React.RefObject}
   */
  const imageContainerRef = useRef(null);

  /**
   * Effect to set up GSAP scroll animations
   */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate project details container: slightly scale and fade in with scroll
    if (textContainerRef.current) {
      gsap.fromTo(
        textContainerRef.current,
        { scale: 0.95, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
          duration: 0.5,
        }
      );
    }

    // Animate project image container with a subtle rotation
    if (imageContainerRef.current) {
      gsap.fromTo(
        imageContainerRef.current,
        { rotation: -5 },
        {
          rotation: 0,
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
          duration: 0.5,
        }
      );
    }
  }, []);

  return (
    <div>
      {/* Hero section with title */}
      <HeroSection heading="Owner Representative" text="Below is our Portfolio Section" />

      {/* Portfolio Content Section */}
      <motion.section
        className="bg-[#171717] text-[#E5E7EB] py-16 px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container p-5 mx-auto flex flex-col gap-12 xl:w-[70vw] my-24">
          {/* Category Filter Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12 md:mr-32 xl:mr-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveProject(0);
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${selectedCategory === category
                  ? "bg-green-500 text-black"
                  : "bg-[#2d2d2d] text-[#9CA3AF] hover:bg-[#3d3d3d]"
                  }`}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Project Content Display */}
          {filteredProjects.length > 0 ? (
            <div className="flex flex-col xl:flex-row lg:p-8 items-center md:items-start gap-12">
              {/* Left Content: Project Details */}
              <div
                ref={textContainerRef}
                className="w-full md:w-2/3 lg:w-4/5 xl:w-1/2 flex flex-col gap-8 xl:gap-32"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={filteredProjects[activeProject]?.id || "empty"}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-green-500 font-semibold uppercase tracking-wide mb-2">
                      Projects
                    </h3>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                      {filteredProjects[activeProject]?.title}
                    </h1>
                    <div className="text-[#9CA3AF] text-lg space-y-4">
                      <p>
                        <span className="font-semibold">Location:</span>{" "}
                        {filteredProjects[activeProject]?.location}
                      </p>
                      <p>
                        <span className="font-semibold">Area:</span>{" "}
                        {filteredProjects[activeProject]?.area}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    onClick={handlePrev}
                    className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-[#00CC6A] transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Previous Project
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-[#00CC6A] transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next Project →
                  </motion.button>
                </div>
              </div>

              {/* Right Content: Project Image and Thumbnails */}
              <div
                ref={imageContainerRef}
                className="relative w-full md:w-2/3 lg:w-4/5 xl:w-1/2"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={filteredProjects[activeProject]?.id || "empty"}
                    src={filteredProjects[activeProject]?.image}
                    alt={filteredProjects[activeProject]?.title}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ type: "tween", duration: 0.5 }}
                    className="rounded-lg shadow-lg object-cover w-full h-[500px]"
                  />
                </AnimatePresence>

                {/* Thumbnails Navigation */}
                <div className="flex flex-row justify-between items-center mt-6 mx-8 gap-4">
                  {/* Arrow Navigation Buttons */}
                  <div className="flex justify-start gap-8 w-full max-w-[300px]">
                    <motion.button
                      onClick={handlePrev}
                      className="bg-green-500 text-white text-center p-3 rounded-2xl hover:bg-[#00CC6A] transition"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ←
                    </motion.button>
                    <motion.button
                      onClick={handleNext}
                      className="bg-green-500 text-white p-3 rounded-2xl hover:bg-[#00CC6A] transition"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      →
                    </motion.button>
                  </div>

                  {/* Thumbnail Images */}
                  <div className="overflow-hidden w-[128px] sm:w-[184px]">
                    <motion.div
                      className="flex gap-2"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { staggerChildren: 0.05 },
                        },
                      }}
                      transition={{
                        type: "tween",
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Dynamic Thumbnail Generation */}
                      {(() => {
                        // Calculate which thumbnails to show based on active project
                        const start = Math.max(
                          0,
                          itemsToShow === 2 ? activeProject : activeProject - 1
                        );
                        const end = Math.min(
                          start + itemsToShow,
                          filteredProjects.length
                        );
                        const projectsSlice = filteredProjects.slice(
                          start,
                          end
                        );

                        // Fill remaining slots with placeholders if needed
                        return [
                          ...projectsSlice,
                          ...Array(itemsToShow - projectsSlice.length).fill(
                            null
                          ),
                        ].map((project, index) =>
                          project ? (
                            <motion.img
                              key={project.id}
                              src={project.image}
                              alt={project.title}
                              onClick={() =>
                                setActiveProject(
                                  filteredProjects.indexOf(project)
                                )
                              }
                              className={`w-[60px] h-[60px] rounded-lg cursor-pointer ${filteredProjects.indexOf(project) ===
                                activeProject
                                ? "border-green-500 border-2"
                                : ""
                                }`}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                              variants={thumbnailVariants}
                            />
                          ) : (
                            <div
                              key={`placeholder-${index}`}
                              className="w-[60px] h-[60px]"
                            />
                          )
                        );
                      })()}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // No projects found message
            <div className="text-center py-20">
              <p className="text-2xl text-[#9CA3AF]">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section>
        <Testimonials />
      </section>
    </div>
  );
};

export default page;
