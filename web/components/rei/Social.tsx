import Link from "next/link"
import { FC } from "react";
import { FaGithub, FaInstagram } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { SiQiita, SiMattermost } from "react-icons/si";
import { GrDocumentNotes } from "react-icons/gr";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/rei-dev99" },
  { icon: <SiQiita />, path: "https://qiita.com/rei-dev99" },
  { icon: <XIcon />, path: "https://twitter.com/ida09r" },
  { icon: <SiMattermost />, path: "https://chat.runteq.jp/runteq/channels/times_54a_ida_reiya" },
  { icon: <GrDocumentNotes />, path: "https://note.com/jolly_panda388/" }
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
