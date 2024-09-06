import Link from "next/link"
import { FC, memo } from "react"; // memoをインポート
import { FaGithub } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiMattermost } from "react-icons/si";
import GroupsIcon from '@mui/icons-material/Groups';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/kana-54b" },
  { icon: <XIcon />, path: "https://x.com/t_kana_54b" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54b_takei_kana" },
  { icon: <GroupsIcon />, path: "https://school.runteq.jp/social_portfolios/knnts" }
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

export default memo(Social); // memoでエクスポート
