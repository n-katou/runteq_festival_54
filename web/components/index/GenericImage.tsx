import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import Image, { ImageProps } from 'next/image';

interface GenericImageProps {
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

//ImageをマテリアルUIで使いまわしするコンポーネント
const GenericImage: React.FC<GenericImageProps> = ({ src, alt, top, left, centered, widthPercent, children, onMouseEnter,onMouseLeave }) => {
  return (
    <Grid
      item
      xs={12}
      className="absolute"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        transform: centered ? 'translate(-50%, -50%)' : 'none',
        width: `${widthPercent}%`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          className={`${alt}-image z-10`}
          style={{ width: '100%', height: 'auto' }}
        />
        {children && (
          <div className="absolute inset-0 flex items-center justify-center z-20" style={{ transform: 'translateY(10%)' }} >
            {children}
          </div>
        )}
      </div>
    </Grid>
  );
};

export default GenericImage;