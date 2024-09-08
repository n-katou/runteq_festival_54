import React, { useState, useEffect } from 'react';

import Logo from "../components/about/Logo";
import MainContents from "../components/about/MainContents";
import Curve from '../public/transition/index';

function About() {
  const [isCurveComplete, setIsCurveComplete] = useState<boolean>(false);

  useEffect(() => {
    // ここでCurveの完了を監視し、完了したらtrueとする
    const timer = setTimeout(() => {
      setIsCurveComplete(true);
    }, 1000); // 1秒後に表示
    return () => clearTimeout(timer); // 終わったらクリア
  }, []);

  return (
    <Curve>
      {isCurveComplete && (
        <div className="px-8 bg-lightblue font-sans overflow-hidden relative">
          {/* 水玉模様 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 20%),
              radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 20%)`,
              backgroundSize: "30px 30px",
              backgroundPosition: "10px 25px, 25px 10px",
            }}
          ></div>
          {/* メインコンテンツ */}
          <main className="min-h-screen py-10 flex flex-col justify-center items-center relative z-10">
            <Logo />
            <MainContents />
          </main>
        </div>)}
    </Curve>
  );
}

export default About;
