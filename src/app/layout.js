"use client";

import CustomErrorBoundary from "@/components/ErrorBoundary";
import Footer from "@/components/Footer";
import Header from "@/components/navbar/Header";
import PageLoader from "@/components/PageLoader";
import SplashScreen from "@/components/SplashScreen";
import { motion } from "framer-motion";

import { MenuProvider } from "@/context/MenuContext";
import { conthrax, gnuolane, poppins } from "@/lib/fonts";
import { Suspense } from "react";
import "./globals.css";

// export const metadata = {
//   title: "PBS | Proactive Building Solutions",
//   description: "Proactive Building Solutions",
//   icons: {
//     icon: "/PBS Assets/Brand Language/Steel Mockup.png", // Path to the favicon in the public folder
//     apple: "/PBS Assets/Brand Language/Steel Mockup.png", // Path to the apple icon in the public folder
//     ms: "/PBS Assets/Brand Language/Steel Mockup.png", // Path to the windows icon in the public folder
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PBS | Proactive Building Solutions</title>
        <meta name="description" content="Proactive Building Solutions" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body
        className={`${gnuolane.variable} ${conthrax.variable} ${poppins.variable} antialiased`}
      >
        <MenuProvider>
          <CustomErrorBoundary>
            <PageLoader />

            {/* <div className="bg-[#141414] ">
          <div className="md:w-[90%] mx-auto">
          </div>
          </div> */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            > */}
              <Header />
              {/* </motion.div> */}
              <Suspense fallback={<SplashScreen />}>{children}</Suspense>
              <Footer />
            </motion.div>
          </CustomErrorBoundary>
        </MenuProvider>
      </body>
    </html>
  );
}
