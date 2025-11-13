"use client";

import { motion, Variants, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimatedDivProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  once?: boolean;
  amount?: number | "all" | "some";
}

export default function AnimatedDiv({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
  once = true,
  amount = 0.2,
}: AnimatedDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount,
    margin: "-20% 0px -20% 0px", // Adjust this to control when the animation triggers
  });

  const getVariant = (): Variants => {
    const distance = 30;
    let x = 0;
    let y = 0;

    switch (direction) {
      case "up":
        y = distance;
        break;
      case "down":
        y = -distance;
        break;
      case "left":
        x = distance;
        break;
      case "right":
        x = -distance;
        break;
      default:
        y = distance;
    }

    return {
      hidden: {
        opacity: 0,
        y,
        x,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          delay,
          duration,
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariant()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
