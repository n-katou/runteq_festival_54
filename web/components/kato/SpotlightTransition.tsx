import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/kato/spotlight.module.css';

interface SpotlightTransitionProps {
  onComplete: () => void;
}

const SpotlightTransition: React.FC<SpotlightTransitionProps> = ({ onComplete }) => {
  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(180);
  const [angle3, setAngle3] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle1((prev) => (prev + 5) % 360);
      setAngle2((prev) => (prev - 7 + 360) % 360);
      setAngle3((prev) => (prev + 8) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const calculatePosition = (angle: number, radius: number, isRightSide: boolean) => {
    const centerX = isRightSide ? 50 + radius : 50 - radius;
    const centerY = 50;

    const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

    return { x: `${x}%`, y: `${y}%` };
  };

  const glitchEffect = {
    scale: [1, 0.9, 1.1, 1],
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 5,
    },
  };

  const particleVariants = {
    animate: {
      x: ["0%", "100%", "-100%"],
      y: ["0%", "100%", "-100%"],
      scale: [0.5, 1.5, 0.5],
      opacity: [0.7, 1, 0],
      rotate: [0, 360],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div
      className={styles.spotlightContainer}
      style={{
        background: 'linear-gradient(45deg, #000428, #004e92)',
        overflow: 'hidden',
      }}
    >
      <motion.div
        className={styles.spotlight}
        style={{
          background: 'radial-gradient(circle, rgba(138, 43, 226,1) 40%, rgba(255,255,255,0) 80%)',
          filter: 'blur(10px)',
          boxShadow: '0px 0px 20px rgba(138, 43, 226,0.7)',
        }}
        animate={{
          ...glitchEffect,
          top: calculatePosition(angle1, 20, false).y,
          left: calculatePosition(angle1, 20, false).x,
          scale: [1, 1.8, 1],
          rotateX: [0, 360, 720],
          rotateY: [0, 180, 360],
          rotateZ: [0, 360, 720],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className={styles.spotlight}
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,1) 40%, rgba(255,255,255,0) 80%)',
          filter: 'blur(15px)',
          boxShadow: '0px 0px 20px rgba(0,255,255,0.7)',
        }}
        animate={{
          ...glitchEffect,
          top: calculatePosition(angle2, 30, true).y,
          left: calculatePosition(angle2, 30, true).x,
          scale: [1, 2, 1],
          rotateX: [0, 360, 720],
          rotateY: [0, 180, 360],
          rotateZ: [0, -360, -720],
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className={styles.spotlight}
        style={{
          background: 'radial-gradient(circle, rgba(255, 69, 0,1) 40%, rgba(255,255,255,0) 80%)',
          filter: 'blur(12px)',
          boxShadow: '0px 0px 20px rgba(255, 69, 0,0.7)',
        }}
        animate={{
          ...glitchEffect,
          top: calculatePosition(angle3, 40, false).y,
          left: calculatePosition(angle3, 40, false).x,
          scale: [1, 2.2, 1],
          rotateX: [0, 360, 720],
          rotateY: [0, 360, 720],
          rotateZ: [0, 720, 1440],
        }}
        transition={{
          duration: 2.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
};

export default memo(SpotlightTransition);
