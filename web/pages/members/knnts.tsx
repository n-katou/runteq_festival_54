//import motion
import { motion, useMotionValue, useTransform } from 'framer-motion'
//componets
import Social from '../../components/knnts/Social';
import MyImg from "../../components/knnts/MyImg";
import { Transition } from '../../components/knnts/transitions';

const Template: React.FC = () => {
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
              className="text-orange max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">

              <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
                かなナッツ
              </h2><br />

              <div className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl">
                Hobbies :
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-xl">
                キラキラしたものを眺める・記録する・<br />
                旅行・キャンプ・フルート
              </div>

              <br />

              <div className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl">
                Comment :
              </div>
              <div className="text-base sm:text-base md:text-lg lg:text-xl">
                ナッツが大好き♡<br />
                栄養士やフルートを10年以上続けてきました。<br />
                2児の母としても日々奮闘中〜！<br />
                <br />
                54期のみんなと一緒に楽しく学んでいきたいです！
              </div>

              <br />
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Social
                  containerStyles="flex gap-6 "
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
                  <MyImg
                    containerStyles="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] xl:w-[450px] xl:h-[450px] bg-no-repeat relative bg-bottom rounded-lg overflow-hidden shadow-lg"
                    imgSrc='/knnts/img_knnts.jpg' // 🟩画像を追加
                    style={{}}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/template/strawberry.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.section>
  );
};

export default Template
