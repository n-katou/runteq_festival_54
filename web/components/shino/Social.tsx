import { memo } from "react";
import Link from "next/link";
import { FC } from "react";
import { FaGithub } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiQiita, SiMattermost } from "react-icons/si";
import { FaWordpress } from "react-icons/fa6";
import GroupsIcon from '@mui/icons-material/Groups';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/shinoomata" },
  { icon: <SiQiita />, path: "https://qiita.com/omaty410" },
  { icon: <XIcon />, path: "https://x.com/omaty410" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/time_54b_shino_omata" },
  { icon: <FaWordpress />, path: "https://oshino410.com/" },
  { icon: <GroupsIcon />, path: "https://school.runteq.jp/social_portfolios/o_shino" }
];

// プロップの型定義
interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} legacyBehavior>
          <a className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default memo(Social);
