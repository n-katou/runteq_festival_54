import { motion, useMotionValue, useTransform } from 'framer-motion';
// components
import Social from '../../components/nori/Social';
import MyImg from "../../components/nori/MyImg";
import { Transition } from '../../components/nori/transitions';

const NoriPage: React.FC = () => {
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
      className="min-h-screen flex flex-col justify-center bg-lightblue"
    >
      <div className="relative h-full xl:h-screen">
        <div className="absolute w-full h-full z-10 bg-blue/[0.86]" />
        <section className="relative z-20 py-12 xl:py-24 text-white w-full">
          <div className="container mx-auto flex flex-col-reverse xl:flex-row justify-between items-center gap-8 h-full">
            <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-50%' }}
              transition={{ Transition }}
              className="text-orange max-w-full xl:max-w-[600px] flex-col text-center xl:text-left"
            >
              <h2 className="text-3xl sm:text-4xl xl:text-6xl">則皮早乃香（のり）</h2>
              <div className="text-base sm:text-lg xl:text-xl">
                趣味：お箏、中国ドラマ鑑賞（時代劇）、漫画、アニメ
              </div>
              <div className="text-base sm:text-lg xl:text-xl">
                一言：甲子園球場がある兵庫県西宮市に住んでいます。介護士してました。よろしくお願いいたします。
              </div>
              <br />
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white transition-all duration-500"
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
              className="relative mt-8 xl:mt-0 flex justify-center xl:justify-end"
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
                    className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] xl:w-[530px] xl:h-[700px] bg-no-repeat absolute -top-1 -right-1 z-0"
                    style={{}}
                  />
                  <MyImg
                    containerStyles="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] xl:w-[510px] xl:h-[510px] bg-no-repeat relative bg-bottom rounded-lg overflow-hidden shadow-lg"
                    imgSrc='/nori/profile.png'
                    style={{}}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/template/strawberry.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.section>

  );
};

export default NoriPage;
