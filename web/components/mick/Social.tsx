import Link from "next/link";
import { FC, useMemo } from "react";
import { FaGithub, FaInstagram } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiQiita, SiMattermost } from "react-icons/si";

// プロップの型定義
interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  // socials配列をuseMemoでメモ化
  const socials = useMemo(() => [
    { icon: <FaGithub />, path: "https://github.com/micknomick" },
    { icon: <SiQiita />, path: "https://qiita.com/noob_engineer_mick" },
    { icon: <XIcon />, path: "https://x.com/mistuno1" },
    { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54b_mitsuno_takayoshi" }
  ], []);

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

export default Social;
