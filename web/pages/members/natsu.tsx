//import motion
import { motion, useMotionValue, useTransform } from 'framer-motion'
//componets
import Social from '../../components/natsu/Social';
import MyImg from "../../components/natsu/MyImg";
import { Transition } from '../../components/natsu/transitions';
import Curve from "../../public/transition/index";
import React, { useState, useEffect } from 'react';
import GoHomeButton from '../../components/GoHomeButton';

const NatsuPage: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  // Curveアニメーションを管理するためのstate
  const [isCurveComplete, setIsCurveComplete] = useState<boolean>(false);

  useEffect(() => {
    // ここでCurveの完了を監視し、完了したらtrueとする
    const timer = setTimeout(() => {
      setIsCurveComplete(true);
    }, 1000); // 1秒後に表示
    return () => clearTimeout(timer); // 終わったらクリア
  }, []);


  return (
    <>
      <Curve>
        <></>
      </Curve>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ Transition }}
        className="relative min-h-screen overflow-hidden"
      >
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="absolute w-full h-full z-10" style={{ backgroundColor: 'rgba(253, 203, 110, 0.46)' }} />
          <section className="relative z-20 py-12 xl:py-24 text-white w-full">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-x-8">
              <motion.div
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-50%' }}
                transition={{ Transition }}
                className="text-darkGreen max-w-full xl:max-w-[600px] flex-col xl:mx-0 text-center xl:text-left">
                <div className="p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 transform" style={{ opacity: 1, willChange: 'auto', transform: 'none', maxWidth: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                  <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px]">
                    Hello!<br /></h2>
                  <h3 className="text-[32px] sm:text-[32px] md:text-[48px] lg:text-[64px]">My Name is<br /> Natsumi Kawashita</h3><br />
                  <div className="text-xl">前職は日本料理人で、懐石料理のお店やお寿司屋さんで働いていました。<br />
                    飲食店で働いていた経験を活かして、将来は飲食店特化の会計管理アプリを作成したいと考えています。<br />
                    そのためにも技術や知識の習得をして、エンジニアとして活躍していきたいです！<br />
                    そして素晴らしき54期の一員としてチーム開発に携わらせていただき感謝でいっぱいです！！</div>
                  <br />
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                    <Social
                      containerStyles="flex gap-6 "
                      iconStyles="w-10 h-10 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white hover:transition-all duration-500 text-5xl"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                className="relative mt-8 lg:mt-0"
              >
                <div style={{ perspective: 2000 }}>
                  <motion.div
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragElastic={0.18}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: 'grabbing' }}
                  >
                    <div
                      className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[500px] lg:h-[500px] bg-no-repeat absolute -top-1 -right-1 z-0"
                      style={{
                        backgroundImage: `url('/template/shape-light.svg')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                      }}
                    />
                    <MyImg
                      containerStyles="w-[240px] h-[252px] sm:w-[350px] sm:h-[362px] lg:w-[510px] lg:h-[462px] bg-no-repeat relative bg-bottom rounded-lg"
                      imgSrc='/natsu/natsu.png'
                      style={{
                        backgroundImage: `url('/template/shape-1.svg')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        display: 'block' // natsu.pngは常に表示
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
          <section className="relative z-20 py-8 xl:py-16 h-[84] xl:pt-15 w-full">
            <h2 className="text-4xl font-bold text-center mb-12 text-darkGreen">My Application</h2>
            <div className="flex justify-center items-center">
              <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 transform" style={{ opacity: 1, willChange: 'auto', transform: 'none', maxWidth: '80%' }}>
                <div className="text-4xl text-orange-500 mb-4">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424 0c-12.4 0-24.2 4.9-33 13.7L233.5 171.2c-10.5 10.5-19.8 22.1-27.7 34.6L132.7 321.6c-7.3 11.5-15.8 22.2-25.5 31.9L69.9 390.7l51.3 51.3 37.3-37.3c9.6-9.6 20.3-18.2 31.9-25.5l115.8-73.1c12.5-7.9 24.1-17.2 34.6-27.7L498.3 121c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L457 13.7C448.2 4.9 436.4 0 424 0zm88 432a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM15 399c-9.4 9.4-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L49 399c-9.4-9.4-24.6-9.4-33.9 0z" /></svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-orange-800">甲子園NOW!</h3>
                <p className="mb-4 text-orange">甲子園球場の盛り上がりや感動を可視化し、共有するアプリです。</p>
                <a href="https://kousiennow.onrender.com/" className="text-darkGreen hover:text-orange-700 hover:underline" target="_blank" rel="noopener noreferrer">View App</a>
              </div>
            </div>
            <div style={{ height: '50px' }}></div>
            <GoHomeButton />
          </section>
          <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src="/template/strawberry.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.section>
    </>
  );
};

export default NatsuPage;
