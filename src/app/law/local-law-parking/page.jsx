"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { parking } from "../data";

const page = () => {
  const parkingArray = Object.values(parking);

  return (
    <div className="bg-[#38403e] text-[#dec2e1] min-h-screen">
      <HeroSection
        heading="LL 126 Parking Structure Inspection"
        text="Ensure Compliance, Prevent risks & Protect your property by our simplified 
processes through the assessments of our qualified licensed experts"
        staggerVal={0.1}
      />

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          {parkingArray.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-brand-dark1 p-8 rounded-lg shadow-md mb-8 border-l-4 border-${index % 5 === 0
                ? "green-500"
                : index % 5 === 1
                  ? "blue-500"
                  : index % 5 === 2
                    ? "orange-500"
                    : index % 5 === 3
                      ? "purple-500"
                      : "deep-purple-500"
                }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {item.heading}
              </h2>
              {item.subheadline && (
                <h3 className="text-xl text-brand-midGray mb-4">
                  {item.subheadline}
                </h3>
              )}
              <div
                className="text-brand-midGray"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default page;