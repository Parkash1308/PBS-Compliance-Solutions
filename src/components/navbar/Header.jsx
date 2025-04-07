"use client";

import CustomImage from "@/app/CustomImage";
import { useMenu } from "@/context/MenuContext";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const { isOpen, setIsOpen } = useMenu();
  const router = useRouter();
  const ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!ref.current || !imageRef.current) return;

    gsap.to(ref.current, {
      height: "80px",
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=200",
        scrub: true,
      },
    });

    gsap.to(imageRef.current, {
      scale: 0.7,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=200",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="sticky top-0 right-0 z-50 w-full bg-brand-gray1 shadow-md">
      <motion.div
        ref={ref}
        className="flex justify-left items-center h-[80px] md:h-[100px] sticky top-0" // Adjusted height for responsiveness
        initial={{ height: "100px" }}
      >
        <div
          className="cursor-pointer p-2 md:p-4" // Adjusted padding for responsiveness
          onClick={() => {
            setIsOpen(false);
            router.push("/");
          }}
        >
          <motion.div ref={imageRef} initial={{ scale: 1 }}>
            <CustomImage
              src="/PBS Assets/Brand Language/Logo 2.png"
              width={180} // Adjusted width for responsiveness
              height={180} // Adjusted height for responsiveness
              alt="Website Logo"
              className="h-auto"
            />
          </motion.div>
        </div>
      </motion.div>
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;