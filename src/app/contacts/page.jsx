"use client";

import HeroSection from "@/components/HeroSection";
import MultiStepForm from "@/components/MultiStepForm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const page = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (leftColumnRef.current) {
      gsap.from(leftColumnRef.current, {
        scrollTrigger: {
          trigger: leftColumnRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 1,
      });
    }
    if (rightColumnRef.current) {
      gsap.from(rightColumnRef.current, {
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 50,
        duration: 1,
      });
    }
  }, []);

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
    {
      type: "textarea",
      name: "message",
      placeholder: "Enter your message",
      label: "Message",
      inputProps: {
        required: true,
      },
    }
  ];

  const button = {
    text: "Submit",
    icon: Send,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        heading={"Contact Us"}
        text="Contact PBS Compliance Solutions. 24/7 Support for Emergencies, Inspections, and Compliance Urgencies."
      />

      <section className="relative bg-[#38403e] text-[#dec2e1] py-16 px-6 md:px-12 lg:px-24 flex-grow">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-24 h-full sm:w-[90%] md:w-[70%] md:ml-0 lg:w-[80%] 2xl:mx-auto 2xl:w-[75%]">
          <div
            ref={leftColumnRef}
            className="w-full xl:w-1/2 space-y-8 h-full flex flex-col justify-between"
          >
            <div className="pl-8">
              <h3 className="text-green-500 font-semibold uppercase tracking-wide mb-2">
                How to contact us
              </h3>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Contacts
              </h1>
            </div>

            <div className="space-y-8 py-10 pl-10">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-green-500" />
                <p>22 E 41st Street, Third Floor New York NY 10017</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-green-500" />
                <p>Call: (Provide Phone Numbers here)</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-green-500" />
                <p>Email: info@pbs.nyc</p>
              </div>
            </div>

            <div>
              <MultiStepForm
                steps={formSteps}
                buttonObj={button}
                onSubmit={(data) => console.log(data)}
                containerClass="relative z-10 backdrop-blur-lg bg-[#171717] focus-within:border focus-within:border-white rounded-xl transition-all"
                inputClass="w-full rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all"
                buttonClass="md:w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors group-hover/form:shadow-lg group-hover/form:shadow-emerald-800/20 ml-6 md:ml-16 lg:ml-48"
                errorClass="text-rose-400 mt-2 text-sm"
                progressLineColor={"white"}
              />
            </div>
          </div>

          <div ref={rightColumnRef} className="w-full xl:w-1/2 h-full relative">
            <div className="absolute inset-y-0 left-[50%] w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent blur-md"></div>

            <div
              id="map-container"
              className="filter invert-[90%] hue-rotate-180 grayscale-[20%] contrast-90"
            >
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