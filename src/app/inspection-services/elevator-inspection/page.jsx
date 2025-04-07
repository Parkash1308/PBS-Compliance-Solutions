"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { elevatorComplianceData } from "../data";

const Page = () => {
  return (
    <div className="bg-[#38403e] text-[#dec2e1] min-h-screen">
      <HeroSection
        heading="Elevator Inspection"
        text="Annual inspections, violation erasure, and emergency repairs—trusted by landlords who refuse to gamble with safety or deadlines."
        staggerVal={0.1}
      />

      <div className="py-32 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto space-y-16">
          {elevatorComplianceData.map((sectionData) => (
            <motion.div
              key={sectionData.section}
              className="group bg-[#1a1a1a] rounded-2xl border border-[#8AC1C1] p-8 md:p-12 shadow-2xl shadow-black/50 hover:border-[#8AC1C1]/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Header */}
              <div className="mb-10 text-center space-y-6">
                <h1 className="text-4xl font-gnuolane text-white mb-4 bg-gradient-to-r from-[#8AC1C1] to-[#8AC1C1] bg-clip-text text-transparent">
                  {sectionData.headline}
                </h1>
                {sectionData.bodyText && (
                  <p className="text-lg text-brand-midGray max-w-3xl mx-auto leading-relaxed">
                    {sectionData.bodyText}
                  </p>
                )}
              </div>

              {/* Scenarios Table */}
              {sectionData.scenarios && (
                <div className="mb-12 overflow-x-auto rounded-xl border border-[#8AC1C1]">
                  <table className="min-w-full bg-[#1a1a1a] divide-y-2 divide-gray-800">
                    <thead className="bg-[#252525]">
                      <tr>
                        <th className="py-5 px-4 md:px-8 text-left text-gray-300 font-semibold uppercase tracking-wider border-r-2 border-gray-800">
                          Violation
                        </th>
                        <th className="py-5 px-4 md:px-8 text-left text-gray-300 font-semibold uppercase tracking-wider border-r-2 border-gray-800">
                          Consequences
                        </th>
                        <th className="py-5 px-4 md:px-8 text-left text-gray-300 font-semibold uppercase tracking-wider">
                          Our Safeguard
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-800">
                      {sectionData.scenarios.map((scenario, index) => (
                        <tr
                          key={index}
                          className="hover:bg-[#252525]/50 transition-colors duration-200"
                        >
                          <td className="py-5 px-4 md:px-8 text-gray-400 align-top border-r-2 border-gray-800">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{scenario.consequence}</span>
                            </div>
                          </td>
                          <td className="py-5 px-4 md:px-8 text-gray-400 align-top border-r-2 border-gray-800">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{scenario.details}</span>
                            </div>
                          </td>
                          <td className="py-5 px-4 md:px-8 text-gray-400 align-top">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#8AC1C1] rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{scenario.safeguard}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Additional Text */}
              {sectionData.additionalText && (
                <div className="mb-12 space-y-6">
                  {sectionData.additionalText.map((text, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-3 h-3 bg-[#8AC1C1] rounded-full mt-1.5" />
                      <p className="text-lg text-brand-midGray leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Services */}
              {sectionData.services && (
                <div className="space-y-8">
                  {sectionData.services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-[#252525] rounded-xl p-6 border border-[#8AC1C1] hover:border-[#8AC1C1]/30 transition-colors"
                    >
                      <h3 className="text-2xl font-semibold text-[#8AC1C1] mb-4">
                        {service.title}
                      </h3>

                      {service.details && (
                        <div className="space-y-2 pl-6 border-l-2 border-[#8AC1C1]/30">
                          {service.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-[#8AC1C1] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-brand-midGray leading-relaxed">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Steps */}
              {sectionData.steps && (
                <div className="space-y-8 mt-12">
                  <h3 className="text-2xl font-semibold text-white mb-6 border-l-4 border-[#8AC1C1] pl-4">
                    {sectionData.subHeadline}
                  </h3>
                  <div className="space-y-6">
                    {sectionData.steps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-6 p-6 bg-[#252525] rounded-xl border border-[#8AC1C1] hover:border-[#8AC1C1]/30 transition-colors"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-[#8AC1C1] rounded-full flex items-center justify-center text-black font-bold text-xl">
                          {index + 1}
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-white">{step.step}</h4>
                          <p className="text-brand-midGray leading-relaxed">{step.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Action */}
              {sectionData.callToAction && (
                <div className="mt-12 text-center space-y-8">
                  <p className="text-3xl font-semibold text-white leading-relaxed">
                    {sectionData.callToAction.text}
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <a
                      href={sectionData.callToAction.button1.href}
                      className="bg-[#A9CED1] hover:bg-[#91B8BE] from-[#8AC1C1] to-[#8AC1C1] text-black py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300"
                    >
                      {sectionData.callToAction.button1.text}
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
                      className="bg-[#252525] text-brand-midGray py-2 px-4 rounded-full text-sm flex items-center space-x-2 border border-[#8AC1C1]/30"
                    >
                      <div className="w-2 h-2 bg-[#8AC1C1] rounded-full" />
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