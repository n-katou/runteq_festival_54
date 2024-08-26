import React from 'react';
import Link from 'next/link';

import HoverableStrawberry from './HoverableStrawberry';

import { StrawberriesProps } from '../../types/types_index'

const StrawberryLinks: React.FC<StrawberriesProps> = ({ positions, top, initialColor = 'red' }) => {
  const links = [
    { href: "/members/kato", text: "加藤" },
    null,
    null,
    null,
    null,
    null,
  ];

  return (
    <>
      {positions.map((left, index) => (
        <HoverableStrawberry
          key={index}
          top={top}
          left={left}
          widthPercent={9.5}
          initialIndex={index}
          initialColor={initialColor}
        >
          {links[index] && (
            <Link href={links[index]?.href} className="text-black bold" style={{ fontSize: 'clamp(12px, 2vw, 20px)' }}>
              {links[index]?.text}
            </Link>
          )}
        </HoverableStrawberry>
      ))}
    </>
  );
};

export default StrawberryLinks;