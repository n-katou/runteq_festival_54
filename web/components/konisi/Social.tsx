import Link from "next/link";
import { FC, memo } from "react";
import { FaGithub } from 'react-icons/fa';
import { SiMattermost } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Konishi8" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54b_konishi_tatsuya" }
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
