import React from 'react';
import { motion } from 'framer-motion';

const apps = [
  {
    name: "ViMemo",
    description: "動画を見ながら直感的にメモを取ることができるアプリです",
    link: "https://vi-memo.com"
  },
  {
    name: "Hero Review",
    description: "スーバー戦隊のレビューを行うプラットフォームです。",
    link: "https://hero-review.vercel.app"
  },
  {
    name: "Muscle Tracker",
    description: "トレーニング記録をXに投稿するアプリです。",
    link: "https://muscle-tracker-n.vercel.app"
  }
];

const AppsList: React.FC = () => {
  return (
    <section className="relative z-20 py-12 xl:py-24 text-orange w-full">
      <div className="container mx-auto backdrop-blur-lg bg-white/20 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12">My Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              className="p-6 bg-blue rounded-lg shadow-lg hover:bg-lightblue transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{app.name}</h3>
              <p className="mb-4">{app.description}</p>
              <a href={app.link} className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">
                View App
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsList;
