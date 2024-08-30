//import motion
import { motion, useMotionValue, useTransform } from "framer-motion";
//componets
import Social from "../../components/rei/Social";
import MyImg from "../../components/rei/MyImg";
import { Transition } from "../../template/components/transitions";

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
    >
      <div className="h-full relative">
        <div className="absolute w-full h-full z-10 bg-blue/[0.86]" />
        <section className="relative z-20 py-12 xl:py-20 h-full xl:pt-28">
          <div className="container mx-auto flex justify-center">
            <div className="md:flex md:justify-between gap-x-8 items-center">
              <div className="flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, y: "-50%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-50%" }}
                  transition={{ Transition }}
                  className="text-orange xl:max-w-[600px] max-w-full flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left bg-slate-500/[.06] border-2 rounded-lg p-4"
                >
                  <h2 className="text-4xl text-center">
                    🍓<span>Strawberry Crub!</span>🍓
                  </h2>
                  <div className="text-2xl text-center">
                    〜🦀スタンプ荒らしマン54期代表🦀〜
                  </div>
                  <div className="text-xg mt-4">Ida Reiya (rei_54a)</div>
                  <div className="text-xg mt-1">好奇心・向上心・遊び心</div>
                  <p className="text-xg mt-4">
                    一応54後期でコミュリやっています。工業高校で情報系コースを専攻し、PC操作や情報の基礎を学びました。卒業後、大手総合化学品メーカーで製造オペレーターとして約3年間勤務。その際、社内ITシステムに助けられた経験から、システム開発に興味を持ちました。ふとした好奇心からデイトラWeb制作コース受講しております。今後エンジニアとして、主体的に動いてチャレンジと課題解決を図り、自分の可能性を広げてスペシャリストを目指していきます。
                  </p>
                  <div className="flex flex-col xl:flex-row items-center gap-8 justify-center">
                    <Social
                      containerStyles="flex gap-6 mt-2"
                      iconStyles="w-10 h-10 border border-green rounded-full flex justify-center items-center text-white text-base bg-red hover:bg-darkGreen hover:text-white hover:transition-all duration-500"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: "-50%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-50%" }}
                  transition={{ Transition }}
                  className="text-orange md:max-w-[600px]  text-center xl:text-left bg-slate-500/[.06] border-2 rounded-lg px-4 pt-4 pb-14"
                >
                  <h2 className="text-4xl text-center">Application</h2>
                  <div className="flex gap-3 mt-4">
                    <div className="w-1/2 h-[120px]">
                      <h3 className="text-center mb-2">ポートフォリオ</h3>
                      <a
                        href="https://tacklemaster.net/"
                        className="text-center w-full h-full relative flex flex-col justify-center items-center hover:opacity-70"
                      >
                        <MyImg
                          containerStyles="w-auto h-auto bg-no-repeat relative bg-bottom"
                          imgSrc="/rei/tackle.jpg"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: -1,
                            objectFit: "cover",
                          }}
                        />
                      </a>
                    </div>
                    <div className="w-1/2 h-[120px]">
                      <h3 className="text-center mb-2">ミニアプリ</h3>
                      <a
                        href="https://insect-log.onrender.com"
                        className="text-center w-full h-full relative flex flex-col justify-center items-center hover:opacity-70"
                      >
                        <MyImg
                          containerStyles="w-auto h-auto bg-no-repeat relative bg-bottom"
                          imgSrc="/rei/insectlog.png"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: -1,
                            objectFit: "cover",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                className="xl:flex relative"
              >
                <div style={{ perspective: 2000 }}>
                  <motion.div
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragElastic={0.18}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: "grabbing" }}
                    className="backdrop-blur-lg bg-white/20 p-4 sm:p-4 rounded-lg shadow-lg mt-8 sm:mt-0"
                  >
                    <div
                      className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-no-repeat absolute -top-1 -right-1 z-0"
                      style={{ backgroundImage: `url('/rei/shape-light.svg')` }}
                    />
                    <MyImg
                      containerStyles="w-[310px] h-[272px] sm:w-[410px] sm:h-[362px] lg:w-[510px] lg:h-[462px] bg-no-repeat relative bg-bottom rounded-lg overflow-hidden shadow-lg"
                      imgSrc="/rei/rei.png"
                      style={{ backgroundImage: `url('/rei/shape-1.svg')` }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/rei/strawberry.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.section>
  );
};

export default Template;
