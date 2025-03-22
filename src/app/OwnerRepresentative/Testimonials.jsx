"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react"; // Import the User icon

/**
 * @typedef {Object} Testimonial
 * @property {number} id - Unique identifier for the testimonial
 * @property {string} text - The testimonial content/quote from the client
 * @property {string} name - Client's name
 * @property {string} role - Client's job title and company
 * @property {number} rating - Client's rating (1-5)
 * @property {string} image - Path to client's profile image (currently using User icon as fallback)
 */

/**
 * Array of testimonial data to be displayed in the infinite scroll carousel
 * @type {Testimonial[]}
 */
const testimonials = [
  {
    id: 1,
    text: "The team delivered exceptional results on our commercial complex project. Their attention to detail and commitment to quality is unmatched.",
    name: "Alexey Petrov",
    role: "CEO, StroyInvest",
    rating: 5,
    image: "/path/to/client1.jpg",
  },
  {
    id: 2,
    text: "From start to finish, the construction process was seamless. Their ability to meet tight deadlines without compromising quality is remarkable.",
    name: "Irina Sokolova",
    role: "Project Manager, UrbanDevelop",
    rating: 5,
    image: "/path/to/client2.jpg",
  },
  {
    id: 3,
    text: "Their innovative approach to sustainable construction helped us achieve LEED Gold certification. A truly forward-thinking partner.",
    name: "Dmitry Volkov",
    role: "CFO, EcoBuild Solutions",
    rating: 5,
    image: "/path/to/client3.jpg",
  },
  {
    id: 4,
    text: "The safety standards maintained throughout our high-rise project were exemplary. Zero incidents in 18 months of construction.",
    name: "Olga Ivanova",
    role: "Director, SkyCity Developments",
    rating: 5,
    image: "/path/to/client4.jpg",
  },
  {
    id: 5,
    text: "Unparalleled expertise in heritage building restoration. They preserved historical elements while meeting modern safety codes.",
    name: "Mikhail Petrenko",
    role: "Chairman, Cultural Heritage Trust",
    rating: 5,
    image: "/path/to/client5.jpg",
  },
  {
    id: 6,
    text: "Their 24/7 project management team ensured smooth coordination between multiple contractors. Communication was always clear and timely.",
    name: "Anastasia Kuznetsova",
    role: "Operations Head, MegaCorp Constructions",
    rating: 5,
    image: "/path/to/client6.jpg",
  },
];

/**
 * Testimonials component that displays client testimonials in an infinite scrolling carousel.
 * Features include:
 * - Animated entrance for section headings and testimonial cards
 * - Infinite horizontal scrolling animation
 * - Responsive design for different screen sizes
 * - Visual enhancements like glowing borders and hover effects
 *
 * @returns {JSX.Element} The testimonials section component
 */
const Testimonials = () => {
  /**
   * Animation variants for testimonial cards using Framer Motion
   * @type {Object}
   */
  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#171717] text-[#E5E7EB] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Heading with animated entrance */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-bright font-semibold uppercase tracking-wide mb-2"
          >
            Beyond Expectations
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            What Our Clients Say
          </motion.h1>
          <p className="text-brand-midGray mt-4">
            We drive remarkable construction experiences that enable success
            stories and empower businesses.
          </p>
        </div>

        {/* Infinite Scrolling Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex flex-row gap-8 animate-scroll">
            {/* Map through testimonials array and create cards with staggered animations */}
            {[...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={testimonialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-xl p-6 md:p-8 shadow-lg 
                  bg-[#1A1A1A] border border-[#2d2d2d] hover:border-brand-bright
                  transition-all duration-300 min-w-[90vw] md:min-w-[600px]
                  before:absolute before:inset-0 before:border before:border-blue-400/20
                  before:rounded-xl before:pointer-events-none"
              >
                {/* Blue Edge Glow Effect - Creates a subtle inner shadow */}
                <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_15px_rgba(59,130,246,0.2)] pointer-events-none" />

                {/* Testimonial Quote Mark */}
                <div className="text-brand-bright text-3xl md:text-4xl mb-4">
                  "
                </div>

                {/* Testimonial Text Content */}
                <p className="text-brand-midGray mb-6 text-base md:text-lg">
                  {testimonial.text}
                </p>

                {/* Client Information and Rating */}
                <div className="flex items-center gap-4">
                  {/* User Icon as Placeholder for Client Image */}
                  <User size={48} className="text-green-500 md:w-16 md:h-16" />

                  <div>
                    {/* Client Name */}
                    <h4 className="font-bold text-white text-lg md:text-xl">
                      {testimonial.name}
                    </h4>

                    {/* Client Role/Position */}
                    <p className="text-sm md:text-md text-brand-midGray">
                      {testimonial.role}
                    </p>

                    {/* Star Rating Display */}
                    <div className="flex items-center gap-2 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-brand-bright" // Filled star color
                              : "text-[#2d2d2d]" // Empty star color
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for infinite scrolling animation
       * Uses CSS keyframes to create a continuous horizontal scroll effect
       * The animation moves the content from right to left and repeats infinitely
       */}
      <style jsx>{`
        .animate-scroll {
          animation: scrollLeft linear infinite;
          animation-duration: 20s; /* Controls the speed of the scrolling */
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(
              -50%
            ); /* Moves content halfway to create seamless loop */
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
