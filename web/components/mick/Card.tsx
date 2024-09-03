
import React from 'react';
import Image from 'next/image';

import CardImage1 from '../../public/mick/strawberry1.jpg';
import CardImage2 from '../../public/mick/strawberry2.jpg';
import { Card } from '@mui/material';



const Cards = () => {
  const handleClick = () => {
    alert('作成中です');
  };

  return <section className='bg-pink min-h-[260px] pb-[55px] text-white'>
    <div className="container mx-auto flex flex-col lg:flex-row gap-x-[32px]">
      {/* card group */}
      <div className='flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[32px] z-10 lg:-mt-[77px] mx-auto'>
          {/* card1 */}
          <div className='bg-pink w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]'>
            {/* card text */}
            <div className='flex items-center mb-[18px] lg:mb-[28px]'>
              <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>My first application</h4>
              <h2 className='h2 text-stroke-2'>1</h2>
            </div>
            {/* card content */}
            <div className='flex items-center'>
              {/* card image */}
              <Image src={CardImage1} alt='Card Image' className='h-[40px] w-[40px] mr-2'/>
              {/* card link */}
              <a href='https://battleofrunteq.vercel.app/' className='text-blue-500 hover:underline'
              >
                Link
              </a>
            </div>
          </div>
          {/* card2 */}
          <div className='bg-gradient-to-r from-pink to-blue w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]'>
            {/* card text */}
            <div className='flex items-center mb-[18px] lg:mb-[28px]'>
              <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>My second application</h4>
              <h2 className='h2 text-stroke-2'>2</h2>
            </div>
            {/* card content */}
            <div className='flex items-center'>
              {/* card image */}
              <Image src={CardImage1} alt='Card Image' className='h-[40px] w-[40px] mr-2'/>
              {/* card link */}
              <a
                href='#'
                className='text-blue-500 hover:underline'
                onClick={(e) => {
                  e.preventDefault(); // デフォルトのリンク動作を防ぐ
                  handleClick(); // ポップアップを表示する
                }}
              >
                Link
              </a>
            </div>
          </div>
      </div>
      {/* card3 */}
      <div className='bg-blue w-full flex-1 max-w-[542px] mx-auto p-[14px]lg:p-[26px] mt-4 lg:-mt-[77px] z-[10] shadow-2xl rounded-md flex justify-between items-start'>
      {/* card text */}
      <div className='max-w-[240px]'>
        <div className='flex items-center mb-4 lg:mb-8'>
          <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>Team Application</h4>
          <h2 className='h2 text-stroke-2'>3</h2>
        </div>
        <p className='mb-4 lg:mb-3'>集まれ54期 いちごの森</p>
        <a className='text-xs lg:text-sm font-bold uppercase text-heading' href='https://runteq-festival-54.vercel.app/'>Link</a>
      </div>
      {/* card image */}
      <div>
        <Image src={CardImage2} alt="strawberry" className='h-[180px] w-[180px]'></Image>
      </div>
      </div>

    </div>
  </section>
};


export default Cards;
