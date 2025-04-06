"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { parapetData } from "../data"; // Import parapetData

const page = () => {
  return (
    <div className="bg-[#38403e] text-[#dec2e1] min-h-screen">
      <HeroSection
        heading="Comply with LL 126 Parapet Inspection"
        text="Prevent Hazards, avoid Penalties by the help our licensed experts"
        staggerVal={0.1}
      />

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          <motion.div
            className="bg-brand-dark1 p-8 rounded-lg shadow-md mb-8 border-l-4 border-green-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {parapetData[0].heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: parapetData[0].body }}
              className="text-brand-midGray"
            />
          </motion.div>

          <motion.div
            className="bg-brand-dark2 p-8 rounded-lg shadow-md mb-8 border-l-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {parapetData[1].heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: parapetData[1].body }}
              className="text-brand-midGray"
            />
          </motion.div>

          <motion.div
            className="bg-brand-dark3 p-8 rounded-lg shadow-md mb-8 border-l-4 border-orange-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {parapetData[2].heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: parapetData[2].body }}
              className="text-brand-midGray"
            />
          </motion.div>

          <motion.div
            className="bg-brand-dark5 p-8 rounded-lg shadow-md mb-8 border-l-4 border-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {parapetData[3].heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: parapetData[3].body }}
              className="text-brand-midGray"
            />
          </motion.div>

          <motion.div
            className="bg-brand-dark6 p-8 rounded-lg shadow-md border-l-4 border-deep-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {parapetData[4].heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: parapetData[4].body }}
              className="text-brand-midGray"
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default page;