"use client";

import Heading from "@/components/Heading";
import CTA from "@/components/CTA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, HardHat } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardsRef = useRef(null);

  const serviceItems = [
    {
      heading: "What we Specialize in:",
      text: [
        "Compliance Inspections",
        "Expediting & Permitting",
        "Annual Mailings",
        "Owner Representation",
        "Portfolio Management",
        "Consultancy over your Projects",
      ],
      icon: HardHat,
    },
    {
      heading: "Why NYC Trusts PBS?",
      description:
        "50+ Combined years of experience in industry for navigating NYC’s Complex Building Codes 360° Compliance Guardrails",
      text: [
        "NYC Expertise",
        "End-to-End Solutions",
        "Proactive Approach",
        "One Stop Shop",
        "Client-First Focus",
      ],
      icon: Building,
    },
  ];

  useEffect(() => {
    if (cardsRef.current) {
      gsap.from(cardsRef.current.querySelectorAll(".service-card"), {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.3,
      });
    }
  }, []);

  return (
    <div className="bg-[#38403e] text-[#dec2e1] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 lg:border-r border-[#dec2e1]/20 lg:pr-8 xl:pr-16 mb-16 lg:mb-0">
          <Heading main="PBS" subpart="Introduction to " />
          <div className="text-[#dec2e1]/70 space-y-6 mt-6">
            <p>Compliance Made Simple, Projects Done Right</p>
            <p>
              Proactive Building Solutions is a collaboration of its core team
              members and fellow New Yorkers, each representing a crucial
              subdivision that together form the foundation for the PBS
              network. PBS has honed the skills and built the relationships
              necessary to revolutionize the industry.
            </p>
          </div>
          <div className="mt-10">
            <CTA text="Know more about us" href="/about-us" styling="bg-[#dec2e1] hover:bg-[#dec2e1]/80 text-[#141414]" />
          </div>
        </div>

        <div
          ref={cardsRef}
          className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16 lg:mt-0"
        >
          {serviceItems.map((item, index) => (
            <div key={index} className="service-card text-center md:text-left">
              <div className="flex justify-center md:justify-start text-[#dec2e1]">
                <item.icon className="w-12 h-12 md:pl-2" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold border-b-[3px] border-[#dec2e1]/20 inline-block pb-[2px] mt-4 md:pl-2">
                {item.heading}
              </h3>

              {index === 1 && (
                <div className="text-[#dec2e1]/70 space-y-1 mt-4">
                  <p>50+ Combined years of experience in industry for navigating NYC’s Complex Building Codes</p>
                  <p>360° Compliance Guardrails</p>
                  <p>Pre-inspection audits</p>
                  <p>Real-time documentation</p>
                </div>
              )}

              {index === 0 ? (
                <ul className="text-[#dec2e1]/70 space-y-4 mt-2">
                  {item.text.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 md:pl-2">
                      <span
                        style={{
                          minWidth: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#dec2e1",
                          marginRight: "5px",
                        }}
                      ></span>{" "}
                      {point}
                    </li>
                  ))}
                  <div className="text-center mt-4 md:pl-2">
                    <CTA text="Our Offerings" href="/services" styling="bg-[#dec2e1] hover:bg-[#dec2e1]/80 text-[#141414]" />
                  </div>
                </ul>
              ) : (
                <ol className="text-[#dec2e1]/70 space-y-2 mt-4">
                  {item.text.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {i + 1}. {point}
                    </li>
                  ))}
                </ol>
              )}

              {index === 1 && (
                <blockquote className="mt-4 text-[#dec2e1] font-semibold italic border-l-4 border-[#dec2e1] pl-4">
                  "PBS has been an invaluable partner in ensuring compliance and
                  smooth project execution across NYC. Their expertise is
                  unmatched!" – John Doe, Real Estate Developer
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;