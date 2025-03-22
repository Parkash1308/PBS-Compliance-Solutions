"use client"; // Marks this as a client-side component in Next.js

/**
 * @file DOB Service Updates Page Component
 * @description Displays NYC Department of Buildings service updates organized by year and month
 * @requires react - For component functionality
 * @requires framer-motion - For animations
 * @requires lucide-react - For icon components
 * @requires @/components/ui/accordion - For collapsible content sections
 * @requires @/components/ui/badge - For count indicators
 * @requires @/components/HeroSection - For page header
 * @requires ../data - For service updates data
 */

import HeroSection from "@/components/HeroSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { serviceUpdates } from "../data";

/**
 * DOB Service Updates Page Component
 * Renders a hierarchical display of DOB service updates organized by year and month
 * with animated transitions and collapsible sections
 * @returns {JSX.Element} The rendered DOB Service Updates page
 */
const page = () => {
  return (
    <div>
      {/* Hero section with title and introductory text */}
      <HeroSection
        heading="DOB Service Updates"
        text="Here are the DOB service Updates"
        staggerVal={0.1} // Controls staggered animation timing in the hero section
      />

      {/* Main content section with dark background and responsive padding */}
      <div className="bg-[#101010] py-32 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto sm:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[70%] 2xl:w-[80%]">
          {/* Section Heading with fade-in and slide-up animation */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} // Initial invisible state, positioned below final position
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
            viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
            transition={{ duration: 0.5 }} // Animation duration
          >
            <h1 className="text-5xl md:text-6xl font-gnuolane text-white mb-4">
              Service Updates & Notices
            </h1>
            <p className="text-[#9ca3af] text-lg">
              Important updates from the NYC Department of Buildings
            </p>
          </motion.div>

          {/* Container for updates with staggered child animations */}
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            initial="hidden" // Initial state for parent container
            whileInView="visible" // Visible state when in viewport
            viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
            variants={{
              hidden: {}, // Empty object as we're only animating children
              visible: {
                transition: { staggerChildren: 0.2 }, // Stagger children animations by 0.2 seconds
              },
            }}
          >
            {/* Map through years of service updates */}
            {serviceUpdates.map((yearUpdate, index) => (
              <motion.div
                key={yearUpdate.year}
                className="border border-gray-800 rounded-lg"
                initial={{ opacity: 0, y: 40 }} // Initial invisible state, positioned below final position
                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
                transition={{ duration: 0.5, delay: index * 0.2 }} // Animation with delay based on index
              >
                {/* Accordion for collapsible year sections */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value={yearUpdate.year.toString()}
                    className="border-b-0"
                  >
                    {/* Year header with count badge */}
                    <AccordionTrigger className="hover:bg-gray-900 px-6 py-4 rounded-t-lg">
                      <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-semibold text-brand-bright">
                          {yearUpdate.year}
                        </h2>
                        {/* Badge showing total number of updates for the year */}
                        <Badge
                          variant="outline"
                          className="text-gray-300 border-gray-700"
                        >
                          {yearUpdate.updates.flatMap((u) => u.notices).length}{" "}
                          updates
                        </Badge>
                      </div>
                    </AccordionTrigger>

                    {/* Expandable content for each year */}
                    <AccordionContent className="p-8">
                      <motion.div
                        className="space-y-6 px-6 py-4"
                        initial={{ opacity: 0 }} // Initial invisible state
                        whileInView={{ opacity: 1 }} // Animate to full opacity when in view
                        transition={{ duration: 0.5 }} // Animation duration
                      >
                        {/* Map through months within each year */}
                        {yearUpdate.updates.map((monthUpdate) => (
                          <motion.div
                            key={`${yearUpdate.year}-${monthUpdate.month}`}
                            className="border-l-2 border-gray-800 pl-4" // Left border creates timeline effect
                            initial={{ opacity: 0, x: -20 }} // Initial invisible state, positioned left of final position
                            whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and final position when in view
                            transition={{ duration: 0.5 }} // Animation duration
                          >
                            {/* Month header with notice count */}
                            <div className="flex items-center gap-3 mb-4 p-4">
                              <h3 className="text-xl font-semibold text-gray-200">
                                {monthUpdate.month}
                              </h3>
                              <span className="text-gray-500 text-sm">
                                {monthUpdate.notices.length} notices
                              </span>
                            </div>

                            {/* Container for individual notices */}
                            <div className="space-y-4">
                              {/* Map through individual notices within each month */}
                              {monthUpdate.notices.map((notice, idx) => (
                                <motion.div
                                  key={`${yearUpdate.year}-${monthUpdate.month}-${idx}`}
                                  className="group bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors"
                                  initial={{ opacity: 0, y: 20 }} // Initial invisible state, positioned below final position
                                  whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
                                  transition={{
                                    duration: 0.5,
                                    delay: idx * 0.1, // Staggered delay based on notice index
                                  }}
                                >
                                  {/* Notice link - Opens in new tab */}
                                  <a
                                    href={notice.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block space-y-2"
                                  >
                                    <div className="flex items-start justify-between">
                                      {/* Notice title with hover effect */}
                                      <h4 className="text-lg font-medium text-gray-100 group-hover:text-brand-light transition-colors">
                                        {notice.title}
                                      </h4>
                                      {/* Arrow icon indicating external link */}
                                      <ChevronDown className="h-5 w-5 text-gray-500 transform -rotate-90" />
                                    </div>
                                    {/* Notice description */}
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                      {notice.description}
                                    </p>
                                  </a>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default page;
