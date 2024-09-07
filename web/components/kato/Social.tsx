import Link from "next/link";
import { FC, memo } from "react";
import { FaGithub } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiQiita, SiMattermost } from "react-icons/si";
import GroupsIcon from '@mui/icons-material/Groups';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/n-katou" },
  { icon: <SiQiita />, path: "https://qiita.com/n-katou" },
  { icon: <XIcon />, path: "https://x.com/k1997022023" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_pro_3a_kato_naoto" },
  { icon: <GroupsIcon />, path: "https://school.runteq.jp/social_portfolios/n_kato" }
];

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
          <Link key={index} href={item.path} legacyBehavior>
            <a className={iconStyles} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default memo(Social);
