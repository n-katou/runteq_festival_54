import Image from "next/image";
import { FC } from "react";

interface MyImgProps {
  containerStyles: string;
  imgSrc: string;
}

const MyImg: FC<MyImgProps> = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
    <Image src={imgSrc} fill priority alt='' />
  </div>
  );
};

export default MyImg
