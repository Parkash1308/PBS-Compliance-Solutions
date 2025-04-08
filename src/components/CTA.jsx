import { Button } from "@/components/ui/button";

const CTA = ({ text, href, styling = "w-[70%]" }) => {
  return (
    <Button
      className={`bg-[#7af8c4] hover:bg-[#7af8c4] text-black font-semibold py-3 px-4 md:px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-row items-center justify-center gap-2 mt-10 cursor-pointer ${styling} w-full md:w-auto`} // Adjusted width and padding
      onClick={() => (window.location.href = href)}
    >
      <span className="text-base md:text-lg text-center sm:text-left whitespace-nowrap">{text || "Get Started Now"}</span> {/* Adjusted text size and added whitespace-nowrap */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-1"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </Button>
  );
};

export default CTA;