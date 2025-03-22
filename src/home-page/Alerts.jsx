"use client";

import CustomImage from "@/app/CustomImage";
import CTA from "@/components/CTA";
import Heading from "@/components/Heading";
import MultiStepForm from "@/components/MultiStepForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";
import { useEffect, useRef } from "react";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * @typedef {Object} FormStep
 * @property {string} type - HTML input type (text, email, tel, etc.)
 * @property {string} name - Field name for form data
 * @property {string} placeholder - Placeholder text for the input
 * @property {string} [label] - Optional label for the field
 * @property {Object} [inputProps] - Additional props for the input element
 * @property {Function} [validate] - Validation function that returns an error message or null
 */

/**
 * Alerts Component
 *
 * A section that allows users to sign up for construction alerts and notifications.
 * Features include:
 * - Multi-step form for user registration
 * - GSAP animations triggered by scrolling
 * - Responsive layout that adapts to different screen sizes
 * - Visual elements including an image, animated arrow, and gradient text
 *
 * The component is divided into two main sections:
 * 1. Left section with an image (visible only on 2xl screens and larger)
 * 2. Right section with heading, description, and multi-step form
 *
 * @returns {JSX.Element} The rendered Alerts component
 */
const Alerts = () => {
  /**
   * Reference to the main container element for GSAP animations
   * @type {React.RefObject}
   */
  const ref = useRef(null);

  /**
   * Reference to the left image section (visible on 2xl+ screens)
   * @type {React.RefObject}
   */
  const leftRef = useRef(null);

  /**
   * Reference to the text section (heading and description)
   * @type {React.RefObject}
   */
  const textRef = useRef(null);

  /**
   * Reference to the form container
   * @type {React.RefObject}
   */
  const formRef = useRef(null);

  /**
   * Configuration for the multi-step form
   * Each step defines an input field with validation rules
   *
   * @type {FormStep[]}
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
      validate: (value) => {
        if (!value) return "This field is required";
        if (!/^[A-Za-z ]{3,}$/.test(value)) return "Invalid name format";
        return null;
      },
    },
    {
      type: "text",
      name: "company name",
      placeholder: "Enter company name",
      label: "Company Name",
      inputProps: {
        required: true,
        autoComplete: "organization",
      },
      validate: (value) => {
        if (!value) return "Company name is required";
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
   * @type {Object}
   * @property {string} text - Button text
   * @property {React.ComponentType} icon - Icon component to display in the button
   */
  const button = {
    text: "Submit",
    icon: Send,
  };

  /**
   * Effect hook to set up GSAP scroll-triggered animations
   *
   * Creates a timeline that animates different sections as they enter the viewport:
   * 1. Left image section slides in from the left
   * 2. Text section fades in and slides up
   * 3. Form section fades in and slides up
   *
   * The animations are staggered with slight overlaps for a smoother sequence.
   */
  useEffect(() => {
    // Create a GSAP timeline with scroll trigger
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center", // Animation starts when top of container reaches center of viewport
        end: "bottom center", // Animation ends when bottom of container reaches center of viewport
        toggleActions: "play none none reverse", // Play on enter, reverse on exit
        // markers: true, // Debug markers; uncomment for development
      },
    });

    // Animate left image section (if it exists)
    if (leftRef.current) {
      tl.from(leftRef.current, {
        opacity: 0, // Start invisible
        x: -50, // Start 50px to the left
        duration: 0.8, // Animation takes 0.8 seconds
      });
    }

    // Animate text section with slight overlap
    if (textRef.current) {
      tl.from(
        textRef.current,
        {
          opacity: 0, // Start invisible
          y: 50, // Start 50px below final position
          duration: 0.8, // Animation takes 0.8 seconds
        },
        "-=0.4"
      ); // Start 0.4 seconds before previous animation ends
    }

    // Animate form section with slight overlap
    if (formRef.current) {
      tl.from(
        formRef.current,
        {
          opacity: 0, // Start invisible
          y: 50, // Start 50px below final position
          duration: 0.8, // Animation takes 0.8 seconds
        },
        "-=0.4"
      ); // Start 0.4 seconds before previous animation ends
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="bg-[#141414] pt-24 md:w-[60%] xl:w-[85vw]" ref={ref}>
      <div className="mx-auto container xl:w-[70vw] 2xl:w-[75vw] px-6 mt-16">
        <div className="flex flex-col 2xl:flex-row 2xl:justify-center gap-32 xl:gap-24 p-6">
          {/* Left Section - Image (visible on 2xl and up) */}
          <div ref={leftRef} className="xl:w-1/2 relative hidden 2xl:block">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-gray-600/50 bg-gradient-to-br from-gray-800/30 to-emerald-900/20">
              <CustomImage
                src="/PBS%20Assets/better-assets/Images%20Without%20Bg/Facebook%20Cover.webp"
                height={100}
                width={100}
                alt="Notification alerts interface"
                className="w-auto h-full rounded-2xl mix-blend-luminosity opacity-90"
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Right Section - Text and Form */}
          <div className="mx-auto 2xl:w-1/2 2xl:pl-0 flex flex-col xl:gap-16 2xl:items-center 2xl:justify-center xl:mb-24 2xl:mb-0">
            {/* Heading, description and animated arrow */}
            <div ref={textRef} className="xl:pr-16">
              <Heading
                main="Alert System:"
                subpart="Never Miss a Critical step for property again"
                styling="mb-6 text-white"
              />
              <div className="pl-5 text-gray-400 space-y-6">
                <p className="text-lg leading-relaxed md:w-[70%]">
                  Revolutionizing the industry by providing access to every
                  demographic of data in real-time. Our enhanced alert system
                  covers all relevant departments in New York City to ensure you
                  never miss any critical step again. Free for the first 3
                  months
                </p>
                {/* Animated arrow and call-to-action text */}
                <div className="relative flex items-center gap-4 pt-6">
                  <div className="relative">
                    {/* Pulsing animation behind the arrow */}
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/20 opacity-75"></span>
                    {/* Bouncing arrow */}
                    <span
                      className="relative inline-block text-5xl font-bold animate-bounce text-emerald-400"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </div>
                  {/* Gradient text */}
                  <span className="text-lg font-semibold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                    SIGN UP BELOW
                  </span>
                </div>
              </div>
              <CTA
                text="Get your Property registered for Free"
                href="/alert"
                styling="w-[90%] h-12"
              />
            </div>

            {/* Multi-step registration form */}
            {/* <div ref={formRef}>
              <MultiStepForm
                steps={formSteps}
                buttonObj={button}
                onSubmit={(data) => console.log(data)} // Replace with actual form submission handler
                containerClass="space-y-6 relative z-10 backdrop-blur-lg xl:shadow-2xl rounded-3xl md:p-8 mt-8 transition-all duration-300 group/form w-[80vw] md:w-[65vw] xl:w-full mx-auto px-0"
                inputClass="w-full rounded-xl text-white placeholder-gray-400 focus:border-white focus:ring-2 focus:ring-white transition-all"
                buttonClass="md:w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors group-hover/form:shadow-lg group-hover/form:shadow-emerald-800/20 ml-6 md:ml-16 lg:ml-48"
                errorClass="text-rose-400 mt-2 text-sm"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
