"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";

const page = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ahmad Sukardi",
      title: "Custom SEO Services",
      description:
        "Custom, organic SEO services that include audits, on-page search engine optimization.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Andrew Silabus",
      title: "SEO Website Design",
      description:
        "1st on the List provides highly effective PPC advertising for every budget including Google PPC Ads, Bing PPC, and more.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Zahra Agustin",
      title: "SEO Consulting",
      description:
        "B2B SEO is the process of generating valuable inbound leads from other businesses.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Ahmad Sukardi",
      title: "Custom SEO Services",
      description:
        "Custom, organic SEO services that include audits, on-page search engine optimization.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png", // Replace with actual image URL
    },
    {
      id: 5,
      name: "Andrew Silabus",
      title: "SEO Website Design",
      description:
        "1st on the List provides highly effective PPC advertising for every budget including Google PPC Ads, Bing PPC, and more.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png", // Replace with actual image URL
    },
    {
      id: 6,
      name: "Zahra Agustin",
      title: "SEO Consulting",
      description:
        "B2B SEO is the process of generating valuable inbound leads from other businesses.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png", // Replace with actual image URL
    },
    {
      id: 7,
      name: "Ahmad Sukardi",
      title: "Custom SEO Services",
      description:
        "Custom, organic SEO services that include audits, on-page search engine optimization.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png", // Replace with actual image URL
    },
    {
      id: 8,
      name: "Andrew Silabus",
      title: "SEO Website Design",
      description:
        "1st on the List provides highly effective PPC advertising for every budget including Google PPC Ads, Bing PPC, and more.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png", // Replace with actual image URL
    },
    {
      id: 9,
      name: "Zahra Agustin",
      title: "SEO Consulting",
      description:
        "B2B SEO is the process of generating valuable inbound leads from other businesses.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png", // Replace with actual image URL
    },
    {
      id: 10,
      name: "Zahra Agustin",
      title: "SEO Consulting",
      description:
        "B2B SEO is the process of generating valuable inbound leads from other businesses.",
      image:
        "/PBS%20Assets/Stationery/a6a8e2b7-4d7c-4f3b-bf09-915bd686df24%20copy.png", // Replace with actual image URL
    },
  ];

  return (
    <div>
      <HeroSection
        heading="Our Team"
        text="Meet the dream team of digital marketing."
      />
      <div className="bg-[#101010] py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto">
          <motion.div
            className="text-center my-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
          >
            <h3 className="text-brand-bright font-semibold uppercase tracking-widest mb-2">
              About
            </h3>
            <h1 className="text-5xl md:text-7xl font-gnuolane text-white md:w-1/2 mx-auto">
              The dream team of digital marketing.
            </h1>
            <p className="text-brand-midGray mt-4">
              We Grow Businesses Online. Period.
            </p>
          </motion.div>

          {/* Updated Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-48">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="relative bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2d545e] flex flex-col items-center w-full min-h-[500px]"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: index * 0.1 // Staggered animation delay
                }}
              >
                <div
                  className="w-full h-[300px] bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url('${member.image}')` }}
                ></div>

                <div className="p-6 text-start flex flex-col items-center py-8 w-full">
                  <span className="text-lg pl-8 text-brand-bright font-bold w-full my-2">
                    0{member.id}
                  </span>
                  <h2 className="text-xl font-bold text-brand-light mb-2 w-full">
                    {member.title}
                  </h2>
                  <p className="text-sm text-brand-midGray mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <span className="text-sm text-brand-light font-semibold border-t border-brand-bright pt-2">
                    {member.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;