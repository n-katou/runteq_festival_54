import { memo } from "react";
import ProfileSection from './ProfileSection';
import SocialIcons from './SocialIcons';
import { motion } from 'framer-motion';

const MainContent: React.FC = () => {
  return (
    <section className="relative z-20 py-12 xl:py-24 text-white w-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-x-8">
        <ProfileSection />
        <motion.div
          className="backdrop-blur-lg bg-white/5 p-8 rounded-lg shadow-lg max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left lg:w-1/2 mt-4 lg:mt-0 hover:bg-white transition-colors duration-300"
        >
          <h2 className="text-3xl mt-2 font-semibold text-orange">My Name is Kato</h2>
          <div className="text-xl mt-4 text-orange">My Vision to Become the Ultimate PM</div>
          <div className="mt-4 text-lg leading-relaxed text-orange">
            前職では、主にバラエティや音楽番組の照明を担当していました。2022年末までテレビ業界でキャリアを積む中で、IT分野に強い興味を持ち、プログラミングスクールでスキルを習得しました。現在は、SIerに常駐して運用保守の業務を担当しつつ、自社業務ではReactを用いたフロントエンド開発にも携わっています。10月からはメガベンチャーでPMとして従事します。将来的には複数のプロジェクトを管理しマネジメントスキルを高め、新規プロジェクトの立ち上げに携わりたいと考えています。
          </div>
          <SocialIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default memo(MainContent);
