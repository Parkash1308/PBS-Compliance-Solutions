"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type"; // Alternative to GSAP's SplitText

/**
 * HeroSection Component
 *
 * A visually striking hero section with animated text reveal and background image.
 * Features include:
 * - Character-by-character text reveal animation using GSAP and SplitType
 * - Lazy-loaded background image with fade-in effect
 * - Responsive design that adapts to different screen sizes
 * - Customizable heading, text, and optional button
 * - Configurable animation timing with stagger value
 *
 * The component creates a full-width section with a semi-transparent background image
 * and animated content centered in the viewport.
 *
 * @param {Object} props - Component props
 * @param {string} props.heading - The main heading text to display
 * @param {string} [props.text] - Optional subtext to display below the heading
 * @param {React.ReactNode} [props.button] - Optional button or call-to-action element
 * @param {string} [props.img] - Custom background image URL (defaults to city building image)
 * @param {number} [props.staggerVal=0.15] - Controls the timing between each character animation (in seconds)
 * @returns {JSX.Element} The rendered hero section component
 */
const HeroSection = ({ heading, text, button, img, staggerVal = 0.15, className }) => {
  /**
   * State to store the background image URL after it has been loaded
   * @type {[string, React.Dispatch<React.SetStateAction<string>>]}
   */
  const [bgImage, setBgImage] = useState("");

  /**
   * Reference to the heading text element for GSAP animations
   * @type {React.RefObject}
   */
  const textRef = useRef(null);

  /**
   * Effect hook to lazy-load the background image
   * Creates a new Image object, sets the source, and updates state once loaded
   */
  useEffect(() => {
    // Lazy load background image
    const image = new Image();
    image.src = img || "/PBS%20Assets/Brand%20Language/city-building.jpg";
    image.onload = () => {
      setBgImage(image.src);
    };
  }, [img]);

  /**
   * Effect hook to set up the character-by-character text reveal animation
   * Uses SplitType to split the heading text into individual characters,
   * then animates them using GSAP with a clip-path reveal effect
   */
  useEffect(() => {
    if (textRef.current) {
      // Split text into individual characters for animation
      const text = new SplitType(textRef.current, { types: "chars" });

      // Animate characters with a right-to-left reveal effect
      gsap.fromTo(
        text.chars.reverse(), // Reverse to reveal from last to first
        { clipPath: "inset(0 0 0 100%)" }, // Hidden state (clipped from right)
        {
          clipPath: "inset(0 0 0 0%)", // Revealed state (no clipping)
          duration: 0.1, // Duration of each character animation
          stagger: staggerVal, // Delay between each character animation
          ease: "power2.out", // Easing function for smooth animation
        }
      );
    }
  }, [staggerVal]); // Re-run if stagger value changes

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden text-center">
      {/* Background Image with Lazy Loading and Fade-in Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bgImage ? 0.2 : 0 }} // Fade to 20% opacity when loaded
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage || "/PBS%20Assets/Brand%20Language/placeholder.jpg"
            })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true" // Hide from screen readers as it's decorative
      ></motion.div>

      {/* Content Container with Slide-up Animation */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center justify-center py-16 md:w-[75vw] container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Heading Container with Staggered Children Animations */}
        <motion.div
          className="flex items-center justify-center flex-col"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, duration: 1 },
            },
          }}
        >
          <motion.div
            className="flex h-full items-center justify-center"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* Vertical Accent Bar (commented out in original code)
            <motion.div
              className="h-[60px] bg-green-600 text-green-600 flex flex-col justify-end items-end"
              initial={{ x: 400, height: 0 }}
              animate={{ x: 0, height: 60 }}
              transition={{
                height: { duration: 0.5, ease: "easeInOut" },
                x: { duration: 0.5, ease: "easeInOut", delay: 0.6 },
              }}
            >
              <p>&nbsp;&nbsp;&nbsp;</p>
            </motion.div> */}

            {/* Text Content */}
            <div className="text-center">
              {/* Main Heading with Character Animation */}
              <motion.h1
                className={className}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: 0.6 }}
                ref={textRef} // Reference for GSAP text splitting animation
              >
                {heading}
              </motion.h1>

              {/* Subtext (commented out in original code) */}
              <motion.p
                className="font-gnuolane text-brand-green3 text-lg md:text-xl tracking-widest mb-3 sm:w-[70vw] md:w-2/3"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {text}
              </motion.p>

              {/* Render button if provided */}
              {button && button}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
