import React, { useState } from 'react';
import { motion } from 'framer-motion';

import GenericImage from './GenericImage';

import RedStrawberryImage from '../../public/index/red_strawberry.png';
import PinkStrawberryImage from '../../public/index/pink_strawberry.png';
import WhiteStrawberryImage from '../../public/index/white_strawberry.png';
import GreenStrawberryImage from '../../public/index/green_strawberry.png';

interface HoverableStrawberryProps {
  top: number;
  left: number;
  widthPercent: number;
  centered?: boolean;
  children?: React.ReactNode;
  initialColor?: 'red' | 'pink' | 'white' | 'green'; // 開始色を指定するプロップス
  initialIndex: number;
}

const HoverableStrawberry: React.FC<HoverableStrawberryProps> = ({ top, left, widthPercent, centered = false, children, initialColor = 'red', initialIndex }) => {
  const strawberries = [
    { src: RedStrawberryImage, alt: 'red strawberry' },
    { src: PinkStrawberryImage, alt: 'pink strawberry' },
    { src: WhiteStrawberryImage, alt: 'white strawberry' },
    { src: GreenStrawberryImage, alt: 'green strawberry' }
  ];

  const colorMap = {
    red: 0,
    pink: 1,
    white: 2,
    green: 3,
  };

  const getRandomStrawberry = () => {
    const randomIndex = Math.floor(Math.random() * strawberries.length);
    return strawberries[randomIndex];
  };

  const initialColorIndex = colorMap[initialColor];
  const initialStrawberry = strawberries[(initialColorIndex + initialIndex) % strawberries.length];
  const [currentStrawberry, setCurrentStrawberry] = useState(initialStrawberry);

  const handleMouseEnter = () => {
    setCurrentStrawberry(getRandomStrawberry());
  };

  const handleMouseLeave = () => {
    setCurrentStrawberry(initialStrawberry); // 元のイチゴに戻す
  };

  const swingVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: [-7, 7, -7],
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  };

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        transformOrigin: 'bottom center',
        width: `${widthPercent}%`, // ここで幅を指定
      }}
      variants={swingVariants}
      initial="initial"
      whileHover="animate"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <GenericImage
        top={0}
        left={0}
        src={currentStrawberry.src}
        alt={currentStrawberry.alt}
        centered={centered}
        widthPercent={100} // 親のdivのサイズを基準に設定
      >
        {children}
      </GenericImage>
    </motion.div>
  );
};

export default HoverableStrawberry;