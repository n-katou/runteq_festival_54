import React, { memo } from "react";
import { motion } from "framer-motion";

interface FloatingEmojiProps {
  emoji: string;
  delay: number;
}

const FloatingEmoji: React.FC<FloatingEmojiProps> = ({ emoji, delay }) => {
  return (
    <motion.div
      className="text-3xl absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 5, 0],
        x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
        y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
        rotate: [0, Math.random() * 360, Math.random() * 360, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    >
      {emoji}
    </motion.div>
  );
};

export default memo(FloatingEmoji);
