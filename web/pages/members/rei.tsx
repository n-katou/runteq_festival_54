//import motion
import { motion, useMotionValue, useTransform } from "framer-motion";
//componets
import Social from "../../components/rei/Social";
import MyImg from "../../components/rei/MyImg";
import { Transition } from "../../components/rei/transitions";
import FloatingEmoji from "../../components/rei/FloatingEmoji";
import Applications from "../../components/rei/Applications";
import GoHomeButton from '../../components/GoHomeButton';

const ReiPage: React.FC = () => {
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
      {/* コンテンツエリア */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <section className="relative z-20 py-8 md:py-16 xl:py-24 w-full bg-cream/[0.7] backdrop-blur-md">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* 浮遊する絵文字を追加 */}
            {[...Array(5)].map((_, i) => (
              <FloatingEmoji key={`strawberry-${i}`} emoji="🍓" delay={i * 2} />
            ))}
            {[...Array(5)].map((_, i) => (
              <FloatingEmoji key={`crab-${i}`} emoji="🦀" delay={i * 2 + 1} />
            ))}
            {/* プロフィール */}
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={{ Transition }}
              className="w-full lg:w-1/2 text-orange bg-white/[0.8] border-2 border-red rounded-lg p-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-red">🍓Strawberry Crub!🍓</h2>
              <p className="text-xl md:text-2xl text-center mb-6 text-red">〜🦀スタンプ荒らしマン54期代表🦀〜</p>
              <div className="text-lg md:text-xl mb-3 font-semibold">Ida Reiya (rei_54a)</div>
              <div className="text-lg md:text-xl mb-4 font-medium text-red">特性：「好奇心・向上心・遊び心」</div>
              <p className="text-base md:text-lg mb-6 leading-relaxed">
                工業高校で情報系コースを専攻し、PC操作や情報の基礎を学びました。卒業後、大手総合化学品メーカーで製造オペレーターとして約3年間勤務。その際、社内ITシステムに助けられた経験から、システム開発に興味を持ちました。デイトラWeb制作コース受講しております。今後エンジニアとして、主体的に動いてチャレンジと課題解決を図り、自分の可能性を広げてスペシャリストを目指していきます。
              </p>
              <Social
                containerStyles="flex justify-center gap-6 mt-6"
                iconStyles="w-12 h-12 border-2 border-red rounded-full flex justify-center items-center text-red text-xl bg-white hover:bg-red hover:text-white transition-all duration-300"
              />
            </motion.div>
            {/* 画像 */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative"
            >
              <div style={{ perspective: 2000 }}>
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 100 }}
                  drag
                  dragElastic={0.18}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="backdrop-blur-lg bg-white/20 p-4 rounded-lg shadow-lg border-2 border-red overflow-hidden"
                >
                  <div
                    className="w-full h-full absolute -top-1 -right-1 z-0"
                    style={{ backgroundImage: `url('/rei/shape-light.svg')` }}
                  />
                  {/* 浮遊する絵文字を追加 */}
                  {[...Array(5)].map((_, i) => (
                    <FloatingEmoji
                      key={`strawberry-app-${i}`}
                      emoji="🍓"
                      delay={i * 2}
                    />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <FloatingEmoji
                      key={`crab-app-${i}`}
                      emoji="🦀"
                      delay={i * 2 + 1}
                    />
                  ))}
                  <MyImg
                    containerStyles="w-[280px] h-[246px] sm:w-[350px] sm:h-[308px] md:w-[400px] md:h-[352px] lg:w-[450px] lg:h-[396px] bg-no-repeat relative bg-bottom rounded-lg overflow-hidden shadow-lg"
                    imgSrc="/rei/rei.png"
                    style={{ backgroundImage: `url('/rei/shape-1.svg')` }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* アプリケーション */}
          <Applications />
        </section>

        {/* 背景ビデオの配置 */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/rei/strawberry.mp4" type="video/mp4" />
        </video>
      </div>
      <GoHomeButton />
    </motion.section>
  );
};

export default ReiPage;
