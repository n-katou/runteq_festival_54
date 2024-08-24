import React from 'react';
import HoverableStrawberry from './HoverableStrawberry';
import Link from 'next/link';

interface StrawberryLinksProps {
  positions: number[];
  top: number;
  initialColor?: 'red' | 'pink' | 'white' | 'green';
}

const StrawberryLinks: React.FC<StrawberryLinksProps> = ({ positions, top, initialColor = 'red' }) => {
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
          initialColor={initialColor as 'red' | 'pink' | 'white' | 'green'}
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