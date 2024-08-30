import React from 'react';

import HoverableStrawberry from './HoverableStrawberry';

import { StrawberriesProps } from '../../types/types_index'

const StrawberryLinks: React.FC<StrawberriesProps> = ({ positions, initialColor = 'red' }) => {

  const links = [
    { href: "/members/kato", text: "加藤" },
    { href: "/members/mick", text: "mick" },
    { href: "/members/nori", text: "nori" },
    { href: "/members/konisi", text: "小西" },
  ];

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