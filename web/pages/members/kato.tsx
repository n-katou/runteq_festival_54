import Image from 'next/image';

export default function KatoPage() {
  return (
    <div>
      <h1>Kato Page</h1>
      <p>これはkato.tsxのページです。</p>
      <Image
        src="/kato/profile.png"
        alt="Kato's Profile"
        width={200}
        height={200}
      />
    </div>
  );
}
