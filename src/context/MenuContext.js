"use client";

import { createContext, useContext, useState } from "react";

/**
 * @typedef {Object} MenuContextType
 * @property {boolean} isOpen - Whether the mobile menu is currently open
 * @property {Function} setIsOpen - Function to update the open state of the mobile menu
 * @property {boolean} isHovered - Whether the desktop menu is currently being hovered
 * @property {Function} setIsHovered - Function to update the hover state of the desktop menu
 */

/**
 * Context for managing menu state across the application
 *
 * This context provides state management for both mobile and desktop menus,
 * allowing components to access and update menu states without prop drilling.
 *
 * @type {React.Context<MenuContextType>}
 */
const MenuContext = createContext();

/**
 * MenuProvider Component
 *
 * A context provider that manages the global state for navigation menus.
 * Features include:
 * - Mobile menu open/closed state management
 * - Desktop menu hover state management
 * - Centralized state accessible throughout the component tree
 *
 * Wrap your application or layout component with this provider to make
 * menu state available to all child components.
 *
 * @example
 * // In your root layout or app component:
 * import { MenuProvider } from '@/context/MenuContext';
 *
 * function App() {
 *   return (
 *     <MenuProvider>
 *       <Layout>
 *         <Component {...pageProps} />
 *       </Layout>
 *     </MenuProvider>
 *   );
 * }
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to the menu context
 * @returns {JSX.Element} The provider component with children
 */
export function MenuProvider({ children }) {
  /**
   * State for tracking whether the mobile menu is open
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * State for tracking whether the desktop menu is being hovered
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MenuContext.Provider
      value={{ isOpen, setIsOpen, isHovered, setIsHovered }}
    >
      {children}
    </MenuContext.Provider>
  );
}

/**
 * Custom hook for accessing the menu context
 *
 * This hook provides a convenient way to access the menu state and
 * state updater functions from any component within the MenuProvider.
 *
 * @example
 * // In a component that needs to access or update menu state:
 * import { useMenu } from '@/context/MenuContext';
 *
 * function NavBar() {
 *   const { isOpen, setIsOpen } = useMenu();
 *
 *   return (
 *     <button onClick={() => setIsOpen(!isOpen)}>
 *       {isOpen ? 'Close Menu' : 'Open Menu'}
 *     </button>
 *   );
 * }
 *
 * @returns {MenuContextType} The menu context value containing state and updater functions
 * @throws {Error} If used outside of a MenuProvider
 */
export function useMenu() {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }

  return context;
}
