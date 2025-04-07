"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Building, FileText, Rocket, Home } from "lucide-react";
import ExpandableSections from "./ExpandableSections"; // Import ExpandableSections

const services = [
  {
    title: "Owner Representatives",
    icon: <Building className="w-12 h-12 text-[#dec2e1]" />,
    description:
      "We act as your voice in property management, advocating for your interests in compliance, inspections, and cost optimization.",
    sections: [
      "From liaising with contractors to resolving violations, we simplify complexity.",
      "Key Features:\nLocal Law Compliance: Manage deadlines for LL11, LL126, and LL152.\nCost-Saving Strategies: Negotiate contractor rates and avoid fines.\nTransparent Reporting: Real-time updates via client portal.",
    ],
    cta: "Learn more (redirect to Owner representation page)",
  },
  {
    title: "Compliance Inspection Services",
    icon: <FileText className="w-12 h-12 text-[#dec2e1]" />,
    description:
      "Stay ahead of NYC’s stringent building codes with our certified inspections for facades, elevators, gas lines, and fire safety systems.",
    sections: [
      "PBS ensures clients comply with local and state construction regulations, including managing paperwork, permits and adherence to zoning codes.",
      "PBS simplifies the regulatory process, helping clients avoid fines, delays and project interruptions through expert compliance management and guidance.",
    ],
  },
  {
    title: "Expediting Services",
    icon: <Rocket className="w-12 h-12 text-[#dec2e1]" />,
    description:
      "Fast-track permits and approvals for construction projects, renovations, and system upgrades.",
    sections: [
      "Overview:\nPBS expedites the permit approval process, providing clients with a faster route to project completion, eliminating bottlenecks, and ensuring adherence to project timelines.",
      "Key Benefits:\nSpeed: 50% faster permit approvals vs. DIY filings.\nAccuracy: Error-free submissions to avoid rejections.\nFull-Service: DOB, FDNY, DOT, and zoning filings.",
    ],
    cta: "Learn more about our range of Expediting services",
  },
  {
    title: "Property Management",
    icon: <Home className="w-12 h-12 text-[#dec2e1]" />,
    description:
      "End-to-end management for residential and commercial properties, ensuring profitability, compliance, and tenant satisfaction.",
    sections: [
      "Overview:\nEnd-to-end management for residential and commercial properties, ensuring profitability, compliance, and tenant satisfaction.",
      "Key Features:\nFinancial Oversight: Rent collection, budgeting, and reporting.\nMaintenance: 24/7 emergency repairs and preventive care.\nLegal Compliance: Lease agreements and safety audits.",
    ],
  },
];

const page = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#38403e] text-[#dec2e1]">
      <HeroSection
        heading="Your Trusted Partner in Property Compliance, Safety, and Management"
        text="At PBS, we don’t just inspect-we protect. From permits to final sign-off, our values ensure your project stays on time, on budget and above board"
        className="max-w-5xl mx-auto break-keep hyphens-none text-balance"
        headingColor="#dec2e1"
        textColor="#dec2e1"
      />

      <section className="relative py-24 px-6 md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-[url('/PBS%20Assets/better-assets/Bg/Post%202%20a.webp')] bg-cover bg-center opacity-[0.07]"></div>

        <div className="relative container mx-auto px-4 sm:px-8 md:p-16 lg:p-16 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h3 className="text-[#dec2e1]/70 font-semibold uppercase tracking-wide mb-2">
              Our Services
            </h3>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#dec2e1] mb-4">
              Comprehensive Property Services
            </h1>
            <p className="text-[#dec2e1]/70 max-w-xl mx-auto">
              From compliance to management, we deliver end-to-end solutions for your property needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:pt-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#1a1a1a] text-[#dec2e1] rounded-lg p-6 shadow-md border border-[#8AC1C1]/20 hover:border-[#8AC1C1] transition-all duration-300 text-center flex flex-col justify-center items-center gap-8 sm:w-[80%] md:w-[85%] lg:w-[90%] mx-auto"
              >
                <div className="mb-4 text-2xl">{service.icon}</div>

                <div className=" bg-[#1a1a1a] text-[#dec2e1]">
                  <h2 className="text-xl font-bold text-[#dec2e1] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-[#dec2e1]/70">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExpandableSections services={services} />
    </div>
  );
};

export default page;