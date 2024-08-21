import React from 'react';
import GenericImage from './GenericImage';
import Link from 'next/link';

import RedStrawberryImage from '../../public/index/red_strawberry.png';
import PinkStrawberryImage from '../../public/index/pink_strawberry.png';
import WhiteStrawberryImage from '../../public/index/white_strawberry.png';
import GreenStrawberryImage from '../../public/index/green_strawberry.png';

const StrawberryLinks = () => {

  const strawberries = [
    { src: RedStrawberryImage, alt: 'red strawberry' },
    { src: PinkStrawberryImage, alt: 'pink strawberry' },
    { src: WhiteStrawberryImage, alt: 'white strawberry' },
    { src: GreenStrawberryImage, alt: 'green strawberry' }
  ];

  const getRandomStrawberry = () => {
    const randomIndex = Math.floor(Math.random() * strawberries.length);
    return strawberries[randomIndex];
  };

  const strawberryLinks = [
    {
      position: { top: 10, left: 10 },
      widthPercent: 9.5,
      image: getRandomStrawberry(),
      link: {
        href: "/members/kato",
        text: "加藤",
      },
    },
    {
      position: { top: 10, left: 24 },
      widthPercent: 9.5,
      image: getRandomStrawberry(),
      link: null
    },
    {
      position: { top: 10, left: 38 },
      widthPercent: 9.5,
      image: getRandomStrawberry(),
      link: null
    },
    {
      position: { top: 10, left: 52 },
      widthPercent: 9.5,
      image: getRandomStrawberry(),
      link: null
    },
    {
      position: { top: 10, left: 66 },
      widthPercent: 9.5,
      image: getRandomStrawberry(),
      link: null
    },
    {
      position: { top: 10, left: 80 },
      widthPercent: 9.5,
      image: getRandomStrawberry(),
      link: null
    },
  ];
  
  return (
    <>
      {strawberryLinks.map((item, index) => (
        <GenericImage
          key={index}
          src={item.image.src}
          alt={item.image.alt}
          top={item.position.top}
          left={item.position.left}
          centered={false}
          widthPercent={item.widthPercent}
        >
          {item.link && (
            <Link href={item.link.href} className="text-black bold">
              {item.link.text}
            </Link>
          )}
        </GenericImage>
      ))}
    </>
  );
};

export default StrawberryLinks;