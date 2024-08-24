import Link from "next/link"
import { FC } from "react";
import { FaGithub, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

const socials = [
  {icon: <FaGithub/>, path:"https://github.com/Micknomick"},
  {icon: <FaYoutube/>, path:"https://www.youtube.com/"},
  {icon: <FaInstagram/>, path:"https://www.instagram.com/mick_dev_/"},
  {icon: <FaTwitter/>, path:"https://x.com/?lang=ja"}
]

// プロップの型定義
interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: FC<SocialProps>  = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return(
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  );
};

export default Social
