import React, { memo } from "react";
import Image from "next/image";
import { M_PLUS_Rounded_1c } from 'next/font/google'

const mplus1c = M_PLUS_Rounded_1c({
    subsets: ['latin'],
    weight: ['400', '700'],
})

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="text-left text-inherit rounded-lg transition duration-150 ease-in-out w-full flex flex-col sm:flex-row items-center gap-4">
      <div className="flex-shrink-0">
        <Image
          src={imgSrc}
          alt={title}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="text-center sm:text-left">
        <h2 className={`font-bold text-2xl mb-4 ${mplus1c.className}`}>{title}</h2>
        <p className={`text-lg leading-snug ${mplus1c.className}`}>{description}</p>
      </div>
    </div>
  );
};

export default memo(Card);
