"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import {
  Building,
  DraftingCompass,
  Factory,
  Hammer,
  Home,
  Leaf,
} from "lucide-react";
import ExpandableSections from "./ExpandableSections";

/**
 * @typedef {Object} Service
 * @property {string} title - The name of the service
 * @property {JSX.Element} icon - Lucide React icon component for the service
 * @property {string} description - Brief description of the service
 */

/**
 * Array of services offered by the company
 * Each service includes a title, icon, and description
 * Icons are imported from lucide-react library
 *
 * @type {Service[]}
 */
const services = [
  {
    title: "Civil Construction",
    icon: <Building className="w-12 h-12 text-brand-bright" />,
    description:
      "Infrastructure development including roads, bridges, and public utilities.",
  },
  {
    title: "Residential Construction",
    icon: <Home className="w-12 h-12 text-brand-bright" />,
    description: "Full-spectrum home building from foundation to finishing.",
  },
  {
    title: "Commercial Construction",
    icon: <Factory className="w-12 h-12 text-brand-bright" />,
    description: "Turnkey solutions for office complexes and retail spaces.",
  },
  {
    title: "Industrial Construction",
    icon: <Hammer className="w-12 h-12 text-brand-bright" />,
    description: "Heavy-duty facilities for manufacturing and production.",
  },
  {
    title: "Design-Build Services",
    icon: <DraftingCompass className="w-12 h-12 text-brand-bright" />,
    description:
      "Integrated architecture and construction solutions from concept to completion.",
  },
  {
    title: "Environmental Remediation",
    icon: <Leaf className="w-12 h-12 text-brand-bright" />,
    description:
      "Sustainable construction and contamination control for a greener future.",
  },
];

/**
 * Services Page Component
 *
 * Displays the company's construction services in a visually appealing layout.
 * Features include:
 * - Hero section with page title
 * - Services grid with animated cards using Framer Motion
 * - Expandable detailed sections for each service
 * - Responsive design for various screen sizes
 *
 * The page is structured in two main sections:
 * 1. A grid of service cards showing a summary of each service
 * 2. Expandable detailed sections with comprehensive information about each service
 *
 * @returns {JSX.Element} The rendered Services page
 */
const page = () => {
  /**
   * Animation variants for service cards
   * Defines the initial hidden state and visible state for smooth animations
   *
   * @type {Object}
   */
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section - Page Title and Introduction */}
      <HeroSection
        heading="Your Trusted Partner in Property Compliance, Safety,and Management"
        text="At PBS, we don’t just inspect-we protect. From permits to final sign-off, our values ensure your 
        project stays on time, on budget and above board"

      />

      {/* Services Grid Section */}
      <section className="relative bg-black text-[#E5E7EB] py-32 px-6 md:px-12 lg:px-24">
        {/* Semi-transparent Background Image */}
        <div className="absolute inset-0 bg-[url('/PBS%20Assets/better-assets/Bg/Post%202%20a.webp')] bg-cover bg-center opacity-[0.07]"></div>

        {/* Content Container */}
        <div className="relative container mx-auto px-4 sm:px-8 md:p-32 lg:p-16 xl:px-16">
          {/* Section Header with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h3 className="text-brand-bright font-semibold uppercase tracking-wide mb-2">
              Our Expertise
            </h3>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive Construction Services
            </h1>
            <p className="text-brand-midGray max-w-xl mx-auto">
              From concept to completion, we deliver end-to-end solutions across
              all construction sectors.
            </p>
          </motion.div>

          {/* Services Grid with Animated Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:pt-10">
            {/* Map through services array to create individual service cards */}
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                viewport={{ once: true, amount: 0.2 }} // Only animate once when 20% visible
                className="bg-[#1A1A1A] rounded-lg p-6 shadow-md border border-[#2d2d2d] hover:border-brand-bright transition-all duration-300 text-center flex flex-col justify-center items-center gap-8 sm:w-[80%] md:w-[85%] lg:w-[90%] mx-auto"
              >
                {/* Service Icon */}
                <div className="mb-4 text-2xl">{service.icon}</div>

                {/* Service Title and Description */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-brand-midGray">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expandable Detailed Sections Component */}
      <ExpandableSections />
    </div>
  );
};

export default page;
