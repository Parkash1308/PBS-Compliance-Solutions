"use client";

import CustomImage from "@/app/CustomImage";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import React from "react";
import { coreValues, features } from "./data";

const page = () => {
  const colors = {
    background: "#2d2d2d",
    cardBg: "#3a3a3a",
    textPrimary: "#f3f4f6",
    textSecondary: "#d1d5db",
    accent: "#2d8b6f",
    border: "#6b5f54",
  };

  return (
    <div>
      <HeroSection
        heading="Building Compliance, Trust, and results in the heart of new york"
        text="At PBS, we don’t just inspect-we protect. From permits to final sign-off, our values ensure your 
        project stays on time, on budget and above board."
        className="text-4xl md:text-2xl font-conthrax font-bold"
      />

      {/* Fixed Section 1: Moved title outside the motion div */}
      <section className="bg-[#2d2d2d] py-8 px-6 md:px-12 lg:px-24">
        <div className="my-16 md:my-10 container mx-auto">
          {/* Moved title section here and fixed spacing */}
          <div className="text-center my-2 xl:mb-8 py-2 mb-16">
            <h3 className="text-[#2d8b6f] text-lg font-gnuolane uppercase tracking-widest mt-2">
              The PBS Promise: Six Pillars of Excellence
            </h3>
            <h1 className="text-4xl md:text-5xl font-conthrax w-3/4 mx-auto text-[#f3f4f6]">
              Principles we hold are Built on Integrity, Driven by Excellence
            </h1>
          </div>

          {/* Main content container */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Image Container - Now appears right after title */}
            <motion.div
              className="relative w-full flex justify-center items-center mt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* <CustomImage
                src="/PBS%20Assets/Brand%20Language/front-view-modern-skyscrapers-office-buildings-removebg-preview.png"
                alt="Pets"
                width={100}
                height={100}
                className="w-3/4 md:w-1/2 xl:w-1/3 object-cover rounded-lg shadow-lg "
              /> */}
              {/* <div className="absolute -top-3 -left-3 w-7 h-7 bg-[#2d8b6f] rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-[#2d8b6f] rounded-full"></div> */}
            </motion.div>
            {/* Dynamic grid section */}
            <motion.div
              className="grid grid-cols-1 gap-8 w-full md:gap-12 mx-auto lg:grid-cols-2 xl:gap-x-8 2xl:gap-x-12 2xl:gap-y-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
              viewport={{ once: true }}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className="bg-[#3a3a3a] p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#6b5f54]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold text-[#f3f4f6] mb-3 text-center">
                    {feature.title} <br />
                    <span className="text-lg font-normal text-yellow-400">
                      {feature.tagline}
                    </span>
                  </h2>

                  {/* Render descriptions as bullet points */}
                  <ul className="list-disc list-inside text-[#d1d5db] text-base">
                    {feature.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <motion.section
        className="bg-[#101010] py-32 px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl text-brand-bright font-semibold uppercase tracking-wide mb-2">
            Why These Pillars Matter
          </h1>
          <h3 className="text-4xl md:text-3xl font-bold text-white">
            In NYC’s Construction Landscape, Delays Cost $12k/Day. Missteps Risk Reputations.
          </h3>
        </motion.div>

        {/* Responsive grid for core values */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A1A] p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-bright"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="mb-6">{value.icon}</div>
              <h2 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h2>
              <p className="text-sm text-[#9CA3AF] px-4">{<ul className="list-disc list-inside text-[#d1d5db] text-base">{
                value.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }</ul>}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default page;