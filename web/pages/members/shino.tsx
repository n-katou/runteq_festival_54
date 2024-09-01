import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Social from '../../components/shino/Social';
import MyImg from "../../components/shino/MyImg";
import { Transition } from '../../components/shino/transitions';
import AppsList from '../../components/shino/AppsList';

const KatoPage: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ Transition }}
      className="relative min-h-screen"
    >
      {/* 背景ビデオの配置 */}
      <img 
  src="/shino/background.jpg" 
  alt="Strawberry" 
  className="absolute top-0 left-0 w-full h-full object-cover" 
/>

      {/* コンテンツエリア */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <section className="relative z-20 py-12 xl:py-24 text-sky-700 w-full">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-x-8">
            <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-50%' }}
              transition={{ Transition }}
              className="backdrop-blur-lg bg-white/20 p-8 rounded-lg shadow-lg max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left lg:w-1/2"
            >
              <h2 className="text-5xl font-bold text-sky-700">おしの</h2>
              <div className="text-3xl mt-2 font-semibold text-sky-700">My Name is Shino Omata</div>
              <div className="text-xl mt-4 text-sky-700">My Vision to Become an Engineer <br />
                Who Makes Everyone Happy！</div>
              <div className="mt-4 text-lg leading-relaxed text-sky-700">北海道出身、名古屋在住、元公務員のおしのです🐹<br />勉強ばかりなのでそろそろ旅行したい今日このごろ✈️<br />
              今回はTOPページやロゴなどいろいろデザインできて楽しかったです！Reactも学びたい！
              </div>
        
             <div className="mt-4 flex justify-center">
              <MyImg
                    containerStyles="w-[300px] h-[300px] bg-no-repeat relative bg-bottom rounded-full overflow-hidden shadow-lg"
                    imgSrc='/shino/logo.png'
                    style={{ backgroundImage: `url('/shino/shape-1.svg')` }}
                  />
              </div>
              <div className="mt-8 flex flex-col xl:flex-row items-center gap-8">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white transition-all duration-500 text-5xl"
                />
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
                  className="backdrop-blur-lg bg-white/20 p-8 rounded-lg shadow-lg"
                >
                  <div
                    className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-1 z-0"
                    style={{ backgroundImage: `url('/shino/shape-light.svg')` }}
                  />
                  <MyImg
                    containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom rounded-full overflow-hidden shadow-lg"
                    imgSrc='/shino/profile.png'
                    style={{ backgroundImage: `url('/shino/shape-1.svg')` }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <AppsList />
      </div>
    </motion.section>
  );
};

export default KatoPage;
