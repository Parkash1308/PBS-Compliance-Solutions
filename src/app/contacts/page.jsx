"use client"; // Marks this as a client-side component in Next.js

/**
 * @file Contact Page Component
 * @description Renders the contact page with a form, contact information, and an interactive map
 * @requires react - For component functionality and hooks
 * @requires gsap - For scroll-based animations
 * @requires lucide-react - For icon components
 * @requires HeroSection - Hero section component for page header
 * @requires MultiStepForm - Multi-step form component for contact form
 * @requires CustomImage - Custom image component (imported but not used in this component)
 */

import HeroSection from "@/components/HeroSection";
import MultiStepForm from "@/components/MultiStepForm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Contact Page Component
 * Displays contact information, a multi-step form, and a map with animations
 * @returns {JSX.Element} The rendered Contact page
 */
const page = () => {
  /**
   * State to track if the map has been loaded
   * Map is lazy-loaded when scrolled into view for performance
   * @type {[boolean, Function]} Map loaded state and setter function
   */
  const [mapLoaded, setMapLoaded] = useState(false);

  /**
   * Effect to handle lazy loading of the map when scrolled into view
   * Adds a scroll event listener that checks if the map container is visible
   */
  useEffect(() => {
    /**
     * Scroll handler that checks if map section is in viewport
     * @returns {void}
     */
    const handleScroll = () => {
      const mapSection = document.getElementById("map-container");
      if (mapSection) {
        const rect = mapSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setMapLoaded(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Refs for GSAP animations
   * @type {React.RefObject} Reference to the left column for animation
   */
  const leftColumnRef = useRef(null);

  /**
   * Refs for GSAP animations
   * @type {React.RefObject} Reference to the right column for animation
   */
  const rightColumnRef = useRef(null);

  /**
   * Effect to setup GSAP animations for left and right columns
   * Animates columns sliding in from sides when scrolled into view
   */
  useEffect(() => {
    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animate left column sliding in from left
    if (leftColumnRef.current) {
      gsap.from(leftColumnRef.current, {
        scrollTrigger: {
          trigger: leftColumnRef.current,
          start: "top 80%", // Start animation when element is 80% in view
          toggleActions: "play none none reverse", // Play animation once when scrolled into view
        },
        opacity: 0, // Start invisible
        x: -50, // Start 50px to the left
        duration: 1, // Animation duration in seconds
      });
    }

    // Animate right column sliding in from right
    if (rightColumnRef.current) {
      gsap.from(rightColumnRef.current, {
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: "top 50%", // Start animation when element is 80% in view
          toggleActions: "play none none reverse", // Play animation once when scrolled into view
        },
        opacity: 0, // Start invisible
        x: 50, // Start 50px to the right
        duration: 1, // Animation duration in seconds
      });
    }
  }, []);

  /**
   * Configuration for the multi-step form
   * Each object represents a step with field configuration and validation
   * @type {Array<Object>} Array of form step configurations
   */
  const formSteps = [
    {
      type: "text",
      name: "full_name",
      placeholder: "Enter full name",
      label: "Full Name",
      inputProps: {
        required: true,
        pattern: "[A-Za-z ]{3,}",
        title: "Please enter at least 3 characters",
        autoComplete: "name",
      },
      /**
       * Validation function for the full name field
       * @param {string} value - The input value to validate
       * @returns {string|null} Error message or null if valid
       */
      validate: (value) => {
        if (!value) return "This field is required";
        if (!/^[A-Za-z ]{3,}$/.test(value)) return "Invalid name format";
        return null;
      },
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      inputProps: {
        required: true,
        autoComplete: "email",
      },
      /**
       * Validation function for the email field
       * @param {string} value - The input value to validate
       * @returns {string|null} Error message or null if valid
       */
      validate: (value) => {
        if (!value) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email format";
        return null;
      },
    },
    {
      type: "tel",
      name: "phone",
      placeholder: "Enter your phone",
      inputProps: {
        required: true,
        pattern: "[0-9]{10}",
        title: "Please enter a 10-digit phone number",
      },
    },
  ];

  /**
   * Configuration for the form submit button
   * @type {Object} Button configuration with text and icon
   */
  const button = {
    text: "Submit",
    icon: Send, // Lucide icon component
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with title and introductory text */}
      <HeroSection
        heading={"Contact Us"}
        text="Get a query answered or get a quote."
      />

      {/* Main content section with contact info, form and map */}
      <section className="relative bg-[#171717] text-[#E5E7EB] py-16 px-6 md:px-12 lg:px-24 flex-grow">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-24 h-full sm:w-[90%] md:w-[70%] md:ml-0 lg:w-[80%] 2xl:mx-auto 2xl:w-[75%]">
          {/* Left Column - Contact information and form */}
          <div
            ref={leftColumnRef}
            className="w-full xl:w-1/2 space-y-8 h-full flex flex-col justify-between"
          >
            {/* Section heading */}
            <div className="pl-8">
              <h3 className="text-green-500 font-semibold uppercase tracking-wide mb-2">
                How to contact us
              </h3>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Contacts
              </h1>
            </div>

            {/* Contact Information with icons */}
            <div className="space-y-8 py-10 pl-10">
              {/* Address with map pin icon */}
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-green-500" />
                <p>
                  Moscow, ul. Kalanchyovskaya, 16, p. 1 (IBC Kalanchyovskaya
                  Plaza)
                </p>
              </div>
              {/* Phone number with phone icon */}
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-green-500" />
                <p>8 (495) 269-20-59</p>
              </div>
              {/* Email with mail icon */}
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-green-500" />
                <p>office@darnit2.ru</p>
              </div>
            </div>

            {/* Contact Form - Uses MultiStepForm component */}
            <div>
              <MultiStepForm
                steps={formSteps}
                buttonObj={button}
                onSubmit={(data) => console.log(data)} // Log form data on submit
                containerClass="relative z-10 backdrop-blur-lg bg-[#171717] focus-within:border focus-within:border-white rounded-xl transition-all"
                inputClass="w-full rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all"
                buttonClass="md:w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors group-hover/form:shadow-lg group-hover/form:shadow-emerald-800/20 ml-6 md:ml-16 lg:ml-48"
                errorClass="text-rose-400 mt-2 text-sm"
                progressLineColor={"white"}
              />
            </div>
          </div>

          {/* Right Column - Map section */}
          <div ref={rightColumnRef} className="w-full xl:w-1/2 h-full relative">
            {/* Decorative vertical line with gradient */}
            <div className="absolute inset-y-0 left-[50%] w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent blur-md"></div>

            {/* Map container with styling filters */}
            <div
              id="map-container"
              className="filter invert-[90%] hue-rotate-180 grayscale-[20%] contrast-90"
            >
              {/* Conditionally render map iframe or loading placeholder */}
              {mapLoaded ? (
                <iframe
                  title="New York Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24184.00445395243!2d-74.0060152!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3168c5e9ab%3A0x9e94b7b5b7f9b5c8!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1617221740848"
                  className="rounded-lg shadow-lg w-full h-[90vh]"
                />
              ) : (
                <div className="w-full h-[90vh] flex items-center justify-center bg-gray-800 rounded-lg">
                  <p>Loading map...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
