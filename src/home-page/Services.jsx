"use client";

import Heading from "@/components/Heading";
import CTA from "@/components/CTA";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Handshake } from "lucide-react"; // using Handshake icon

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll(".fade-in"), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.2,
      });
    }
  }, []);

  return (
    <div className="bg-[#38403e] text-white py-16 md:py-24" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {/* Left: PBS Introduction */}
        <div className="fade-in space-y-5">
          <div className="flex items-center gap-">
            {/* Logo and Introduction Container */}
            <div className="flex items-center">
              <Image
                src="/PBS Assets/Brand Language/Logo 1.png"
                alt="PBS Logo"
                width={200}
                height={70}
                className="object-contain mr-2"
              />
              <div className="h-20 border-l-4 border-[#8AC1C1] px-2" />
              <div>
                <p className="font-semibold text-2xl ">Introduction to</p>
                <h2 className="text-6xl font-bold">PBS</h2>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <div className="text-white/70 space-y-4 text-sm leading-relaxed">
            <p>Compliance Made Simple, Projects Done Right</p>
            <p>
              Proactive Building Solutions is a collaboration of its core team members and fellow New Yorkers,
              each representing a crucial subdivision that together form the foundation for the PBS network.
              PBS has honed the skills and built the relationships necessary to revolutionize the industry.
            </p>
          </div>

          {/* CTA Button */}
          <CTA
            text="Know more about us"
            href="/about-us"
            styling="bg-[#8AC1C1] hover:bg-[#50f0c6]/80 text-[#141414] w-fit"
          />
        </div>

        {/* Middle: Why NYC Trusts PBS */}
        <div className="fade-in bg-[#272b2a] p-6 rounded-md text-sm leading-relaxed space-y-4 md:ml-4 lg:ml-8">
          <h3 className="text-2xl font-bold text-white">Why NYC Trusts PBS?</h3>
          <ul className="list-disc ml-4 text-white/80 space-y-2">
            <li>50+ Combined years of experience navigating NYC’s Complex Building Codes</li>
            <li>360° Compliance Guardrails</li>
            <li>Pre-inspection audits</li>
            <li>Real-time documentation</li>
          </ul>
          <ol className="list-decimal ml-4 text-white/80 space-y-2 pt-4">
            <li>NYC Expertise</li>
            <li>End-to-End Solutions</li>
            <li>Proactive Approach</li>
            <li>One Stop Shop</li>
            <li>Client-First Focus</li>
          </ol>
        </div>

        {/* Right: Testimonial */}
        <div className="fade-in flex flex-col items-center space-y-4 text-center ">
          <div className="flex items-center">
            <div className="" /> {/* Vertical line on left */}
            <Handshake className="w-16 h-16 text-[#dec2e1] mb-4" />
          </div>
          <div className="text-white/80 text-sm h-20 border-l-4 border-[#8AC1C1] mr-2">
            <p>
              “PBS has been an invaluable partner in ensuring compliance and smooth project execution across NYC.
              Their expertise is unmatched!”
            </p>
            <p>
              <strong>John Doe, Real Estate Developer</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;