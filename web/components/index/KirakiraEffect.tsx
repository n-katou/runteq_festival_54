import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import KirakiraImage from '../../public/index/kirakira.png';

import { KirakiraEffectProps } from '../../types/types_index'

const KirakiraEffect: React.FC<KirakiraEffectProps> = ({ effects }) => {
  const [maxSize, setMaxSize] = useState({ maxWidth: '10vw', maxHeight: '10vw' });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1200) {
        setMaxSize({ maxWidth: '35px', maxHeight: '35px' });  // 大きな画面の場合
      } else if (screenWidth > 768) {
        setMaxSize({ maxWidth: '25px', maxHeight: '25px' });  // 中くらいの画面の場合
      } else {
        setMaxSize({ maxWidth: '15px', maxHeight: '15px' });  // 小さな画面の場合
      }
    };

    // 初回のサイズ設定
    handleResize();

    // リサイズイベントのリスナーを設定
    window.addEventListener('resize', handleResize);

    // クリーンアップ
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      {effects.map((effect, index) => (
        <motion.div
          key={index}
          variants={{
            initial: {
              opacity: 0,
              scale: 0.5,
              rotateY: 0,
            },
            animate: {
              opacity: [0, 1.5, 0],
              scale: effect.scale,
              rotateY: [0, 360],
              transition: {
                duration: 3.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop' as const,
                delay: effect.delay,
              },
            },
          }}
          initial="initial"
          animate="animate"
          style={effect.style}
        >
          <Image
            src={KirakiraImage}
            alt={'kirakira'}
            style={{ width: '10vw', height: 'auto', maxWidth: maxSize.maxWidth, maxHeight: maxSize.maxHeight, }}
          />
        </motion.div>
      ))}
    </>
  )
}

export default KirakiraEffect;