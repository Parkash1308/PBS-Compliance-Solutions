"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { teamMembers, leadershipTeam, projectManagers, specialists } from "./data"; // Import data

const page = () => {
  return (
    <div className="bg-[#38403e] text-[#dec2e1] min-h-screen">
      <HeroSection
        heading="Our Team"
        text="Meet the professionals driving our success."
      />
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto">
          <motion.div
            className="text-center my-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
          >
            <h3 className="text-brand-bright font-semibold uppercase tracking-widest mb-2">
              Our Expertise
            </h3>
            <h1 className="text-5xl md:text-7xl font-gnuolane text-white md:w-1/2 mx-auto">
              Meet Our Team
            </h1>
            <p className="text-brand-midGray mt-4">
              Dedicated professionals committed to excellence.
            </p>
          </motion.div>

          {/* Leadership Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] rounded-xl shadow-lg p-6 border border-[#2d545e] transition-transform hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-brand-midGray mb-2">{member.title}</p>
                  <p className="text-sm text-brand-midGray">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project Managers Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">
              Project Managers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectManagers.map((manager, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] rounded-xl shadow-lg p-6 border border-[#2d545e] transition-transform hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{manager.name}</h3>
                  <p className="text-brand-midGray">{manager.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Specialists Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">
              Specialists
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-brand-midGray">
              {specialists.map((specialist, index) => (
                <motion.li
                  key={index}
                  className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2d545e] transition-transform hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <strong className="text-white">{specialist.name}</strong> - {specialist.title}
                  {specialist.description && <p className="text-sm mt-1">{specialist.description}</p>}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;