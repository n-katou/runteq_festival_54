import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>TOPページ</h1>
      <Link href="/members/kato">kato.tsxのページへ</Link>
    </div>
  );
}
