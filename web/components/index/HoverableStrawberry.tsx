import React, { useState } from 'react';
import Link from 'next/link';
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

import PreviewCard from './PreviewCard';

const HoverableStrawberry: React.FC<HoverableStrawberryProps> = ({ left, widthPercent, centered = false, initialColor = 'red', initialIndex, onLastImage, onHoverEnd, href, linkText }) => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);

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
  const currentColor = colorOrder[(startIndex + initialIndex) % colorOrder.length];
  const initialStrawberry = normalStrawberryImages[currentColor][0];

  // ホバー時の画像効果
  const { currentImageIndex, isHovered, setIsHovered } = useHoverEffect(0, hoverStrawberryImages[currentColor]);

  useTextVisibility({
    isHovered,
    currentImageIndex,
    hoverStrawberryImages,
    currentColor,
    onLastImage: () => {
      if (onLastImage) onLastImage();
    },
    onHoverEnd: () => {
      if (onHoverEnd) onHoverEnd();
    },
  });

  const swingVariants = {
    initial: { rotate: 0 },
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
    <>
        <motion.div
      style={{
        position: 'absolute',
        left: `${left}%`,
        transformOrigin: 'bottom center',
        width: `${widthPercent}%`,
      }}
      variants={swingVariants}
      initial="initial"
      whileHover="animate"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={href || "#"} style={{ display: 'block', position: 'relative', height: '100%', minHeight: 'full' }}>
        <GenericImage
          src={isHovered ? hoverStrawberryImages[currentColor][currentImageIndex] : initialStrawberry}
          alt={`${currentColor} strawberry`}
          centered={centered}
          widthPercent={100}
          onImageLoad={(height) => setImageHeight(height)}
        />
        {isHovered && currentImageIndex !== hoverStrawberryImages[currentColor].length - 1 && (
          <span
            style={{
              position: 'absolute',
              top: imageHeight
                ? window.innerHeight > window.innerWidth
                  ? `calc(${imageHeight / 2}px + 1vh)`  // 縦長の画面での設定
                  : `calc(${imageHeight / 2}px + 2vh)`  // 横長の画面での設定
                : '60%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            {linkText}
          </span>
        )}
        {!isHovered && (
          <span
            style={{
              position: 'absolute',
              top: imageHeight
                ? window.innerHeight > window.innerWidth
                  ? `calc(${imageHeight / 2}px + 1vh )`  // 縦長の画面での設定
                  : `calc(${imageHeight / 2}px + 2vh)`  // 横長の画面での設定
                : '60%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            {linkText}
          </span>
        )}
      </Link>
    </motion.div>
      {/* isHovered が true のときに PreviewCard を HoverableStrawberry コンポーネントの外で表示 */}
      {isHovered && href && (
        <PreviewCard 
          title={linkText || ""}
          link={href}
        />
      )}
    </>

  );
};

export default HoverableStrawberry;