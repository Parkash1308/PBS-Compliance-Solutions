/**
 * Heading Component
 *
 * A reusable heading component that displays a main title with an optional subtitle.
 * Features include:
 * - Vertical green accent bar for visual emphasis
 * - Customizable main heading text
 * - Optional subtitle text
 * - Custom styling options via className prop
 * - Responsive text sizing (larger on desktop)
 * - Left-aligned text with consistent spacing
 *
 * The component creates a visually distinctive section header with a vertical green
 * accent bar on the left side, followed by the heading content.
 *
 * @param {Object} props - Component props
 * @param {string} props.main - The main heading text (required)
 * @param {string} [props.subpart] - Optional subtitle text displayed above the main heading
 * @param {string} [props.styling] - Optional CSS classes to apply to the container element
 * @returns {JSX.Element} The rendered heading component
 *
 * @example
 * // Basic usage with just a main heading
 * <Heading main="Our Services" />
 *
 * @example
 * // With subtitle and custom styling
 * <Heading
 *   main="Contact Us"
 *   subpart="Get in Touch"
 *   styling="my-8 bg-gray-100 p-4 rounded-lg"
 * />
 */
const Heading = ({ main, subpart, styling }) => {
  return (
    <div
      className={`${styling ? styling : ""} xl:mb-10 flex items-start flex-col`}
    >
      <div className="flex h-full">
        {/* Vertical accent bar - creates visual emphasis */}
        <div className={`h-[100px] bg-green-600 text-green-600`}>
          <p>&nbsp;&nbsp;&nbsp;</p>
        </div>

        {/* Heading content container */}
        <div className="pl-5 text-start">
          {/* Optional subtitle - only rendered if provided */}
          {subpart && <p className="font-conthrax text-lg mb-3">{subpart}</p>}

          {/* Main heading - uses responsive text sizing */}
          <h1 className="text-5xl md:text-6xl font-conthrax font-bold mb-10">
            {main}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Heading;
