//import motion
import { motion, useMotionValue, useTransform } from 'framer-motion'
//componets
import Social from '../../template/components/Social';
import MyImg from "../../template/components/MyImg";
import { Transition } from '../../template/components/transitions';

const Template: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ Transition }}
    >
      <div className="h-[80vh] xl:h-screen relative">
        <div className="absolute w-full h-full z-10 bg-white/[0.4]" />
        <section className="relative z-20 py-12 xl:py-24 h-[84] xl:pt-28">
          <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
              <motion.div
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-50%' }}
                transition={{ Transition }}
                className="text-white max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                <h2 className="text-6xl relative inline-block">
                <span className="relative z-10 text-white" style={{
                  textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}>
                  mちゃん's Profile
                </span>
                  <div
                    className="absolute inset-0 -z-10"
                    style={{
                      backgroundImage: `url('/mchan/bg2.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      borderRadius: '15px', // 角を丸くする
                      transform: 'scale(1.1)', // 画像を少し拡大
                      transformOrigin: 'center', // 拡大の基準位置
                    }}
                  />
                </h2>
                <div className="text-2xl mt-6">My Vision as a Future Engineer ...</div>
                <div className="text-2xl">To Become a Trusted Engineer Everyone Can Rely On</div>
                <div className="text-xl mt-7">はじめまして！前職では美容クリニックで看護師として働いておりました。旦那がエンジニアであることからプログラミングに興味を持ち、この分野へ挑戦することに。将来的には、美容業界にエンジニアとして再び関わり、この業界をバックからサポートしていきたいと考えています。どうぞよろしくお願いいたします 🌻</div>
                <br />
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Social
                    containerStyles="flex gap-6 "
                    iconStyles="w-12 h-12 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white hover:transition-all duration-500 text-[40px]"
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
                className="hidden xl:flex relative"
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
                      // プロフィール画像の背景色
                      className="w-[500px] h-[500px] bg-no-repeat absolute -top-14 -right-28 z-0"
                      style={{ backgroundImage: `url('/template/shape-light.svg')` }}
                    />
                    <MyImg
                      containerStyles="w-[325px] h-[325px] bg-no-repeat relative bg-bottom"
                      // プロフィール画像
                      imgSrc='/mchan/mchan_profile.png'
                      // style={{ backgroundImage: `url('/template/shape-1.svg')` }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* 背景ひまわり */}
        <video 
          src="/mchan/9184_640x360.mp4" 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          autoPlay 
          loop 
          muted
        ></video>


      </div>
    </motion.section>
  );
};

export default Template
