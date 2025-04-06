"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { ll152 } from "../data"; // Import the data

const page = () => {
  return (
    <div className="bg-[#38403e] text-[#dec2e1] min-h-screen">
      <HeroSection
        heading="LL152 Gas Piping Inspections"
        text=": Proactive Inspections Every 3 Years to Meet NYC Mandates, ensuring tenant 
          safety, Legal Compliance, and uninterrupted operations."
        staggerVal={0.1}
      />

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          {Object.entries(ll152).map(([key, section], index) => {
            let borderColor = "border-green-500"; // Default green
            if (index % 3 === 1) {
              borderColor = "border-blue-500"; // Blue for the second section
            } else if (index % 3 === 2) {
              borderColor = "border-orange-500"; // Orange for the third section
            }

            return (
              <motion.div
                key={key}
                className={`bg-brand-dark1 p-8 rounded-lg shadow-md mb-8 border-l-4 ${borderColor}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  {section.heading}
                </h2>
                <div
                  className="text-brand-midGray"
                  dangerouslySetInnerHTML={{ __html: section.body }}
                ></div>
              </motion.div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default page;