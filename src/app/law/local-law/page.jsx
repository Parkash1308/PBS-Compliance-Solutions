"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { localLaw } from "../data"; // Assuming data.js is in the same directory

const page = () => {
  return (
    <div className="bg-[#38403e] text-[#dec2e1]">
      {/* Hero section as full-width header */}
      <HeroSection
        heading="Avoid Fines, Prevent Disasters, Protect your Legacy"
        text="Local Law 11 Compliance isn’t just a mandate, it’s your building lifeline. Let PBS
          Handle the complexities while you focus on what matters."
        staggerVal={0.1}
      />

      {/* Body content */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          {/* Why Local Law 11 Matters */}
          <motion.div
            className="bg-brand-dark1 p-8 rounded-lg shadow-md mb-8 border border-[#8AC1C1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#8AC1C1]">
              {localLaw.whyLl11.heading}
            </h2>
            <p className="text-lg text-brand-midGray mb-4">
              <span className="font-bold text-white">
                {localLaw.whyLl11.subheadline}
              </span>
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: localLaw.whyLl11.body }}
              className="text-brand-midGray"
            />
          </motion.div>

          {/* Our Services */}
          <motion.div
            className="bg-brand-dark2 p-8 rounded-lg shadow-md mb-8 border border-[#8AC1C1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#8AC1C1]">
              {localLaw.ourServices.heading}
            </h2>
            <p className="text-lg text-brand-midGray mb-4">
              <span className="font-bold text-white">
                {localLaw.ourServices.subheadline}
              </span>
            </p>
            {localLaw.ourServices.services.map((service, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-[#8AC1C1]">
                  {service.heading}
                </h3>
                {service.subheading && (
                  <h4 className="text-lg font-medium mb-2 text-white">
                    {service.subheading}
                  </h4>
                )}
                {service.items && (
                  <ul className="list-disc list-inside text-brand-midGray">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {service.body && (
                  <div
                    dangerouslySetInnerHTML={{ __html: service.body }}
                    className="text-brand-midGray"
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* The PBS Process */}
          <motion.div
            className="bg-brand-dark3 p-8 rounded-lg shadow-md mb-8 border border-[#8AC1C1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#8AC1C1]">
              {localLaw.pbsProcess.heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: localLaw.pbsProcess.description }}
              className="text-brand-midGray"
            />
          </motion.div>

          {/* Why Choose PBS */}
          <motion.div
            className="bg-brand-dark4 p-8 rounded-lg shadow-md mb-8 border border-[#8AC1C1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#8AC1C1]">
              {localLaw.whyChoosePbs.heading}
            </h2>
            <ul className="list-disc list-inside text-brand-midGray">
              {localLaw.whyChoosePbs.points.map((point, index) => (
                <li key={index} className="text-lg">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-brand-dark5 p-8 rounded-lg shadow-md border border-[#8AC1C1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#8AC1C1]">
              {localLaw.ctaSection.heading}
            </h2>
            <div className="flex flex-wrap gap-2">
              {localLaw.ctaSection.trustSignals.map((signal, index) => (
                <span
                  key={index}
                  className="bg-[#8AC1C1] px-4 py-2 rounded-full text-sm text-gray-800"
                >
                  {signal}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default page;