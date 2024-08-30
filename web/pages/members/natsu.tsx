//import motion
import { motion, useMotionValue, useTransform } from 'framer-motion'
//componets
import Social from '../../template/components/Social';
import MyImg from "../../template/components/MyImg";
import { Transition } from '../../template/components/transitions';

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
      className="min-h-screen flex flex-col justify-center bg-lightblue relative"
      style={{ minHeight: 'calc(100vh - 36.98px)' }}
    >
      <div className="relative h-full xl:h-screen">
        <div className="absolute w-full h-full z-10 bg-blue/[0.86]" />
        <section className="relative z-20 py-12 xl:py-24 xl:pt-28 w-full">
          <div className="container mx-auto flex-col-reverse xl:flex-row justify-between items-center gap-8 h-full">
            <div className="flex justify-between gap-x-8">
              <motion.div
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-50%' }}
                transition={{ Transition }}
                className="text-orange max-w-full xl:max-w-[600px] flex-col xl:mx-0 text-center xl:text-left">
                <h2 className="text-8xl">
                  Hello!<br /></h2>
                  <h3 className="text-6xl">My<span> Name is</span><br/ > Natsumi Kawashita</h3><br />
                <div className="text-xl">前職は日本料理人で、懐石料理のお店やお寿司屋さんで働いていました。<br />
                自身の結婚を機にプログラミングを本格的に勉強したいという思いが強くなり、RUNTEQ入学を決意しました。<br />
                Ruby on Railsを学んでいく上で、「こういうアプリがあったら時短になるのでは！？」「こんな機能があったら役に立つのでは！？」などと考えるのが楽しくなってきています。<br />
                飲食店で働いていた経験を活かして、３年を目処に飲食店特化の会計管理アプリを作成したいと考えています。<br />
                そのためにも技術や知識の習得をして、エンジニアとして活躍していきたいです！<br />
                そして素晴らしき54期の一員としてチーム開発に携わらせていただき感謝でいっぱいです！！</div>
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
                      imgSrc='/natsu/natsu.png'
                      style={{ backgroundImage: `url('/template/shape-1.svg')` }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <section className="relative z-20 py-12 xl:py-24 h-[84] xl:pt-28">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange">My Application</h2>
            <div className="flex justify-center items-center">
              <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 transform" style={{opacity: 1, willChange: 'auto', transform: 'none', maxWidth: '80%'}}>
                <div className="text-4xl text-orange-500 mb-4">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424 0c-12.4 0-24.2 4.9-33 13.7L233.5 171.2c-10.5 10.5-19.8 22.1-27.7 34.6L132.7 321.6c-7.3 11.5-15.8 22.2-25.5 31.9L69.9 390.7l51.3 51.3 37.3-37.3c9.6-9.6 20.3-18.2 31.9-25.5l115.8-73.1c12.5-7.9 24.1-17.2 34.6-27.7L498.3 121c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L457 13.7C448.2 4.9 436.4 0 424 0zm88 432a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM15 399c-9.4 9.4-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L49 399c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-orange-800">甲子園NOW!</h3>
                <p className="mb-4 text-orange">甲子園球場の盛り上がりや感動を可視化し、共有するアプリです。</p>
                <a href="https://kousiennow.onrender.com/" className="text-darkGreen hover:text-orange-700 hover:underline" target="_blank" rel="noopener noreferrer">View App</a>
                </div>
              </div>
            </section>
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
