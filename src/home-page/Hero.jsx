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
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto h-full flex items-center justify-between px-6 lg:px-3">
        {/* Left Side: Building Image and Circles */}
        <div className="w-full lg:w-1/3 relative">
          {/* Green Circle */}
          <motion.div
            className="absolute top-1/6 left-1/5 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#A9CED1] rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />

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
              className="w-full h-auto max-h-[90vh] object-contain"
              width={500}
              height={500}
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Right Side: Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-white"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-2xl/[1.2] font-conthrax font-semibold mb-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            Ensuring Compliance, Excellence and Peace of Mind in New York Construction
          </motion.h1>

          <div className="w-16 h-1 bg-[#A9CED1] mb-4" />

          <motion.p
            className="text-lg md:text-xl font-poppins mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          >
            Your Trusted Partner for Construction Compliance Inspections, Expediting and Property Solutions
          </motion.p>

          <div className="w-16 h-1 bg-[#A9CED1] mb-6" />

          <motion.p
            className="text-md font-poppins mb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          >
            More than 100 Years Combined Experience in the industry.
          </motion.p>

          <CTA text="Schedule your Consultation Today" href="/contacts" />
        </motion.div>
      </div>
    </div>
  );
};

export default PageContent;