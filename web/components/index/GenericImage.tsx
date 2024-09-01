import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

import { GenericImageProps } from '../../types/types_index'
import { useImageHeight } from '../../hooks/hooks_index';

//ImageをマテリアルUIで使いまわしするコンポーネント
const GenericImage: React.FC<GenericImageProps> = ({ src, alt, centered, widthPercent, children, onMouseEnter,onMouseLeave, style, onImageLoad  }) => {
  const imageRef = useImageHeight(onImageLoad);

  return (
    <Grid
      item
      xs={12}
      className="absolute"
      style={{
        ...style,
        transform: centered ? 'translate(-50%, 0)' : 'none',
        width: `${widthPercent}%`,
        maxWidth: '100%',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative w-full h-full">
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          className={`${alt}-image z-10`}
          style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
          onLoad={() => {
            if (imageRef.current && onImageLoad) {
              onImageLoad(imageRef.current.clientHeight);  // ロード時にも高さを取得
            }
          }}
        />
        {children && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            {children}
          </div>
        )}
      </div>
    </Grid>
  );
};

export default GenericImage;