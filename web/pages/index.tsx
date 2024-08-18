import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>TOPページ</h1>
      <Link href="/members/kato">加藤のページへ</Link>
    </div>
  );
}
