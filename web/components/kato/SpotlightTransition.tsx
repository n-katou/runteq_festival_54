import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/kato/spotlight.module.css';

interface SpotlightTransitionProps {
  onComplete: () => void;
}

const SpotlightTransition: React.FC<SpotlightTransitionProps> = ({ onComplete }) => {
  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(120);
  const [angle3, setAngle3] = useState(240);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle1((prev) => (prev + 10) % 360);
      setAngle2((prev) => (prev - 10 + 360) % 360);
      setAngle3((prev) => (prev + 10) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const calculatePosition = (angle: number) => {
    const radius = 20; // 円の半径を%で設定（ここでは20%）
    const centerX = 50 - radius; // 中心のX座標（%）
    const centerY = 50 - radius; // 中心のY座標（%）

    const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

    return { x: `${x}%`, y: `${y}%` };
  };

  return (
    <div className={styles.spotlightContainer}>
      <motion.div
        className={styles.spotlight}
        style={{
          background: 'radial-gradient(circle, rgba(238,130,238,1) 30%, rgba(255,255,255,0) 70%)',
        }}
        animate={{
          top: calculatePosition(angle1).y,
          left: calculatePosition(angle1).x,
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.div
        className={styles.spotlight}
        style={{
          background: 'radial-gradient(circle, rgba(255,165,0,1) 30%, rgba(255,255,255,0) 70%)',
        }}
        animate={{
          top: calculatePosition(angle2).y,
          left: calculatePosition(angle2).x,
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.div
        className={styles.spotlight}
        style={{
          background: 'radial-gradient(circle, rgba(0,0,255,1) 30%, rgba(255,255,255,0) 70%)',
        }}
        animate={{
          top: calculatePosition(angle3).y,
          left: calculatePosition(angle3).x,
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default SpotlightTransition;
