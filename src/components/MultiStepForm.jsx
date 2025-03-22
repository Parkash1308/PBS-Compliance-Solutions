import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

const ProgressTracker = ({ currentStep, totalSteps, color }) => {
  const haloVariants = {
    active: {
      scale: [1, 1.8, 1],
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
    inactive: {
      scale: 1,
      opacity: 0,
    },
  };

  const markerVariants = {
    active: {
      scale: 1.1,
      backgroundColor: color,
      borderColor: color,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.3,
      },
    },
    inactive: {
      scale: 1,
      backgroundColor: "#374151",
      borderColor: "#4b5563",
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    },
  };

  return (
    <div className="w-full relative py-8 px-4">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 -translate-y-1/2" />

        {Array(totalSteps - 1)
          .fill(null)
          .map((_, index) => {
            const isCompleted = index < currentStep - 1;
            const isActive = index === currentStep - 1;

            return (
              <div
                key={index}
                className="relative z-10 flex items-center w-full"
              >
                <motion.div
                  className="absolute h-1 w-full -translate-y-1/2 top-1/2"
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  animate={{
                    width: isCompleted ? "100%" : isActive ? "100%" : "0%",
                  }}
                  transition={{
                    duration: isActive ? 0.5 : 0,
                    ease: "easeOut",
                    delay: isActive ? 0.1 : 0,
                  }}
                />

                <motion.div
                  className="w-5 h-5 rounded-full border-2 relative"
                  variants={markerVariants}
                  animate={index < currentStep ? "active" : "inactive"}
                >
                  {currentStep === index + 1 && (
                    <motion.div
                      className="absolute -inset-1 rounded-full"
                      style={{ backgroundColor: `${color}20` }}
                      variants={haloVariants}
                      animate="active"
                    />
                  )}
                </motion.div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const MultiStepForm = ({
  steps,
  onSubmit,
  buttonObj,
  inputClass,
  buttonClass,
  errorClass,
  styling,
  containerClass,
  progressLineColor = "#2ea44f",
}) => {
  const SubmitIcon = buttonObj.icon;
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleNext = () => {
    const currentField = steps[currentStep].name; // Use the explicit name field
    const value = formData[currentField] || "";

    // Validation
    const validationError = steps[currentStep].validate?.(value);
    if (validationError) {
      setError(validationError);
      return false;
    }

    setError(null);
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return true;
    }
    return true;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (currentStep === steps.length - 1) {
      // Validate final step before submission
      const currentField =
        steps[currentStep].label?.toLowerCase() || `step-${currentStep}`;
      const value = formData[currentField] || "";

      const validationError = steps[currentStep].validate?.(value);
      if (validationError) {
        setError(validationError);
        return;
      }
      onSubmit(formData);
    } else {
      handleNext();
    }
  };

  return (
    <motion.div
      className={`mx-auto p-7 bg-[#141414] flex flex-col justify-around ${
        styling ? styling : ""
      } ${containerClass ? containerClass : ""}`}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-4 sm:mx-auto md:mx-0 lg:mr-[300px] lg:w-full">
        <form className="space-y-6" onSubmit={handleFormSubmit} noValidate>
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <Input
              type={steps[currentStep].type}
              placeholder={steps[currentStep].placeholder}
              className={`text-white  w-full ${inputClass ? inputClass : ""}`}
              value={
                formData[
                  steps[currentStep].name ||
                    steps[currentStep].label?.toLowerCase() ||
                    `step-${currentStep}`
                ] || ""
              }
              onChange={(e) =>
                handleChange(
                  steps[currentStep].name ||
                    steps[currentStep].label?.toLowerCase() ||
                    `step-${currentStep}`,
                  e.target.value
                )
              }
              // Spread additional input props
              {...steps[currentStep].inputProps}
            />

            {error && (
              <p
                className={`text-red-500 text-sm mt-1 ${
                  errorClass ? errorClass : ""
                }`}
              >
                {error}
              </p>
            )}
          </motion.div>
          <div className="flex justify-between">
            <Button
              type="button"
              variant="ghost"
              className="text-gray-300 hover:bg-gray-700"
              disabled={currentStep === 0}
              onClick={() => setCurrentStep((s) => s - 1)}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button
                type="submit"
                variant="secondary"
                className={`bg-green-600 hover:bg-brand-light ${
                  buttonClass ? buttonClass : ""
                }`}
              >
                {buttonObj.text}
                {SubmitIcon && <SubmitIcon className="ml-2 h-4  w-4" />}
              </Button>
            ) : (
              <Button
                type="submit"
                variant="ghost"
                className="text-gray-300 hover:bg-brand-green1"
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
        <ProgressTracker
          color={progressLineColor}
          currentStep={currentStep}
          totalSteps={steps.length}
        />
      </div>
    </motion.div>
  );
};

export default MultiStepForm;
