import Link from "next/link"
import { FC } from "react";
import { FaGithub, FaInstagram } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiQiita, SiMattermost } from "react-icons/si";
import React, { memo } from 'react';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/n-katou" },
  { icon: <SiQiita />, path: "https://qiita.com/n-katou" },
  { icon: <XIcon />, path: "https://x.com/k1997022023" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_pro_3a_kato_naoto" }
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
