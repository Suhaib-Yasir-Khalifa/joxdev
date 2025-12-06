"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slow down as we approach 100%
        const increment = prev < 90 ? 10 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    // Handle page load
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "auto";
      }, 500);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Set a maximum loading time of 5 seconds
      const timer = setTimeout(() => {
        handleLoad();
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
        window.removeEventListener("load", handleLoad);
      };
    }

    return () => clearInterval(interval);
  }, []);

  // Add overflow hidden to body when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900">
      <div className="w-full max-w-md px-8">
        {/* Progress Bar */}
        <div className="h-2.5 w-full rounded-full bg-gray-700 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>

        {/* Progress Text */}
        <motion.p
          className="mt-4 text-center text-white/90 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0 }}
        >
          {progress}%
        </motion.p>

        {/* Loading Text */}
        <motion.p
          className="mt-8 text-center text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0 }}
        >
          Making everything amazing for you
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
