import React from 'react';

import HoverableStrawberry from './HoverableStrawberry';

import { StrawberryLinksProps } from '../../types/types_index'

const StrawberryLinks: React.FC<StrawberryLinksProps> = ({ positions, initialColor = 'red', links }) => {

  return (
    <>
      {positions.map((left, index) => (
        <HoverableStrawberry
          key={index}
          left={left}
          widthPercent={10}
          initialIndex={index}
          initialColor={initialColor}
          href={links[index]?.href} // 各イチゴにリンク先を渡す
          linkText={links[index]?.text} // 各イチゴにリンクのテキストを渡す
        />
      ))}
    </>
  );
};

export default StrawberryLinks;