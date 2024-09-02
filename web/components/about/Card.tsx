import React from "react";
import Image from "next/image";

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
        <h2 className="text-xl mb-4 font-bold">{title}</h2>
        <p className="text-lg leading-snug">{description}</p>
      </div>
    </div>
  );
};

export default Card;
