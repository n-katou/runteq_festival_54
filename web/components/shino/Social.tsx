import Link from "next/link"
import { FC } from "react";
import { FaGithub, FaInstagram } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiQiita, SiMattermost } from "react-icons/si";
import { FaWordpress } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/shinoomata" },
  { icon: <SiQiita />, path: "https://qiita.com/omaty410" },
  { icon: <XIcon />, path: "https://x.com/omaty410" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/time_54b_shino_omata" },
  { icon: <FaWordpress  />, path: "https://oshino410.com/" }
]

// プロップの型定義
interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  );
};

export default Social
