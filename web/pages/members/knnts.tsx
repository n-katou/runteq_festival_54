//import motion
import { motion, useMotionValue, useTransform } from 'framer-motion'
//componets
import Social from '../../components/knnts/Social';
import MyImg from "../../components/knnts/MyImg";
import { Transition } from '../../components/knnts/transitions';

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
        <div className="absolute w-full h-full z-10 bg-blue/[0.86]" />
        <section className="relative z-20 py-12 xl:py-24 h-[84] xl:pt-28">
          <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
              <motion.div
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-50%' }}
                transition={{ Transition }}
                className="text-orange max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">

                <h2 className="text-8xl">
                  かなナッツ
                </h2>

                <div className="text-2xl">
                  Hobbies :
                </div>
                <div className="text-xl">
                  キラキラしたものを眺める・記録する・<br />
                  旅行・キャンプ・フルート
                </div>

                <br />

                <div className="text-2xl">
                  Comment :
                </div>
                <div className="text-xl">
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
                    <MyImg
                      containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                      imgSrc='/knnts/img_knnts.jpg' // 🟩画像を追加
                      style={{ backgroundImage: `url('/template/shape-1.svg')` }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
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
