import React from 'react';
import { motion } from 'framer-motion';
import { FaRegEdit, FaStar, FaDumbbell } from 'react-icons/fa';

// アプリデータ
const apps = [
  {
    name: "ViMemo",
    description: "動画を見ながら直感的にメモを取ることができるアプリです",
    link: "https://vi-memo.com",
    icon: <FaRegEdit />
  },
  {
    name: "Hero Review",
    description: "スーバー戦隊のレビューを行うプラットフォームです。",
    link: "https://hero-review.vercel.app",
    icon: <FaStar />
  },
  {
    name: "Muscle Tracker",
    description: "トレーニング記録をXに投稿するアプリです。",
    link: "https://muscle-tracker-n.vercel.app",
    icon: <FaDumbbell />
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
        <h2 className="text-4xl font-bold text-center mb-12 text-orange">My Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 transform"
              custom={index}
              variants={itemVariants}
            >
              <div className="text-4xl text-orange-500 mb-4">
                {app.icon} {/* アイコンを表示 */}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-orange-800">{app.name}</h3>
              <p className="mb-4 text-orange">{app.description}</p>
              <a href={app.link} className="text-darkGreen hover:text-orange-700 hover:underline" target="_blank" rel="noopener noreferrer">
                View App
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AppsList;
