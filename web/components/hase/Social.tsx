import Link from "next/link"
import { FC } from "react";
import { FaGithub } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiMattermost } from "react-icons/si";
import React, { memo } from 'react';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/hase-n323" },
  { icon: <XIcon />, path: "https://x.com/hase_n323" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54a_hasegawa_noriko" },
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
