import { Poppins } from "next/font/google";
import localFont from "next/font/local"; // ✅ Import correctly

export const gnuolane = localFont({
  src: [
    {
      path: "../../public/fonts/gnuolane.ttf", // Adjust path based on your project
      style: "normal",
    },
  ],
  variable: "--font-gnuolane", // Creates a CSS variable
});

export const conthrax = localFont({
  src: [
    {
      path: "../../public/fonts/conthrax.ttf", // Adjust path based on your project
      style: "normal",
    },
  ],
  variable: "--font-conthrax", // Creates a CSS variable
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap", // Ensures smooth loading without layout shift
  variable: "--font-poppins", // Creates a CSS variable for Tailwind
});
