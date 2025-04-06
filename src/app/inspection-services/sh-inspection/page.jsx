"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { hydrostaticTestingData } from "../data";

const Page = () => {
  return (
    <div className="bg-[#38403e] text-[#dec2e1] min-h-screen">
      <HeroSection
        heading="Sprinkler Inspection Hydrostatic Test"
        text="Ensuring that your property’s fire sprinkler systems are compliant with New York 
City’s regulations is crucial for safety and legal adherence."
        staggerVal={0.1}
      />

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto space-y-16">
          {hydrostaticTestingData.map((sectionData) => (
            <motion.div
              key={sectionData.section}
              className="group bg-[#1a1a1a] rounded-2xl border-2 border-gray-800 p-8 md:p-12 shadow-2xl shadow-black/50 hover:border-[#00cc6a]/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Header */}
              <div className="mb-10 text-center space-y-6">
                <h1 className="text-3xl md:text-4xl font-gnuolane text-white mb-4 bg-gradient-to-r from-[#00cc6a] to-[#22d3ee] bg-clip-text text-transparent">
                  {sectionData.headline}
                </h1>
                {sectionData.bodyText && (
                  <p className="text-brand-midGray text-lg max-w-3xl mx-auto leading-relaxed">
                    {sectionData.bodyText}
                  </p>
                )}
              </div>

              {/* Steps Section */}
              {sectionData.steps && (
                <div className="space-y-8">
                  {sectionData.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-6 p-6 bg-[#252525] rounded-xl border-2 border-gray-800 hover:border-[#00cc6a]/30 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#00cc6a] rounded-full flex items-center justify-center text-black font-bold text-xl">
                        {index + 1}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">{step.step}</h3>
                        <p className="text-brand-midGray leading-relaxed">{step.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Color Codes Table */}
              {sectionData.colorCodes && (
                <div className="mt-12 overflow-x-auto rounded-xl border-2 border-gray-800">
                  <table className="min-w-full bg-[#1a1a1a] divide-y-2 divide-gray-800">
                    <thead className="bg-gradient-to-r from-[#00cc6a]/20 to-[#22d3ee]/20">
                      <tr>
                        <th className="py-5 px-8 text-left text-gray-300 font-semibold uppercase text-sm tracking-wider border-r-2 border-gray-800">
                          Cap Color
                        </th>
                        <th className="py-5 px-8 text-left text-gray-300 font-semibold uppercase text-sm tracking-wider border-r-2 border-gray-800">
                          System Type
                        </th>
                        <th className="py-5 px-8 text-left text-gray-300 font-semibold uppercase text-sm tracking-wider">
                          Test Focus
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-800">
                      {sectionData.colorCodes.map((code, index) => (
                        <tr
                          key={index}
                          className="hover:bg-[#252525]/50 transition-colors duration-200"
                        >
                          <td className="py-5 px-8 text-gray-400 align-top border-r-2 border-gray-800 font-medium">
                            {code.capColor}
                          </td>
                          <td className="py-5 px-8 text-gray-400 align-top border-r-2 border-gray-800">
                            {code.systemType}
                          </td>
                          <td className="py-5 px-8 text-gray-400 align-top">
                            {code.testFocus}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Inspection Phases */}
              {sectionData.inspectionPhases && (
                <div className="mt-12 space-y-8">
                  {sectionData.inspectionPhases.map((phase, index) => (
                    <div
                      key={index}
                      className="p-6 bg-[#252525] rounded-xl border-2 border-gray-800 hover:border-[#00cc6a]/30 transition-colors"
                    >
                      <h3 className="text-xl font-semibold text-[#00cc6a] mb-4 border-l-4 border-[#00cc6a] pl-4">
                        {phase.phase}
                      </h3>
                      <ul className="space-y-3 pl-6">
                        {phase.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start space-x-3 text-brand-midGray"
                          >
                            <div className="w-2 h-2 bg-[#00cc6a] rounded-full mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Features */}
              {sectionData.features && (
                <div className="mt-12 p-6 bg-[#252525] rounded-xl border-2 border-gray-800">
                  <h3 className="text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-[#00cc6a] to-[#22d3ee] bg-clip-text text-transparent">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {sectionData.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-brand-midGray"
                      >
                        <div className="w-2 h-2 bg-[#00cc6a] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Call to Action */}
              {/* Call to Action */}
              {sectionData.callToAction && (
                <div className="mt-12 text-center space-y-8">
                  <p className="text-2xl md:text-3xl font-semibold text-white">
                    {sectionData.callToAction.text}
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a
                      href={`tel:${sectionData.callToAction.contact.call}`}
                      className="border-2 border-[#00cc6a] text-[#00cc6a] py-3 px-8 rounded-lg hover:bg-[#00cc6a]/10 transition-all duration-300"
                    >
                      {sectionData.callToAction.contact.call}
                    </a>
                    <a
                      href={`mailto:${sectionData.callToAction.contact.email}`}
                      className="border-2 border-[#00cc6a] text-[#00cc6a] py-3 px-8 rounded-lg hover:bg-[#00cc6a]/10 transition-all duration-300"
                    >
                      {sectionData.callToAction.contact.email}
                    </a>
                  </div>
                </div>
              )}

              {/* Trust Signals */}
              {sectionData.trustSignals && (
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  {sectionData.trustSignals.map((signal, index) => (
                    <div
                      key={index}
                      className="bg-[#252525] text-brand-midGray py-2 px-4 rounded-full text-sm flex items-center space-x-2 border border-[#00cc6a]/30"
                    >
                      <div className="w-2 h-2 bg-[#00cc6a] rounded-full" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Page;