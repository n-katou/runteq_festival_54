import React from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

import { GenericImageProps } from '../../types/types_index'

//ImageをマテリアルUIで使いまわしするコンポーネント
const GenericImage: React.FC<GenericImageProps> = ({ src, alt, centered, widthPercent, children, onMouseEnter,onMouseLeave, style }) => {
  return (
    <Grid
      item
      xs={12}
      className="absolute"
      style={{
        ...style,
        transform: centered ? 'translate(-50%, 0)' : 'none', // Y軸だけでなく、X軸も中央揃えする
        width: `${widthPercent}%`,
        maxWidth: '100%',  // 最大幅をフレーム内に制限
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          className={`${alt}-image z-10`}
          style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
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