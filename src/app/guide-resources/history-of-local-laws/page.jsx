"use client"; // Marks this as a client-side component in Next.js

/**
 * @file NYC Legislative History Page Component
 * @description Displays the history of NYC local laws with an interactive timeline, legislative process steps,
 * and foundational documents in a visually engaging format with animations
 * @requires react - For component functionality
 * @requires framer-motion - For scroll-based animations and transitions
 * @requires @/components/HeroSection - For page header
 * @requires @/components/ui/badge - For era labels
 * @requires ../data - For history content data
 */

import HeroSection from "@/components/HeroSection";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { historyContent } from "../data";

/**
 * NYC Legislative History Page Component
 * Renders a comprehensive view of NYC's legislative history with animated timeline,
 * process steps, and foundational documents
 * @returns {JSX.Element} The rendered NYC Legislative History page
 */
const page = () => {
  return (
    <div className="bg-[#101010]">
      {/* Hero section with title and introductory text */}
      <HeroSection
        heading="NYC Legislative History"
        text="Tracing four centuries of municipal lawmaking from colonial ordinances to modern code"
        staggerVal={0.1} // Controls staggered animation timing in the hero section
      />

      {/* Main content section with dark background and responsive padding */}
      <div className="py-32 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto">
          {/* Header Section - Title and description with gradient text effect */}
          <motion.div
            className="text-center mb-16 md:w-[70%] mx-auto"
            initial={{ opacity: 0, y: 30 }} // Initial invisible state, positioned below final position
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
            viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
            transition={{ duration: 0.6 }} // Animation duration
          >
            <h1 className="text-5xl md:text-6xl font-gnuolane text-white mb-4 bg-gradient-to-r from-brand-bright to-emerald-400 bg-clip-text text-transparent">
              NYC Legislative History
            </h1>
            <p className="text-brand-midGray text-lg max-w-2xl mx-auto">
              Tracing four centuries of municipal lawmaking from colonial
              ordinances to modern code
            </p>
          </motion.div>

          <div className="container mx-auto sm:w-[80%] lg:w-[95%]">
            {/* Timeline Section - Vertical timeline with alternating content */}
            <motion.div
              className="relative max-w-4xl mx-auto mb-20"
              initial={{ opacity: 0 }} // Initial invisible state
              whileInView={{ opacity: 1 }} // Animate to full opacity when in view
              viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
              transition={{ duration: 0.6 }} // Animation duration
            >
              {/* Vertical Line - Creates the timeline backbone */}
              <div className="absolute left-4 xl:left-1/2 h-full w-0.5 bg-[#1f1f1f] -z-10" />

              {/* Map through timeline eras to create timeline entries */}
              {historyContent.timeline.map((era, index) => (
                <motion.div
                  key={era.era}
                  className="flex gap-8 mb-12 group"
                  initial={{ opacity: 0, y: 30 }} // Initial invisible state, positioned below final position
                  whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
                  viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
                  transition={{ duration: 0.5, delay: index * 0.2 }} // Animation with delay based on index for staggered effect
                >
                  {/* Left side content - Only visible on large screens for even-indexed items */}
                  <div className="hidden xl:block w-1/2 mt-4">
                    {index % 2 === 0 && <EraContent era={era} />}
                  </div>

                  {/* Timeline node - Contains era title, icon and badge */}
                  <div className="flex-1 relative">
                    <motion.div
                      className={`xl:absolute xl:w-96 ${
                        index % 2 === 0 ? "left-0 " : "right-0 pt-4"
                      } top-0 xl:translate-x-4`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} // Initial invisible state, positioned left/right based on index
                      whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and centered position when in view
                      viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
                      transition={{ duration: 0.5 }} // Animation duration
                    >
                      <div className="flex items-center gap-4 hover:bg-gray-900/50 transition-colors p-4 rounded-lg">
                        {/* Era icon with styled container */}
                        <div className="bg-[#1a1a1a] p-3 rounded-lg border border-brand-bright/20">
                          {era.icon}
                        </div>
                        <div>
                          {/* Era title */}
                          <h3 className="text-2xl text-brand-bright mb-2 font-semibold">
                            {era.title}
                          </h3>
                          {/* Era year range badge */}
                          <Badge
                            variant="outline"
                            className="border-brand-bright/30 text-brand-bright bg-brand-bright/10 hover:bg-brand-bright/20"
                          >
                            {era.era}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side content - Only visible on large screens for odd-indexed items */}
                  <div className="hidden xl:block w-1/2 mt-4">
                    {index % 2 !== 0 && <EraContent era={era} />}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Legislative Process Section - Grid of process steps */}
            <motion.div
              className="grid md:grid-cols-2 md:w-[80%] mx-auto lg:grid-cols-3 xl:w-[90%] xl:grid-cols-3 2xl:grid-cols-5 gap-6 mb-20"
              initial={{ opacity: 0, y: 30 }} // Initial invisible state, positioned below final position
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
              viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
              transition={{ duration: 0.5, staggerChildren: 0.1 }} // Animation with staggered children
            >
              {/* Map through process steps to create step cards */}
              {historyContent.process.map((step) => (
                <motion.div
                  key={step.step}
                  className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-brand-bright/30 transition-all group"
                  initial={{ opacity: 0, y: 20 }} // Initial invisible state, positioned below final position
                  whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
                  transition={{ duration: 0.5 }} // Animation duration
                  viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
                >
                  {/* Step number with leading zero */}
                  <div className="text-brand-bright text-2xl mb-4 font-mono">
                    0{step.step}
                  </div>
                  {/* Step title */}
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">
                    {step.title}
                  </h3>
                  {/* Step description */}
                  <p className="text-gray-400 text-sm mb-3">
                    {step.description}
                  </p>
                  {/* Step duration/timeline */}
                  <div className="text-xs text-brand-bright/70">
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Foundational Documents Section - Grid of document links */}
            <motion.div
              className="grid md:grid-cols-2 gap-6 lg:w-[80%] mx-auto"
              initial={{ opacity: 0, y: 30 }} // Initial invisible state, positioned below final position
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
              viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
              transition={{ duration: 0.5, staggerChildren: 0.1 }} // Animation with staggered children
            >
              {/* Map through documents to create document cards with links */}
              {historyContent.documents.map((doc) => (
                <motion.a
                  key={doc.title}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-brand-bright/50 transition-all group"
                  initial={{ opacity: 0, y: 20 }} // Initial invisible state, positioned below final position
                  whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and final position when in view
                  transition={{ duration: 0.5 }} // Animation duration
                  viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
                >
                  <div className="flex items-start gap-4">
                    {/* Document icon with styled container */}
                    <div className="bg-gray-900 p-3 rounded-lg text-brand-bright border border-brand-bright/20">
                      {doc.icon}
                    </div>
                    <div>
                      {/* Document title with hover effect */}
                      <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-brand-bright transition-colors">
                        {doc.title}
                      </h3>
                      {/* Document description */}
                      <p className="text-gray-400 text-sm">{doc.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

/**
 * EraContent Component
 * Renders detailed information about a specific legislative era including description,
 * milestones, key acts, laws, and sources
 *
 * @param {Object} props - Component props
 * @param {Object} props.era - Era data object containing content information
 * @param {Object} props.era.content - Content details for the era
 * @param {string} props.era.content.description - General description of the era
 * @param {Array<string>} [props.era.content.milestones] - Optional list of key milestones during the era
 * @param {Array<string>} [props.era.content.keyActs] - Optional list of key legislative acts
 * @param {Array<Object>} [props.era.content.laws] - Optional list of specific laws with name and description
 * @param {Array<string>} props.era.content.sources - List of reference sources
 * @returns {JSX.Element} The rendered era content
 */
const EraContent = ({ era }) => (
  <motion.div
    className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-brand-bright/30 transition-colors"
    initial={{ opacity: 0, x: -20 }} // Initial invisible state, positioned left of final position
    whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and final position when in view
    viewport={{ once: true, margin: "-100px" }} // Only animate once when scrolled into view
    transition={{ duration: 0.5 }} // Animation duration
  >
    {/* Era description */}
    <p className="text-gray-300 mb-4">{era.content.description}</p>

    {/* Milestones list with bullet points - Conditionally rendered */}
    {era.content.milestones && (
      <ul className="space-y-3">
        {era.content.milestones.map((milestone, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-400">
            {/* Green dot bullet point */}
            <div className="w-2 h-2 bg-brand-bright rounded-full mt-2 flex-shrink-0" />
            <span className="leading-relaxed">{milestone}</span>
          </li>
        ))}
      </ul>
    )}

    {/* Key Acts section - Conditionally rendered */}
    {era.content.keyActs && (
      <div className="space-y-3 mt-4">
        {era.content.keyActs.map((act, idx) => (
          <div
            key={idx}
            className="p-3 bg-gray-900 rounded-lg border border-gray-800"
          >
            <p className="text-sm text-gray-300">{act}</p>
          </div>
        ))}
      </div>
    )}

    {/* Laws section with left border accent - Conditionally rendered */}
    {era.content.laws && (
      <div className="space-y-4 mt-4">
        {era.content.laws.map((law, idx) => (
          <div key={idx} className="border-l-4 border-brand-bright pl-4">
            <h4 className="font-semibold text-gray-200">{law.name}</h4>
            <p className="text-sm text-gray-400 mt-1">{law.description}</p>
          </div>
        ))}
      </div>
    )}

    {/* Sources citation */}
    <div className="mt-4 text-xs text-brand-bright/70">
      Sources: {era.content.sources.join(", ")}
    </div>
  </motion.div>
);

export default page;
