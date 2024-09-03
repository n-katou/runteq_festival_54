import React from "react";

import Card from "./Card";

function MainContents() {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      {/* 回転させる背景の要素 */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[90%] h-[90%] bg-[#FFEDB2] -rotate-3 sm:-rotate-6 z-0 shadow-lg"></div>

      {/* メインコンテンツの要素 */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl bg-[#ffcdd7] p-6 sm:p-8 md:p-10 gap-6 shadow-xl">
        <Card
          title="54期チーム紹介"
          description="私たち54期は、加藤PMを中心に集まったフロントエンド好きな仲間たちの集団です。お互いをリスペクトし合い、助け合いながら楽しく学び、成長しています。温かい雰囲気の中で、新しい挑戦にも日々取り組んでいます。"
          imgSrc="/about/strawberries.png"
        />
        <Card
          title="プロジェクトの目的"
          description="このプロジェクトは、RUNTEQ祭に合わせて54期の仲間たちとの絆を深めるために作成したアプリです。主な目的は、交流を深めることと楽しい思い出作りです。さらに、GITの使い方やチーム開発の知識を学ぶことも目指しています。"
          imgSrc="/about/jam.png"
        />
        <Card
          title="開発への想い"
          description="私たちは、個性を引き出しながら楽しい思い出を作ることを大切にしています。この開発を通じて54期のメンバーとの絆を強め、他の期のメンバーともつながるきっかけになることを願っています。"
          imgSrc="/about/rollcake.png"
        />
        <Card
          title="54期SAIKO!"
          description="チーム開発に携わってくださった方々には感謝の気持ちでいっぱいです。みんなの個性を引き出し、貴重な開発経験を積むことができたと感じています。これからも末長く54期メンバーと共に仲良く楽しんでいきたいと思っています。"
          imgSrc="/about/cake.png"
        />
      </div>
    </div>
  );
}

export default MainContents;
