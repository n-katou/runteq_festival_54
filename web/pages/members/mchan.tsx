//import motion
import { motion, useMotionValue, useTransform } from 'framer-motion';
//components
import Social from '../../components/mchan/Social';
import MyImg from "../../components/mchan/MyImg";
import { Transition } from '../../components/mchan/transitions';
import GoHomeButton from '../../components/GoHomeButton';

const MchanPage: React.FC = () => {
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
    >
      <div className="h-auto min-h-screen xl:h-screen relative overflow-hidden">
        <div className="absolute w-full h-full z-10 bg-white/[0.4]" />
        <section className="relative z-20 py-12 xl:py-24 h-auto xl:pt-28">
          <div className="container mx-auto">
            <div className="flex flex-col items-center xl:flex-row justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-50%' }}
                transition={{ Transition }}
                className="text-white max-w-[600px] flex flex-col justify-center text-center xl:text-left"
              >
                <div className="relative w-full h-auto text-center xl:text-left">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl relative inline-block">
                    <span className="relative z-10 text-white" style={{
                      textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                    }}>
                      mちゃん&apos;s Profile
                    </span>
                    <div
                      className="absolute inset-0 -z-10"
                      style={{
                        backgroundImage: `url('/mchan/bg2.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '15px',
                        transform: 'scale(1.1)',
                        transformOrigin: 'center',
                      }}
                    />
                  </h2>
                </div>
                <div className="text-lg md:text-xl lg:text-2xl mt-6">My Vision as a Future Engineer ...</div>
                <div className="text-lg md:text-xl lg:text-2xl">To Become a Trusted Engineer Everyone Can Rely On</div>
                <div className="text-base md:text-lg lg:text-xl mt-7">
                  はじめまして！前職では美容クリニックで看護師として働いておりました。旦那がエンジニアであることからプログラミングに興味を持ち、この分野へ挑戦することに。将来的には、美容業界にエンジニアとして再び関わり、この業界をバックからサポートしていきたいと考えています。どうぞよろしくお願いいたします 🌻
                </div>
                <br />
                <div className="hidden xl:flex flex-col items-center gap-8">
                  <Social
                    containerStyles="flex gap-6 "
                    iconStyles="w-10 h-10 md:w-12 md:h-12 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white hover:transition-all duration-500 text-[30px] md:text-[40px]"
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
                className="flex flex-col xl:flex-row items-center gap-8"
              >
                <div style={{ perspective: 2000 }}>
                  <motion.div
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragElastic={0.18}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: 'grabbing' }}
                    className="relative"
                  >
                    <div
                      className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-no-repeat absolute -top-14 xl:-right-28 z-0 hidden xl:block"
                      style={{ backgroundImage: `url('/template/shape-light.svg')` }}
                    />
                    <MyImg
                      containerStyles="w-[200px] h-[200px] md:w-[275px] md:h-[275px] lg:w-[325px] lg:h-[325px] bg-no-repeat relative bg-bottom"
                      imgSrc='/mchan/mchan_profile.png'
                    />
                  </motion.div>
                </div>
                <div className="xl:hidden flex flex-col items-center gap-8">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-10 h-10 md:w-12 md:h-12 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white hover:transition-all duration-500 text-[30px] md:text-[40px]"
                  />
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
        <GoHomeButton />
      </div>
    </motion.section>
  );
};

export default MchanPage;
