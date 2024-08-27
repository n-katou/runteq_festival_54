import React, {useState} from 'react';
import Link from 'next/link';

import HoverableStrawberry from './HoverableStrawberry';

import { StrawberriesProps } from '../../types/types_index'

const StrawberryLinks: React.FC<StrawberriesProps> = ({ positions, top, initialColor = 'red' }) => {
  const [hideText, setHideText] = useState<number | null>(null); // 非表示にするリンクのインデックスを管理

  const links = [
    { href: "/members/kato", text: "加藤" },
    null,
    null,
    null,
    null,
    { href: "/members/demo", text: "demo" },
  ];

  const handleHoverEnd = (index: number) => {
    if (hideText === index) {
      setHideText(null); // ホバーが終了したときにテキストを再度表示
    }
  };

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
          onLastImage={() => setHideText(index)} // 最後の画像に到達したらテキストを非表示にする
          onHoverEnd={() => handleHoverEnd(index)}
        >
          {links[index] && (
            <Link href={links[index]?.href} className="text-black bold" style={{ fontSize: 'clamp(12px, 2vw, 20px)' }}>
               {hideText !== index && <span>{links[index]?.text}</span>}
            </Link>
          )}
        </HoverableStrawberry>
      ))}
    </>
  );
};

export default StrawberryLinks;
