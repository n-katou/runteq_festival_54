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

  // スポットライト1の位置
  const start1 = generateRandomPosition();
  const middle1_1 = generateRandomPosition();
  const middle1_2 = generateRandomPosition();
  const middle1_3 = generateRandomPosition();
  const end1 = generateRandomPosition();

  // スポットライト2の位置
  const start2 = generateRandomPosition();
  const middle2_1 = generateRandomPosition();
  const middle2_2 = generateRandomPosition();
  const middle2_3 = generateRandomPosition();
  const end2 = generateRandomPosition();

  // スポットライト3の位置
  const start3 = generateRandomPosition();
  const middle3_1 = generateRandomPosition();
  const middle3_2 = generateRandomPosition();
  const middle3_3 = generateRandomPosition();
  const end3 = generateRandomPosition();

  const spotlightStyle1 = {
    '--start1-x': start1.x,
    '--start1-y': start1.y,
    '--middle1-1-x': middle1_1.x,
    '--middle1-1-y': middle1_1.y,
    '--middle1-2-x': middle1_2.x,
    '--middle1-2-y': middle1_2.y,
    '--middle1-3-x': middle1_3.x,
    '--middle1-3-y': middle1_3.y,
    '--end1-x': end1.x,
    '--end1-y': end1.y,
  } as React.CSSProperties;

  const spotlightStyle2 = {
    '--start2-x': start2.x,
    '--start2-y': start2.y,
    '--middle2-1-x': middle2_1.x,
    '--middle2-1-y': middle2_1.y,
    '--middle2-2-x': middle2_2.x,
    '--middle2-2-y': middle2_2.y,
    '--middle2-3-x': middle2_3.x,
    '--middle2-3-y': middle2_3.y,
    '--end2-x': end2.x,
    '--end2-y': end2.y,
  } as React.CSSProperties;

  const spotlightStyle3 = {
    '--start3-x': start3.x,
    '--start3-y': start3.y,
    '--middle3-1-x': middle3_1.x,
    '--middle3-1-y': middle3_1.y,
    '--middle3-2-x': middle3_2.x,
    '--middle3-2-y': middle3_2.y,
    '--middle3-3-x': middle3_3.x,
    '--middle3-3-y': middle3_3.y,
    '--end3-x': end3.x,
    '--end3-y': end3.y,
  } as React.CSSProperties;

  return (
    <div>
      <div className={styles.spotlight1} style={spotlightStyle1} />
      <div className={styles.spotlight2} style={spotlightStyle2} />
      <div className={styles.spotlight3} style={spotlightStyle3} />
    </div>
  );
};

export default SpotlightTransition;
