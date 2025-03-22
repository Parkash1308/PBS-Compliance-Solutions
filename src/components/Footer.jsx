import CustomImage from "@/app/CustomImage";

/**
 * @typedef {Object} MenuSection
 * @property {string} title - The title of the menu section
 * @property {string[]} links - Array of link names in this section
 */

/**
 * Footer Component
 *
 * A responsive website footer that displays navigation links, a subscription form,
 * and copyright information. Features include:
 * - Responsive grid layout that adapts to different screen sizes
 * - Multiple menu sections organized in columns
 * - Email subscription form with validation
 * - Company branding with logo
 * - Copyright information that automatically updates with the current year
 * - Privacy and terms links
 *
 * The component is structured in three main sections:
 * 1. Top section with menu columns and subscription form
 * 2. Divider for visual separation
 * 3. Bottom section with logo, copyright, and privacy links
 *
 * @returns {JSX.Element} The rendered Footer component
 */
const Footer = () => {
  /**
   * Menu data structure defining the sections and links in the footer
   * Each section has a title and an array of link names
   *
   * @type {MenuSection[]}
   */
  const menu = [
    {
      title: "Useful Links",
      links: [
        "About Us",
        "Contact Us",
        "FAQs",
        "Terms of Service",
        "Privacy Policy",
      ],
    },
    {
      title: "Careers",
      links: ["Blog", "Press", "Partnerships", "Support", "Help Center"],
    },
    {
      title: "Resources",
      links: ["Events", "Community", "Social Media"],
    },
    {
      title: "Services & Solutions",
      links: ["Alerts", "Property Management", "Property Development"],
    },
  ];

  /**
   * Commented out background image implementation
   * Preserved for potential future use
   *
   * <div className="text-white py-16 relative bg-cover bg-center"
   * style={{
   *   backgroundImage: `url('/PBS Assets/Brand Language/sky-scraper-building-hong-kong-cityscape.jpg')`,
   *   // Mobile image as default
   * }}>
   * Add overlay for better text contrast
   * <div className="absolute inset-0 bg-black/50 z-0"></div>
   * <div className="container mx-auto px-8 sm:px-0 relative z-10">
   */

  return (
    <div className="bg-brand-gray1 text-white py-16 ">
      <div className="md:w-[90%] mx-auto">
        <div className="md:w-[80vw] lg:w-[85vw] mx-auto lg:mx-0">
          {/* Top Section - Menu Columns and Subscription Form */}
          <div className="container mx-auto px-[75px] flex flex-col xl:flex-row justify-between gap-10 ">
            {/* Menu Columns - Responsive Grid Layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {menu.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                  <ul className="space-y-2 text-gray-400">
                    {section.links.map((link, index) => (
                      <li
                        key={index}
                        className="hover:text-white transition duration-300"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Subscribe Section - Hidden on medium screens, visible on small and large screens */}
            <div className="flex flex-col items-center md:items-start mx-auto my-8 hidden md:block lg:hidden xl:block">
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Join our community to receive updates
              </p>
              {/* Email Subscription Form */}
              <form className="flex items-center w-full max-w-md ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-full bg-gray-800 text-white focus:outline-none"
                  aria-label="Email address"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-brand-green3 text-white rounded-r-full hover:bg-blue-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-2">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>
          </div>

          {/* Divider - Visual separator between top and bottom sections */}
          <div className="border-t border-gray-700 my-4"></div>

          {/* Bottom Section - Logo, Copyright, and Privacy Links */}
          <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
            {/* Logo - Hidden on mobile, visible on larger screens */}
            <div className="flex items-center gap-4 mb-4 md:mb-0 hidden md:block">
              <CustomImage
                src="/PBS Assets/Brand Language/Steel Mockup.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-[150px]"
              />
            </div>

            {/* Copyright Notice - Automatically updates with current year */}
            <p className="text-center text-sm text-brand-green2 ">
              © {new Date().getFullYear()} PBS NYC. All rights reserved
            </p>

            {/* Social Icons - Commented out but preserved for future use
            <div className="flex items-center gap-4 text-gray-400">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-white transition duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div> */}

            {/* Privacy Links - Terms, Privacy, and Cookie policies */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-white transition duration-300"
                aria-label="View Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition duration-300"
                aria-label="View Terms of Service"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition duration-300"
                aria-label="View Cookie Policy"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
