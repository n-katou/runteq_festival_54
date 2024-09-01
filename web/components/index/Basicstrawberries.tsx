import React from 'react';

import HoverableStrawberry from './HoverableStrawberry';
import { StrawberriesProps } from '../../types/types_index'

const BasicStrawberries: React.FC<StrawberriesProps> = ({ positions, initialColor='red' }) => {
  return (
    <>
      {positions.map((left, index) => (
        <HoverableStrawberry
          key={index}
          left={left}
          widthPercent={10}
          initialIndex={index} // 各イチゴに順番にインデックスを割り当てる
          initialColor={initialColor}
        />
      ))}
    </>
  );
};

export default BasicStrawberries;