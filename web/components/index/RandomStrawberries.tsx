import React from 'react';
import GenericImage from './GenericImage';

import RedStrawberryImage from '../../public/index/red_strawberry.png';
import PinkStrawberryImage from '../../public/index/pink_strawberry.png';
import WhiteStrawberryImage from '../../public/index/white_strawberry.png';
import GreenStrawberryImage from '../../public/index/green_strawberry.png';

interface RandomStrawberriesProps {
  positions: number[];
  top: number;
}

const RandomStrawberries: React.FC<RandomStrawberriesProps> = ({ positions, top }) => {
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

  return (
    <>
      {positions.map((left, index) => {
        const strawberry = getRandomStrawberry();
        return (
          <GenericImage
            key={index}
            src={strawberry.src}
            alt={strawberry.alt}
            top={top}
            left={left}
            centered={false}
            widthPercent={9.5}
          />
        );
      })}
    </>
  );
};

export default RandomStrawberries;