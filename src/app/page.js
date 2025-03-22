// Home Page
"use client";

import AboutCompany from "@/home-page/AboutCompany";
import Alerts from "@/home-page/Alerts";
import Services from "@/home-page/Services";
import Solutions from "@/home-page/Solutions";
import Hero from "../home-page/Hero";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const stagger = {
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const fadeInUpItem = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

export default function Home() {
  return (
    <>
      <div className="bg-[#141414] ">
        <div className="md:w-[90%] mx-auto">
          {/* <Hero isMenuOpen={isOpen} /> */}
          <Hero />

          
          <Alerts />

          <Services />

          <Solutions />

          <AboutCompany />
        </div>
      </div>
    </>
  );
}
