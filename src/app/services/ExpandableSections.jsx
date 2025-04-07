"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CustomImage from "../CustomImage";
import { mainSections, sections } from "./data";

const SectionList = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const image = new Image();
    image.src = "/PBS%20Assets/better-assets/Bg/Post%202.webp";
    image.onload = () => {
      setBgImage(image.src);
    };
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative bg-[#38403e] text-[#dec2e1] py-12 px-4 md:py-16 md:px-12 lg:px-24">
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: bgImage
            ? `url(${bgImage})`
            : "url('/PBS%20Assets/placeholder.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: bgImage ? 0.07 : 0,
        }}
      ></div>

      <div className="relative container mx-auto flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-center my-12 xl:mb-8 py-6">
            <div className="text-[#dec2e1] flex flex-col md:flex-row items-center justify-center gap-2 mb-4 md:mb-6">
              <h3 className="text-4xl md:text-5xl font-conthrax sm:w-5/6 md:w-[70%] mx-auto text-[#dec2e1]">
                We Serve Across NYC’s Departments
              </h3>
            </div>
            <h1 className="text-[#dec2e1]/70 text-lg font-gnuolane uppercase tracking-widest mb-2">
              We don't only deal with these departments for your Alerts but we also deal with these
              departments for your permitting and inspection work.
            </h1>
          </div>
        </motion.div>

        <div
          className={`container ${expandedId ? "2xl:ml-24" : "mx-auto"
            } space-y-8 sm:space-y-16 w-[90%] xl:w-[85%] mb-24 lg:my-16`}
        >
          <AnimatePresence>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                layout
                onClick={() => toggleExpand(section.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative cursor-pointer bg-[#38403e] rounded-2xl shadow-2xl ${expandedId === section.id ? "border-[#8AC1C1]" : ""
                  } sm:w-[80%] md:w-[65%] lg:w-[80%] xl:w-[75%] mx-auto`}
              >
                <motion.div
                  layout
                  className={`flex flex-col lg:flex-row items-center md:mx-auto justify-center xl:gap-16 bg-[#8AC1C1]] rounded-lg shadow-lg overflow-hidden rounded-full`}
                >
                  <div className="w-full lg:w-2/5 2xl:w-1/5 h-48 lg:h-64">
                    <CustomImage
                      src={section.image}
                      width={100}
                      height={100}
                      alt={section.title}
                      className="w-full h-full object-contain lg:object-cover 2xl:object-contain p-6 2xl:p-0"
                    />
                  </div>

                  <div className="w-full lg:w-3/5 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                    <div className="cursor-pointer">
                      <h2 className="text-xl md:text-2xl font-bold text-[#dec2e1] mb-3 md:mb-4">
                        {section.title}
                      </h2>
                      <p className="text-[#dec2e1]/70 mb-4 md:mb-6 text-sm md:text-base">
                        {section.description}
                      </p>
                      <button className="text-[#dec2e1] font-semibold hover:underline">
                        {expandedId === section.id ? "Collapse" : "Read more"}
                      </button>
                    </div>
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {expandedId === section.id && (
                    <motion.div
                      layout="position"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.1 },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.2 },
                      }}
                      className="mt-8 md:my-32 xl:my-16 container ml-4 sm:ml-8 md:ml-[-10%] xl:ml-10 2xl:ml-16 w-[105%] sm:w-[115%] md:w-[120%] xl:w-[120%] overflow-hidden"
                    >
                      <div className="bg-[#2d3230] p-6 rounded-lg border-l-4 border-[#dec2e1] shadow-xl">
                        <motion.div
                          layout="position"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-8"
                        >
                          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <div className="flex items-center gap-3 mb-6">
                              {React.createElement(mainSections[index].overview.icon, {
                                className: "w-8 h-8 text-[#dec2e1]",
                              })}
                              <h2 className="text-2xl font-bold text-[#dec2e1]">
                                {mainSections[index].overview.title}
                              </h2>
                            </div>
                            <p className="text-[#dec2e1]/70 leading-relaxed">
                              {mainSections[index].overview.content}
                            </p>
                          </motion.div>
                          <motion.div
                            layout="position"
                            className="mb-16"
                            viewport={{
                              once: true,
                              margin: "0px 0px -100px 0px",
                            }}
                          >
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`mb-16 `}>
                              <div className="flex items-center gap-3 mb-6">
                                {React.createElement(mainSections[index].whyImportant.icon, {
                                  className: "w-8 h-8 text-[#dec2e1]",
                                })}
                                <h2 className="text-2xl font-bold text-[#dec2e1]">
                                  {mainSections[index].whyImportant.title}
                                </h2>
                              </div>

                              <ul className="space-y-4 text-[#dec2e1]/70">
                                {mainSections[index].whyImportant.items.map((item, index) => (
                                  <li key={index} className="flex gap-3">
                                    <span className="text-[#dec2e1]">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`mb-16 `}>
                              <div className="flex items-center gap-3 mb-6">
                                {React.createElement(mainSections[index].process.icon, {
                                  className: "w-8 h-8 text-[#dec2e1]",
                                })}
                                <h2 className="text-2xl font-bold text-[#dec2e1]">
                                  {mainSections[index].process.title}
                                </h2>
                              </div>

                              <div className="space-y-8">
                                {mainSections[index].process.steps.map((step) => (
                                  <div key={step.step} className="flex gap-4">
                                    <div className="text-lg pl-2 text-[#dec2e1]/70 rounded-full ">{step.step}</div>
                                    <div>
                                      <h3 className="text-[#dec2e1] font-semibold mb-2">{step.title}</h3>
                                      <p className="text-[#dec2e1]/70">{step.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`mb-16 py-6 rounded-xl bg-[#2d3230]`}>
                              <div className="flex items-center gap-3 mb-6">
                                {React.createElement(mainSections[index].regulations.icon, {
                                  className: "w-8 h-8 text-[#dec2e1]",
                                })}
                                <h2 className="text-2xl font-bold text-[#dec2e1]">
                                  {mainSections[index].regulations.title}
                                </h2>
                              </div>

                              <ul className="space-y-3 text-[#dec2e1]/70">
                                {mainSections[index].regulations.items.map((item, index) => (
                                  <li key={index}>• {item}</li>
                                ))}
                              </ul>
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`mb-16 `}>
                              <div className="flex items-center gap-3 mb-6 ">
                                {React.createElement(mainSections[index].faq.icon, {
                                  className: "w-8 h-8 text-[#dec2e1]",
                                })}
                                <h2 className="text-2xl font-bold text-[#dec2e1]">
                                  {mainSections[index].faq.title}
                                </h2>
                              </div>

                              <div className="space-y-4 p-14 pb-0">
                                {mainSections[index].faq.items.map((faq, index) => (
                                  <div key={index} className="border-b border-[#8AC1C1] pb-4">
                                    <h3 className="text-[#dec2e1] font-semibold mb-2">{faq.question}</h3>
                                    <p className="text-[#dec2e1]/70">{faq.answer}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SectionList;