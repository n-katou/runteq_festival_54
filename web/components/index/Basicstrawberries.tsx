import React from 'react';
import HoverableStrawberry from './HoverableStrawberry';

interface BasicStrawberriesProps {
  positions: number[];
  top: number;
  initialColor?: 'red' | 'pink' | 'white' | 'green'; 
}

const BasicStrawberries: React.FC<BasicStrawberriesProps> = ({ positions, top, initialColor='red' }) => {
  return (
    <>
      {positions.map((left, index) => (
        <HoverableStrawberry
          key={index}
          top={top}
          left={left}
          widthPercent={9.5}
          initialIndex={index} // 各イチゴに順番にインデックスを割り当てる
          initialColor={initialColor}
        />
      ))}
    </>
  );
};

export default BasicStrawberries;