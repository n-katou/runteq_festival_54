import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Social from '../../components/kato/Social';
import MyImg from "../../components/kato/MyImg";
import AppsList from '../../components/kato/AppsList';
import SpotlightTransition from '../../components/kato/SpotlightTransition';

const KatoPage: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  const handleTransitionComplete = () => {
    setShowContent(true);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.section
      initial={{ opacity: 0 }} // 初期状態: 非表示
      animate={{ opacity: 1 }} // アニメーション: 表示
      exit={{ opacity: 0 }} // ページ離脱時: フェードアウト
      transition={{ duration: 1 }} // フェードインの時間
      className="relative min-h-screen"
    >
      {!showContent && <SpotlightTransition onComplete={handleTransitionComplete} />}

      {showContent && (
        <>
          {/* 背景ビデオの配置 */}
          <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src="/kato/back.mp4" type="video/mp4" />
          </video>

          {/* コンテンツエリア */}
          <motion.div
            initial={{ opacity: 0 }} // 初期状態: 非表示
            animate={{ opacity: 1 }} // アニメーション: 表示
            transition={{ duration: 1 }} // フェードインの時間
            className="relative z-10 flex flex-col items-center justify-center min-h-screen"
          >
            <section className="relative z-20 py-12 xl:py-24 text-white w-full">
              <div className="container mx-auto flex flex-col lg:flex-row items-center gap-x-8">
                <motion.div
                  className="relative mt-8 lg:mt-0"
                >
                  <div style={{ perspective: 2000 }}>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 100 }}
                      drag
                      dragElastic={0.18}
                      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                      whileTap={{ cursor: 'grabbing' }}
                      className="backdrop-blur-lg p-4 sm:p-8 rounded-lg shadow-lg relative cursor-grab"
                    >
                      {/* ドラッグハンドルの追加 */}
                      <div className="absolute top-2 right-2 bg-darkGreen/50 text-white p-2 rounded-full shadow-md">
                        <span className="text-sm">Drag</span>
                      </div>

                      <div
                        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-no-repeat absolute -top-1 -right-1 z-0 hidden sm:block"
                        style={{ backgroundImage: `url('/kato/shape-light.svg')` }}
                      />
                      <MyImg
                        containerStyles="w-[310px] h-[272px] sm:w-[410px] sm:h-[362px] lg:w-[510px] lg:h-[462px] bg-no-repeat relative bg-bottom rounded-lg overflow-hidden shadow-lg"
                        imgSrc='/kato/profile.png'
                        style={{
                          backgroundImage: `url('/kato/shape-1.svg')`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          display: 'block' // profile.pngは常に表示
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  className="backdrop-blur-lg bg-white/5 p-8 rounded-lg shadow-lg max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left lg:w-1/2 mt-4 lg:mt-0 hover:bg-white transition-colors duration-300"
                >
                  <h2 className="text-3xl mt-2 font-semibold text-orange">My Name is Naoto Kato</h2>
                  <div className="text-xl mt-4 text-orange">My Vision to Become the Ultimate PM</div>
                  <div className="mt-4 text-lg leading-relaxed text-orange">
                    前職では、主にバラエティや音楽番組の照明を担当していました。2022年末までテレビ業界でキャリアを積む中で、IT分野に強い興味を持ち、プログラミングスクールでスキルを習得しました。現在は、SIerに常駐して運用保守の業務を担当しつつ、自社業務ではReactを用いたフロントエンド開発にも携わっています。10月からはメガベンチャーでPMとして従事します。将来的には複数のプロジェクトを管理しマネジメントスキルを高め、新規プロジェクトの立ち上げに携わりたいと考えています。
                  </div>
                  <div className="mt-8 flex flex-col xl:flex-row items-center gap-8">
                    <Social
                      containerStyles="flex gap-6"
                      iconStyles="w-12 h-12 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white transition-all duration-500 text-5xl"
                    />
                  </div>
                </motion.div>

              </div>
            </section>

            <AppsList />
          </motion.div>
        </>
      )}
    </motion.section>
  );
};

export default KatoPage;
