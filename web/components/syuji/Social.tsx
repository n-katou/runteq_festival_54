import Link from "next/link"
import { FC, memo } from "react";
import { FaGithub } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiMattermost } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/SYUJI-SHIKI" },
  { icon: <XIcon />, path: "https://x.com/ganbaritaiman9" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54-a_iida_syuji" }
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

export default memo(Social);
