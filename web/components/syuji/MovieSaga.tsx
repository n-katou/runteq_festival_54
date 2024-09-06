import React, { useState, useEffect, memo } from 'react';

const Moviesaga: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='text-2xl'>
      <div className='my-4'>制作アプリ</div>
      <div className="bg-black h-48 sm:h-64 rounded-xl overflow-hidden relative flex items-center justify-center group">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-purple-900 opacity-50 transition-all duration-500 group-hover:opacity-75"></div>
        <div className="absolute inset-0 bg-[url('/film-grain.png')] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        <a
          href="https://movie-saga-app.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`relative z-10 transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} group-hover:scale-105`}
        >
          <div
            className="text-4xl font-extrabold text-white tracking-widest uppercase text-center px-4 transition-all duration-500 group-hover:tracking-[0.2em]"
            style={{
              textShadow: '0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3)',
              fontFamily: "'Bebas Neue', sans-serif"
            }}
          >
            Moviesaga
          </div>
          <div className="w-0 h-0.5 bg-white mx-auto transition-all duration-500 group-hover:w-3/4"></div>
        </a>
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform rotate-45 translate-x-full group-hover:translate-x-[-200%]"></div>
        </div>
      </div>
      <div className='mt-3 text-xl'>映画をランダムで選んでくれるアプリです</div>
    </div>
  );
};

export default memo(Moviesaga);
