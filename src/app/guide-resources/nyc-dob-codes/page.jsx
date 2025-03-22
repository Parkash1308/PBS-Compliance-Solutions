"use client"; // Marks this as a client-side component in Next.js

/**
 * @file NYC DOB Codes Page Component
 * @description Displays a searchable, paginated table of NYC Department of Buildings codes and regulations
 * with links to official documentation
 * @requires react - For component functionality and hooks
 * @requires framer-motion - For UI animations
 * @requires lucide-react - For icon components
 * @requires @/components/HeroSection - For page header
 * @requires @/components/ui/pagination - For table pagination controls
 * @requires @/components/ui/table - For structured data display
 * @requires ../data - For DOB codes data
 */

import HeroSection from "@/components/HeroSection";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { dob } from "../data";

/**
 * Create a motion-enabled version of the TableRow component
 * This preserves the table structure while allowing row animations
 * @type {React.ComponentType}
 */
const MotionTableRow = motion(TableRow);

/**
 * Number of items to display per page in the table
 * @type {number}
 */
const ITEMS_PER_PAGE = 10;

/**
 * NYC DOB Codes Page Component
 * Renders a searchable, paginated table of NYC Department of Buildings codes
 * with animated UI elements and external links to official documentation
 * @returns {JSX.Element} The rendered NYC DOB Codes page
 */
const page = () => {
  /**
   * State for current page in pagination
   * @type {[number, Function]} Current page number and setter function
   */
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * State for search input value
   * @type {[string, Function]} Search term and setter function
   */
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * State for filtered data based on search term
   * @type {[Array, Function]} Filtered data array and setter function
   */
  const [filteredData, setFilteredData] = useState(dob);

  /**
   * Effect to filter data when search term changes
   * Filters across all properties of each item and resets to first page
   */
  useEffect(() => {
    const filtered = dob.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchTerm]);

  /**
   * Calculate pagination values
   * @type {number} Total number of pages based on filtered data
   */
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  /**
   * Get current page data slice
   * @type {Array} Sliced array of data for current page
   */
  const currentData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /**
   * Handles pagination navigation
   * @param {number} newPage - The page number to navigate to
   * @returns {void}
   */
  const handlePaginationClick = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {/* Hero section with title and introductory text */}
      <HeroSection
        heading="NYC DOB Codes"
        text="Learn about the codes and regulations in New York City."
        staggerVal={0.1} // Controls staggered animation timing in the hero section
      />

      {/* Main content section with dark background and responsive padding */}
      <div className="bg-[#101010] py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Header Section - Title and description with fade-in and slide-up animation */}
          <motion.div
            className="text-center my-12 md:w-[70%] mx-auto"
            initial={{ opacity: 0, y: 20 }} // Initial invisible state, positioned below final position
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
            viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
            transition={{ duration: 0.6 }} // Animation duration
          >
            <h3 className="text-brand-bright font-semibold uppercase tracking-widest mb-2">
              About
            </h3>
            <h1 className="text-5xl md:text-7xl font-gnuolane text-white md:w-1/2 mx-auto">
              NYC DOB Codes
            </h1>
            <p className="text-brand-midGray mt-4">
              Learn about the codes and regulations in New York City.
            </p>
          </motion.div>

          {/* Main content container with responsive width */}
          <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:w-[90%] md:w-[70%] lg:w-[90%]">
            {/* Animated Search Bar - Slides in from right */}
            <motion.div
              className="mb-6 flex justify-end"
              initial={{ opacity: 0, x: 20 }} // Initial invisible state, positioned right of final position
              whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and final position when in view
              viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
              transition={{ duration: 0.5 }} // Animation duration
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-bright w-full md:w-64"
              />
            </motion.div>

            {/* Animated Table Container - Fades in */}
            <motion.div
              className="mt-8 flow-root"
              initial={{ opacity: 0 }} // Initial invisible state
              whileInView={{ opacity: 1 }} // Animate to full opacity when in view
              viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
              transition={{ duration: 0.6 }} // Animation duration
            >
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="rounded-lg border border-gray-800 dark:border-gray-800 overflow-hidden">
                    {/* Table of DOB Codes - Structured display of code information */}
                    <Table className="dark min-w-full divide-y divide-gray-800 dark:divide-gray-800">
                      {/* Table Header - Column titles */}
                      <TableHeader className="bg-gray-900 dark:bg-gray-900">
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="text-gray-300 dark:text-gray-300 py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">
                            Chapter/Appendix
                          </TableHead>
                          <TableHead className="text-gray-300 dark:text-gray-300 px-3 py-3.5 text-left text-sm font-semibold hidden lg:table-cell">
                            Title
                          </TableHead>
                          <TableHead className="text-gray-300 dark:text-gray-300 px-3 py-3.5 text-left text-sm font-semibold hidden sm:table-cell">
                            Code Title
                          </TableHead>
                          <TableHead className="text-gray-300 dark:text-gray-300 px-3 py-3.5 text-left text-sm font-semibold">
                            Link
                          </TableHead>
                        </TableRow>
                      </TableHeader>

                      {/* Table Body - Rows of code data with staggered animations */}
                      <TableBody className="bg-gray-900 dark:bg-gray-900 divide-y divide-gray-800 dark:divide-gray-800">
                        {currentData.map((item, index) => (
                          <MotionTableRow
                            key={`${item.id}-${index}`}
                            className="hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors"
                            initial={{ opacity: 0, y: 10 }} // Initial invisible state, positioned below final position
                            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
                            viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
                            transition={{ duration: 0.4, delay: index * 0.1 }} // Animation with delay based on index for staggered effect
                          >
                            {/* Chapter/Appendix Cell */}
                            <TableCell className="text-gray-100 dark:text-gray-100 py-4 pl-4 pr-3 text-sm font-medium sm:pl-6">
                              {item.chapter_appendix}
                            </TableCell>
                            {/* Title Cell - Hidden on small screens */}
                            <TableCell className="text-gray-400 dark:text-gray-400 px-3 py-4 text-sm hidden lg:table-cell">
                              {item.title}
                            </TableCell>
                            {/* Code Title Cell - Hidden on extra small screens */}
                            <TableCell className="text-gray-400 dark:text-gray-400 px-3 py-4 text-sm hidden sm:table-cell">
                              {item.code_title}
                            </TableCell>
                            {/* Link Cell - External link to PDF document */}
                            <TableCell className="text-gray-400 dark:text-gray-400 px-3 py-4 text-sm">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-brand-bright hover:text-[#00cc6a] transition-colors"
                              >
                                <ExternalLink className="h-4 w-4 text-current" />
                                <span className="sr-only sm:not-sr-only">
                                  View PDF
                                </span>
                              </a>
                            </TableCell>
                          </MotionTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Animated Pagination Controls - Navigation between pages */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }} // Initial invisible state, positioned below final position
                    whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
                    viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
                    transition={{ duration: 0.5 }} // Animation duration
                    className="mt-16"
                  >
                    <Pagination className="mt-4 pb-4">
                      <PaginationContent className="flex-wrap justify-center text-gray-300 dark:text-gray-300">
                        {/* Previous Page Button */}
                        <PaginationItem className="">
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePaginationClick(
                                Math.max(1, currentPage - 1)
                              );
                            }}
                            aria-disabled={currentPage === 1}
                            className={`dark:hover:bg-gray-800 ${
                              currentPage === 1
                                ? "opacity-50 cursor-not-srallowed"
                                : ""
                            }`}
                          />
                        </PaginationItem>

                        {/* Page Number Buttons */}
                        {Array.from({ length: totalPages }, (_, i) => (
                          <PaginationItem key={i + 1} className="">
                            <PaginationLink
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handlePaginationClick(i + 1);
                              }}
                              isActive={currentPage === i + 1}
                              className={`dark:hover:bg-gray-800 ${
                                currentPage === i + 1
                                  ? "bg-brand-bright text-black hover:bg-[#00cc6a]"
                                  : ""
                              }`}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        {/* Next Page Button */}
                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePaginationClick(
                                Math.min(totalPages, currentPage + 1)
                              );
                            }}
                            aria-disabled={currentPage === totalPages}
                            className={`dark:hover:bg-gray-800 ${
                              currentPage === totalPages
                                ? "opacity-50 cursor-not-srallowed"
                                : ""
                            }`}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default page;
