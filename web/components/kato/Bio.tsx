import Link from 'next/link';
import { useProfileImage } from '../../hooks/hooks_kato';
import styles from '../../styles/members/styles_kato.module.css';

export default function Bio() {
  const { profileImage, toggleProfileImage } = useProfileImage();

  return (
    <div className={styles.bioContainer}>
      <img
        src={profileImage}
        alt="プロフィール画像"
        style={{ width: '200px', height: '200px' }}
        className={styles.profileImage}
      />
      <button onClick={toggleProfileImage}>
        画像を切り替える
      </button>
      <p>私のポートフォリオはこちらからご覧ください。</p>
      <Link href="https://vi-memo.com" target="_blank" rel="noopener noreferrer">
        ポートフォリオを見る
      </Link>
    </div>
  );
}
