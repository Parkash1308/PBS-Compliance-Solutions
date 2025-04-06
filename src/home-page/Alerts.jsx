"use client";

import CustomImage from "@/app/CustomImage";
import CTA from "@/components/CTA";
import Heading from "@/components/Heading";
import MultiStepForm from "@/components/MultiStepForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Alerts = () => {
  const ref = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  const formSteps = [
    {
      type: "text",
      name: "full_name",
      placeholder: "Enter full name",
      label: "Full Name",
      inputProps: {
        required: true,
        pattern: "[A-Za-z ]{3,}",
        title: "Please enter at least 3 characters",
        autoComplete: "name",
      },
      validate: (value) => {
        if (!value) return "This field is required";
        if (!/^[A-Za-z ]{3,}$/.test(value)) return "Invalid name format";
        return null;
      },
    },
    {
      type: "text",
      name: "company name",
      placeholder: "Enter company name",
      label: "Company Name",
      inputProps: {
        required: true,
        autoComplete: "organization",
      },
      validate: (value) => {
        if (!value) return "Company name is required";
        return null;
      },
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      inputProps: {
        required: true,
        autoComplete: "email",
      },
      validate: (value) => {
        if (!value) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email format";
        return null;
      },
    },
    {
      type: "tel",
      name: "phone",
      placeholder: "Enter your phone",
      inputProps: {
        required: true,
        pattern: "[0-9]{10}",
        title: "Please enter a 10-digit phone number",
      },
    },
  ];

  const button = {
    text: "Submit",
    icon: Send,
  };

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    if (leftRef.current) {
      tl.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
      });
    }

    if (textRef.current) {
      tl.from(
        textRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
        },
        "-=0.4"
      );
    }

    if (formRef.current) {
      tl.from(
        formRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
        },
        "-=0.4"
      );
    }
  }, []);

  return (
    <div className="bg-[#141414] py-16" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:justify-center gap-16">
          <div ref={leftRef} className="lg:w-1/2 relative hidden lg:block">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[#dec2e1]/20 bg-gradient-to-br from-[#141414]/30 to-[#dec2e1]/20">
              <CustomImage
                src="/PBS%20Assets/better-assets/Images%20Without%20Bg/Facebook%20Cover.webp"
                height={100}
                width={100}
                alt="Notification alerts interface"
                className="w-auto h-full rounded-2xl mix-blend-luminosity opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div ref={textRef} className="mb-8">
              <Heading
                main="Alert System:"
                subpart="Never Miss a Critical step for property again"
                styling="mb-6 text-[#dec2e1]"
              />
              <div className="text-[#dec2e1]/70 space-y-6">
                <p className="text-lg leading-relaxed">
                  Revolutionizing the industry by providing access to every
                  demographic of data in real-time. Our enhanced alert system
                  covers all relevant departments in New York City to ensure you
                  never miss any critical step again. Free for the first 3
                  months
                </p>
                <div className="relative flex items-center gap-4 pt-6">
                  <div className="relative">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dec2e1]/20 opacity-75"></span>
                    <span
                      className="relative inline-block text-5xl font-bold animate-bounce text-[#dec2e1]"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </div>
                  <span className="text-lg font-semibold bg-gradient-to-r from-[#dec2e1] to-[#dec2e1] bg-clip-text text-transparent">
                    SIGN UP BELOW
                  </span>
                </div>
              </div>
              <CTA
                text="Get your Property registered for Free"
                href="/alert"
                styling="w-full h-12 mt-8 bg-[#dec2e1] hover:bg-[#dec2e1]/80 text-[#141414]"
              />
            </div>

            <div ref={formRef}>
              <MultiStepForm
                steps={formSteps}
                buttonObj={button}
                onSubmit={(data) => console.log(data)}
                containerClass="space-y-6 relative z-10 backdrop-blur-lg rounded-3xl p-6 md:p-8 transition-all duration-300 group/form"
                inputClass="w-full rounded-xl text-[#dec2e1] placeholder-[#dec2e1]/70 focus:border-[#dec2e1] focus:ring-2 focus:ring-[#dec2e1] transition-all"
                buttonClass="w-full flex items-center justify-center gap-2 bg-[#dec2e1] hover:bg-[#dec2e1]/80 text-[#141414] font-semibold px-8 py-4 rounded-xl transition-colors group-hover/form:shadow-lg group-hover/form:shadow-[#dec2e1]/20"
                errorClass="text-[#dec2e1]/70 mt-2 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;