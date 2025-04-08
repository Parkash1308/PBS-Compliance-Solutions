"use client";

import CustomImage from "@/app/CustomImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Alerts = () => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const formSteps = [
    {
      type: "text",
      name: "full_name",
      placeholder: "Enter Full Name",
      label: "Full Name",
      inputProps: {
        required: true,
        pattern: "[A-Za-z ]{3,}",
        title: "Please enter at least 3 characters",
        autoComplete: "name",
      },
    },
    {
      type: "text",
      name: "company_name",
      placeholder: "Enter Company Name",
      label: "Company Name",
      inputProps: {
        required: true,
        autoComplete: "organization",
      },
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter Your Email",
      inputProps: {
        required: true,
        autoComplete: "email",
      },
    },
    {
      type: "tel",
      name: "phone",
      placeholder: "Enter Your Phone",
      inputProps: {
        required: true,
        pattern: "[0-9]{10}",
        title: "Please enter a 10-digit phone number",
      },
    },
  ];

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    if (imageRef.current) {
      tl.from(imageRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
      });
    }

    if (contentRef.current) {
      tl.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, "-=0.4");
    }

    if (formRef.current) {
      tl.from(
        formRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
        },
        "-=0.4"
      );
    }
  }, []);

  const handleNext = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < formSteps.length - 1) {
      handleNext();
    } else {
      console.log("Form Data:", formData);
      // Handle form submission logic here
    }
  };

  return (
    <div className="bg-[#38403e] text-white py-16" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Building Image */}
          <div ref={imageRef} className="lg:w-1/2 relative">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[#7af8c4] bg-gradient-to-br from-[#141414]/30 to-[#8AC1C1]/20">
              <CustomImage
                src="/PBS%20Assets/better-assets/Images%20Without%20Bg/Facebook%20Cover.webp"
                height={100}
                width={100}
                alt="Property building"
                className="w-auto h-full rounded-2xl mix-blend-luminosity opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Content and Form */}
          <div className="lg:w-1/2">
            <div ref={contentRef} className="mb-8">
              {/* Vertical Lines */}
              <div className="flex items-start mb-4">
                <div className="w-4 bg-[#8AC1C1] h-24 mr-4"></div> {/* Increased height to h-24 */}
                <div>
                  {/* Heading Section */}
                  <div className="mb-2">
                    <p className="text-lg text-[#8CBEBF] mb-1">Never Miss a Critical step for property again</p>
                    <h1 className="text-5xl font-bold text-white mb-6">Alert System:</h1>
                  </div>

                  {/* Description Section */}
                  <div className="text-[#8CBEBF] mb-8">
                    <p className="text-base leading-relaxed">
                      Revolutionizing the industry by providing access to every demographic of data
                      in real-time. Our enhanced alert system covers all relevant departments in
                      New York City to ensure you never miss any critical step again. Free for the first
                      3 months
                    </p>
                  </div>
                </div>
              </div>

              {/* Separator Line */}
              <div className="w-16 h-1 bg-[#7af8c4] mb-8"></div>

              {/* Call to Action */}
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 mb-8">
                <div className="flex flex-col">
                  <div className="font-bold text-xl text-white">SIGN UP</div>
                  <div className="font-bold text-xl text-white">BELOW</div>
                </div>
                <a href="/alert" className="bg-[#7af8c4] text-[#38403e] font-medium px-6 py-3 rounded-full inline-flex items-center space-x-2 w-fit hover:bg-[#8AC1C1]/90 transition-colors">
                  <span>Get your Property registered for Free</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Form Section */}
            <div ref={formRef} className="bg-[#272b2a] rounded-lg shadow-lg p-8 w-full md:w-3/4 lg:w-3/4">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type={formSteps[currentStep].type}
                    name={formSteps[currentStep].name}
                    placeholder={formSteps[currentStep].placeholder}
                    className="w-full bg-transparent border-0 border-b-2 border-[#8AC1C1]/30 text-xl text-white p-2 focus:outline-none focus:border-[#8AC1C1] placeholder-gray-500"
                    required={formSteps[currentStep].inputProps.required}
                    {...formSteps[currentStep].inputProps}
                    value={formData[formSteps[currentStep].name] || ""}
                    onChange={handleChange}
                  />
                </div>

                {/* Progress Indicator */}
                <div className="mt-10 mb-4 relative">
                  <div className="h-1 bg-[#7af8c4]/30 rounded-full relative">
                    <div
                      className="absolute h-1 bg-[#7af8c4] rounded-full"
                      style={{ width: `${(currentStep / (formSteps.length - 1)) * 100}%` }}
                    ></div>
                    {/* Bullet Points */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 left-0 w-4 h-4 ${currentStep >= 0 ? 'bg-white' : 'bg-[#7af8c4]/30'} rounded-full border-2 border-[#8AC1C1]`}></div>
                    <div className={`absolute top-1/2 transform -translate-y-1/2 left-1/3 w-4 h-4 ${currentStep >= 1 ? 'bg-white' : 'bg-[#7af8c4]/30'} rounded-full border-2 border-[#8AC1C1]`}></div>
                    <div className={`absolute top-1/2 transform -translate-y-1/2 left-2/3 w-4 h-4 ${currentStep >= 2 ? 'bg-white' : 'bg-[#7af8c4]/30'} rounded-full border-2 border-[#8AC1C1]`}></div>
                    <div className={`absolute top-1/2 transform -translate-y-1/2 right-0 w-4 h-4 ${currentStep >= 3 ? 'bg-white' : 'bg-[#7af8c4]/30'} rounded-full border-2 border-[#8AC1C1]`}></div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className={`text-sm text-[#8AC1C1] ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentStep === 0}
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className={`text-sm text-[#8AC1C1]`}
                  >
                    {currentStep === formSteps.length - 1 ? "Submit" : "Next →"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;