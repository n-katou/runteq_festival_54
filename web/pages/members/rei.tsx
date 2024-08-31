//import motion
import { motion, useMotionValue, useTransform } from "framer-motion";
//componets
import Social from "../../components/rei/Social";
import MyImg from "../../components/rei/MyImg";
import { Transition } from "../../components/rei/transitions";
import FloatingEmoji from "../../components/rei/FloatingEmoji";

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
        <section className="relative z-20 py-12 xl:py-24 text-white w-full bg-cream/[0.5]">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-x-8">
            {/* 浮遊する絵文字を追加 */}
            {[...Array(5)].map((_, i) => (
              <FloatingEmoji key={`strawberry-${i}`} emoji="🍓" delay={i * 2} />
            ))}
            {[...Array(5)].map((_, i) => (
              <FloatingEmoji key={`crab-${i}`} emoji="🦀" delay={i * 2 + 1} />
            ))}
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={{ Transition }}
              className="w-full lg:w-1/2 text-orange bg-slate-500/[.06] border-2 border-red rounded-lg p-6"
            >
              <h2 className="text-3xl md:text-4xl text-center mb-4">
                🍓<span>Strawberry Crub!</span>🍓
              </h2>
              <div className="text-xl md:text-2xl text-center mb-4">
                〜🦀スタンプ荒らしマン54期代表🦀〜
              </div>
              <div className="text-lg md:text-xl mb-2">Ida Reiya (rei_54a)</div>
              <div className="text-lg md:text-xl mb-4">
                好奇心・向上心・遊び心
              </div>
              <p className="text-base md:text-lg mb-6">
                一応54後期でコミュリやっています。工業高校で情報系コースを専攻し、PC操作や情報の基礎を学びました。卒業後、大手総合化学品メーカーで製造オペレーターとして約3年間勤務。その際、社内ITシステムに助けられた経験から、システム開発に興味を持ちました。ふとした好奇心からデイトラWeb制作コース受講しております。今後エンジニアとして、主体的に動いてチャレンジと課題解決を図り、自分の可能性を広げてスペシャリストを目指していきます。
              </p>
              <Social
                containerStyles="flex justify-center gap-6 mt-4"
                iconStyles="w-10 h-10 border border-green rounded-full flex justify-center items-center text-white text-base bg-red hover:bg-darkGreen hover:text-white transition-all duration-500"
              />
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
              className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative"
            >
              <div style={{ perspective: 2000 }}>
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 100 }}
                  drag
                  dragElastic={0.18}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="backdrop-blur-lg bg-white/20 p-4 rounded-lg shadow-lg"
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
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ Transition }}
            className="text-orange md:max-w-[600px] mx-auto text-center bg-slate-500/[.06] border-2 border-red rounded-lg px-4 pt-4 pb-8 mt-8"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Application</h2>
            <div className="flex flex-col sm:flex-row gap-6">
              {/* 浮遊する絵文字を追加 */}
              {[...Array(5)].map((_, i) => (
                <FloatingEmoji
                  key={`strawberry-${i}`}
                  emoji="🍓"
                  delay={i * 2}
                />
              ))}
              {[...Array(5)].map((_, i) => (
                <FloatingEmoji key={`crab-${i}`} emoji="🦀" delay={i * 2 + 1} />
              ))}
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl mb-3">ポートフォリオ</h3>
                <a
                  href="https://tacklemaster.net/"
                  className="block relative h-40 rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <MyImg
                    containerStyles="w-full h-full"
                    imgSrc="/rei/tackle.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </a>
              </div>
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl mb-3">ミニアプリ</h3>
                <a
                  href="https://insect-log.onrender.com"
                  className="block relative h-40 rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <MyImg
                    containerStyles="w-full h-full"
                    imgSrc="/rei/insectlog.png"
                    style={{ objectFit: "cover" }}
                  />
                </a>
              </div>
            </div>
          </motion.div>
          Ï
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
    </motion.section>
  );
};

export default ReiPage;
