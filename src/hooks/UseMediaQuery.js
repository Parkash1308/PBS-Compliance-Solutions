import { useEffect, useState } from "react";

/**
 * useMediaQuery Custom Hook
 *
 * A React hook that detects whether the current viewport width is smaller than a specified breakpoint.
 * This hook is useful for implementing responsive behavior in components based on screen size.
 *
 * Features:
 * - Automatically updates when the window is resized
 * - Cleans up event listeners when the component unmounts
 * - Works with any numeric breakpoint value
 * - Returns a boolean for simple conditional rendering
 *
 * @param {number} breakpoint - The width threshold in pixels. The hook will return true when
 *                             the viewport width is less than this value.
 *
 * @returns {boolean} isMobile - Returns true if the current viewport width is less than the
 *                              specified breakpoint, otherwise false.
 *
 * @example
 * // Basic usage with Tailwind's md breakpoint (768px)
 * function ResponsiveComponent() {
 *   const isMobile = useMediaQuery(768);
 *
 *   return (
 *     <div>
 *       {isMobile ? <MobileView /> : <DesktopView />}
 *     </div>
 *   );
 * }
 *
 * @example
 * // Using with multiple breakpoints
 * function ComplexResponsiveComponent() {
 *   const isSmall = useMediaQuery(640);
 *   const isMedium = useMediaQuery(1024);
 *
 *   if (isSmall) return <SmallView />;
 *   if (isMedium) return <MediumView />;
 *   return <LargeView />;
 * }
 */
export const useMediaQuery = (breakpoint) => {
  /**
   * State to track if the viewport is smaller than the breakpoint
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isMobile, setIsMobile] = useState(false);

  /**
   * Effect hook to add resize event listener and handle cleanup
   *
   * 1. Defines a function to check the screen size and update state
   * 2. Runs the check immediately to set the initial value
   * 3. Adds an event listener for window resize events
   * 4. Returns a cleanup function to remove the event listener when unmounting
   *
   * The effect re-runs if the breakpoint parameter changes
   */
  useEffect(() => {
    /**
     * Updates the isMobile state based on current window width
     * Sets isMobile to true if window width is less than the breakpoint
     */
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check on mount
    checkScreenSize();

    // Add resize event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]); // Re-run if breakpoint changes

  return isMobile;
};
