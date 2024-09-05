import React, { memo } from "react";
import { motion } from "framer-motion";
import MyImg from "./MyImg";
import FloatingEmoji from "./FloatingEmoji";

const apps = [
  {
    title: "ポートフォリオ",
    name: "TackleMaster",
    description: "釣り具の管理・登録・探索ができるアプリです",
    link: "https://tacklemaster.net/",
    img: "/rei/tackle.jpg",
  },
  {
    title: "ミニアプリ",
    name: "インセクトログ",
    description: "昆虫採集の気分が味わえるアプリです。",
    link: "https://insect-log.onrender.com",
    img: "/rei/insectlog.png",
  },
];

const Applications = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50%" }}
      transition={{ duration: 0.5 }}
      className="text-red-800 md:max-w-[900px] mx-auto text-center bg-white/[0.8] border-2 border-red rounded-lg px-6 py-8 mt-12 shadow-lg"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red">Applications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* 浮遊する絵文字を追加 */}
        {[...Array(5)].map((_, i) => (
          <FloatingEmoji key={`strawberry-${i}`} emoji="🍓" delay={i * 2} />
        ))}
        {[...Array(5)].map((_, i) => (
          <FloatingEmoji key={`crab-${i}`} emoji="🦀" delay={i * 2 + 1} />
        ))}
        {apps.map((app, index) => (
          <div key={index} className="bg-pink p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold mb-3 text-red">{app.title}</h3>
            <p className="text-lg font-medium mb-3 text-red-700">{app.name}</p>
            <p className="text-base mb-4 flex-grow">{app.description}</p>
            <a
              href={app.link}
              className="block relative h-48 rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
            >
              <MyImg
                containerStyles="w-full h-full"
                imgSrc={app.img}
                style={{ objectFit: "cover" }}
              />
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(Applications);
