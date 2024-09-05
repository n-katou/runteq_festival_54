import Image from "next/image";
import { FC, CSSProperties, memo } from "react";


interface MyImgProps {
  containerStyles: string;
  imgSrc: string;
  style?: CSSProperties;
}

const MyImg: FC<MyImgProps> = ({ containerStyles, imgSrc, style }) => {
  return (
    <div className={containerStyles} style={style}>
      <Image src={imgSrc} fill priority alt='' />
    </div>
  );
};

export default memo(MyImg);
