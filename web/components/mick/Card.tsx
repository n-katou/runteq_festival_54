import { useMemo } from 'react';
import Image from 'next/image';
import CardImage1 from '../../public/mick/strawberry.png';
import { Card } from '@mui/material';
import '../../styles/mick/card.module.css';

const Cards = () => {
  const handleClick = () => {
    alert('作成中です');
  };

  const card1 = useMemo(() => (
    <div className='bg-gradient-to-r from-pink to-blue w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]'>
      {/* card text */}
      <div className='flex items-center mb-[18px] lg:mb-[28px]'>
        <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>My first application</h4>
        <h2 className='text-[26px] leading-[36px] lg:text-[50px] lg:leading-[60px] font-bold text-stroke-2'>1</h2>
      </div>
      {/* card content */}
      <div className='flex items-center'>
        {/* card image */}
        <Image src={CardImage1} alt='Card Image' className='h-[70px] w-[70px] mr-2'/>
        {/* card link */}
        <div>
          <p>Next.jsを使った自分の紹介サイトです。</p>
          <a
            href='https://battleofrunteq.vercel.app/'
            className='hover:underline font-bold'
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </div>
  ), []);

  const card2 = useMemo(() => (
    <div className='bg-gradient-to-r from-pink to-blue w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]'>
      {/* card text */}
      <div className='flex items-center mb-[18px] lg:mb-[28px]'>
        <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>My second application</h4>
        <h2 className='text-[26px] leading-[36px] lg:text-[50px] lg:leading-[60px] font-bold text-stroke-2'>2</h2>
      </div>
      {/* card content */}
      <div className='flex items-center'>
        {/* card image */}
        <Image src={CardImage1} alt='Card Image' className='h-[70px] w-[70px] mr-2'/>
        {/* card link */}
        <div>
          <p>Railsを使って卒業制作を作成中です。</p>
          <a
            href='#'
            className='text-blue-500 hover:underline font-bold'
            onClick={(e) => {
              e.preventDefault(); // デフォルトのリンク動作を防ぐ
              handleClick(); // ポップアップを表示する
            }}
          >
            View
          </a>
        </div>
      </div>
    </div>
  ), []);

  const card3 = useMemo(() => (
    <div className='bg-gradient-to-r from-pink to-blue w-full flex-1 max-w-[542px] mx-auto p-[14px] lg:p-[26px] mt-4 lg:-mt-[77px] z-[10] shadow-2xl rounded-md flex justify-between items-start'>
      {/* card text */}
      <div className='max-w-[240px] p-2 lg:p-0'>
        <div className='flex items-center mb-2 lg:mb-4'>
          <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>Team Application</h4>
          <h2 className='text-[26px] leading-[36px] lg:text-[50px] lg:leading-[60px] font-bold text-stroke-2'>3</h2>
        </div>
        <p className='mb-1 lg:mb-1'>集まれ54期 いちごの森</p>
        <p className='mb-1 lg:mb-1'>54期の皆様と共同開発したアプリになります。</p>
        <a
          className='text-xm lg:text-sm font-bold'
          href='https://runteq-festival-54.vercel.app/'
          target="_blank"
          rel="noopener noreferrer"
          >View</a>
      </div>
      {/* card image */}
      <div>
        <Image
          src={CardImage1}
          alt='strawberry'
          className='w-[150px] h-auto'
        />
      </div>
    </div>
  ), []);

  return (
    <section className='bg-pink min-h-[260px] pb-[55px] text-white'>
      <div className="container mx-auto flex flex-col lg:flex-row gap-x-[32px]">
        {/* card group */}
        <div className='flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[32px] z-10 lg:-mt-[77px] mx-auto'>
          {/* card1 */}
          {card1}
          {/* card2 */}
          {card2}
        </div>
        {/* card3 */}
        {card3}
      </div>
    </section>
  );
};

export default Cards;
