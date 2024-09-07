import React, { useState, memo, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import GenericImage from './GenericImage';
import { useHoverEffect, useTextVisibility, useIsHoverable } from '../../hooks/hooks_index';

import { normalStrawberryImages, hoverStrawberryImages } from '../../utils/index/StrawberryImages';
import { getTextColor, getHoverTextColor } from '../../utils/index/StrawberryTextColors';

import { HoverableStrawberryProps } from '../../types/types_index';

import PreviewCard from './PreviewCard';

const HoverableStrawberry: React.FC<HoverableStrawberryProps> = ({ left, widthPercent, centered = false, initialColor = 'red', initialIndex, onLastImage, onHoverEnd, href, linkText, setIsHovered }) => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  const theme = useTheme();

  const colorOrder: Array<'red' | 'pink' | 'white' | 'green'> = ['red', 'pink', 'white', 'green'];
  
  // initialColor から順番にイチゴを配置
  const startIndex = colorOrder.indexOf(initialColor);
  const currentColor = colorOrder[(startIndex + initialIndex) % colorOrder.length];
  const initialStrawberry = normalStrawberryImages[currentColor][0];

  // ホバー時の画像効果
  const { currentImageIndex, isHovered, setIsHovered: setHoverEffect } = useHoverEffect(0, hoverStrawberryImages[currentColor]);

  const isHoverable = useIsHoverable();

  const handleMouseEnter = () => {
    if (isHoverable) {
      setHoverEffect(true); // フックのホバー状態を更新
      setIsHovered(true);   // 親コンポーネントのホバー状態を更新
    }
  };

  const handleMouseLeave = () => {
    if (isHoverable) {
      setHoverEffect(false); // フックのホバー状態を解除
      setIsHovered(false);   // 親コンポーネントのホバー状態を解除
    }
  };

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

  const textColor = getTextColor(currentColor);
  const hovertextColor = getHoverTextColor(currentColor);

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
      <Box
        sx={{
          position: 'absolute',
          left: `${left}%`,
          transformOrigin: 'bottom center',
          width: `${widthPercent}%`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          variants={swingVariants}
          initial="initial"
          whileHover={isHoverable ? 'animate' : undefined}
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
            <Box
              sx={{
                position: 'absolute',
                top: imageHeight
                  ? window.innerHeight > window.innerWidth
                    ? `calc(${imageHeight / 2}px + 1.2vh)`  // 縦長の画面での設定
                    : `calc(${imageHeight / 2}px + 2.5vh)`  // 横長の画面での設定
                  : '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: hovertextColor,
                textAlign: 'center',
                pointerEvents: 'none',
                lineHeight: 1,
                fontFamily: 'Comic Sans MS, Arial Rounded MT Bold, sans-serif',
                fontSize: '3vw',  // デフォルトのフォントサイズ
                [theme.breakpoints.up('sm')]: {
                  fontSize: '3.5vw', // sm以上の画面で3vw
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '3vw', // md以上の画面で2vw
                },
                [theme.breakpoints.up('lg')]: {
                  fontSize: '2.3vw', // lg以上の画面で1vw
                },
             }}
            >
              {linkText}
            </Box>
          )}
          {!isHovered && (
            <Box
              sx={{
                position: 'absolute',
                top: imageHeight
                  ? window.innerHeight > window.innerWidth
                    ? `calc(${imageHeight / 2}px + 1.2vh)`  // 縦長の画面での設定
                    : `calc(${imageHeight / 2}px + 2.5vh)`  // 横長の画面での設定
                  : '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: textColor,
                textAlign: 'center',
                pointerEvents: 'none',
                lineHeight: 1,
                fontFamily: 'Comic Sans MS, Arial Rounded MT Bold, sans-serif',
                fontSize: '3vw',  // デフォルトのフォントサイズ
                [theme.breakpoints.up('sm')]: {
                  fontSize: '3vw', // sm以上の画面で3vw
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '2.5vw', // md以上の画面で2vw
                },
                [theme.breakpoints.up('lg')]: {
                  fontSize: '1.8vw', // lg以上の画面で1vw
                },
              }}
            >
              {linkText}
            </Box>
          )}
        </Link>
      </motion.div>
    </Box>

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

export default memo(HoverableStrawberry);