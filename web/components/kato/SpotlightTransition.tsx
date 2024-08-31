import React, { useEffect } from 'react';
import styles from '../../styles/kato/spotlight.module.css';

const generateRandomPosition = () => {
  const positions = [
    { x: '0%', y: '0%' },
    { x: '100%', y: '0%' },
    { x: '100%', y: '100%' },
    { x: '0%', y: '100%' },
    { x: '50%', y: '50%' },
    { x: '25%', y: '75%' },
    { x: '75%', y: '25%' }
  ];

  const randomIndex = Math.floor(Math.random() * positions.length);
  return positions[randomIndex];
};

const SpotlightTransition: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // トランジション完了後に次のページに遷移

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  const start = generateRandomPosition();
  const middle1 = generateRandomPosition();
  const middle2 = generateRandomPosition();
  const middle3 = generateRandomPosition();
  const end = generateRandomPosition();

  const spotlightStyle = {
    '--start-x': start.x,
    '--start-y': start.y,
    '--middle1-x': middle1.x,
    '--middle1-y': middle1.y,
    '--middle2-x': middle2.x,
    '--middle2-y': middle2.y,
    '--middle3-x': middle3.x,
    '--middle3-y': middle3.y,
    '--end-x': end.x,
    '--end-y': end.y,
  } as React.CSSProperties;

  return (
    <div className={styles.spotlight} style={spotlightStyle} />
  );
};

export default SpotlightTransition;
