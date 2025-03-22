"use client";

import { motion } from "framer-motion";

/**
 * SplashScreen Component
 *
 * A fullscreen loading/intro screen that displays when the application first loads.
 * Features include:
 * - Fixed positioning that covers the entire viewport
 * - Animated logo with pulsing effect using Framer Motion
 * - Animated tagline with fade-in and slide-up effect
 * - Responsive design that adapts to different screen sizes
 * - High z-index to ensure it appears above all other content
 *
 * This component is typically shown briefly when the application initializes
 * to provide visual feedback while resources are loading and to reinforce
 * brand identity.
 *
 * @returns {JSX.Element} The rendered SplashScreen component
 */
const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#171717] flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Logo with Pulsing Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }} // Start small and invisible
          animate={{
            scale: [1, 1.2, 1], // Pulse between normal size and 20% larger
            opacity: 1, // Fade in to full opacity
          }}
          transition={{
            duration: 2, // Complete one pulse cycle in 2 seconds
            repeat: Infinity, // Continue pulsing indefinitely
            repeatType: "reverse", // Smoothly reverse the animation
          }}
          className="text-brand-bright text-6xl md:text-8xl font-bold"
          aria-label="Company logo" // Accessibility label
        >
          LOGO
        </motion.div>

        {/* Tagline with Fade-in and Slide-up Animation */}
        <motion.p
          initial={{ y: 20, opacity: 0 }} // Start below final position and invisible
          animate={{ y: 0, opacity: 1 }} // Move up to final position and fade in
          transition={{
            delay: 0.5, // Start after logo animation begins
            duration: 1, // Complete in 1 second
          }}
          className="text-brand-midGray text-lg md:text-xl mt-4"
        >
          Building the Future, One Project at a Time
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
