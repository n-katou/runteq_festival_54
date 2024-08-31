import React, { useState, useEffect } from 'react';
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
    }, 50); // 短いインターバルでスピード感を演出

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // エフェクトの時間を延長

    return () => clearTimeout(timer);
  }, [onComplete]);

  const calculatePosition = (angle: number, radius: number, isRightSide: boolean) => {
    const centerX = isRightSide ? 50 + radius : 50 - radius;
    const centerY = 50;

    const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

    return { x: `${x}%`, y: `${y}%` };
  };

  return (
    <div className={styles.spotlightContainer}>
      <motion.div
        className={styles.spotlight}
        style={{
          background: 'radial-gradient(circle, rgba(75,0,130,1) 40%, rgba(255,255,255,0) 80%)',
          filter: 'blur(10px)',  // 光の尾引き効果
          boxShadow: '0px 0px 20px rgba(75,0,130,0.7)',
        }}
        animate={{
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
          repeatType: 'reverse', // 逆方向に繰り返す
        }}
      />
      <motion.div
        className={styles.spotlight}
        style={{
          background: 'radial-gradient(circle, rgba(255,69,0,1) 40%, rgba(255,255,255,0) 80%)',
          filter: 'blur(15px)',
          boxShadow: '0px 0px 20px rgba(255,69,0,0.7)',
        }}
        animate={{
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
          background: 'radial-gradient(circle, rgba(0,191,255,1) 40%, rgba(255,255,255,0) 80%)',
          filter: 'blur(12px)',
          boxShadow: '0px 0px 20px rgba(0,191,255,0.7)',
        }}
        animate={{
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

export default SpotlightTransition;
