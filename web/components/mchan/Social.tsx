import Link from "next/link"
import { FC } from "react";
import { FaGithub } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiQiita, SiMattermost } from "react-icons/si";
import GroupsIcon from '@mui/icons-material/Groups';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mayu19991226" },
  { icon: <SiQiita />, path: "https://qiita.com/mayu19991226" },
  { icon: <XIcon />, path: "https://x.com/Missh73_" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54a_otani_mayu" },
  { icon: <GroupsIcon />, path: "https://school.runteq.jp/social_portfolios/mchan" }
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
