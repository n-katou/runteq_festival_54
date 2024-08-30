import Link from "next/link"
import { FC } from "react";
import { FaGithub } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiMattermost } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/norikawasonoka" },
  { icon: <XIcon />, path: "https://x.com/maec7gx24752" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54a_norikawa_sonoka" }
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
