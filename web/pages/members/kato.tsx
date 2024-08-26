import { motion, useMotionValue, useTransform } from 'framer-motion';
import Social from '../../components/kato/Social';
import MyImg from "../../components/kato/MyImg";
import { Transition } from '../../components/kato/transitions';

const KatoPage: React.FC = () => {
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
      <div className="h-[80vh] xl:h-screen relative flex items-center justify-center">
        <div className="absolute w-full h-full z-10 bg-blue/[0.86]" />
        <section className="relative z-20 py-12 xl:py-24 text-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center gap-x-8">
              <motion.div
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-50%' }}
                transition={{ Transition }}
                className="backdrop-blur-lg bg-white/20 p-8 rounded-lg shadow-lg max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left"
              >
                <h2 className="text-5xl font-bold text-orange">Hello</h2>
                <div className="text-3xl mt-2 font-semibold text-orange">My Name is Naoto Kato</div>
                <div className="text-xl mt-4 text-orange">My Vision to Become the Ultimate PM</div>
                <div className="mt-4 text-lg leading-relaxed text-orange">
                  前職では、主にバラエティや音楽番組の照明を担当していました。2022年末までテレビ業界でキャリアを積む中で、IT分野に強い興味を持ち、プログラミングスクールでスキルを習得しました。現在は、SIerに常駐して運用保守の業務を担当しつつ、自社業務ではReactを用いたフロントエンド開発にも携わっています。10月からはメガベンチャーでPMとして従事します。将来的には複数のプロジェクトを管理しマネジメントスキルを高め、新規プロジェクトの立ち上げに携わりたいと考えています。
                </div>
                <div className="mt-8 flex flex-col xl:flex-row items-center gap-8">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-12 h-12 border border-green rounded-full flex justify-center items-center text-white text-base bg-green hover:bg-darkGreen hover:text-white transition-all duration-500 text-5xl"
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
                    className="backdrop-blur-lg bg-white/20 p-8 rounded-lg shadow-lg"
                  >
                    <div
                      className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-1 z-0"
                      style={{ backgroundImage: `url('/template/shape-light.svg')` }}
                    />
                    <MyImg
                      containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom rounded-lg overflow-hidden shadow-lg"
                      imgSrc='/kato/profile.png'
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

export default KatoPage;
