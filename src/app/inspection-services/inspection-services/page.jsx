"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Info, ShieldCheck, DollarSign } from "lucide-react";
import { InspectionServices } from "../data";
import CTA from "@/components/CTA";

const ParkingPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#38403e] text-[#dec2e1]">
      <HeroSection
        heading="Turn Building Codes from Foe to Friend"
        text="We Decode NYC’s Labyrinth of Laws into actionable solutions, so your Property 
        stays safe,compliant, and penalty-free."
        staggerVal={0.1}
      />

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          {InspectionServices.map((sectionData, sectionIndex) => (
            <motion.div
              key={`section-${sectionIndex}`}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8"
            >
              {sectionData.headline && (
                <motion.div
                  variants={itemVariants}
                  className="bg-[#1A1A1A] p-8 rounded-lg shadow-md mb-8 border-l-4 border-[#8AC1C1] text-center"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    {sectionData.headline}
                  </h2>
                  {sectionData.text && (
                    <p className="text-brand-midGray">{sectionData.text}</p>
                  )}
                </motion.div>
              )}

              {sectionData.subSections && (
                <div>
                  {sectionData.subSections.map((subSection, subIndex) => (
                    <motion.div
                      key={`subsection-${sectionIndex}-${subIndex}`}
                      variants={itemVariants}
                      className="bg-[#1A1A1A] p-8 rounded-lg shadow-md mb-8 border-l-4 border-[#8AC1C1] text-center"
                    >
                      <h3 className="text-xl font-bold text-white mb-2">
                        {subSection.headline}
                      </h3>
                      {subSection.items && (
                        <ul className="list-disc list-inside text-brand-midGray mb-4">
                          {subSection.items.map((item, itemIndex) => (
                            <li key={`item-${sectionIndex}-${subIndex}-${itemIndex}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {subSection.additionalText && (
                        <p className="text-brand-midGray">
                          {subSection.additionalText}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}

              {sectionData.services && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-12">
                  {sectionData.services.map((service, serviceIndex) => (
                    <motion.div
                      key={`service-${sectionIndex}-${serviceIndex}`}
                      variants={cardVariants}
                      className="bg-[#333333] rounded-lg p-6 shadow-md border-l-4 border-[#8AC1C1] flex flex-col"
                    >
                      <div className="text-center mb-4">
                        <div className="text-2xl inline-flex items-center justify-center">
                          {{
                            "What is an Owner Representative?": (
                              <Info className="text-brand-bright" />
                            ),
                            "Compliance & Risk Management": (
                              <ShieldCheck className="text-brand-bright" />
                            ),
                            "Financial Oversight & Savings": (
                              <DollarSign className="text-brand-bright" />
                            ),
                          }[service.heading] || <Info className="text-brand-bright" />}
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2 mt-2">
                          {service.heading}
                        </h2>
                        {service.subheading && (
                          <h3 className="text-lg font-medium text-brand-midGray mb-2">
                            {service.subheading}
                          </h3>
                        )}
                      </div>
                      <div className="flex-grow">
                        {service.text && (
                          <p className="text-brand-midGray mb-2">{service.text}</p>
                        )}
                        {service.items && (
                          <ul className="list-disc list-inside text-brand-midGray mb-4">
                            {service.items.map((item, itemIndex) => (
                              <li
                                key={`service-item-${sectionIndex}-${serviceIndex}-${itemIndex}`}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {service.additionalText && (
                          <p className="text-brand-midGray mb-2">
                            {service.additionalText}
                          </p>
                        )}
                      </div>
                      <div className="mt-4 flex justify-center">
                        {service.cta && (
                          <CTA text={service.cta.text} href={service.cta.href} />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {sectionData.buttons && (
                <div className="flex flex-wrap justify-center gap-4 mt-8 text-center">
                  {sectionData.buttons.map((button, buttonIndex) => (
                    <CTA
                      key={`button-${sectionIndex}-${buttonIndex}`}
                      text={button.text}
                      href={button.href}
                    />
                  ))}
                </div>
              )}

              {sectionData.cta && sectionData.cta.text && (
                <div className="mt-8 flex justify-center">
                  <CTA text={sectionData.cta.text} href={sectionData.cta.href} />
                </div>
              )}
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ParkingPage;