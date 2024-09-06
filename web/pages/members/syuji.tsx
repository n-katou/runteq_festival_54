//import motion
import { motion, useMotionValue, useTransform } from 'framer-motion'
//componets
import Social from '../../components/syuji/Social';
import Moviesaga from '../../components/syuji/MovieSaga';
import { Transition } from '../../template/components/transitions';
import GoHomeButton from '../../components/GoHomeButton';


const SyujiPage: React.FC = () => {
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
      className="min-h-screen flex flex-col justify-center bg-lightblue"
    >
      <div className="h-full xl:h-screen relative">
        <div className="absolute w-full h-full z-10 bg-blue/[0.86]" />
        <section className="relative z-20 py-12 xl:py-24 h-[84] xl:pt-28">
          <div className="container mx-auto">
            <div className='flex justify-center'>
              <img
                src="/syuji/image.png"
                alt="Circular image"
                className="h-[250px] object-cover rounded-full lg:hidden mb-10"
              />
            </div>
            <div className="flex justify-between gap-x-8">
              <motion.div
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-50%' }}
                transition={{ Transition }}
                className="text-orange max-w-[500px] flex-col justify-center mx-auto xl:ml-20 text-center xl:text-left bg-white bg-opacity-50 rounded-2xl p-10">
                <h2 className="text-5xl mb-5">
                  飯田秋至
                </h2>
                <div className="text-2xl">自己紹介:元役者・元料理人です！</div>
                <div className="text-2xl">趣味は映画鑑賞・料理・<br />サントラを聴く・ゲームなどなど</div>
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Social
                    containerStyles="flex gap-6 "
                    iconStyles="w-10 h-10 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white hover:transition-all duration-500 mt-5"
                  />
                </div>
                <Moviesaga />
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
                      className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-1 z-0"
                      style={{ backgroundImage: `url('/template/shape-light.svg')` }}
                    />
                    <div
                      className="w-[400px] h-[400px] mr-24 bg-no-repeat bg-bottom rounded-full overflow-hidden"
                      style={{ backgroundImage: `url('/template/shape-1.svg')` }}
                    >
                      <img
                        src="/syuji/image.png"
                        alt="Circular image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="mt-10">
            <GoHomeButton />
          </div>
        </section>
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover hidden xl:block">
          <source src="/template/strawberry.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.section>
  );
};

export default SyujiPage
