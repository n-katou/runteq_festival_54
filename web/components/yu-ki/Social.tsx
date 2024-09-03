import Link from "next/link"
import { FC } from "react";
import { FaGithub } from 'react-icons/fa';
import { SiMattermost } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/yuki-F09" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54a_fukuhara_yuki" }
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
