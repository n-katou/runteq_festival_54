import, { memo } React from 'react';
import { motion } from 'framer-motion';
import { BsFillPostageHeartFill } from "react-icons/bs";
import { GiClownfish } from "react-icons/gi";
// アプリデータ
const apps = [
  {
    name: "AQUA VOYAGE〜水族館めぐり〜",
    description: "訪れた水族館を記録し、体験を共有できるサービスです。",
    link: "https://aqua-voyage.com/",
    icon: <GiClownfish />
  },
  {
    name: "Post代行〜面倒くさがりの君へ〜",
    description: "ChatGPTがあなたの代わりにXの投稿を考えてくれるサービスです。",
    link: "https://chatgpt-messenger-2.onrender.com/",
    icon: <BsFillPostageHeartFill />
  }
];

// モーション設定
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.5,
      duration: 1,
      ease: "easeOut"
    }
  })
};

const AppsList: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative z-20 py-12 xl:py-24 text-orange w-full"
    >
      <div className="container mx-auto backdrop-blur-lg bg-white/20 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12 text-sky-700">My Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 transform"
              custom={index}
              variants={itemVariants}
            >
              <div className="text-4xl text-sky-500 mb-4">
                {app.icon} {/* アイコンを表示 */}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-sky-500">{app.name}</h3>
              <p className="mb-4 text-sky-500">{app.description}</p>
              <a href={app.link} className="text-orange hover:text-orange-700 hover:underline" target="_blank" rel="noopener noreferrer">
                View App
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default memo(AppsList);
