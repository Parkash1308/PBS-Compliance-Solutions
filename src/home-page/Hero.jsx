"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CTA from "@/components/CTA";

const PageContent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/PBS%20Assets/Brand%20Language/bg.png"
        alt="Background"
        fill
        className="object-cover"
        quality={100}
        loading="lazy"
      />

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-[#38403e]/40 z-10" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-3">
        {/* Left Side: Building Image and Circles */}
        <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
          {/* Building Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <Image
              src="/PBS%20Assets/Brand%20Language/front-view-modern-skyscrapers-office-buildings-removebg-preview.png"
              alt="Building"
              className="w-full h-auto max-h-[60vh] lg:max-h-[80vh] object-contain"
              width={500}
              height={500}
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Right Side: Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-white text-center lg:text-left pt-10 lg:pt-0"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-3xl font-conthrax font-semibold mb-4 md:mb-6 leading-tight" // Added leading-tight
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            Ensuring Compliance, Excellence and Peace of Mind in New York Construction
          </motion.h1>

          <motion.p
            className="text-base md:text-lg font-poppins mb-4 md:mb-6 leading-relaxed" // Added leading-relaxed
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          >
            Your Trusted Partner for Construction Compliance Inspections, Expediting and Property Solutions
          </motion.p>

          <div className="w-16 h-1 bg-[#7af8c4] mx-auto lg:mx-0 mb-2" />

          <motion.p
            className="text-sm md:text-md font-poppins mb-2 md:mb-2 leading-relaxed" // Added leading-relaxed
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          >
            More than 100 Years Combined Experience in the industry.
          </motion.p>

          <div className="flex justify-center lg:justify-start">
            <CTA text="Schedule your Consultation Today" href="/contacts" styling="bg-[#7af8c4] hover:bg-[#38403e]/80 text-[black]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageContent;