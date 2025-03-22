"use client";

import CustomImage from "@/app/CustomImage";
import { useMenu } from "@/context/MenuContext";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * Header Component
 *
 * A sticky navigation header that shrinks on scroll using GSAP animations.
 * Features include:
 * - Sticky positioning at the top of the viewport
 * - Smooth height animation when scrolling
 * - Logo that scales down on scroll
 * - Integration with the MenuContext for mobile menu state
 * - Navigation handling with Next.js router
 *
 * The component uses GSAP's ScrollTrigger to create scroll-based animations
 * for a more interactive user experience.
 *
 * @returns {JSX.Element} The rendered Header component
 */
const Header = () => {
  /**
   * Access menu state from context
   * @type {Object}
   * @property {boolean} isOpen - Whether the mobile menu is open
   * @property {Function} setIsOpen - Function to update the menu open state
   */
  const { isOpen, setIsOpen } = useMenu();

  /**
   * Next.js router for navigation
   */
  const router = useRouter();

  /**
   * Reference to the header container element for GSAP animations
   * @type {React.RefObject}
   */
  const ref = useRef(null);

  /**
   * Reference to the logo image container for GSAP animations
   * @type {React.RefObject}
   */
  const imageRef = useRef(null);

  /**
   * Set up GSAP animations for header shrinking effect on scroll
   *
   * Two animations are created:
   * 1. Header height reduction from 100px to 80px
   * 2. Logo scaling down to 70% of original size
   *
   * Both animations are triggered by scrolling and use the same ScrollTrigger
   * configuration for synchronized animation.
   */
  useEffect(() => {
    // Guard clause to ensure refs are available
    if (!ref.current || !imageRef.current) return;

    // Animation for header height
    gsap.to(ref.current, {
      height: "80px", // Shrinks header height
      scrollTrigger: {
        trigger: ref.current,
        start: "top top", // Starts when the top of the header reaches the top of the viewport
        end: "+=200", // Ends after scrolling 200px
        scrub: true, // Smooth animation that follows scroll position
      },
    });

    // Animation for logo scaling
    gsap.to(imageRef.current, {
      scale: 0.7, // Shrinks image to 70% of original size
      scrollTrigger: {
        trigger: ref.current,
        start: "top top", // Starts when the top of the header reaches the top of the viewport
        end: "+=200", // Ends after scrolling 200px
        scrub: true, // Smooth animation that follows scroll position
      },
    });
  }, []);

  return (
    <div className="sticky top-0 right-0 z-50 w-full">
      {/* Header Container with GSAP Animation */}
      <motion.div
        ref={ref}
        className="bg-brand-gray1 flex flex-row justify-between items-center w-full h-[100px] sticky top-0"
        initial={{ height: "100px" }}
      >
        {/* Logo Container with Click Navigation */}
        <div
          className="cursor-pointer p-4 pl-0 "
          onClick={() => {
            setIsOpen(false); // Close mobile menu if open
            router.push("/"); // Navigate to home page
          }}
        >
          {/* Animated Logo Container */}
          <motion.div ref={imageRef} initial={{ scale: 1 }}>
            <CustomImage
              src="/PBS Assets/Brand Language/Steel Mockup.png"
              width={250}
              height={250}
              alt="Website Logo"
              className="md:w-[250] md:h-auto relative left-[-50px] md:left-0"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Responsive Menu Component */}
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
