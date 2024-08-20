import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#A1E0E6]">
      <h1>TOPページ</h1>
      <Link href="/members/kato">加藤のページへ</Link>
    </div>
  );
}
