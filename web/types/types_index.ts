import { ReactNode } from 'react';
import { ImageProps, StaticImageData } from 'next/image';

export interface GenericImageProps {
  src: ImageProps['src'];
  alt: string;
  centered: boolean;
  widthPercent: number;
  children?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
  onImageLoad?: (height: number) => void; 
}

export interface HoverableStrawberryProps {
  left: number;
  widthPercent: number;
  centered?: boolean;
  children?: React.ReactNode;
  initialColor?: 'red' | 'pink' | 'white' | 'green'; // 開始色を指定するプロップス
  initialIndex: number;
  onLastImage?: () => void;
  onHoverEnd?: () => void;
  href?: string;
  linkText?: string; 
}

export interface StrawberriesProps {
  positions: number[];
  initialColor: 'red' | 'pink' | 'white' | 'green'; 
}

export interface KirakiraEffectProps {
  effects: {
    style?: React.CSSProperties;
    scale?: number[];
    delay?: number;
  }[];
}

export interface UseTextVisibilityProps {
  isHovered: boolean;
  currentImageIndex: number;
  hoverStrawberryImages: {
    red: StaticImageData[];
    pink: StaticImageData[];
    white: StaticImageData[];
    green: StaticImageData[];
  };
  currentColor: 'red' | 'pink' | 'white' | 'green';
  onLastImage: () => void;
  onHoverEnd: () => void;
}