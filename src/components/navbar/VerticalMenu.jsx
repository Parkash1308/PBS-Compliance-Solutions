import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { menuItems } from "./data";

/**
 * VerticalMenu Component
 *
 * A stylish vertical navigation menu positioned on the right side of the screen.
 * Features include:
 * - Animated markers and halos for the active menu item
 * - Hover-activated dropdown submenus
 * - Smooth animations using Framer Motion
 * - Automatic highlighting of the current page in the navigation
 * - Delayed hover effects to prevent accidental triggering
 *
 * The menu uses a vertical line with circular markers to create a timeline-like
 * visual appearance, with the active item highlighted with animations.
 *
 * @returns {JSX.Element} The rendered VerticalMenu component
 */
const VerticalMenu = () => {
  /**
   * State to track which menu item is currently active (based on current route)
   * @type {[number, React.Dispatch<React.SetStateAction<number>>]}
   */
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * State to track which menu item is currently being hovered
   * @type {[number|null, React.Dispatch<React.SetStateAction<number|null>>]}
   */
  const [hoveredIndex, setHoveredIndex] = useState(null);

  /**
   * Next.js router for navigation
   */
  const router = useRouter();

  /**
   * Ref to store timeout IDs for hover delay management
   * @type {React.MutableRefObject<number|null>}
   */
  const hoverTimeout = useRef(null);

  /**
   * Animation variants for the pulsing halo effect around active markers
   * @type {Object}
   */
  const haloVariants = {
    active: {
      scale: [1, 1.8, 1], // Pulsing scale animation
      opacity: [0, 1, 0], // Fade in and out
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity, // Continuous animation
      },
    },
    inactive: {
      scale: 1,
      opacity: 0,
    },
  };

  /**
   * Animation variants for the marker dots
   * @type {Object}
   */
  const markerVariants = {
    active: {
      scale: 1.1, // Slightly larger when active
      backgroundColor: "#ffffff", // White fill when active
      borderColor: "#ffffff", // White border when active
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    inactive: {
      scale: 1,
      backgroundColor: "#374151", // Dark gray fill when inactive
      borderColor: "#4b5563", // Medium gray border when inactive
      transition: { duration: 0.2 },
    },
  };

  /**
   * Animation variants for the vertical timeline line
   * @type {Object}
   */
  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "circOut",
        delay: 0.2,
      },
    },
  };

  /**
   * DropdownIcon Component
   *
   * Renders a chevron icon that rotates when its parent menu item is hovered.
   *
   * @param {Object} props - Component props
   * @param {number} props.index - Index of the menu item this icon belongs to
   * @returns {JSX.Element} The dropdown icon component
   */
  const DropdownIcon = ({ index }) => (
    <motion.span
      className="pl-2 relative text-gray-400 text-xs"
      animate={{
        rotate: hoveredIndex === index ? 90 : 0, // Rotate when hovered
      }}
      aria-hidden="true" // Hide from screen readers as it's decorative
    >
      <ChevronDown />
    </motion.span>
  );

  /**
   * MenuItemContent Component
   *
   * Renders the content of a menu item, including marker, halo, and text.
   *
   * @param {Object} props - Component props
   * @param {Object} props.item - Menu item data object
   * @param {number} props.index - Index of the menu item
   * @returns {JSX.Element} The menu item content component
   */
  const MenuItemContent = ({ item, index }) => (
    <motion.div
      className="relative flex items-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated halo effect for active item */}
      <motion.div
        className="absolute -inset-1 w-6 h-6 rounded-full bg-white/10"
        variants={haloVariants}
        animate={activeIndex === index ? "active" : "inactive"}
      />

      {/* Marker dot */}
      <motion.div
        className="w-4 h-4 rounded-full border relative z-10"
        variants={markerVariants}
        animate={activeIndex === index ? "active" : "inactive"}
      />

      {/* Dropdown icon for items with submenus */}
      {item.submenu && <DropdownIcon index={index} />}

      {/* Menu item text */}
      <motion.span
        className="ml-6 text-sm font-medium text-gray-400"
        animate={{
          color: activeIndex === index ? "#ffffff" : "#9ca3af", // White when active, gray when inactive
          x: activeIndex === index ? 8 : 0, // Slight shift when active
        }}
      >
        {item.name}
      </motion.span>
    </motion.div>
  );

  /**
   * DropdownMenu Component
   *
   * Renders a submenu dropdown when a parent menu item is hovered.
   * Uses React.memo to prevent unnecessary re-renders.
   *
   * @param {Object} props - Component props
   * @param {Array} props.submenu - Array of submenu items
   * @param {number} props.index - Index of the parent menu item
   * @returns {JSX.Element} The dropdown menu component
   */
  const DropdownMenu = React.memo(({ submenu, index }) => {
    /**
     * Handles mouse enter events on the dropdown
     * Clears any existing timeout and sets this dropdown as hovered
     */
    const handleMouseEnter = () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      setHoveredIndex(index);
    };

    /**
     * Handles mouse leave events on the dropdown
     * Sets a timeout to clear the hovered state after a delay
     */
    const handleMouseLeave = () => {
      hoverTimeout.current = setTimeout(() => {
        setHoveredIndex(null);
      }, 300); // 300ms exit delay to prevent accidental closing
    };

    return (
      <motion.div
        className="absolute right-full top-0 mr-4 bg-gray-800 rounded-lg shadow-xl py-2 min-w-[200px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: hoveredIndex === index ? 1 : 0, // Fade in when hovered
          x: hoveredIndex === index ? 0 : 20, // Slide in from right when hovered
        }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: hoveredIndex === index ? "auto" : "none" }} // Only capture mouse events when visible
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="menu"
        aria-label={`${submenu[0]?.name} submenu`}
      >
        {/* Vertical line decoration */}
        <div className="border-l-2 border-gray-600 ml-2">
          {/* Map through submenu items */}
          {submenu.map((subItem, subIndex) => (
            <motion.div
              key={subIndex}
              className="px-6 py-2 hover:bg-gray-700 rounded-xl cursor-pointer w-[90%]"
              whileHover={{ x: 4 }} // Slight shift on hover
              onClick={() => {
                router.push(subItem.link); // Navigate to the link
                setActiveIndex(index); // Update active index to parent
              }}
              role="menuitem"
            >
              <span className="text-sm text-gray-300 hover:text-white">
                {subItem.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  });

  /**
   * Handles mouse enter events on menu items
   * Sets a timeout to show the dropdown after a short delay
   *
   * @param {number} index - Index of the menu item being hovered
   */
  const handleMenuItemEnter = (index) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHoveredIndex(index);
    }, 150); // 150ms enter delay to prevent accidental triggering
  };

  /**
   * Handles mouse leave events on menu items
   * Sets a timeout to hide the dropdown after a short delay
   */
  const handleMenuItemLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 150); // 150ms exit delay
  };

  /**
   * Effect to set the active menu item based on the current route
   * Runs on component mount and when the router changes
   */
  useEffect(() => {
    if (!router) return;

    // Get the current path from the window location
    const currentPath = window.location.pathname;

    // Check if the current path matches a top-level menu item
    let foundIndex = menuItems.findIndex((item) => item.link === currentPath);

    // If not found in top-level items, check in submenus
    if (foundIndex === -1) {
      menuItems.forEach((item, index) => {
        if (item.submenu) {
          const subItemIndex = item.submenu.findIndex(
            (sub) => sub.link === currentPath
          );
          if (subItemIndex !== -1) {
            foundIndex = index; // Set to parent index
          }
        }
      });
    }

    // Update active index if a match was found
    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
    }

    // Cleanup function to clear any pending timeouts
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, [router]);

  return (
    <div className="fixed top-0 right-[-100px] md:right-0 h-full bg-transparent z-50 flex justify-center items-center md:pr-10">
      {/* Vertical timeline line */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        className="absolute left-2 top-0 bottom-0 border-l border-gray-600"
        aria-hidden="true"
      />

      {/* Menu items container */}
      <motion.div
        className="relative flex flex-col items-start space-y-8"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Map through menu items */}
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-center cursor-pointer flex-row justify-start"
            onClick={() => {
              setActiveIndex(index);
              if (!item?.submenu) router.push(item.link); // Navigate only if not a dropdown
            }}
            onMouseEnter={() => handleMenuItemEnter(index)}
            onMouseLeave={handleMenuItemLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            role={item.submenu ? "button" : "link"}
            aria-expanded={item.submenu ? hoveredIndex === index : undefined}
            aria-haspopup={item.submenu ? "true" : undefined}
          >
            {/* Render dropdown menu if item has submenu */}
            {item.submenu && (
              <DropdownMenu submenu={item.submenu} index={index} />
            )}

            {/* Halo animation around active marker */}
            <motion.div
              className="absolute -inset-1 w-6 h-6 rounded-full bg-white/10"
              variants={haloVariants}
              animate={activeIndex === index ? "active" : "inactive"}
              style={{ originX: 0.5, originY: 0.5 }}
              aria-hidden="true"
            />

            {/* Marker dot */}
            <motion.div
              className="w-4 h-4 rounded-full border relative z-10"
              variants={markerVariants}
              animate={activeIndex === index ? "active" : "inactive"}
              aria-hidden="true"
            />

            {/* Menu item text */}
            <motion.span
              className="ml-6 text-sm font-medium text-gray-400"
              animate={{
                color: activeIndex === index ? "#ffffff" : "#9ca3af",
                x: activeIndex === index ? 0 : 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.name}
            </motion.span>

            {/* Dropdown icon for items with submenus */}
            {item.submenu && <DropdownIcon index={index} />}

            {/* Empty container for additional elements (commented out in original code) */}
            <div className="relative flex items-center"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalMenu;
