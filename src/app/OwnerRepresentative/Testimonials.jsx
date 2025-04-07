"use client";

import { motion } from "framer-motion";
import { Info, ShieldCheck, DollarSign, Users, PhoneCall } from "lucide-react"; // Import relevant icons

const page = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Why Hire an Owner Representative?",
      description:
        "Property Ownership in NYC Comes with labyrinth regulations, tight deadlines, and hidden risks. PBS Simplifies it all.",
      icon: <Info className="text-brand-bright" />,
    },
    {
      title: "Compliance & Risk Management",
      description: "We ensure your property meets all NYC Codes.",
      icon: <ShieldCheck className="text-brand-bright" />,
    },
    {
      title: "Financial Oversight & Savings",
      description:
        "Audit contractor bids, identify tax incentives, and resolve violations before they escalate.",
      icon: <DollarSign className="text-brand-bright" />,
    },
    {
      title: "Strategic Advocacy",
      description:
        "Represent you in meetings, manage tenant disputes, and coordinate repairs and upgrades.",
      icon: <Users className="text-brand-bright" />,
    },
    {
      title: "Why Choose PBS Owner Representatives?",
      description:
        "30+ years in NYC, licensed & insured professionals, and transparent pricing.",
      icon: <ShieldCheck className="text-brand-bright" />,
    },
    {
      title: "FAQ’s",
      description:
        "Digital portal for out-of-state owners, flexible service charges, and 24/7 emergency repair management.",
      icon: <Info className="text-brand-bright" />,
    },
    {
      title: "Ready to Reclaim your Time?",
      description:
        "Stop juggling regulations and contractors. Let PBS protect your investment and peace of mind.",
      icon: <PhoneCall className="text-brand-bright" />,
    },
  ];

  return (
    <section className="bg-[#38403e] text-[#dec2e1] py-32 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-bright font-semibold uppercase tracking-wide mb-2"
          >
            Owner Representative Benefits
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Why Choose Our Services?
          </motion.h1>
          <p className="text-brand-midGray mt-4">
            Discover how we can simplify property management in NYC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-brand-dark1 rounded-lg p-6 shadow-md border border-[#8AC1C1]  hover:border-[#8AC1C1] transition-all duration-300 text-center flex flex-col justify-center items-center gap-8"
            >
              <div className="mb-4 text-2xl">{feature.icon}</div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h2>
                <p className="text-brand-midGray">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;