"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * PageLoader Component
 *
 * A fullscreen loading spinner that appears during page transitions.
 * Features include:
 * - Route change detection using Next.js usePathname hook
 * - Animated entrance and exit using Framer Motion
 * - Spinning loader with custom styling
 * - Configurable display duration
 *
 * The component creates a fullscreen overlay with a centered spinning circle
 * that appears briefly when navigating between pages to provide visual feedback
 * to users during route transitions.
 *
 * @returns {JSX.Element} The rendered PageLoader component
 */
const PageLoader = () => {
  /**
   * Current route path from Next.js router
   * Used to detect navigation between pages
   * @type {string}
   */
  const pathname = usePathname();

  /**
   * State to control the visibility of the loader
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [loading, setLoading] = useState(false);

  /**
   * Effect hook to show the loader when the route changes
   *
   * When the pathname changes:
   * 1. Sets loading state to true to show the loader
   * 2. Creates a timeout to hide the loader after 500ms
   * 3. Returns a cleanup function to clear the timeout if the component unmounts
   *    or if another route change happens before the timeout completes
   */
  useEffect(() => {
    // Show the loader when route changes
    setLoading(true);

    // Simulate page load time with a timeout
    // In a real app, this could be connected to actual data loading events
    const timeout = setTimeout(() => setLoading(false), 500);

    // Cleanup function to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [pathname]); // Re-run effect when the route changes

  return (
    <AnimatePresence>
      {/* Only render the loader when loading state is true */}
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[#171717] z-50"
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          exit={{ opacity: 0 }} // Fade out when removed
          aria-live="polite" // Announce to screen readers
          aria-label="Page is loading"
        >
          {/* Spinning loader circle */}
          <motion.div
            className="h-12 w-12 border-4 border-[#22C55E] border-t-transparent rounded-full"
            animate={{ rotate: 360 }} // Continuous rotation animation
            transition={{
              repeat: Infinity, // Loop forever
              duration: 1, // One full rotation per second
              ease: "linear", // Constant rotation speed
            }}
            aria-hidden="true" // Hide from screen readers as it's decorative
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
