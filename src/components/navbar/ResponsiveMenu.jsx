import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import HamburgerMenu from "./HamburgerMenu";
import VerticalMenu from "./VerticalMenu";

/**
 * AnimatedArrow Component
 *
 * A visual indicator that appears on the right side of the screen
 * to hint at the presence of a hidden menu. Features an infinitely
 * repeating horizontal animation to draw user attention.
 *
 * @returns {JSX.Element} The animated arrow component
 */
const AnimatedArrow = () => {
  return (
    <motion.div
      className="absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer pr-16"
      animate={{ x: [0, -10, 0] }} // Simple horizontal nudge animation
      transition={{
        repeat: Infinity, // Animation repeats forever
        duration: 1, // Each animation cycle takes 1 second
      }}
      aria-hidden="true" // Hide from screen readers as it's decorative
    >
      <ChevronLeft size={48} className="text-gray-400" />
    </motion.div>
  );
};

/**
 * RightSideMenu Component
 *
 * Creates a hover-sensitive area on the right side of the screen.
 * When hovered, it displays the VerticalMenu component; otherwise,
 * it shows the AnimatedArrow as a visual indicator.
 *
 * Features:
 * - Occupies 20% of the viewport width on the right side
 * - Shows/hides menu based on hover state
 * - Includes a delay when leaving to prevent accidental menu closure
 *
 * @returns {JSX.Element} The right side menu component
 */
const RightSideMenu = () => {
  /**
   * State to track whether the hover area is currently being hovered
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed top-0 right-0 h-full z-50"
      style={{ width: "20vw" }} // Right 20% of viewport width
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        // Add delay before hiding menu to prevent accidental closures
        // when the user briefly moves cursor outside the hover area
        setTimeout(() => setIsHovered(false), 500); // 500ms exit delay
      }}
      role="navigation"
      aria-label="Side navigation menu"
    >
      {isHovered ? <VerticalMenu /> : <AnimatedArrow />}
    </div>
  );
};

/**
 * ResponsiveMenu Component
 *
 * A responsive navigation menu that adapts based on screen size.
 * On mobile devices (width < 768px), it displays a hamburger menu.
 * On desktop devices, it shows a hover-activated vertical menu.
 *
 * The component uses the useMediaQuery hook to determine the current
 * screen size and render the appropriate menu component.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls whether the mobile menu is currently open
 * @param {Function} props.setIsOpen - Function to update the open/closed state of the mobile menu
 * @returns {JSX.Element} The appropriate menu component for the current screen size
 */
const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  /**
   * Boolean indicating if the current viewport is mobile-sized (< 768px)
   * @type {boolean}
   */
  const isMobile = useMediaQuery(768);

  // Conditionally render either the mobile or desktop menu based on screen size
  return isMobile ? (
    <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
  ) : (
    <RightSideMenu />
  );
};

export default ResponsiveMenu;
