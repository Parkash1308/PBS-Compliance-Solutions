"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ErrorBoundary } from "react-error-boundary";

/**
 * ErrorFallback Component
 *
 * A visually appealing fallback UI that is displayed when an error is caught by the ErrorBoundary.
 * Features include:
 * - Animated entrance effects using Framer Motion
 * - Error message display
 * - "Try Again" button to reset the error state
 * - "Return Home" link to navigate back to the homepage
 * - Responsive design that adapts to different screen sizes
 *
 * @param {Object} props - Component props
 * @param {Error} props.error - The error object that was caught
 * @param {Function} props.resetErrorBoundary - Function to reset the error boundary state and retry rendering
 * @returns {JSX.Element} The error fallback UI
 */
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen bg-[#171717] text-[#E5E7EB] flex items-center justify-center px-6">
      <div className="container mx-auto text-center md:w-[70%] lg:w-[60%]">
        {/* Animated "Oops!" text with scale-in effect */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl py-8 md:py-10 md:text-[240px] font-bold text-brand-bright drop-shadow-glow"
        >
          Oops!
        </motion.div>

        {/* Error message section with slide-up animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="text-[#9CA3AF] text-md md:text-lg max-w-2xl mx-auto">
            {error.message || "We're experiencing technical difficulties."}
          </p>
        </motion.div>

        {/* Action buttons container */}
        <div className="flex justify-center gap-4">
          {/* "Try Again" button with hover and tap animations */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetErrorBoundary}
            className="bg-gradient-to-r from-brand-bright to-emerald-600 text-black px-8 py-3 rounded-xl font-semibold hover:from-[#00CC6A] hover:to-emerald-500 transition-all"
          >
            Try Again
          </motion.button>

          {/* "Return Home" link with hover and tap animations */}
          <Link href="/" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-brand-bright px-8 py-3 rounded-xl font-semibold hover:bg-[#2d2d2d] transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Return Home
            </motion.a>
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * CustomErrorBoundary Component
 *
 * A wrapper around react-error-boundary's ErrorBoundary component that provides:
 * - A custom fallback UI with animations and responsive design
 * - Error logging functionality
 * - State reset capabilities
 *
 * This component should be used to wrap sections of your application where you
 * want to gracefully handle runtime errors without crashing the entire app.
 *
 * Usage example:
 * ```jsx
 * <CustomErrorBoundary>
 *   <ComponentThatMightError />
 * </CustomErrorBoundary>
 * ```
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The components to be rendered inside the error boundary
 * @returns {JSX.Element} The error boundary component with children
 */
export default function CustomErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        // Log errors to your error reporting service
        // In a production app, you might want to send this to a service like Sentry, LogRocket, etc.
        console.error("Error Boundary caught:", error, info);
      }}
      onReset={() => {
        // Reset application state here if needed
        // This function runs when the resetErrorBoundary function is called
        // You can clear caches, reset context values, etc.
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
