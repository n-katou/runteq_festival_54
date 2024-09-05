import { memo } from "react";
//import motion
import { motion, useMotionValue, useTransform } from "framer-motion";
//componets
import Social from "../../components/rio/Social";
import MyImg from "../../components/rio/MyImg";
import { Transition } from "../../components/rio/transitions";
import GoHomeButton from '../../components/GoHomeButton';

const RioPage: React.FC = () => {
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
      className="relative min-h-screen overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="absolute w-full h-full z-10 bg-blue/[0.86]" />
        <section className="relative z-20 py-12 xl:py-24 text-white w-full">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-x-8">
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={{ Transition }}
              className="text-red max-w-full xl:max-w-[600px] flex-col xl:mx-0 text-center xl:text-left"
            >
              <h2 className="text-8xl font-semibold text-orange">
                Hello!!
                <br />
                <div className="text-8xl font-semibold text-orange">
                  My nickname is Rio!
                </div>
              </h2>

              <div className="text-3xl text-orange">
                趣味はスポーツ観戦です！
              </div>

              <div className="text-2xl">
                エンジニアになったら、自分自身で使って楽しい・面白いと思えるものを作っていきたいです！！
              </div>
              <br />
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Social
                  containerStyles="flex gap-6 "
                  iconStyles="w-10 h-10 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white hover:transition-all duration-500"
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
                  whileTap={{ cursor: "grabbing" }}
                >
                  <div
                    className="w-[280px] h-[246px] sm:w-[350px] sm:h-[308px] md:w-[400px] md:h-[352px] lg:w-[450px] lg:h-[396px] bg-no-repeat absolute -top-1 -right-1 z-0"
                    style={{
                      backgroundImage: `url('/rio/shape-light.svg')`,
                    }}
                  />
                  <MyImg
                    containerStyles="w-[280px] h-[246px] sm:w-[350px] sm:h-[308px] md:w-[400px] md:h-[352px] lg:w-[450px] lg:h-[396px] bg-no-repeat relative bg-bottom"
                    imgSrc="/rio/profile.png"
                    style={{
                      backgroundImage: `url('/rio/shape-1.svg')`,
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="mt-10">
            <GoHomeButton />
          </div>
        </section>
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/rio/strawberry.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.section>
  );
};

export default memo(RioPage);
