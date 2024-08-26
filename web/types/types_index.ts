import { ReactNode } from 'react';
import { ImageProps } from 'next/image';

export interface GenericImageProps {
  src: ImageProps['src'];
  alt: string;
  top: number;
  left: number;
  centered: boolean;
  widthPercent: number;
  children?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface HoverableStrawberryProps {
  top: number;
  left: number;
  widthPercent: number;
  centered?: boolean;
  children?: React.ReactNode;
  initialColor?: 'red' | 'pink' | 'white' | 'green'; // 開始色を指定するプロップス
  initialIndex: number;
}

export interface StrawberriesProps {
  positions: number[];
  top: number;
  initialColor: 'red' | 'pink' | 'white' | 'green'; 
}

export interface KirakiraEffectProps {
  effects: {
    style?: React.CSSProperties;
    scale?: number[];
    delay?: number;
  }[];
}