import React, { useState, memo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

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

const HoverableStrawberry: React.FC<HoverableStrawberryProps> = ({ left, widthPercent, centered = false, initialColor = 'red', initialIndex, onLastImage, onHoverEnd, href, linkText, setIsHovered }) => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const theme = useTheme();

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
  const { currentImageIndex, isHovered, setIsHovered: setHoverEffect } = useHoverEffect(0, hoverStrawberryImages[currentColor]);

  const handleMouseEnter = () => {
    setHoverEffect(true); // フックのホバー状態を更新
    setIsHovered(true);   // 親コンポーネントのホバー状態を更新
  };

  const handleMouseLeave = () => {
    setHoverEffect(false); // フックのホバー状態を解除
    setIsHovered(false);   // 親コンポーネントのホバー状態を解除
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

  const textColor = () => {
    switch (currentColor) {
      case 'red':
        return '#A8D8BA';
      case 'pink':
        return '#E6584F';
      case 'white':
        return '#FDC7D2';
      case 'green':
        return '#FEFBEA';
      default:
        return 'black';
    }
  };

  const hovertextColor = () => {
    switch (currentColor) {
      case 'red':
        return '#FDC7D2';
      case 'pink':
        return '#FEFBEA';
      case 'white':
        return '#A8D8BA';
      case 'green':
        return '#E6584F';
      default:
        return 'black';
    }
  };

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
          '@media (hover: none)': {
            '&:hover': {
              // ホバーエフェクト無効化
              animation: 'none',
            },
          },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          variants={swingVariants}
          initial="initial"
          whileHover="animate"
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
                color: hovertextColor(),
                textAlign: 'center',
                pointerEvents: 'none',
                lineHeight: 1,
                fontFamily: 'Comic Sans MS, Comic Sans, cursive',
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
                color: textColor(),
                textAlign: 'center',
                pointerEvents: 'none',
                lineHeight: 1,
                fontFamily: 'Comic Sans MS, Comic Sans, cursive',
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