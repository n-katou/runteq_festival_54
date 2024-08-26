import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import KirakiraImage from '../../public/index/kirakira.png';

import { KirakiraEffectProps } from '../../types/types_index'

const KirakiraEffect: React.FC<KirakiraEffectProps> = ({ effects }) => {
  return (
    <>
      {effects.map((effect, index) => (
        <motion.div
          key={index}
          className="absolute"
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
            style={{ width: '100%', height: 'auto', maxWidth: '5vw', maxHeight: '5vw' }}
          />
        </motion.div>
      ))}
    </>
  )
}

export default KirakiraEffect;