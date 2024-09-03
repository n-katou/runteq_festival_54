import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import XIcon from "@mui/icons-material/X";
import { SiQiita, SiMattermost } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ryota10000" },
  { icon: <SiQiita />, path: "https://qiita.com/" },
  { icon: <XIcon />, path: "https://x.com/sh7hs71" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54b_shimizu_ryota",},
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
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;