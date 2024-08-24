import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import KirakiraImage from '../../public/index/kirakira.png';

interface KirakiraEffectProps {
  style?: React.CSSProperties;
  scale?: number[];
  delay?: number;
}

const KirakiraEffect: React.FC<KirakiraEffectProps> = ({ style, scale, delay }) => {
  const sparkleVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
      rotateY: 0,
    },
    animate: {
      opacity: [0, 1.5, 0],
      scale: scale,
      rotateY: [0, 360],
      transition: {
        duration: 3.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop' as const,
        delay: delay,
      },
    },
  };

  return(
    <>
      <motion.div
        className="absolute"
        variants={sparkleVariants}
        initial="initial"
        animate="animate"
        style={style}
      >
        <Image
          src={KirakiraImage}
          alt={'kirakira'}
          style={{ width: '100%', height: 'auto', maxWidth: '5vw', maxHeight: '5vw',  }}
        />
      </motion.div>
    </>
  )
}

export default KirakiraEffect;