import React, { useState, useEffect } from 'react';
import styles from '../../styles/kato/spotlight.module.css';

const SpotlightTransition: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isBlackoutVisible, setIsBlackoutVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlackoutVisible(false);
    }, 3000); // スポットライトが移動する時間を3秒に延長

    const transitionEndTimer = setTimeout(() => {
      onComplete();
    }, 4000); // トランジション完了後に次のページに遷移

    return () => {
      clearTimeout(timer);
      clearTimeout(transitionEndTimer);
    };
  }, [onComplete]);

  return (
    <div>
      {isBlackoutVisible && <div className={styles.blackout} />}
      <div className={styles.spotlight} />
    </div>
  );
};

export default SpotlightTransition;
