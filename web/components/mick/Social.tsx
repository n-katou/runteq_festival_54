import Link from "next/link"
import { FC } from "react";
import { FaGithub, FaInstagram } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiQiita, SiMattermost } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/micknomick" },
  { icon: <SiQiita />, path: "https://qiita.com/noob_engineer_mick" },
  { icon: <XIcon />, path: "https://x.com/@mitsuno1" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54期b_mitsuno_takayoshi" }
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
