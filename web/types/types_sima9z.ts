import { ImageProps } from 'next/image';

export interface ReusableCardProps {
  imageSrc: ImageProps['src'];
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  bgcolor?: string;
}