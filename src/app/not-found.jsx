"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NotFoundPage = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#171717] text-[#E5E7EB] flex items-center justify-center px-6">
      <div className="container mx-auto text-center md:w-[70%] lg:w-[60%]">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={animationComplete ? { scale: [1, 0.95, 1] } : { scale: 1 }}
          transition={
            animationComplete
              ? { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
              : { type: "spring", stiffness: 100 }
          }
          onAnimationComplete={() => setAnimationComplete(true)}
          className="text-[180px] md:text-[240px] font-bold text-[#00FF85] drop-shadow-glow"
        >
          404
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Lost in the Blueprints
          </h1>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            The page you're looking for seems to be under construction or has
            been relocated. Let's get you back to stable ground.
          </p>
        </motion.div>

        {/* Back Home Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FF85] to-emerald-600 text-black px-8 py-4 rounded-xl font-semibold hover:from-[#00CC6A] hover:to-emerald-500 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Homepage
          </Link>
        </motion.div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
