"use client";

import CustomImage from "@/app/CustomImage";
import CTA from "@/components/CTA";
import { useMenu } from "@/context/MenuContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Hero Component
 *
 * A visually striking hero section for the homepage with animated elements.
 * Features include:
 * - Animated skyscraper image that rises from the bottom
 * - Semi-transparent background image that responds to menu state
 * - Responsive layout that adapts to different screen sizes
 * - Animated heading with fade-in and slide effect
 * - Animated text block with sequential border and content reveal
 * - Integration with MenuContext to respond to menu open/close state
 *
 * The component creates a full-height section with layered images and
 * animated content positioned on the left side of the viewport.
 *
 * @returns {JSX.Element} The rendered Hero component
 */
const Hero = () => {
  /**
   * Access menu state from context
   * Used to adjust animations when the menu is open
   * @type {Object}
   * @property {boolean} isOpen - Whether the mobile menu is open
   */
  const { isOpen } = useMenu();
  // console.log("🚀 ~ Hero ~ isOpen:", isOpen);

  /**
   * State to track if the viewport is a small screen (mobile)
   * Used for responsive adjustments
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  /**
   * Effect hook to detect and respond to screen size changes
   * Sets isSmallScreen state based on window width
   */
  useEffect(() => {
    /**
     * Updates the isSmallScreen state based on current window width
     * Uses 768px as the breakpoint (Tailwind's md breakpoint)
     */
    setInitialRender(false);
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative bg-[#141414]">
      <div className="mx-auto container overflow-hidden h-screen relative">
        {/* Right-side skyscraper image with rise-up animation */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, y: 1000, scale: 0.95, x: 0 }} // Start from below viewport
          animate={{
            opacity: 1,
            y: [1000, -20, 0], // Rise up with slight overshoot
            scale: [0.95, 1.2, 1], // Scale up then settle
            x: isSmallScreen && isOpen ? -50 : 50, // Shift right when menu is open
          }}
          transition={{
            duration: initialRender ? 1.2 : 0.5, // Animation takes 1.2 seconds
            ease: "easeOut", // Easing function for smooth deceleration
            delay: initialRender ? 0.5 : 0, // Wait 0.5 seconds before starting
          }}
          aria-hidden="true" // Hide from screen readers as it's decorative
        >
          <Image
            src="/PBS%20Assets/Brand%20Language/front-view-modern-skyscrapers-office-buildings-removebg-preview.png"
            alt="Modern skyscrapers"
            className="w-full h-full object-contain"
            width={100}
            height={100}
            unoptimized
            loading="lazy"
          />
        </motion.div>

        {/* Left-side background image with menu-responsive animation */}
        <motion.div
          className="absolute inset-0 w-full h-full opacity-[.1]"
          initial={{ opacity: 0, x: 0, scale: 0.75 }} // Start invisible and smaller
          animate={{
            opacity: 0.1, // Fade to 10% opacity
            x: 0, // Shift right when menu is open
            scale: 1, // Scale to full size
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          aria-hidden="true" // Hide from screen readers as it's decorative
        >
          <CustomImage
            src="/PBS%20Assets/Brand%20Language/glass-u-shaped-structure-with-blue-sky.jpg"
            alt="Glass U-shaped structure"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            loading="lazy"
          />
        </motion.div>

        {/* Content Layer - Positioned on left side */}
        <motion.div
          className="relative flex flex-col justify-center h-screen p-7 sm:w-4/5 md:w-2/3 lg:w-2/3 xl:w-1/2"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }} // Stagger child animations
        >
          {/* Main Heading with slide-in animation */}
          <motion.h1
            className="text-4xl lg:text-5xl/[1.25] mb-10 font-conthrax font-semibold text-brand-light"
            initial={{ opacity: 0, x: -50 }} // Start invisible and offset left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to position
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.5, // Start after background animations begin
            }}
          >
            Ensuring Compliance, Excellence and Peace of mind in New York
            Construction
          </motion.h1>

          {/* Text Block with Border Animation */}
          <motion.div className="relative inline-block overflow-hidden">
            {/* Animated Vertical Border - Grows from top to bottom */}
            <motion.div
              className="absolute top-0"
              style={{ width: "5px", backgroundColor: "#16A34A" }}
              initial={{ height: 0 }} // Start with no height
              animate={{ height: [0, "25%", "75%", "100%"] }} // Grow in stages
              transition={{
                duration: 1,
                times: [0, 0.3, 0.6, 1], // Control timing of each stage
                delay: 0.6, // Start after heading animation
              }}
              aria-hidden="true" // Hide from screen readers as it's decorative
            />

            {/* Animated Text - Fades in and slides from right */}
            <motion.p
              className="text-md font-poppins text-brand-light pl-5"
              initial={{ opacity: 0, x: 100 }} // Start invisible and offset right
              animate={{
                opacity: [0, 0.25, 0.75, 1], // Fade in gradually
                x: [100, 75, 25, 0], // Slide in from right in stages
              }}
              transition={{
                duration: 1,
                times: [0, 0.3, 0.6, 1], // Control timing of each stage
              }}
            >
              Your Trusted Partner for Construction{" "}
              <span className="text-brand-white">Compliance inspections,</span>
              <br />
              Expediting and{" "}
              <span className="text-brand-white">Property Solutions</span>.
            </motion.p>



          </motion.div>
          <motion.p
            className="text-md font-poppins text-brand-light pl-5 mt-2"
            initial={{ opacity: 0, x: 100 }} // Start invisible and offset right
            animate={{
              opacity: [0, 0.25, 0.75, 1], // Fade in gradually
              x: [100, 75, 25, 0], // Slide in from right in stages
            }}
            transition={{
              duration: 1,
              times: [0, 0.3, 0.6, 1], // Control timing of each stage
            }}
          >
            More than 100 Years Combined Experience in the industry.
          </motion.p>
          <CTA text="Schedule your Consultation Today" href="/contacts" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
