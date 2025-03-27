"use client";

import CustomImage from "@/app/CustomImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const containerRef = useRef(null);

  const SolutionsItems = [
    {
      title: "MemberShip",
      description:
        "We will promptly and efficiently fulfill any of your orders, from planning to execution, ensuring high-quality results on time and within budget.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png",
    },
    {
      title: "Planning",
      description:
        "Ready to perform any amount of work quickly and efficiently, whether it's new construction, renovations, or site preparation.",
      image:
        "/PBS%20Assets/Brand%20Language/monochromatic-urban-minimal-landscapes.jpg",
    },
    {
      title: "Development",
      description:
        "Ready to perform any amount of work quickly and efficiently, whether it's new construction, renovations, or site preparation.",
      image:
        "/PBS%20Assets/Brand%20Language/foggy-city-skyline-with-boat-water.jpg",
    },
  ];

  useEffect(() => {
    const imagesToPreload = SolutionsItems.slice(1).map((item) => item.image);

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    timeline.from(".solution-card", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.3,
      delay: 0.3,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="bg-[#141414] text-white py-16 md:py-24 lg:py-32">
      <div
        className="container mx-auto px-6 md:px-12 lg:px-24"
        ref={containerRef}
      >
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-conthrax font-bold mb-6 md:mb-10">
            Solutions
          </h1>
          <div className="max-w-3xl mx-auto text-gray-400">
            <p>
              Teams like yours are using InCheck to manage critical onsite work:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {SolutionsItems.map((item) => (
            <div
              key={item.title}
              className="solution-card bg-gray-800 p-6 rounded-lg"
            >
              <CustomImage
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;