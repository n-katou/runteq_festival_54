import React,{useEffect} from 'react';
import { motion } from 'framer-motion';

import GenericImage from './GenericImage';
import { useHoverEffect, useTextVisibility } from '../../hooks/hooks_index';

import RedStrawberryImage from '../../public/index/red_strawberry.png';
import RedStrawberryImage2 from '../../public/index/red_strawberry2.png';
import RedStrawberryImage3 from '../../public/index/red_strawberry3.png';
import PinkStrawberryImage from '../../public/index/pink_strawberry.png';
import PinkStrawberryImage2 from '../../public/index/pink_strawberry2.png';
import PinkStrawberryImage3 from '../../public/index/pink_strawberry3.png';
import WhiteStrawberryImage from '../../public/index/white_strawberry.png';
import WhiteStrawberryImage2 from '../../public/index/white_strawberry2.png';
import WhiteStrawberryImage3 from '../../public/index/white_strawberry3.png';
import GreenStrawberryImage from '../../public/index/green_strawberry.png';
import GreenStrawberryImage2 from '../../public/index/green_strawberry2.png';
import GreenStrawberryImage3 from '../../public/index/green_strawberry3.png';
import StrawberryCalyxImage from '../../public/index/strawberry_calyx.png';

import { HoverableStrawberryProps } from '../../types/types_index';

const HoverableStrawberry: React.FC<HoverableStrawberryProps> = ({ top, left, widthPercent, centered = false, children, initialColor = 'red', initialIndex, onLastImage, onHoverEnd }) => {
  const normalStrawberryImages = {
    red: [RedStrawberryImage],
    pink: [PinkStrawberryImage],
    white: [WhiteStrawberryImage],
    green: [GreenStrawberryImage],
  };

  const hoverStrawberryImages = {
    red: [RedStrawberryImage, RedStrawberryImage2, RedStrawberryImage3, StrawberryCalyxImage],
    pink: [PinkStrawberryImage, PinkStrawberryImage2, PinkStrawberryImage3, StrawberryCalyxImage],
    white: [WhiteStrawberryImage, WhiteStrawberryImage2, WhiteStrawberryImage3, StrawberryCalyxImage],
    green: [GreenStrawberryImage, GreenStrawberryImage2, GreenStrawberryImage3, StrawberryCalyxImage],
  };

  const colorOrder: Array<'red' | 'pink' | 'white' | 'green'> = ['red', 'pink', 'white', 'green'];
  
  // initialColor から順番にイチゴを配置
  const startIndex = colorOrder.indexOf(initialColor);
  
  // 指定された初期カラーを基にした順序で色を決定
  const currentColor = colorOrder[(startIndex + initialIndex) % colorOrder.length];
  const initialStrawberry = normalStrawberryImages[currentColor][0];

  // ホバー時の画像効果
  const { currentImageIndex, isHovered, setIsHovered } = useHoverEffect(0, hoverStrawberryImages[currentColor]);

  useTextVisibility({
    isHovered,
    currentImageIndex,
    hoverStrawberryImages,
    currentColor,
    onLastImage: () => onLastImage && onLastImage(),
    onHoverEnd: () => onHoverEnd && onHoverEnd(),
  });

  const swingVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: [-7, 7, -7],
      transition: {
        duration: 1.2,
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
        width: `${widthPercent}%`,
      }}
      variants={swingVariants}
      initial="initial"
      whileHover="animate"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => {
        setIsHovered(false);
        if (onHoverEnd) onHoverEnd(); // ホバーが終了したときにonHoverEndを呼び出す
      }}
    >
      <GenericImage
        top={0}
        left={0}
        src={isHovered ? hoverStrawberryImages[currentColor][currentImageIndex] : initialStrawberry}
        alt={`${currentColor} strawberry`}
        centered={centered}
        widthPercent={100}
      >
        {children}
      </GenericImage>
    </motion.div>
  );
};

export default HoverableStrawberry;