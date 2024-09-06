import Link from "next/link"
import { FC, memo } from "react";
import { FaGithub } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiQiita, SiMattermost } from "react-icons/si";
import GroupsIcon from '@mui/icons-material/Groups';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/CarBoss1996" },
  { icon: <SiQiita />, path: "https://qiita.com/CarBoss1996" },
  { icon: <XIcon />, path: "https://x.com/TX3Z9WipdG5wC4E" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54b_kawashita_natsumi" },
  { icon: <GroupsIcon />, path: "https://school.runteq.jp/social_portfolios/natsu_54b" }
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
