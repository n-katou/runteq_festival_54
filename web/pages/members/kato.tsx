import { useRouter } from 'next/router';
import Bio from '../../components/kato/Bio';
import styles from '../../styles/members/styles_kato.module.css';

export default function KatoPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Kato Page</h1>
      <Bio />
      <button onClick={handleBackClick} className={styles.backButton}>
        戻る
      </button>
    </div>
  );
}
